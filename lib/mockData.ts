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
  { id: 1, name: "Code Master", description: "A high-intensity competitive programming challenge where teams race against time to solve algorithmic problems.", department: "AE", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "AE CS-LAB 3", departmentCoordinator: "Dr Mahadev Prabhu M", eventCoordinators: "Shreyas Bhat, Amulya Rao B" },
  { id: 2, name: "Logically Solved", description: "Design and simulate complex electronic circuits. Test your electronics knowledge and practical skills.", department: "AE", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "AE CS-LAB 3", departmentCoordinator: "Dr Mahadev Prabhu M", eventCoordinators: "Shreyas Bhat, Amulya Rao B" },
  { id: 3, name: "Tech Treasure Hunt", description: "Build a fully functional website within 3 hours. Showcase your frontend and backend development skills.", department: "AE", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "AE CS-LAB 3", departmentCoordinator: "Dr Mahadev Prabhu M", eventCoordinators: "Shreyas Bhat, Amulya Rao B" },
  { id: 4, name: "Blind Coding", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "AE", type: "Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "AE CS-LAB 3", departmentCoordinator: "Dr Mahadev Prabhu M", eventCoordinators: "Shreyas Bhat, Amulya Rao B" },
  { id: 5, name: "Tech Talk", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "AE", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "AE CS-LAB 3", departmentCoordinator: "Dr Mahadev Prabhu M", eventCoordinators: "Shreyas Bhat, Amulya Rao B" },
  { id: 6, name: "Tech Huddle", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "AE", type: "Non-Technical", date: "2025-11-10", startTime: "04:00:00", endTime: "05:00 PM", venue: "AE CS-LAB 3", departmentCoordinator: "Dr Mahadev Prabhu M", eventCoordinators: "Shreyas Bhat, Amulya Rao B" },

  // AU Department Events
  { id: 7, name: "UI/UX Designing", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "AU", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "AU CS LAB 7", departmentCoordinator: "Dr Asha P", eventCoordinators: "Kushaal Gowda R, Nanditha M Shetty" },
  { id: 8, name: "Techie Mind", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "AU", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "AU CS LAB 7", departmentCoordinator: "Dr Asha P", eventCoordinators: "Kushaal Gowda R, Nanditha M Shetty" },
  { id: 9, name: "Web Designing", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "AU", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "AU CS LAB 7", departmentCoordinator: "Dr Asha P", eventCoordinators: "Kushaal Gowda R, Nanditha M Shetty" },
  { id: 10, name: "Tech Quiz", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "AU CS LAB 7", departmentCoordinator: "Dr Asha P", eventCoordinators: "Kushaal Gowda R, Nanditha M Shetty" },
  { id: 11, name: "Best Manager", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "AU CS LAB 7", departmentCoordinator: "Dr Asha P", eventCoordinators: "Kushaal Gowda R, Nanditha M Shetty" },

  // AI&DS Department Events
  { id: 12, name: "Code Quest", description: "Present your innovative project ideas and research through visually appealing posters.", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K" },
  { id: 13, name: "Debugging Champions", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K" },
  { id: 14, name: "Poster Presentation", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "AI&DS", type: "Non-Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K" },
  { id: 15, name: "Tech Quiz", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "AI&DS", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K" },

  // AIML Department Events
  { id: 16, name: "Coding", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty" },
  { id: 17, name: "Debugging", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty" },
  { id: 18, name: "Poster Presentation", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty" },
  { id: 19, name: "Quiz", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty" },
  { id: 20, name: "Debate", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty" },
  { id: 21, name: "Tech Huddle", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "04:00:00", endTime: "05:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty" },

  // CSE Department Events
  { id: 22, name: "Codathon", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P" },
  { id: 23, name: "Bug Byte", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P" },
  { id: 24, name: "Code Relay", description: "Present your innovative project ideas and research through visually appealing posters.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P" },
  { id: 25, name: "Tech Quiz", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "CSE", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P" },
  { id: 26, name: "Tech Huddle", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "CSE", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P" },

  // CSBS Department Events
  { id: 27, name: "Code Debugging", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya" },
  { id: 28, name: "Think IT", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya" },
  { id: 29, name: "Code Relay", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya" },
  { id: 30, name: "Paper Presentation", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "CSBS", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya" },
  { id: 31, name: "Tech Huddle", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "CSBS", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya" },

  // CSD Department Events
  { id: 32, name: "Coding", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "CSD", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "CSD CS LAB 1", departmentCoordinator: "Dr. Sandhya B", eventCoordinators: "Preetham R, Krishnachaitanya V" },
  { id: 33, name: "Debugging", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "CSD", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "CSD CS LAB 1", departmentCoordinator: "Dr. Sandhya B", eventCoordinators: "Preetham R, Krishnachaitanya V" },
  { id: 34, name: "Paper Presentation", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "CSD", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "CSD CS LAB 1", departmentCoordinator: "Dr. Sandhya B", eventCoordinators: "Preetham R, Krishnachaitanya V" },
  { id: 35, name: "Quiz", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "CSD", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "CSD CS LAB 1", departmentCoordinator: "Dr. Sandhya B", eventCoordinators: "Preetham R, Krishnachaitanya V" },
  { id: 36, name: "Tech Huddle", description: "Present your innovative project ideas and research through visually appealing posters.", department: "CSD", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "CSD CS LAB 1", departmentCoordinator: "Dr. Sandhya B", eventCoordinators: "Preetham R, Krishnachaitanya V" },

  // EEE Department Events
  { id: 37, name: "Circuit Challenge", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "EEE", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "EEE EEE LAB 5", departmentCoordinator: "Dr. Rajesh Shanbhag", eventCoordinators: "Madhav Poojary, Vishwanath Shetty" },
  { id: 38, name: "Transformers", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "EEE", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "EEE EEE LAB 5", departmentCoordinator: "Dr. Rajesh Shanbhag", eventCoordinators: "Madhav Poojary, Vishwanath Shetty" },
  { id: 39, name: "Logical Circuits", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "EEE", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "EEE EEE LAB 5", departmentCoordinator: "Dr. Rajesh Shanbhag", eventCoordinators: "Madhav Poojary, Vishwanath Shetty" },
  { id: 40, name: "Tech Talk", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "EEE", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "EEE EEE LAB 5", departmentCoordinator: "Dr. Rajesh Shanbhag", eventCoordinators: "Madhav Poojary, Vishwanath Shetty" },
  { id: 41, name: "Quiz", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "EEE", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "EEE EEE LAB 5", departmentCoordinator: "Dr. Rajesh Shanbhag", eventCoordinators: "Madhav Poojary, Vishwanath Shetty" },
  { id: 42, name: "Tech Huddle", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "EEE", type: "Non-Technical", date: "2025-11-10", startTime: "04:00:00", endTime: "05:00 PM", venue: "EEE EEE LAB 5", departmentCoordinator: "Dr. Rajesh Shanbhag", eventCoordinators: "Madhav Poojary, Vishwanath Shetty" },

  // ECE Department Events
  { id: 43, name: "Coding Champions", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "ECE", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "ECE ECE LAB 6", departmentCoordinator: "Dr. Sharath Kumar H S", eventCoordinators: "Jnaneshwar Naik, Akshatha Shetty" },
  { id: 44, name: "The Wire Less", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "ECE", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "ECE ECE LAB 6", departmentCoordinator: "Dr. Sharath Kumar H S", eventCoordinators: "Jnaneshwar Naik, Akshatha Shetty" },
  { id: 45, name: "Paper Presentation", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "ECE", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "ECE ECE LAB 6", departmentCoordinator: "Dr. Sharath Kumar H S", eventCoordinators: "Jnaneshwar Naik, Akshatha Shetty" },
  { id: 46, name: "Quiz", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "ECE", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "ECE ECE LAB 6", departmentCoordinator: "Dr. Sharath Kumar H S", eventCoordinators: "Jnaneshwar Naik, Akshatha Shetty" },
  { id: 47, name: "Tech Huddle", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "ECE", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "ECE ECE LAB 6", departmentCoordinator: "Dr. Sharath Kumar H S", eventCoordinators: "Jnaneshwar Naik, Akshatha Shetty" },

  // IS Department Events
  { id: 48, name: "Code Quest", description: "Present your innovative project ideas and research through visually appealing posters.", department: "IS", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "IS CS LAB 5", departmentCoordinator: "Dr. Raghavendra S", eventCoordinators: "Vinayak S Naik, Siri Gowda P K" },
  { id: 49, name: "Bug Detection", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "IS", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "IS CS LAB 5", departmentCoordinator: "Dr. Raghavendra S", eventCoordinators: "Vinayak S Naik, Siri Gowda P K" },
  { id: 50, name: "Poster Presentation", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "IS", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "IS CS LAB 5", departmentCoordinator: "Dr. Raghavendra S", eventCoordinators: "Vinayak S Naik, Siri Gowda P K" },
  { id: 51, name: "Quiz", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "IS", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "IS CS LAB 5", departmentCoordinator: "Dr. Raghavendra S", eventCoordinators: "Vinayak S Naik, Siri Gowda P K" },
  { id: 52, name: "Tech Huddle", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "IS", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "IS CS LAB 5", departmentCoordinator: "Dr. Raghavendra S", eventCoordinators: "Vinayak S Naik, Siri Gowda P K" },

  // ME Department Events
  { id: 53, name: "CAD Designing", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M" },
  { id: 54, name: "Treasure Hunt", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M" },
  { id: 55, name: "Paper Presentation", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M" },
  { id: 56, name: "Quiz", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "ME", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M" },
  { id: 57, name: "Tech Huddle", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "ME", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M" },

  // MR Department Events
  { id: 58, name: "Robo Relay", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K" },
  { id: 59, name: "Paper Presentation", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K" },
  { id: 60, name: "Robo CAD", description: "Present your innovative project ideas and research through visually appealing posters.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K" },
  { id: 61, name: "Quiz", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "MR", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K" },
  { id: 62, name: "Tech Huddle", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "MR", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K" },

  // MBA Department Events
  { id: 63, name: "Best Manager", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "MBA", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty" },
  { id: 64, name: "Business Quiz", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "MBA", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty" },
  { id: 65, name: "Paper Presentation", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "MBA", type: "Non-Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty" },
  { id: 66, name: "Tech Huddle", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "MBA", type: "Non-Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty" },

  // MCA Department Events
  { id: 67, name: "Coding", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "10:00:00", endTime: "11:00 AM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K" },
  { id: 68, name: "Debugging", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "11:00:00", endTime: "12:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K" },
  { id: 69, name: "Paper Presentation", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "01:00:00", endTime: "02:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K" },
  { id: 70, name: "Poster Presentation", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "02:00:00", endTime: "03:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K" },
  { id: 71, name: "Quiz", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "MCA", type: "Non-Technical", date: "2025-11-10", startTime: "03:00:00", endTime: "04:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K" },
  { id: 72, name: "Tech Huddle", description: "Present your innovative project ideas and research through visually appealing posters.", department: "MCA", type: "Non-Technical", date: "2025-11-10", startTime: "04:00:00", endTime: "05:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K" },

  // Kannada Sangha Department Event
  { id: 73, name: "Cultural Showcase", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "Kannada Sangha", type: "Non-Technical", date: "2025-11-10", startTime: "05:00:00", endTime: "06:00 PM", venue: "Main Auditorium", departmentCoordinator: "Dr. Prema Shenoy", eventCoordinators: "Rakshith Kumar, Sowmya Hegde" },
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
