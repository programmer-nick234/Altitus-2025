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
// Mock Data for Altius 2025 (UPDATED)

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

// ... other interfaces (GalleryItem, TeamMember) remain the same ...

// Events Data - Altius 2025 (Nov 10, 2025) - UPDATED with Links
export const events: Event[] = [
  // AE Department Events
  { id: 1, name: "AEROTRICKS", description: "Unleash your creativity at AEROTRICKS! Build innovative contraptions, showcase your engineering skills, and compete for exciting cash prizes.", department: "AE", type: "Technical", date: "2025-11-10", startTime: "11:30 AM", endTime: "03:30 PM", venue: "M503", departmentCoordinator: "Prof. Jagadheesh B", eventCoordinators: "Shruthi VM , Harshitha Chikkeri", poster: "/posters/AE/AEROTRICKS.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGrHiNi5WcpiPUU7DmswwAIjJnI0OoOO_KhSh-JJ_ULH_qaQ/viewform?usp=publish-editor](https://docs.google.com/forms/d/e/1FAIpQLSdGrHiNi5WcpiPUU7DmswwAIjJnI0OoOO_KhSh-JJ_ULH_qaQ/viewform?usp=publish-editor)" },
  { id: 2, name: "BRIDGE DYNAMICS", description: "Show your engineering strength at Bridge Dynamics! Build a strong, flexible bridge using simple materials, test its load capacity, and compete for exciting rewards.", department: "AE", type: "Non-Technical", date: "2025-11-10", startTime: "01:30 PM", endTime: "4:00 PM", venue: "M503", departmentCoordinator: "Prof. Jagadheesh B", eventCoordinators: "Chethan Kumar , Shree Sawant", poster: "/posters/AE/BRIDGE DYNAMICS.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScs7p8Y7VXyFKvhcJIth08o8Om6_LIAJp9O2lPItLOHOWAp6Q/viewform?usp=header" },
  { id: 3, name: "FUSION OF MOTION", description: "Showcase your innovative ideas through a technical paper presentation—think, explore, and inspire with your research and creativity.", department: "AE", type: "Technical", date: "2025-11-10", startTime: "09:30 Am", endTime: "01:00 PM", venue: "M501", departmentCoordinator: "Proff. Jagadheesh B", eventCoordinators: "Kavya C Mutta , Siddharth CS", poster: "/posters/AE/FUSION OF MOTION.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSet6TfdIZyyeOTIq8kINZF3u8MG7yhCvaiS6sfX4iYwLJGGwA/viewform" },
  { id: 4, name: "HYDRO BLASTERS", description: "Build and launch your own water-powered rocket to test height, precision, and creativity in an exciting hands-on challenge.", department: "AE", type: "Technical", date: "2025-11-10", startTime: "10:30 AM", endTime: "02:30 PM", venue: "SIT Sports Ground", departmentCoordinator: "Proff. Jagadheesh B", eventCoordinators: "Poorniama , Kaupessam", poster: "/posters/AE/HYDRO BLASTERS.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdesa9ezUoDASEnZfxFPqO8YZJU47D0ynlAx1gJd2VM3cuccw/viewform" },
  { id: 5, name: "MISSION LANDING", description: "Test your piloting precision in a realistic aircraft simulation challenge—land smoothly, stay in control, and ace the perfect touchdown.", department: "AE", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "Main stage", departmentCoordinator: "Proff. Jagadheesh B", eventCoordinators: "Mohammed Sasfwan MS , Abubaakar Faraas", poster: "/posters/AE/MISSION LANDING.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSef1VCny_zpouStXOBjNT5k--3tz8BVhnYkLyjXljn8x-7G5A/viewform?usp=header" },
  { id: 6, name: "BGMI", description: "Showcase your gaming skills and teamwork in intense Battlegrounds Mobile India matches to win exciting cash prizes.", department: "AE", type: "Non-Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "05:00 PM", venue: "M501", departmentCoordinator: "Proff. Jagadheesh B", eventCoordinators: "M Gururaj Reddy , Mokshith", poster: "/posters/AE/BGMI.jpg", googleFormLink: "https://docs.google.com/forms/d/1GiXzmtBeByAcOQgSbs-Vst4IOjq9BMXWiBKDCSeps5E/edit?pli=1" },

  // AU Department Events
  { id: 7, name: "Gear Heads Challenge", description: "Test your automobile knowledge and logo recognition skills in an exciting two-round quiz designed for true car enthusiasts.", department: "AU", type: "Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "2:00 PM", venue: "M503", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Sandeep kumar . Amit",poster:"/poster/AU/Gearhudchallenge.jpg",googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdQdpZlQadiEJnh-LiBoQAxXA2LxB7PzWeIyVcsEgLX-6Xl6Q/viewform" },
  { id: 8, name: "Zero Speed Zone", description: "Showcase your bike control skills in a thrilling slow race where balance and precision matter more than speed.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "10:30 AM", endTime: "02:03 PM", venue: "Near Temple,SIT", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Charan , Siddarth MJ",poster:"/poster/AU/Zerospeedzone.jpg",googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSelzyrChjm2Ik9pkMAwuMPGWl4_t_MljxURyZMUrwossmoxRQ/viewform" },
  { id: 9, name: "Act Arena (Dumb Charades)", description: "Express your creativity and teamwork as you act out clues without words while your team guesses them right.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "05:00 PM", venue: "M505", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Navaneeth , Aditya",poster:"/poster/AU/Zerospeedzone.jpg",googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSelzyrChjm2Ik9pkMAwuMPGWl4_t_MljxURyZMUrwossmoxRQ/viewform" },
  { id: 10, name: "Runway to Highway Adventure (Treasure Hunt)", description: "Embark on an adventurous treasure hunt full of clues, twists, and teamwork challenges.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "02:00 PM", venue: "M305", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Bhavya , Jnanashree",poster:"/poster/AU/Runwaytohigway.jpg",googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScHhInza6C4Pg-lJxEd4QY-wVt_gxtodu-4yBGgfHRMHQI93w/viewform" },
  { id: 11, name: "Lines of Legends", description: "Unleash your artistic skills by sketching iconic automobiles using pencil art and originality as your tools.", department: "AU", type: "Technical", date: "2025-11-10", startTime: "02:00 PM", endTime:  "03:00 PM", venue: "M503", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Keertan , Pratham",poster:"/poster/AU/Linesoflegends.jpg",googleFormLink: "https://docs.google.com/forms/d/1cIa5Js9wP-Jxr-PPVfZ1_u4IMGl5rXwBQA8xXGvpG5Q/viewform?edit_requested=true" },

  // AI&DS Department Events
  { id: 12, name: "Capture Altius", description: "Present your innovative project ideas and research through visually appealing posters.", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K", poster: "/posters/AIDS/capture-altius.png" },
  { id: 13, name: "Debugging Champions", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K", poster: "/posters/AIDS/quess-the-output.png" },
 { id: 14, name: "Poster Presentation", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "AI&DS", type: "Non-Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K", poster: "/posters/AIDS/spot-the-fake-code.png" },
  { id: 15, name: "Tech Quiz", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "AI&DS", type: "Non-Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "AI&DS CS Lab 9", departmentCoordinator: "Dr Rohini K, Dr. Mamatha S", eventCoordinators: "Meghana R Shetty, Nihan K", poster: "/posters/AIDS/tech-quiz.png" },

  // AIML Department Events
  { id: 16, name: "Byte Bingo", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty", poster: "/posters/AIML/byte-bingo.png", googleFormLink: "https://forms.gle/d9XvR2e3yqEydbZL6" },
  { id: 17, name: "Escape loop", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty", poster: "/posters/AIML/escape-loop.png", googleFormLink: "https://forms.gle/NMJvEx32GXngXQES9" },
  { id: 18, name: "VisionX", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty", poster: "/posters/AIML/vision-x.png", googleFormLink: "https://forms.gle/jDqmzsAKpqMz1eru6" },
  { id: 19, name: "Guess the Gadget", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty", poster: "/posters/AIML/guss-the-gadget.png", googleFormLink: "https://forms.gle/g9EkXcDxyk4hVFCPA" },
  { id: 20, name: "Tech pictionary", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "03:00", endTime: "04:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty", poster: "/posters/AIML/tech-pictionary.png", googleFormLink: "https://forms.gle/HTECEcdNUfjRQgE17" },
  { id: 21, name: "Goal Striker", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "04:00", endTime: "05:00 PM", venue: "AIML CS LAB 2", departmentCoordinator: "Dr. Nandakumar A N", eventCoordinators: "Mohammed Arshad, Anusha K Shetty", poster: "/posters/AIML/goal-striker.png", googleFormLink: "https://forms.gle/xTt9rF8QwV27Y5FH8" },

  // CSE Department Events
  { id: 22, name: "Codewired", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P", poster: "/posters/CSE/codewired.jpg", googleFormLink: "https://forms.gle/KKz5r4epMHwByY4u5" },
  { id: 23, name: "Hack The Hidden", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P", poster: "/posters/CSE/hack-the-hidden.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMRsvqWMvrmFSDhX_pADSsJi35_f4NascBdutwTf2P4Ryd9g/viewform?usp=dialog" },
  { id: 24, name: "Webwave", description: "Present your innovative project ideas and research through visually appealing posters.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P", poster: "/posters/CSE/webwave.jpg", googleFormLink: "https://forms.gle/WvXtBbCP3dYyqfcm9" },
  { id: 25, name: "LOOT & SHOOT (BGMI)", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "CSE", type: "Non-Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P", poster: "/posters/CSE/lootandshot.jpg", googleFormLink: "https://forms.gle/KjYuaRYLUvbBuuDC8" },
  { id: 26, name: "PaperQuest", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "CSE", type: "Non-Technical", date: "2025-11-10", startTime: "03:00", endTime: "04:00 PM", venue: "CSE CS LAB 10", departmentCoordinator: "Dr. Ashok Kumar P S", eventCoordinators: "Deekshith G, Tanushree Rao B P", poster: "/posters/CSE/paperquest.jpg", googleFormLink: "https://forms.gle/1iz7vYNHDWZeQGu87" },

  // CSBS Department Events
  { id: 27, name: "Code Debugging", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya", poster: "/posters/CSBS/decode-the-code.png" },
  { id: 28, name: "Think IT", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya", poster: "/posters/CSBS/Aimborn.png" },
  { id: 29, name: "Code Relay", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya", poster: "/posters/CSBS/Altius.png" },
  { id: 30, name: "Paper Presentation", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "CSBS", type: "Non-Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya", poster: "/posters/CSBS/mind-spak.png" },
  { id: 31, name: "Tech Huddle", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "CSBS", type: "Non-Technical", date: "2025-11-10", startTime: "03:00", endTime: "04:00 PM", venue: "CSBS CS LAB 4", departmentCoordinator: "Dr. Gayathri Nayak", eventCoordinators: "Ruthwik K, Shruthi Mayya", poster: "/posters/CSBS/tech-memora.png" },

  // CSD Department Events
  { id: 32, name: "Debugging Duel", description: "Showcase your coding expertise by identifying and fixing bugs faster than your peers to achieve the perfect output!", department: "CSD", type: "Technical", date: "2025-11-10", startTime: "02:00", endTime: "04:30 PM", venue: "ISE LAB", departmentCoordinator: "Prof. Archana D", eventCoordinators: "Shishir, Shrinidhi", poster: "/posters/CSD/debugging duel.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdobT9PshTl5ZLsLhJJLpD1OxJut33WFZ5dGwy28IutBp0nhw/viewform" },
  { id: 33, name: "Flash Type", description: "Test your typing speed and accuracy under pressure — the one who types the most correct words wins!", department: "CSD", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "03:00 PM", venue: "AI & DS LAB", departmentCoordinator: "Prof. Archana D", eventCoordinators: "Poorvitha, Rashmitha Shetty", poster: "/posters/CSD/flash type.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSc9yPFTFimLgeKPeaEnbhAscAG8WhsaEbk5fgg2VcJzUKCPPw/viewform" },
  { id: 34, name: "Paper Pulse", description: "Present your innovative research ideas or IEEE-based papers and showcase your knowledge through impactful presentations.", department: "CSD", type: "Technical", date: "2025-11-10", startTime: "09:00", endTime: "01:00 PM", venue: "Room 302", departmentCoordinator: "Prof. Archana D", eventCoordinators: "Raksha Shetty, Vaishnavi Mambady", poster: "/posters/CSD/paper pulse.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdvo7DcdMJ_omXJefiAnc1hpPYOR6rBG1uQ0RfktS6uA-2XNA/viewform" },
  { id: 35, name: "Tech Trivia", description: "A battle of brains! Test your technical knowledge through rounds of exciting quizzes and rapid recall challenges.", department: "CSD", type: "Technical", date: "2025-11-10", startTime: "02:00", endTime: "04:30 PM", venue: "Room 302", departmentCoordinator: "Prof. Archana D", eventCoordinators: "Deeksha Shetty, Sannidhi", poster: "/posters/CSD/tech tivia.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdNpOZ1FDjhlMbafRf2tTCaCXbKWppb_KmX4yhPcqdFHOpYlg/viewform" },
  { id: 36, name: "UNO", description: "Join this fun-filled physical UNO card game — play strategically, outsmart your opponents, and shout UNO to win!", department: "CSD", type: "Non-Technical", date: "2025-11-10", startTime: "09:00", endTime: "01:00 PM", venue: "Room 406", departmentCoordinator: "Prof. Archana D", eventCoordinators: "Sharanya, Spoorthi, Ajay, Jeevesh", poster: "/posters/CSD/uno.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSe4UN2Agfnd2P7T6jrtM12wziexixw4oyaw7HtmqRNg_2tFrw/viewform" },
  // EEE Department Events
  { id: 37, name: "Power Pulse", description: "Present your innovative research or IEEE-based papers and showcase your knowledge in a professional format.", department: "EEE", type: "Technical", date: "2025-11-10", startTime: "09:00 AM", endTime: "01:00 PM", venue: "Library Block (LB 001)", departmentCoordinator: "Prof. Harshith K", eventCoordinators: "Nandakishore P, Ashwin Ashok", poster: "/posters/EEE/power-pulse.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScDji-lzEs2gupBLJbMM93QiiyNuZXCiVG5NB_uAtT77g_VGg/viewform" },
  { id: 38, name: "Reto De Memoria", description: "Test your memory power! Compete in written rounds that challenge your recall and quick thinking.", department: "EEE", type: "Non-Technical", date: "2025-11-10", startTime: "09:30 AM", endTime: "01:30 PM", venue: "LB 103", departmentCoordinator: "Prof. Harshith K", eventCoordinators: "Manisha Waingankar, Chinmayi CS", poster: "/posters/EEE/reto-de-memoria.png", googleFormLink: "https://docs.google.com/forms/d/1P9E6vnHq3j432RPXQpMyt4az2pRhHoK2CIj6u-9Dcj4/viewform?edit_requested=true" },
  { id: 39, name: "Mind Wars 2.0", description: "Engage your intellect in two thrilling rounds — quiz without phones and connect the clues to claim victory!", department: "EEE", type: "Technical", date: "2025-11-10", startTime: "10:30 AM", endTime: "02:30 PM", venue: "L0102", departmentCoordinator: "Prof. Harshith K", eventCoordinators: "Shivaraja T, Abdul Rasheed", poster: "/posters/EEE/mind-wars2.0.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeva4wzfR7ThCVlBkpRggfHKEHcBushc0Ta7asjIQn4FhZPNw/viewform" },
  { id: 40, name: "Mystery Map", description: "Decode hidden clues and navigate through a series of thrilling challenges to uncover the final destination.", department: "EEE", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "LB 001", departmentCoordinator: "Prof. Harshith K", eventCoordinators: "Sujay, Likith, Chaya, Vinita", poster: "/posters/EEE/Mystery-Map.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdnJb9W9le1Yd3vuSNIvG2-dgfJ7yIe1zrbedfATSPlUN7oPQ/viewform" },
  { id: 41, name: "Tech Escape Room", description: "Step into a virtual puzzle arena — solve logical and technical riddles to escape before time runs out!", department: "EEE", type: "Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "LB 104", departmentCoordinator: "Prof. Harshith K", eventCoordinators: "Prajwal Kunder, Pruthviraj R, Rostan Martis", poster: "/posters/EEE/thech-escape-room.png", googleFormLink: "https://forms.gle/XHCaPVUZy32rsVrF6" },
  { id: 42, name: "Free Fire", description: "Battle for the best in this ultimate Free Fire tournament — form your squad, survive, and take home the glory!", department: "EEE", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "R&D Hall (Library Block)", departmentCoordinator: "Prof. Harshith K", eventCoordinators: "Harshith Kumar, Yogesh, Ajay", poster: "/posters/EEE/free-fire.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSexi_I1Mf4XCSDXtWntkag4jUwrG6-zQxYTjhbX7uSWIL50dg/viewform?usp=dialog" }, 
   // ECE Department Events
  { id: 43, name: "Tech Summit", description: "Present your innovative poster ideas focusing on advanced electronics and cutting-edge technologies.", department: "ECE", type: "Technical", date: "2025-11-10", startTime: "09:15 AM", endTime: "01:15 PM", venue: "303, Main Block", departmentCoordinator: "Prof. Flavita Pinto", eventCoordinators: "Hemashree, Rishitha", poster: "/posters/ECE/tech-summit.jpg", googleFormLink: "https://forms.gle/QSd3tB7YbkyAFiBKA" },
  { id: 44, name: "Circuit Storm", description: "Test your technical edge by guessing images, rapid-fire quizzing, and building digital circuits with precision.", department: "ECE", type: "Technical", date: "2025-11-10", startTime: "09:30 AM", endTime: "01:30 PM", venue: "VLSI Lab", departmentCoordinator: "Prof. Flavita Pinto", eventCoordinators: "Shashank, Safwan", poster: "/posters/ECE/circuilt-storm.jpg", googleFormLink: "https://forms.gle/QSd3tB7YbkyAFiBKA" },
  { id: 45, name: "Bit Builders", description: "A three-round technical challenge — guess images, crack quizzes, and build working circuits to emerge on top.", department: "ECE", type: "Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "Digital Lab, 3rd Floor (Main Block)", departmentCoordinator: "Prof. Flavita Pinto", eventCoordinators: "Samartha, Shreeya", poster: "/posters/ECE/bit-builder.jpg", googleFormLink: "https://forms.gle/QSd3tB7YbkyAFiBKA" },
  { id: 46, name: "Circuit Quest", description: "Solve technical clues and follow the circuit trail — only the team that finds the final treasure wins!", department: "ECE", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "Analog Lab, Main Block", departmentCoordinator: "Prof. Flavita Pinto", eventCoordinators: "Deekshith, Ananya", poster: "/posters/ECE/circuit-quest.jpg", googleFormLink: "https://forms.gle/QSd3tB7YbkyAFiBKA" },
  { id: 47, name: "Mind Marathon", description: "A three-stage test of logic and speed — word hunt, image guessing, and escape circuit riddles await!", department: "ECE", type: "Technical", date: "2025-11-10", startTime: "10:15 AM", endTime: "02:15 PM", venue: "304, Main Block", departmentCoordinator: "Prof. Flavita Pinto", eventCoordinators: "Pranitha, Yajnesh", poster: "/posters/ECE/mind-migration.jpg", googleFormLink: "https://forms.gle/QSd3tB7YbkyAFiBKA" }, 
   // IS Department Events
  { id: 48, name: "Cyber Quest", description: "Test your cyber skills by completing digital checkpoints in sequence. Stay sharp and finish first to win!", department: "IS", type: "Technical", date: "2025-11-10", startTime: "09:00 AM", endTime: "01:00 PM", venue: "ISE Lab", departmentCoordinator: "Prof. Sowmya", eventCoordinators: "Sanjana D, Ashika", poster: "/posters/IS/Cyber quest.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVZhuQ7yiYkhZjjGqygQqUIHO0sppFXvPmJ4GHnZtyQTDNiA/viewform" },
  { id: 49, name: "Logic Rewind", description: "Sharpen your logic! Solve pattern-based puzzles and recompile code sequences to prove your programming finesse.", department: "IS", type: "Technical", date: "2025-11-10", startTime: "09:00 AM", endTime: "01:00 PM", venue: "AIDS Lab", departmentCoordinator: "Prof. Sowmya", eventCoordinators: "Krithika, Deena", poster: "/posters/IS/Logic Rewind.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdmyFxEiDdXNeBw9GczkwIbInsgRFotNPTl6Y9HBbXUHV6gOw/viewform" },
  { id: 50, name: "Logo Lumina", description: "A creative twist of design and logic — guess logos, tackle a technical quiz, and shine with your innovation.", department: "IS", type: "Technical", date: "2025-11-10", startTime: "09:00 AM", endTime: "01:00 PM", venue: "Room 203", departmentCoordinator: "Prof. Sowmya", eventCoordinators: "Greeshma K, Ruthika P", poster: "/posters/IS/Logo Lumina.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeSy9_fGztUFyqby-gE0-Bd4eVjcrGUUxOlUuCtucRy8SDKSw/viewform" },
  { id: 51, name: "Paper Trail", description: "Showcase your ideas through a technical paper presentation — present, defend, and impress with your research.", department: "IS", type: "Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "Room 302", departmentCoordinator: "Prof. Sowmya", eventCoordinators: "Swathi, Varshini, Sanvi Shetty, Harshini P K", poster: "/posters/IS/Paper Trail.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSf-K66tTP6APJoe7exJ12CT3Tf9v5wkRPt7OlzKurZzLKMJvA/viewform" },
  { id: 52, name: "Hidden Riches", description: "A fun campus treasure hunt! Follow clues, explore hidden spots, and be the first team to uncover the final secret.", department: "IS", type: "Non-Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "04:30 PM", venue: "Room 203", departmentCoordinator: "Prof. Sowmya", eventCoordinators: "Spoorthi, Priyanka P, Shivani, Rashmi KP", poster: "/posters/IS/Hidden Riches.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeivSmOcbwwOnEK6l2Y57bMekeLxvCyp5IRPpSX_wlcP0WQNQ/viewform" },  
// ME Department Events
  { id: 53, name: "CAD Masters", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M", poster: "/posters/ME/CAD Masters.jpg", googleFormLink: "https://forms.gle/VuyfW2o3QrmPv7667" },
  { id: 54, name: "Gear Hunt", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M", poster: "/posters/ME/Gear Hunt.jpg", googleFormLink: "https://forms.gle/XnX6qdB5fzzoTXU98" },
  { id: 55, name: "Paper presentation", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M", poster: "/posters/ME/Paper presentation_.jpg", googleFormLink: "httpsf://forms.gle/sGrHSkXEnwQt3tic9" },
  { id: 56, name: "RC Craft", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "ME", type: "Non-Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M", poster: "/posters/ME/RC Craft_.jpg", googleFormLink: "https://forms.gle/SGySxE6f3GD8YfxL7" },
  { id: 57, name: "Zero Flame", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "ME", type: "Non-Technical", date: "2025-11-10", startTime: "03:00", endTime: "04:00 PM", venue: "ME ME LAB 3", departmentCoordinator: "Dr. Ravikiran Y T", eventCoordinators: "Shreyas K R, Sahana M", poster: "/posters/ME/Zero Flame_.jpg", googleFormLink: "https://forms.gle/w7vMQCoHZD8HbXmS9" },

  // MR Department Events
  { id: 58, name: "Robo Relay", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K", poster: "/posters/MR/neutical-riders.png", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF99" },
  { id: 59, name: "Paper Presentation", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K", poster: "/posters/MR/neutical-riders.png", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF99" },
  { id: 60, name: "Robo CAD", description: "Present your innovative project ideas and research through visually appealing posters.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K", poster: "/posters/MR/neutical-riders.png", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF99" },
  { id: 61, name: "Quiz", description: "Compete in popular esports titles like BGMI, Valorant, and FIFA. Form your squad and dominate!", department: "MR", type: "Non-Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K", poster: "/posters/MR/neutical-riders.png", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF99" },
  { id: 62, name: "Tech Huddle", description: "Navigate through campus solving clues and riddles in this exciting outdoor adventure.", department: "MR", type: "Non-Technical", date: "2025-11-10", startTime: "03:00", endTime: "04:00 PM", venue: "MR MR LAB 1", departmentCoordinator: "Dr. Sandesh G Bhat", eventCoordinators: "Nandan Gowda K, Anusha K", poster: "/posters/MR/neutical-riders.png", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF99" },

  // MBA Department Events
  { id: 63, name: "Best Manager", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "MBA", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty", poster: "/posters/MBA/the-hot-seat.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit5" },
  { id: 64, name: "Business Quiz", description: "Navigate your robot through challenging obstacles and mazes. Speed and precision matter!", department: "MBA", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty", poster: "/posters/MBA/decodeX.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit5" },
  { id: 65, name: "Paper Presentation", description: "24-hour hackathon focused on building innovative AI/ML solutions for real-world problems.", department: "MBA", type: "Non-Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty", poster: "/posters/MBA/ad-o-mania.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit5" },
  { id: 66, name: "Tech Huddle", description: "Analyze datasets, build predictive models, and present insights in this data science competition.", department: "MBA", type: "Non-Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "MBA MBA CLASS 1", departmentCoordinator: "Dr. Raveesh K", eventCoordinators: "Suresh Kumar, Priya Shetty", poster: "/posters/MBA/feel-the-rhythm.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit5" },

  // MCA Department Events
  { id: 67, name: "Coding", description: "Hands-on workshop on Internet of Things. Build smart devices and learn about connected systems.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "10:00", endTime: "11:00 AM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K", poster: "/posters/MCA/brain-bytes.png" },
  { id: 68, name: "Debugging", description: "Capture The Flag competition testing your cybersecurity and ethical hacking skills.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "11:00", endTime: "12:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K", poster: "/posters/MCA/bug-bounty.png" },
  { id: 69, name: "Paper Presentation", description: "Design innovative 3D models using CAD software. Creativity and precision are key.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "01:00", endTime: "02:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K", poster: "/posters/MCA/prisim--of-progress.png" },
  { id: 70, name: "Poster Presentation", description: "Present your research and innovative ideas on emerging technologies to a panel of experts.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "02:00", endTime: "03:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K", poster: "/posters/MCA/pixel-perfect.png" },
  { id: 71, name: "MiniStrike", description: "Test your knowledge across multiple domains including AI, blockchain, cybersecurity, and emerging technologies.", department: "MCA", type: "Non-Technical", date: "2025-11-10", startTime: "03:00", endTime: "04:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K", poster: "/posters/MCA/mini-bytes.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgIVxaHMnSf8O1ZqcSxI01QGe_3JI1c0JfD3M3hc-0m5D3mw/viewform?usp=dialog" },
  { id: 72, name: "Tech Huddle", description: "Present your innovative project ideas and research through visually appealing posters.", department: "MCA", type: "Non-Technical", date: "2025-11-10", startTime: "04:00", endTime: "05:00 PM", venue: "MCA CS LAB 8", departmentCoordinator: "Dr. Harishchandra Hebbar", eventCoordinators: "Rakesh Naik, Divya K", poster: "/posters/MCA/neuroflex.png" },

  // Kannada Sangha Department Event
  { id: 73, name: "Arivu Ankana", description: "Celebrate diversity through music, dance, and drama performances representing various cultures.", department: "Kannada Sangha", type: "Non-Technical", date: "2025-11-10", startTime: "05:00", endTime: "06:00 PM", venue: "Main Auditorium", departmentCoordinator: "Dr. Prema Shenoy", eventCoordinators: "Rakshith Kumar, Sowmya Hegde", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScP6ImCif3-CuFmkMByuw5RIMbqGOUA-fHSVSbEFTdRZiKk1g/viewform" },
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
