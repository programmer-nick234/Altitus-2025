// Mock Data for Altius 2025

export interface Event {
  id: number;
  name: string;
  description: string;
  department: string;
  type: "Technical" | "Non-Technical";
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM:SS or HH:MM AM/PM
  endTime: string; // HH:MM AM/PM
  venue: string;
  departmentCoordinator: string;
  eventCoordinators: string;
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
  // AE Department Events
  {
    id: 1,
    name: "Code Master",
    description: "A high-intensity competitive programming challenge where teams race against time to solve algorithmic problems.",
    department: "AE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "AE CS-LAB 3",
    departmentCoordinator: "Dr Mahadev Prabhu M",
    eventCoordinators: "Shreyas Bhat, Amulya Rao B",
    poster: "/posters/AE/AEROTRICKS.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGrHiNi5WcpiPUU7DmswwAIjJnI0OoOO_KhSh-JJ_ULH_qaQ/viewform"
  },
  {
    id: 2,
    name: "Logically Solved",
    description: "Design and simulate complex electronic circuits. Test your electronics knowledge and practical skills.",
    department: "AE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "11:00:00",
    endTime: "12:00 PM",
    venue: "AE CS-LAB 3",
    departmentCoordinator: "Dr Mahadev Prabhu M",
    eventCoordinators: "Shreyas Bhat, Amulya Rao B",
    poster: "/posters/AE/BRIDGE DYNAMICS.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScs7p8Y7VXyFKvhcJIth08o8Om6_LIAJp9O2lPItLOHOWAp6Q/viewform"
  },
  {
    id: 3,
    name: "Tech Treasure Hunt",
    description: "Build a fully functional website within 3 hours. Showcase your frontend and backend development skills.",
    department: "AE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "01:00:00",
    endTime: "02:00 PM",
    venue: "AE CS-LAB 3",
    departmentCoordinator: "Dr Mahadev Prabhu M",
    eventCoordinators: "Shreyas Bhat, Amulya Rao B",
    poster: "/posters/AE/FUSION OF MOTION.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSet6TfdIZyyeOTIq8kINZF3u8MG7yhCvaiS6sfX4iYwLJGGwA/viewform"
  },
  {
    id: 4,
    name: "Blind Coding",
    description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!",
    department: "AE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "02:00:00",
    endTime: "03:00 PM",
    venue: "AE CS-LAB 3",
    departmentCoordinator: "Dr Mahadev Prabhu M",
    eventCoordinators: "Shreyas Bhat, Amulya Rao B",
    poster: "/posters/AE/HYDRO BLASTERS.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdesa9ezUoDASEnZfxFPqO8YZJU47D0ynlAx1gJd2VM3cuccw/viewform"
  },
  {
    id: 5,
    name: "Tech Talk",
    description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.",
    department: "AE",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "03:00:00",
    endTime: "04:00 PM",
    venue: "AE CS-LAB 3",
    departmentCoordinator: "Dr Mahadev Prabhu M",
    eventCoordinators: "Shreyas Bhat, Amulya Rao B",
    poster: "/posters/AE/MISSION LANDING.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSef1VCny_zpouStXOBjNT5k--3tz8BVhnYkLyjXljn8x-7G5A/viewform"
  },
  {
    id: 6,
    name: "Tech Huddle",
    description: "Analyze datasets, build predictive models, and present insights in this data science competition.",
    department: "AE",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "04:00:00",
    endTime: "05:00 PM",
    venue: "AE CS-LAB 3",
    departmentCoordinator: "Dr Mahadev Prabhu M",
    eventCoordinators: "Shreyas Bhat, Amulya Rao B",
    poster: "/posters/AE/BGMI.jpg",
    googleFormLink: "https://docs.google.com/forms/d/1GiXzmtBeByAcOQgSbs-Vst4IOjq9BMXWiBKDCSeps5E/edit"
  },

  // MR Department Events
  {
    id: 58,
    name: "Robo Relay",
    description: "Present your research and innovative ideas on emerging technologies to a panel of experts.",
    department: "MR",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "MR MR LAB 1",
    departmentCoordinator: "Dr. Sandesh G Bhat",
    eventCoordinators: "Nandan Gowda K, Anusha K",
    poster: "/posters/MR/neutical-riders.png",
    googleFormLink: "https://forms.gle/JK29gZSii4YPYHF99"
  },

