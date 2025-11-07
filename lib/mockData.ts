// Mock Data for Altius 2025

export interface Event {
  id: number;
  name: string;
  description: string;
  department: string;
  type: "Technical" | "Non-Technical";
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM AM/PM
  endTime: string; // HH:MM AM/PM
  venue: string;
  poster?: string; // Path to poster image
  qrCode?: string; // URL or path to QR code
  googleFormLink?: string; // Registration form link
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

// Events Data - Altius 2025 (Nov 10, 2025)
export const events: Event[] = [
  // TECHNICAL EVENTS
  {
    id: 1,
    name: "Code Sprint",
    description: "A high-intensity competitive programming challenge where teams race against time to solve algorithmic problems.",
    department: "CS",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
    venue: "Lab A-301",
    poster: "/events/cs/code-sprint.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_1",
    qrCode: "/qr-codes/code-sprint.png"
  },
  {
    id: 2,
    name: "Circuit Quest",
    description: "Design and simulate complex electronic circuits. Test your electronics knowledge and practical skills.",
    department: "EEE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:30 AM",
    endTime: "1:30 PM",
    venue: "Lab B-205",
    poster: "/events/eee/circuit-quest.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_2",
    qrCode: "/qr-codes/circuit-quest.png"
  },
  {
    id: 3,
    name: "Web Wizards",
    description: "Build a fully functional website within 3 hours. Showcase your frontend and backend development skills.",
    department: "ISE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "11:00 AM",
    endTime: "2:00 PM",
    venue: "Lab A-302",
    poster: "/events/ise/web-wizards.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_3",
    qrCode: "/qr-codes/web-wizards.png"
  },
  {
    id: 4,
    name: "RoboRace",
    description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!",
    department: "ME",
    type: "Technical",
    date: "2025-11-10",
    startTime: "11:30 AM",
    endTime: "2:30 PM",
    venue: "Robotics Arena",
    poster: "/events/me/roborace.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_4",
    qrCode: "/qr-codes/roborace.png"
  },
  {
    id: 5,
    name: "AI Hackathon",
    description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.",
    department: "AIML",
    type: "Technical",
    date: "2025-11-10",
    startTime: "12:00 PM",
    endTime: "12:00 PM",
    venue: "Innovation Lab",
    poster: "/events/aiml/ai-hackathon.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_5",
    qrCode: "/qr-codes/ai-hackathon.png"
  },
  {
    id: 6,
    name: "Data Science Challenge",
    description: "Analyze datasets, build predictive models, and present insights in this data science competition.",
    department: "AIDS",
    type: "Technical",
    date: "2025-11-10",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    venue: "Lab C-101",
    poster: "/events/aids/data-science-challenge.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_6",
    qrCode: "/qr-codes/data-science-challenge.png"
  },
  {
    id: 7,
    name: "IoT Workshop",
    description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.",
    department: "EC",
    type: "Technical",
    date: "2025-11-10",
    startTime: "2:00 PM",
    endTime: "5:00 PM",
    venue: "Workshop Hall",
    poster: "/events/ec/iot-workshop.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_7",
    qrCode: "/qr-codes/iot-workshop.png"
  },
  {
    id: 8,
    name: "Cyber Security CTF",
    description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.",
    department: "CSBS",
    type: "Technical",
    date: "2025-11-10",
    startTime: "2:30 PM",
    endTime: "5:30 PM",
    venue: "Lab D-202",
    poster: "/events/csbs/cyber-security-ctf.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_8",
    qrCode: "/qr-codes/cyber-security-ctf.png"
  },
  {
    id: 9,
    name: "CAD Modeling Contest",
    description: "Design innovative 3D models using CAD software. Creativity and precision are key.",
    department: "MR",
    type: "Technical",
    date: "2025-11-10",
    startTime: "3:00 PM",
    endTime: "6:00 PM",
    venue: "Design Studio",
    poster: "/events/mr/cad-modeling.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_9",
    qrCode: "/qr-codes/cad-modeling.png"
  },
  {
    id: 10,
    name: "Tech Paper Presentation",
    description: "Present your research and innovative ideas on emerging technologies to a panel of experts.",
    department: "AU",
    type: "Technical",
    date: "2025-11-10",
    startTime: "3:30 PM",
    endTime: "6:30 PM",
    venue: "Seminar Hall 1",
    poster: "/events/au/tech-paper-presentation.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_10",
    qrCode: "/qr-codes/tech-paper-presentation.png"
  },

  // NON-TECHNICAL EVENTS
  {
    id: 11,
    name: "Tech Quiz",
    description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.",
    department: "MBA",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "10:15 AM",
    endTime: "12:15 PM",
    venue: "Auditorium",
    poster: "/events/mba/tech-quiz.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_11",
    qrCode: "/qr-codes/tech-quiz.png"
  },
  {
    id: 12,
    name: "Poster Presentation",
    description: "Present your innovative project ideas and research through visually appealing posters.",
    department: "MCA",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "1:30 PM",
    endTime: "4:30 PM",
    venue: "Seminar Hall 2",
    poster: "/events/mca/poster-presentation.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_12",
    qrCode: "/qr-codes/poster-presentation.png"
  },
  {
    id: 13,
    name: "Gaming Tournament",
    description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!",
    department: "CSD",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "2:00 PM",
    endTime: "7:00 PM",
    venue: "Gaming Zone",
    poster: "/events/csd/gaming-tournament.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_13",
    qrCode: "/qr-codes/gaming-tournament.png"
  },
  {
    id: 14,
    name: "Treasure Hunt",
    description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.",
    department: "AE",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    venue: "Campus Grounds",
    poster: "/events/ae/treasure-hunt.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_14",
    qrCode: "/qr-codes/treasure-hunt.png"
  },
  {
    id: 15,
    name: "Cultural Showcase",
    description: "Celebrate diversity through music, dance, and drama performances representing various cultures.",
    department: "Kannada Sangha",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "5:00 PM",
    endTime: "8:00 PM",
    venue: "Main Auditorium",
    poster: "/events/kannada-sangha/cultural-showcase.jpg",
    googleFormLink: "GOOGLE_FORM_LINK_15",
    qrCode: "/qr-codes/cultural-showcase.png"
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
export const EVENT_END_DATE = new Date("2025-11-10T20:00:00");

// Department Colors (for placeholder images and badges)
export const departmentColors: Record<string, { bg: string; text: string; accent: string }> = {
  "AE": { bg: "#3B82F6", text: "#DBEAFE", accent: "#60A5FA" }, // Blue
  "AIML": { bg: "#8B5CF6", text: "#EDE9FE", accent: "#A78BFA" }, // Purple
  "AIDS": { bg: "#EC4899", text: "#FCE7F3", accent: "#F9A8D4" }, // Pink
  "AU": { bg: "#F59E0B", text: "#FEF3C7", accent: "#FCD34D" }, // Amber
  "CS": { bg: "#10B981", text: "#D1FAE5", accent: "#6EE7B7" }, // Green
  "CSBS": { bg: "#06B6D4", text: "#CFFAFE", accent: "#67E8F9" }, // Cyan
  "CSD": { bg: "#6366F1", text: "#E0E7FF", accent: "#818CF8" }, // Indigo
  "EEE": { bg: "#EF4444", text: "#FEE2E2", accent: "#FCA5A5" }, // Red
  "EC": { bg: "#F97316", text: "#FFEDD5", accent: "#FDBA74" }, // Orange
  "ME": { bg: "#84CC16", text: "#ECFCCB", accent: "#BEF264" }, // Lime
  "MR": { bg: "#14B8A6", text: "#CCFBF1", accent: "#5EEAD4" }, // Teal
  "ISE": { bg: "#A855F7", text: "#F3E8FF", accent: "#C084FC" }, // Violet
  "MBA": { bg: "#64748B", text: "#F1F5F9", accent: "#94A3B8" }, // Slate
  "MCA": { bg: "#0EA5E9", text: "#E0F2FE", accent: "#38BDF8" }, // Sky
  "Kannada Sangha": { bg: "#DC2626", text: "#FEE2E2", accent: "#F87171" } // Deep Red
};
