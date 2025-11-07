// Event Utility Functions for Altius 2025

import { Event } from "./mockData";

export type EventStatus = "upcoming" | "live" | "completed";

/**
 * Get event status based on current time
 * Shows LIVE 5 minutes before start time
 */
export function getEventStatus(event: Event, currentTime: Date = new Date()): EventStatus {
  const eventDate = new Date(event.date);
  const [startHour, startMinute, startPeriod] = parseTime(event.startTime);
  const [endHour, endMinute, endPeriod] = parseTime(event.endTime);

  const startTime = new Date(eventDate);
  startTime.setHours(convertTo24Hour(startHour, startPeriod), startMinute, 0, 0);

  const endTime = new Date(eventDate);
  endTime.setHours(convertTo24Hour(endHour, endPeriod), endMinute, 0, 0);

  // Show LIVE 5 minutes before start
  const liveStartTime = new Date(startTime.getTime() - 5 * 60 * 1000);

  if (currentTime >= endTime) {
    return "completed";
  } else if (currentTime >= liveStartTime) {
    return "live";
  } else {
    return "upcoming";
  }
}

/**
 * Parse time string (e.g., "10:30 AM") into components
 */
function parseTime(timeStr: string): [number, number, string] {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) throw new Error(`Invalid time format: ${timeStr}`);
  
  return [parseInt(match[1]), parseInt(match[2]), match[3].toUpperCase()];
}

/**
 * Convert 12-hour time to 24-hour format
 */
function convertTo24Hour(hour: number, period: string): number {
  if (period === "AM") {
    return hour === 12 ? 0 : hour;
  } else {
    return hour === 12 ? 12 : hour + 12;
  }
}

/**
 * Get countdown string (e.g., "Starts in 1h 30m")
 */
export function getCountdown(event: Event, currentTime: Date = new Date()): string | null {
  const status = getEventStatus(event, currentTime);
  
  if (status !== "upcoming") return null;

  const eventDate = new Date(event.date);
  const [startHour, startMinute, startPeriod] = parseTime(event.startTime);
  const startTime = new Date(eventDate);
  startTime.setHours(convertTo24Hour(startHour, startPeriod), startMinute, 0, 0);

  const diffMs = startTime.getTime() - currentTime.getTime();
  const diffMinutes = Math.floor(diffMs / 1000 / 60);

  if (diffMinutes < 0) return null;

  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  if (hours > 0) {
    return `Starts in ${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `Starts in ${minutes}m`;
  } else {
    return "Starting soon";
  }
}

/**
 * Sort events by start time (upcoming first)
 */
export function sortEventsByTime(events: Event[]): Event[] {
  return [...events].sort((a, b) => {
    const aDate = new Date(a.date);
    const [aHour, aMinute, aPeriod] = parseTime(a.startTime);
    aDate.setHours(convertTo24Hour(aHour, aPeriod), aMinute, 0, 0);

    const bDate = new Date(b.date);
    const [bHour, bMinute, bPeriod] = parseTime(b.startTime);
    bDate.setHours(convertTo24Hour(bHour, bPeriod), bMinute, 0, 0);

    return aDate.getTime() - bDate.getTime();
  });
}

/**
 * Sort events with LIVE events first, then upcoming by time
 */
export function sortEventsByStatus(events: Event[], currentTime: Date = new Date()): Event[] {
  return [...events].sort((a, b) => {
    const aStatus = getEventStatus(a, currentTime);
    const bStatus = getEventStatus(b, currentTime);

    // Priority: live > upcoming > completed
    const statusPriority = { live: 0, upcoming: 1, completed: 2 };

    if (statusPriority[aStatus] !== statusPriority[bStatus]) {
      return statusPriority[aStatus] - statusPriority[bStatus];
    }

    // If same status, sort by time
    const aDate = new Date(a.date);
    const [aHour, aMinute, aPeriod] = parseTime(a.startTime);
    aDate.setHours(convertTo24Hour(aHour, aPeriod), aMinute, 0, 0);

    const bDate = new Date(b.date);
    const [bHour, bMinute, bPeriod] = parseTime(b.startTime);
    bDate.setHours(convertTo24Hour(bHour, bPeriod), bMinute, 0, 0);

    return aDate.getTime() - bDate.getTime();
  });
}

/**
 * Filter events by status
 */
export function filterEventsByStatus(events: Event[], status: EventStatus, currentTime: Date = new Date()): Event[] {
  return events.filter(event => getEventStatus(event, currentTime) === status);
}

/**
 * Format time range (e.g., "10:00 AM - 1:00 PM")
 */
export function formatTimeRange(startTime: string, endTime: string): string {
  return `${startTime} - ${endTime}`;
}