  // MBA Department Events
  {
    id: 63,
    name: "Best Manager",
    description: "Celebrate diversity through music, dance, and drama performances representing various cultures.",
    department: "MBA",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "MBA MBA CLASS 1",
    departmentCoordinator: "Dr. Raveesh K",
    eventCoordinators: "Suresh Kumar, Priya Shetty",
    poster: "/posters/MBA/the-hot-seat.png",
    googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit5"
  },

  // AIML Department Events
  {
    id: 16,
    name: "Coding",
    description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!",
    department: "AIML",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "AIML CS LAB 2",
    departmentCoordinator: "Dr. Nandakumar A N",
    eventCoordinators: "Mohammed Arshad, Anusha K Shetty",
    poster: "/posters/AIML/byte-bingo.png",
    googleFormLink: "https://forms.gle/d9XvR2e3yqEydbZL6"
  },
  {
    id: 17,
    name: "Debugging",
    description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.",
    department: "AIML",
    type: "Technical",
    date: "2025-11-10",
    startTime: "11:00:00",
    endTime: "12:00 PM",
    venue: "AIML CS LAB 2",
    departmentCoordinator: "Dr. Nandakumar A N",
    eventCoordinators: "Mohammed Arshad, Anusha K Shetty",
    poster: "/posters/AIML/escape-loop.png",
    googleFormLink: "https://forms.gle/NMJvEx32GXngXQES9"
  },
  {
    id: 18,
    name: "Poster Presentation",
    description: "Analyze datasets, build predictive models, and present insights in this data science competition.",
    department: "AIML",
    type: "Technical",
    date: "2025-11-10",
    startTime: "01:00:00",
    endTime: "02:00 PM",
    venue: "AIML CS LAB 2",
    departmentCoordinator: "Dr. Nandakumar A N",
    eventCoordinators: "Mohammed Arshad, Anusha K Shetty",
    poster: "/posters/AIML/vision-x.png",
    googleFormLink: "https://forms.gle/jDqmzsAKpqMz1eru6"
  },
  {
    id: 19,
    name: "Quiz",
    description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.",
    department: "AIML",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "02:00:00",
    endTime: "03:00 PM",
    venue: "AIML CS LAB 2",
    departmentCoordinator: "Dr. Nandakumar A N",
    eventCoordinators: "Mohammed Arshad, Anusha K Shetty",
    poster: "/posters/AIML/guss-the-gadget.png",
    googleFormLink: "https://forms.gle/g9EkXcDxyk4hVFCPA"
  },
  {
    id: 20,
    name: "Debate",
    description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.",
    department: "AIML",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "03:00:00",
    endTime: "04:00 PM",
    venue: "AIML CS LAB 2",
    departmentCoordinator: "Dr. Nandakumar A N",
    eventCoordinators: "Mohammed Arshad, Anusha K Shetty",
    poster: "/posters/AIML/tech-pictionary.png",
    googleFormLink: "https://forms.gle/HTECEcdNUfjRQgE17"
  },
  {
    id: 21,
    name: "Tech Huddle",
    description: "Design innovative 3D models using CAD software. Creativity and precision are key.",
    department: "AIML",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "04:00:00",
    endTime: "05:00 PM",
    venue: "AIML CS LAB 2",
    departmentCoordinator: "Dr. Nandakumar A N",
    eventCoordinators: "Mohammed Arshad, Anusha K Shetty",
    poster: "/posters/AIML/goal-striker.png",
    googleFormLink: "https://forms.gle/xTt9rF8QwV27Y5FH8"
  },
  // CSE Department Events
  {
    id: 22,
    name: "Codathon",
    description: "Present your research and innovative ideas on emerging technologies to a panel of experts.",
    department: "CSE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "CSE CS LAB 10",
    departmentCoordinator: "Dr. Ashok Kumar P S",
    eventCoordinators: "Deekshith G, Tanushree Rao B P",
    poster: "/posters/CSE/codewired.jpg",
    googleFormLink: "https://forms.gle/KKz5r4epMHwByY4u5"
  },
  {
    id: 23,
    name: "Bug Byte",
    description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.",
    department: "CSE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "11:00:00",
    endTime: "12:00 PM",
    venue: "CSE CS LAB 10",
    departmentCoordinator: "Dr. Ashok Kumar P S",
    eventCoordinators: "Deekshith G, Tanushree Rao B P",
    poster: "/posters/CSE/hack-the-hidden.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMRsvqWMvrmFSDhX_pADSsJi35_f4NascBdutwTf2P4Ryd9g/viewform"
  },
  {
    id: 24,
    name: "Code Relay",
    description: "Present your innovative project ideas and research through visually appealing posters.",
    department: "CSE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "01:00:00",
    endTime: "02:00 PM",
    venue: "CSE CS LAB 10",
    departmentCoordinator: "Dr. Ashok Kumar P S",
    eventCoordinators: "Deekshith G, Tanushree Rao B P",
    poster: "/posters/CSE/webwave.jpg",
    googleFormLink: "https://forms.gle/WvXtBbCP3dYyqfcm9"
  },
  {
    id: 25,
    name: "Tech Quiz",
    description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!",
    department: "CSE",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "02:00:00",
    endTime: "03:00 PM",
    venue: "CSE CS LAB 10",
    departmentCoordinator: "Dr. Ashok Kumar P S",
    eventCoordinators: "Deekshith G, Tanushree Rao B P",
    poster: "/posters/CSE/lootandshot.jpg",
    googleFormLink: "https://forms.gle/KjYuaRYLUvbBuuDC8"
  },
  {
    id: 26,
    name: "Tech Huddle",
    description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.",
    department: "CSE",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "03:00:00",
    endTime: "04:00 PM",
    venue: "CSE CS LAB 10",
    departmentCoordinator: "Dr. Ashok Kumar P S",
    eventCoordinators: "Deekshith G, Tanushree Rao B P",
    poster: "/posters/CSE/paperquest.jpg",
    googleFormLink: "https://forms.gle/1iz7vYNHDWZeQGu87"
  },

