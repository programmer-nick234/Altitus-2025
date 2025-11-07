// Mock Data for Altius 2025

export interface Event {
  id: number;
  name: string;
  description: string;
  department: string;
  type: string;
  date: string;
  time: string;
  venue: string;
  isLive: boolean;
  image?: string;
}

export interface GalleryItem {
  id: number;
  type: 'photo' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  event: string;
  date: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image?: string;
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

// Events Data
export const events: Event[] = [
  {
    id: 1,
    name: "Code Sprint",
    description: "A high-intensity competitive programming challenge where teams race against time to solve algorithmic problems.",
    department: "Computer Science",
    type: "Technical",
    date: "2025-11-15",
    time: "10:00 AM - 1:00 PM",
    venue: "Lab A-301",
    isLive: true
  },
  {
    id: 2,
    name: "Circuit Master",
    description: "Design and simulate complex electronic circuits. Test your electronics knowledge and practical skills.",
    department: "Electronics",
    type: "Technical",
    date: "2025-11-15",
    time: "2:00 PM - 5:00 PM",
    venue: "Lab B-205",
    isLive: false
  },
  {
    id: 3,
    name: "Web Wizards",
    description: "Build a fully functional website within 3 hours. Showcase your frontend and backend development skills.",
    department: "Computer Science",
    type: "Technical",
    date: "2025-11-16",
    time: "9:00 AM - 12:00 PM",
    venue: "Lab A-302",
    isLive: false
  },
  {
    id: 4,
    name: "RoboRace",
    description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!",
    department: "Mechanical",
    type: "Technical",
    date: "2025-11-16",
    time: "11:00 AM - 3:00 PM",
    venue: "Robotics Arena",
    isLive: true
  },
  {
    id: 5,
    name: "Tech Quiz",
    description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.",
    department: "All Departments",
    type: "Non-Technical",
    date: "2025-11-16",
    time: "4:00 PM - 6:00 PM",
    venue: "Auditorium",
    isLive: false
  },
  {
    id: 6,
    name: "AI Hackathon",
    description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.",
    department: "Computer Science",
    type: "Technical",
    date: "2025-11-17",
    time: "8:00 AM - 8:00 AM (Next Day)",
    venue: "Innovation Lab",
    isLive: false
  },
  {
    id: 7,
    name: "Poster Presentation",
    description: "Present your innovative project ideas and research through visually appealing posters.",
    department: "All Departments",
    type: "Non-Technical",
    date: "2025-11-17",
    time: "10:00 AM - 1:00 PM",
    venue: "Seminar Hall",
    isLive: false
  },
  {
    id: 8,
    name: "Gaming Tournament",
    description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!",
    department: "All Departments",
    type: "Gaming",
    date: "2025-11-17",
    time: "2:00 PM - 8:00 PM",
    venue: "Gaming Zone",
    isLive: true
  }
];

// Gallery Data
export const gallery: GalleryItem[] = [
  {
    id: 1,
    type: 'photo',
    url: '/gallery/event1.jpg',
    title: 'Code Sprint Finals',
    event: 'Code Sprint',
    date: '2025-11-15'
  },
  {
    id: 2,
    type: 'photo',
    url: '/gallery/event2.jpg',
    title: 'Opening Ceremony',
    event: 'Altius 2025',
    date: '2025-11-14'
  },
  {
    id: 3,
    type: 'photo',
    url: '/gallery/event3.jpg',
    title: 'RoboRace Competition',
    event: 'RoboRace',
    date: '2025-11-16'
  },
  {
    id: 4,
    type: 'video',
    url: '/gallery/highlight1.mp4',
    thumbnail: '/gallery/highlight1-thumb.jpg',
    title: 'Day 1 Highlights',
    event: 'Altius 2025',
    date: '2025-11-15'
  },
  {
    id: 5,
    type: 'photo',
    url: '/gallery/event4.jpg',
    title: 'Web Wizards Workshop',
    event: 'Web Wizards',
    date: '2025-11-16'
  },
  {
    id: 6,
    type: 'photo',
    url: '/gallery/event5.jpg',
    title: 'Gaming Tournament',
    event: 'Gaming Tournament',
    date: '2025-11-17'
  }
];

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Faculty Coordinator",
    department: "Computer Science",
    social: {
      linkedin: "#",
    }
  },
  {
    id: 2,
    name: "Arjun Sharma",
    role: "President",
    department: "Computer Science",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Priya Desai",
    role: "Vice President",
    department: "Electronics",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "Karthik Reddy",
    role: "Technical Head",
    department: "Information Science",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 5,
    name: "Sneha Patel",
    role: "Event Coordinator",
    department: "Computer Science",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Sponsorship Head",
    department: "Mechanical",
    social: {
      linkedin: "#"
    }
  }
];

// Event Date
export const EVENT_START_DATE = new Date("2025-11-10T09:00:00");
export const EVENT_END_DATE = new Date("2025-11-12T20:00:00");
