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
  { id: 7, name: "Gear Heads Challenge", description: "Test your automobile knowledge and logo recognition skills in an exciting two-round quiz designed for true car enthusiasts.", department: "AU", type: "Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "2:00 PM", venue: "M503", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Sandeep kumar . Amit", poster: "/posters/AU/Gearhudchallenge.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdQdpZlQadiEJnh-LiBoQAxXA2LxB7PzWeIyVcsEgLX-6Xl6Q/viewform" },
  { id: 8, name: "Zero Speed Zone", description: "Showcase your bike control skills in a thrilling slow race where balance and precision matter more than speed.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "10:30 AM", endTime: "02:03 PM", venue: "Near Temple,SIT", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Charan , Siddarth MJ", poster: "/posters/AU/Zerospeedzone.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSelzyrChjm2Ik9pkMAwuMPGWl4_t_MljxURyZMUrwossmoxRQ/viewform" },
  { id: 9, name: "Act Arena (Dumb Charades)", description: "Express your creativity and teamwork as you act out clues without words while your team guesses them right.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "05:00 PM", venue: "M505", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Navaneeth , Aditya", poster: "/posters/AU/Act%20arena.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSelzyrChjm2Ik9pkMAwuMPGWl4_t_MljxURyZMUrwossmoxRQ/viewform" },
  { id: 10, name: "Runway to Highway Adventure (Treasure Hunt)", description: "Embark on an adventurous treasure hunt full of clues, twists, and teamwork challenges.", department: "AU", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "02:00 PM", venue: "M305", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Bhavya , Jnanashree", poster: "/posters/AU/Runwaytohigway.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScHhInza6C4Pg-lJxEd4QY-wVt_gxtodu-4yBGgfHRMHQI93w/viewform" },
  { id: 11, name: "Lines of Legends", description: "Unleash your artistic skills by sketching iconic automobiles using pencil art and originality as your tools.", department: "AU", type: "Technical", date: "2025-11-10", startTime: "02:00 PM", endTime:  "03:00 PM", venue: "M503", departmentCoordinator: "Proff Prakash ST", eventCoordinators: "Keertan , Pratham", poster: "/posters/AU/Linesoflegends.jpg", googleFormLink: "https://docs.google.com/forms/d/1cIa5Js9wP-Jxr-PPVfZ1_u4IMGl5rXwBQA8xXGvpG5Q/viewform?edit_requested=true" }, 
   // AI&DS Department Events
  { id: 12, name: "Capture Altius", description: "Showcase your creativity by making short, original reels capturing the spirit of Altius.", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "03:00 PM", endTime: "05:00 AM", venue: "SIT , Altius", departmentCoordinator: "Proff Ajay Prinston Pinto", eventCoordinators: "Shashmitha V", poster: "/posters/AIDS/capture-altius.png",googleFormLink: "https://forms.gle/zv8K3BA6NFoiCwJB8" },
  { id: 13, name: "Quess the Output", description: "Challenge your coding and logical skills by predicting the output of tricky code snippets from Python, C, or Java.", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "404", departmentCoordinator: "Proff Ajay Prinston Pinto", eventCoordinators: "Muhammed Rhasil", poster: "/posters/AIDS/quess-the-output.png", googleFormLink:"https://forms.gle/P8VVii8dG4qgp32i8" },
  { id: 14, name: "Spot the Fake code", description: "Test your programming precision by identifying the correct version between two similar-looking code snippets.", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "04:00 PM", venue: "AI&DS Lab", departmentCoordinator: "Proff Ajay Prinston Pinto", eventCoordinators: "Alfiya Jafar", poster: "/posters/AIDS/spot-the-fake-code.png",googleFormLink:"https://forms.gle/k2TxJPSqiRf8adpR6" },
  { id: 15, name: "Tech Quiz", description: "Compete in a two-round quiz combining aptitude, tech basics, and rapid-fire questions to prove your technical IQ.", department: "AI&DS", type: "Technical", date: "2025-11-10", startTime: "12:00", endTime: "03:00 PM", venue: "301", departmentCoordinator: "Proff Ajay Prinston Pinto", eventCoordinators: "Sanjana V", poster: "/posters/AIDS/tech-quiz.png", googleFormLink: "https://forms.gle/qJdnzCeGZvTNiu1C7" },


  // AIML Department Events
  { id: 16, name: "Tech Pictionary", description: "Draw and guess technical concepts in this fast-paced tech sketching game! Team collaboration and quick thinking win.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "11:00 AM", venue: "Room 405", departmentCoordinator: "Prof. Daya Naik", eventCoordinators: "Ayesha, Mohith", poster: "/posters/AIML/tech-pictionary.png", googleFormLink: "https://forms.gle/HTECEcdNUfjRQgE17" },
  { id: 17, name: "Guess the Gadget", description: "Identify the latest and classic gadgets from clues and visuals. Fun and knowledge-packed event for all tech lovers.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "11:30 AM", endTime: "12:15 PM", venue: "Room 405", departmentCoordinator: "Prof. Daya Naik", eventCoordinators: "Dhanyashree, Vibha", poster: "/posters/AIML/guss-the-gadget.png", googleFormLink: "https://forms.gle/g9EkXcDxyk4hVFCPA" },
  { id: 18, name: "Byte Bingo", description: "Fun and engaging coding-themed bingo challenge — mark your grids as you crack logic and AI-based clues!", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "12:00 PM", endTime: "12:45 PM", venue: "Room 407", departmentCoordinator: "Prof. Daya Naik", eventCoordinators: "Meghna Kotian, Yukthi", poster: "/posters/AIML/byte-bingo.png", googleFormLink: "https://forms.gle/d9XvR2e3yqEydbZL6" },
  { id: 19, name: "Goal Striker", description: "Mini football challenge! Show your precision and reflexes as you compete to score the maximum goals.", department: "AIML", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "12:00 PM", venue: "Badminton Court", departmentCoordinator: "Prof. Daya Naik", eventCoordinators: "Muhammed Nihal, Muhammed Arshad", poster: "/posters/AIML/goal-striker.png", googleFormLink: "https://forms.gle/xTt9rF8QwV27Y5FH8" },
  { id: 20, name: "Escape Loop", description: "Exciting mystery hunt event where teams decode clues, solve puzzles, and escape the virtual loop!", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "03:30 PM", venue: "AIML Lab", departmentCoordinator: "Prof. Daya Naik", eventCoordinators: "Mohanis, Chirag", poster: "/posters/AIML/escape-loop.png", googleFormLink: "https://forms.gle/NMJvEx32GXngXQES9" },
  { id: 21, name: "Vision X", description: "Paper presentation event — showcase your research or project idea in the field of Artificial Intelligence and Machine Learning.", department: "AIML", type: "Technical", date: "2025-11-10", startTime: "09:30 AM", endTime: "11:00 AM", venue: "AIML Lab", departmentCoordinator: "Prof. Daya Naik", eventCoordinators: "Paurnavi, Varshitha", poster: "/posters/AIML/vision-x.png", googleFormLink: "https://forms.gle/jDqmzsAKpqMz1eru6" }, 
   // CSE Department Events
  { id: 22, name: "Codewired", description: "A two-round coding event to test your logic and debugging skills. Round 1: coding crossword. Round 2: debug code snippets and produce correct output.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "10:15 AM", endTime: "11:15 AM", venue: "DBMS Lab", departmentCoordinator: "Dr. Suresha D", eventCoordinators: "Deeksha Keshav Naik, Sowjanya R Shetty", poster: "/posters/CSE/codewired.jpg", googleFormLink: "https://forms.gle/KKz5r4epMHwByY4u5" },
  { id: 23, name: "Hack The Hidden", description: "Decode the clues and solve the cybersecurity case. Work as a team to uncover the hidden data and win the challenge.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "01:00 PM", venue: "CPP Lab (1st Floor)", departmentCoordinator: "Dr. Suresha D", eventCoordinators: "Rithika, Tanvi R.D", poster: "/posters/CSE/hack-the-hidden.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMRsvqWMvrmFSDhX_pADSsJi35_f4NascBdutwTf2P4Ryd9g/viewform?usp=dialog" },
  { id: 24, name: "Webwave", description: "Web designing contest — create your own frontend project within 2 hours. Creativity, originality, and design quality matter.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "04:00 PM", venue: "DS Lab (2nd Floor)", departmentCoordinator: "Dr. Suresha D", eventCoordinators: "D Rajeev, Manish G S", poster: "/posters/CSE/webwave.jpg", googleFormLink: "https://forms.gle/WvXtBbCP3dYyqfcm9" },
  { id: 25, name: "LOOT & SHOOT (BGMI)", description: "Battle Ground Mobile India gaming tournament — 2 to 4 players per team. Compete, survive, and dominate the leaderboard.", department: "CSE", type: "Non-Technical", date: "2025-11-10", startTime: "09:15 AM", endTime: "12:00 PM", venue: "M301 & M302", departmentCoordinator: "Dr. Suresha D", eventCoordinators: "Abhishek S, Darshan K", poster: "/posters/CSE/lootandshot.jpg", googleFormLink: "https://forms.gle/KjYuaRYLUvbBuuDC8" },
  { id: 26, name: "PaperQuest", description: "Paper presentation competition. 2–4 participants per team. 5 mins presentation + 2 mins Q&A. Paper should follow IEEE format.", department: "CSE", type: "Technical", date: "2025-11-10", startTime: "09:15 AM", endTime: "11:15 AM", venue: "Room No. 102", departmentCoordinator: "Dr. Suresha D", eventCoordinators: "Yamini, Chaithra M", poster: "/posters/CSE/paperquest.jpg", googleFormLink: "https://forms.gle/1iz7vYNHDWZeQGu87" },
    // CSBS Department Events
  { id: 27, name: "Decode the Code", description: "A technical coding challenge with two rounds focused on debugging and logic-building skills. Individual or team participation allowed.", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "09:00 AM", endTime: "12:00 PM", venue: "CSBS Lab", departmentCoordinator: "Prof. Gautham Shetty", eventCoordinators: "Naveen, Chirag", poster: "/posters/CSBS/decode-the-code.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVdDI0460jEezjhpFSh60twj5-iezJ-DiOoilroY_yKaGHew/viewform" },
  { id: 28, name: "Aimborn", description: "A fun basketball shooting competition where participants test accuracy and aim across multiple rounds.", department: "CSBS", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "01:00 PM", venue: "Badminton Court", departmentCoordinator: "Prof. Gautham Shetty", eventCoordinators: "Pavin, Vinyas", poster: "/posters/CSBS/Aimborn.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVdDI0460jEezjhpFSh60twj5-iezJ-DiOoilroY_yKaGHew/viewform" },
  { id: 29, name: "Paper Mania", description: "A paper presentation event encouraging students to showcase innovative research and technical findings.", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "12:00 PM", venue: "401", departmentCoordinator: "Prof. Gautham Shetty", eventCoordinators: "Yashaswini, Janananprakash", poster: "/posters/CSBS/Altius.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVdDI0460jEezjhpFSh60twj5-iezJ-DiOoilroY_yKaGHew/viewform" },
  { id: 30, name: "Mind Spark", description: "An idea generation competition where teams pitch innovative solutions within a limited timeframe.", department: "CSBS", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "01:00 PM", venue: "402", departmentCoordinator: "Prof. Gautham Shetty", eventCoordinators: "Amshu Spoorthi", poster: "/posters/CSBS/mind-spak.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVdDI0460jEezjhpFSh60twj5-iezJ-DiOoilroY_yKaGHew/viewform" },
  { id: 31, name: "Tech Memora", description: "A quick memory and observation-based technical event testing participants' retention and recall under time pressure.", department: "CSBS", type: "Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "01:00 PM", venue: "401", departmentCoordinator: "Prof. Gautham Shetty", eventCoordinators: "Ramya, Ganavi", poster: "/posters/CSBS/tech-memora.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVdDI0460jEezjhpFSh60twj5-iezJ-DiOoilroY_yKaGHew/viewform" },  
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
  { id: 53, name: "CAD Masters", description: "Design accurate 3D models using SolidEdge/SolidWorks under time pressure — speed and precision decide the winner.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "CAED Lab", departmentCoordinator: "Dr. Shankar K S", eventCoordinators: "Hrithik K, Abhijith Martis", poster: "/posters/ME/CAD Masters.jpg", googleFormLink: "https://forms.gle/VuyfW2o3QrmPv7667" },
  { id: 54, name: "Gear Hunt", description: "Treasure-hunt style campus challenge — follow clues, find locations, take proofs, and beat other teams to the final prize.", department: "ME", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "M102", departmentCoordinator: "Dr. Shankar K S", eventCoordinators: "Voekshith K Naiga, Thejaswini, Eshan", poster: "/posters/ME/Gear Hunt.jpg", googleFormLink: "https://forms.gle/XnX6qdB5fzzoTXU98" },
  { id: 55, name: "Paper Presentation", description: "Present your research or project idea (5–7 slides). Communicate clearly and defend your work before the judges.", department: "ME", type: "Technical", date: "2025-11-10", startTime: "09:15 AM", endTime: "01:15 PM", venue: "M102", departmentCoordinator: "Dr. Shankar K S", eventCoordinators: "Sujan P M, Srujan B K", poster: "/posters/ME/Paper presentation_.jpg", googleFormLink: "https://forms.gle/sGrHSkXEnwQt3tic9" },
  { id: 56, name: "RC Craft (RC Rock)", description: "Race remote-controlled vehicles over a challenging track with jumps and obstacles — speed and control win the race.", department: "ME", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "Mechanical Parking (Front of Canteen)", departmentCoordinator: "Dr. Shankar K S", eventCoordinators: "Saarathi V Rane, Gowtham B K", poster: "/posters/ME/RC Craft_.jpg", googleFormLink: "https://forms.gle/SGySxE6f3GD8YfxL7" },
  { id: 57, name: "Zero Flame (Cooking without fire)", description: "Creative no-fire cooking challenge — prepare tasty, hygienic dishes using only cold/assembly techniques.", department: "ME", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "M102 / Mechanical Block", departmentCoordinator: "Dr. Shankar K S", eventCoordinators: "Chethan B, Charan Shetty M", poster: "/posters/ME/Zero Flame_.jpg", googleFormLink: "https://forms.gle/w7vMQCoHZD8HbXmS9" }, 
 // MR (Marine) Department Events
  { id: 58, name: "Nautical Riders", description: "High-energy racing event — form your team and show your riding skills on the simulated track. Fastest and safest rider wins!", department: "MR", type: "Non-Technical", date: "2025-11-10", startTime: "10:30 AM", endTime: "02:30 PM", venue: "M101", departmentCoordinator: "Dr. Lokesh V", eventCoordinators: "Sarang S Nair", poster: "/posters/MR/Nautical_riders.jpg", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF103" },
  { id: 59, name: "Paper Presentation", description: "Present your research or project idea (concise slides) and defend it before judges to showcase technical depth and clarity.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "09:30 AM", endTime: "01:30 PM", venue: "M201", departmentCoordinator: "Dr. Lokesh V", eventCoordinators: "Karthik", poster: "/posters/MR/paper_presentation.jpg", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF099" },
  { id: 60, name: "Quiz-O-Mania", description: "Rapid-fire quiz covering marine topics and general technical knowledge — quick recall and teamwork will get you through the rounds.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "11:30 AM", endTime: "03:30 PM", venue: "M202", departmentCoordinator: "Dr. Lokesh V", eventCoordinators: "Srishti Shetty", poster: "/posters/MR/Quiz.jpg", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF101" },
  { id: 61, name: "Ship Wreck Solver", description: "Solve maritime puzzles and decode clues to rescue the stranded — teamwork and logical thinking are essential to succeed.", department: "MR", type: "Technical", date: "2025-11-10", startTime: "02:00 PM", endTime: "04:00 PM", venue: "M203", departmentCoordinator: "Dr. Lokesh V", eventCoordinators: "Prasanna R", poster: "/posters/MR/ship_wreck_solver.jpg", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF102" },
  { id: 62, name: "Spelling Bee", description: "Showcase your vocabulary and spelling accuracy under pressure — quick thinking and precision decide the champion.", department: "MR", type: "Non-Technical", date: "2025-11-10", startTime: "10:30 AM", endTime: "02:30 PM", venue: "M202", departmentCoordinator: "Dr. Lokesh V", eventCoordinators: "Maulya", poster: "/posters/MR/Spelling_Bee_compitation.jpg", googleFormLink: "https://forms.gle/JK29gZSii4YPYHF100" },  
// MBA Department Events
  { id: 63, name: "Ad O Mania (Mad Ad)", description: "Create an original, entertaining advertisement on the spot — creativity, timing and presentation win the day.", department: "MBA", type: "Non-Technical", date: "2025-11-10", startTime: "01:45 PM", endTime: "04:30 PM", venue: "501", departmentCoordinator: "Dr. Veena Santhosh Rai", eventCoordinators: "Shreyas K", poster: "/posters/MBA/ad-o-mania.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit5" },
  { id: 64, name: "DecodeX (Puzzle)", description: "Team-based puzzle rounds that test logic and lateral thinking — solve rounds quickly to advance.", department: "MBA", type: "Technical", date: "2025-11-10", startTime: "09:30 AM", endTime: "01:30 PM", venue: "501", departmentCoordinator: "Dr. Veena Santhosh Rai", eventCoordinators: "Vishmitha, Disha", poster: "/posters/MBA/decodeX.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit6" },
  { id: 65, name: "The Hot Seat (Allegation)", description: "Two-member teams defend or prosecute quick, randomized allegations on stage — wit and persuasion matter.", department: "MBA", type: "Non-Technical", date: "2025-11-10", startTime: "10:30 AM", endTime: "02:30 PM", venue: "501", departmentCoordinator: "Dr. Veena Santhosh Rai", eventCoordinators: "Sherly", poster: "/posters/MBA/the-hot-seat.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit7" },
  { id: 66, name: "Feel The Rhythm (Dance to the Tune)", description: "Solo dance challenge where contestants adapt instantly to random tracks — style, timing and improvisation win.", department: "MBA", type: "Non-Technical", date: "2025-11-10", startTime: "03:15 PM", endTime: "04:30 PM", venue: "501", departmentCoordinator: "Dr. Veena Santhosh Rai", eventCoordinators: "Raksha PB", poster: "/posters/MBA/feel-the-rhythm.png", googleFormLink: "https://forms.gle/fBW6EutkSdSbyQit5" }, 
  // MCA Department Events
  { id: 67, name: "Neuroflex", description: "Creative event where participants showcase innovative ideas based on given themes. Judged on creativity, relevance, and presentation.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "Lab 4", departmentCoordinator: "Dr. Shashidhar Kini K", eventCoordinators: "Raksha", poster: "/posters/MCA/neuroflex.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgIVxaHMnSf8O1ZqcSxI01QGe_3JI1c0JfD3M3hc-0m5D3mw/viewform?usp=dialog" },
  { id: 68, name: "Bug Bounty", description: "Debugging event where participants identify and fix errors in code using their knowledge of C, C++, Java, Python, and JavaScript.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "MCA Lab - 03", departmentCoordinator: "Dr. Shashidhar Kini K", eventCoordinators: "Vishakh K T", poster: "/posters/MCA/bug-bounty.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgIVxaHMnSf8O1ZqcSxI01QGe_3JI1c0JfD3M3hc-0m5D3mw/viewform?usp=dialog" },
  { id: 69, name: "Pixel Perfect (Web Design)", description: "A front-end web design contest where participants build responsive websites using HTML, CSS, and JavaScript.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "M404", departmentCoordinator: "Dr. Shashidhar Kini K", eventCoordinators: "S D Shraya", poster: "/posters/MCA/pixel-perfect.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgIVxaHMnSf8O1ZqcSxI01QGe_3JI1c0JfD3M3hc-0m5D3mw/viewform?usp=dialog" },
  { id: 70, name: "Prism of Progress (Paper Presentation)", description: "Paper presentation event showcasing innovative ideas and research relevant to current technology and computing.", department: "MCA", type: "Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "02:00 PM", venue: "M402", departmentCoordinator: "Dr. Shashidhar Kini K", eventCoordinators: "Nishmitha", poster: "/posters/MCA/prisim--of-progress.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgIVxaHMnSf8O1ZqcSxI01QGe_3JI1c0JfD3M3hc-0m5D3mw/viewform?usp=dialog" },
  { id: 71, name: "Mini Strike", description: "Exciting e-sports style multiplayer competition where teams battle through virtual challenges and knockout rounds.", department: "MCA", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "03:00 PM", venue: "M401", departmentCoordinator: "Dr. Shashidhar Kini K", eventCoordinators: "Jayanth Bharani C S", poster: "/posters/MCA/mini-bytes.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgIVxaHMnSf8O1ZqcSxI01QGe_3JI1c0JfD3M3hc-0m5D3mw/viewform?usp=dialog" },
  { id: 72, name: "Brain Bytes", description: "Team quiz competition featuring multiple rounds testing logical reasoning, computing, and general knowledge.", department: "MCA", type: "Non-Technical", date: "2025-11-10", startTime: "01:00 PM", endTime: "04:30 PM", venue: "M402", departmentCoordinator: "Dr. Shashidhar Kini K", eventCoordinators: "Dimpal", poster: "/posters/MCA/brain-bytes.png", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgIVxaHMnSf8O1ZqcSxI01QGe_3JI1c0JfD3M3hc-0m5D3mw/viewform?usp=dialog" }, 
   // AISIRI Kannada Sangha Department Events
  { id: 73, name: "Arivu Ankana (Kannada Essay Writing)", description: "A Kannada essay writing competition that promotes creative expression and the richness of the Kannada language.", department: "AISIRI Kannada Sangha", type: "Non-Technical", date: "2025-11-10", startTime: "09:00 AM", endTime: "10:00 AM", venue: "Seminar Hall", departmentCoordinator: "Dr. Prema Shenoy", eventCoordinators: "Akshatha D K, Bhuvan M S", poster: "/posters/kannada/arevuankana.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScP6ImCif3-CuFmkMByuw5RIMbqGOUA-fHSVSbEFTdRZiKk1g/viewform" },
  { id: 74, name: "Nenapina Butti (Memory Challenge)", description: "A memory-based Kannada quiz event testing participants' ability to recall facts, phrases, and cultural knowledge.", department: "AISIRI Kannada Sangha", type: "Non-Technical", date: "2025-11-10", startTime: "10:00 AM", endTime: "11:00 AM", venue: "Seminar Hall", departmentCoordinator: "Dr. Prema Shenoy", eventCoordinators: "Sushma D, Vishwanath Shetty", poster: "/posters/kannada/nannapinnabuthi.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScP6ImCif3-CuFmkMByuw5RIMbqGOUA-fHSVSbEFTdRZiKk1g/viewform" },
  { id: 75, name: "Vagmi Vedike (Speech Competition)", description: "A Kannada speech competition encouraging eloquence, creativity, and confidence in public speaking.", department: "AISIRI Kannada Sangha", type: "Non-Technical", date: "2025-11-10", startTime: "11:00 AM", endTime: "12:00 PM", venue: "B201", departmentCoordinator: "Dr. Prema Shenoy", eventCoordinators: "Divya Shetty, Kavyashree", poster: "/posters/kannada/wagmivedike.jpg", googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScP6ImCif3-CuFmkMByuw5RIMbqGOUA-fHSVSbEFTdRZiKk1g/viewform" },
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