  // CSD Department Events
  {
    id: 32,
    name: "Coding",
    description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.",
    department: "CSD",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "CSD CS LAB 1",
    departmentCoordinator: "Dr. Sandhya B",
    eventCoordinators: "Preetham R, Krishnachaitanya V",
    poster: "/posters/CSD/debugging duel.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdobT9PshTl5ZLsLhJJLpD1OxJut33WFZ5dGwy28IutBp0nhw/viewform"
  },
  {
    id: 33,
    name: "Debugging",
    description: "Design innovative 3D models using CAD software. Creativity and precision are key.",
    department: "CSD",
    type: "Technical",
    date: "2025-11-10",
    startTime: "11:00:00",
    endTime: "12:00 PM",
    venue: "CSD CS LAB 1",
    departmentCoordinator: "Dr. Sandhya B",
    eventCoordinators: "Preetham R, Krishnachaitanya V",
    poster: "/posters/CSD/flash type.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSc9yPFTFimLgeKPeaEnbhAscAG8WhsaEbk5fgg2VcJzUKCPPw/viewform"
  },
  {
    id: 34,
    name: "Paper Presentation",
    description: "Present your research and innovative ideas on emerging technologies to a panel of experts.",
    department: "CSD",
    type: "Technical",
    date: "2025-11-10",
    startTime: "01:00:00",
    endTime: "02:00 PM",
    venue: "CSD CS LAB 1",
    departmentCoordinator: "Dr. Sandhya B",
    eventCoordinators: "Preetham R, Krishnachaitanya V",
    poster: "/posters/CSD/paper pulse.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdvo7DcdMJ_omXJefiAnc1hpPYOR6rBG1uQ0RfktS6uA-2XNA/viewform"
  },
  {
    id: 35,
    name: "Quiz",
    description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.",
    department: "CSD",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "02:00:00",
    endTime: "03:00 PM",
    venue: "CSD CS LAB 1",
    departmentCoordinator: "Dr. Sandhya B",
    eventCoordinators: "Preetham R, Krishnachaitanya V",
    poster: "/posters/CSD/tech tivia.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdNpOZ1FDjhlMbafRf2tTCaCXbKWppb_KmX4yhPcqdFHOpYlg/viewform"
  },
  {
    id: 36,
    name: "Tech Huddle",
    description: "Present your innovative project ideas and research through visually appealing posters.",
    department: "CSD",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "03:00:00",
    endTime: "04:00 PM",
    venue: "CSD CS LAB 1",
    departmentCoordinator: "Dr. Sandhya B",
    eventCoordinators: "Preetham R, Krishnachaitanya V",
    poster: "/posters/CSD/uno.jpg",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSe4UN2Agfnd2P7T6jrtM12wziexixw4oyaw7HtmqRNg_2tFrw/viewform"
  },

  // ECE Department Events
  {
    id: 43,
    name: "Coding Champions",
    description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.",
    department: "ECE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "ECE ECE LAB 6",
    departmentCoordinator: "Dr. Sharath Kumar H S",
    eventCoordinators: "Jnaneshwar Naik, Akshatha Shetty",
    poster: "/posters/ECE/bit-builder.jpg",
    googleFormLink: "https://forms.gle/QSd3tB7YbkyAFiBKA"
  },

  // ISE Department Events
  {
    id: 90,
    name: "Logo Lumina",
    description: "Design a unique logo that represents your imagination and creativity.",
    department: "ISE",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "ISE CS LAB 5",
    departmentCoordinator: "Dr. Raghavendra S",
    eventCoordinators: "Team ISE",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeSy9_fGztUFyqby-gE0-Bd4eVjcrGUUxOlUuCtucRy8SDKSw/viewform"
  },
  {
    id: 91,
    name: "Hidden Riches",
    description: "Find clues and solve puzzles to uncover hidden treasures.",
    department: "ISE",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "11:00:00",
    endTime: "12:00 PM",
    venue: "ISE CS LAB 5",
    departmentCoordinator: "Dr. Raghavendra S",
    eventCoordinators: "Team ISE",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeivSmOcbwwOnEK6l2Y57bMekeLxvCyp5IRPpSX_wlcP0WQNQ/viewform"
  },

  // Mechanical Department
  {
    id: 53,
    name: "CAD Designing",
    description: "Showcase your design mastery with CAD.",
    department: "ME",
    type: "Technical",
    date: "2025-11-10",
    startTime: "10:00:00",
    endTime: "11:00 AM",
    venue: "ME ME LAB 3",
    departmentCoordinator: "Dr. Ravikiran Y T",
    eventCoordinators: "Shreyas K R, Sahana M",
    poster: "/posters/ME/CAD Masters.jpg",
    googleFormLink: "https://forms.gle/VuyfW2o3QrmPv7667"
  },
  {
    id: 54,
    name: "Treasure Hunt",
    description: "Analyze datasets, build predictive models, and present insights in this data science competition.",
    department: "ME",
    type: "Technical",
    date: "2025-11-10",
    startTime: "11:00:00",
    endTime: "12:00 PM",
    venue: "ME ME LAB 3",
    departmentCoordinator: "Dr. Ravikiran Y T",
    eventCoordinators: "Shreyas K R, Sahana M",
    poster: "/posters/ME/Gear Hunt.jpg",
    googleFormLink: "https://forms.gle/XnX6qdB5fzzoTXU98"
  },
  {
    id: 55,
    name: "Paper Presentation",
    description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.",
    department: "ME",
    type: "Technical",
    date: "2025-11-10",
    startTime: "01:00:00",
    endTime: "02:00 PM",
    venue: "ME ME LAB 3",
    departmentCoordinator: "Dr. Ravikiran Y T",
    eventCoordinators: "Shreyas K R, Sahana M",
    poster: "/posters/ME/Paper presentation_.jpg",
    googleFormLink: "https://forms.gle/sGrHSkXEnwQt3tic9"
  },

  // Kannada Sangha
  {
    id: 73,
    name: "Arivu Ankana",
    description: "Celebrate Kannada culture and creativity.",
    department: "Kannada Sangha",
    type: "Non-Technical",
    date: "2025-11-10",
    startTime: "05:00:00",
    endTime: "06:00 PM",
    venue: "Main Auditorium",
    departmentCoordinator: "Dr. Prema Shenoy",
    eventCoordinators: "Rakshith Kumar, Sowmya Hegde",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScP6ImCif3-CuFmkMByuw5RIMbqGOUA-fHSVSbEFTdRZiKk1g/viewform"
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
