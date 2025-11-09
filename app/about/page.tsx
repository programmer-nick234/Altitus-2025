"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, Users, Zap, Trophy, Network, Lightbulb, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui";
import styled from 'styled-components'; // Added for the team cards

// --- Team Card Component ---
// Using the styled-component definition you provided
const StyledWrapper = styled.div`
  /* ===== LOCAL CSS RESET ===== */
  /* This resets the global * { margin: 3px; } rule ONLY for this component */
  margin: 0; 
  * {
    margin: 0;
    box-sizing: border-box;
  }
  /* =========================== */

  .card {
    position: relative;
    width: 190px;
    height: 254px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    /* justify-content: end; <-- Removed to allow image at top */
    /* padding: 12px; <-- Moved to card-content */
    /* gap: 12px; <-- Moved to card-content */
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden; /* Added to clip the image to the card's rounded corners */
  }
  
  .card-image {
    width: 100%;
    height: 150px; /* Set a fixed height for the image */
    object-fit: cover;
    background-color: #1F2833; /* Placeholder bg while image loads */
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: end; /* Pushes text to the bottom */
    flex-grow: 1; /* Takes up remaining space */
    padding: 12px;
    gap: 12px;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    color: #F1FAEE; /* Ensure text is visible on black bg */
  }

  .card p:not(.heading) {
    font-size: 14px;
    color: #C5C6C7; /* Ensure text is visible on black bg */
  }

  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;

type TeamCardProps = {
  name: string;
  role: string;
  imageUrl: string; // Added image URL prop
};

/**
 * Reusable Team Card component based on user's style.
 * @param {object} props - Component props.
 * @param {string} props.name - Person's name.
 * @param {string} props.role - Person's role.
 * @param {string} props.imageUrl - URL for the person's image.
 */
const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img 
          src={imageUrl} 
          alt={name} 
          className="card-image" 
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/190x150/1F2833/F1FAEE?text=Image')}
        />
        <div className="card-content">
          <p className="heading">
            {name}
          </p>
          <p>
            {role}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

// --- Team Data (Updated with imageUrl) ---
const leadership = [
  { 
    name: "Dr. Shrinivasa Mayya D", 
    role: "Principal", 
    imageUrl: "/team/srinivas-maya.jpg" 
  },
];

const coordinators = [
  { 
    name: "Dheeraj D", 
    role: "Event Coordinator", 
    imageUrl: "/team/dheeraj.jpg" 
  },
  { 
    name: "Prof. Mohamed Gawspear", 
    role: "Event Coordinator", 
    imageUrl: "/team/MGP.jpg" 
  },
];

const developers = [
  { 
    name: "Nikhil", 
    role: "Fullstack Developer", 
    imageUrl: "/team/nikhil2.jpg" 
  },
  { 
    name: "Suraj", 
    role: "Fullstack Developer", 
    imageUrl: "/team/suraj.jpg" 
  },
  { 
    name: "Sudharma", 
    role: "Backend Developer", 
    imageUrl: "/team/sudharma.jpg" 
  },
  { 
    name: "Chirag", 
    role: "Frontend Developer", 
    imageUrl: "/team/chirag.jpg" 
  },
  { 
    name: "Arsh", 
    role: "Frontend Developer", 
    imageUrl: "/team/arsh.jpg" 
  },
];


// --- Main Page Component ---
export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();
  const [counters, setCounters] = useState({ days: 0, participants: 0, events: 0, departments: 0 });

  // Count-up animation
  useEffect(() => {
    const targets = { days: 1, participants: 500, events: 75, departments: 15 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounters({
        days: Math.min(Math.floor((targets.days * step) / steps), targets.days),
        participants: Math.min(Math.floor((targets.participants * step) / steps), targets.participants),
        events: Math.min(Math.floor((targets.events * step) / steps), targets.events),
        departments: Math.min(Math.floor((targets.departments * step) / steps), targets.departments),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      };

  return (
    <div className="min-h-screen bg-[#0B0C10] relative">
      <Navbar />
      <BackToTop />

      {/* Ambient Background Orbs with Parallax */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E63946] opacity-[0.04] rounded-full blur-[140px]"
          animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#1D3557] opacity-[0.05] rounded-full blur-[140px]"
          animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section - Improved with gradient glow */}
      <section className="hero-section">
        {/* Gradient Glow Behind Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-gradient-radial from-[#E63946]/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="content-container text-center relative z-10">
          <motion.div
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } })}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#F1FAEE] mb-6 goldman-bold tracking-tight">
              ABOUT <span className="text-[#E63946]">ALTIUS</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#F1FAEE] font-light mb-8 montserrat-light tracking-widest uppercase"
              {...(prefersReducedMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 } })}
            >
              SOAR BEYOND LIMITS
            </motion.p>

            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent mx-auto mb-12"
              {...(prefersReducedMotion ? {} : { initial: { scaleX: 0 }, animate: { scaleX: 1 }, transition: { delay: 0.5, duration: 0.8 } })}
            />

            <motion.div
              className="max-w-4xl mx-auto mb-12"
              {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.7 } })}
            >
              <p className="text-lg md:text-xl text-[#C5C6C7] leading-relaxed inter-regular mb-6 text-center">
                <span className="text-[#F1FAEE] font-semibold">Altius 25</span> is the grand annual inter-departmental fest of <span className="text-[#F1FAEE] font-semibold">Srinivas Institute of Technology</span>, where innovation meets excellence. The event brings together creative minds from every department to compete, collaborate, and celebrate the spirit of knowledge, technology, and talent.
              </p>
              <p className="text-base md:text-lg text-[#C5C6C7] leading-relaxed inter-regular mb-6 text-center">
                This year's edition, <span className="text-[#F1FAEE] font-semibold">Altius 25</span>, takes inspiration from the interstellar theme — <span className="text-[#E63946] font-semibold">"Innovate, Compete, Ascend."</span> Like a comet blazing across the sky, Altius represents brilliance, momentum, and discovery. It's not just an event, but a journey that challenges students to think beyond limits, push their creativity, and rise to new heights of achievement.
              </p>
              <p className="text-base md:text-lg text-[#C5C6C7] leading-relaxed inter-regular mb-6 text-center">
                With a vibrant lineup of technical, non-technical, and cultural competitions, Altius provides a platform for every student to showcase their potential and passion. The fest embodies teamwork, leadership, and innovation — qualities that define the true spirit of Srinivas.
              </p>
              <p className="text-lg md:text-xl text-[#F1FAEE] leading-relaxed inter-regular font-semibold text-center">
                Join us as we launch into an extraordinary experience of ideas, art, and intellect —<br />
                <span className="text-[#E63946]">Welcome to Altius 25. Let the ascent begin.</span>
              </p>
            </motion.div>

            <motion.div
              className="button-group"
              {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.9 } })}
            >
              <Link href="/events">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<ChevronRight className="w-5 h-5" />}
                  iconPosition="right"
                  aria-label="Explore all events at Altius 2025"
                >
                  Explore Events
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1viaq7hCyFQSti37uFx-ZjAo3B3hQacy-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                prefetch={false}
              >
                <Button 
                  variant="primary" 
                  size="xl"
                  className="min-w-[220px] px-12 py-5 text-lg font-bold tracking-wide rounded-full w-full sm:w-auto shadow-2xl hover:shadow-[0_0_40px_rgba(230,57,70,0.5)] transition-all duration-300"
                >
                  View Rulebook
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - With SpotlightCard Effect */}
      <section className="section-spacing bg-[#11131A]">
        <div className="content-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Calendar, value: counters.days, suffix: "", label: "Day of Innovation", color: "rgba(230, 57, 70, 0.2)" },
              { icon: Users, value: counters.participants, suffix: "+", label: "Participants", color: "rgba(69, 123, 157, 0.2)" },
              { icon: Zap, value: counters.events, suffix: "+", label: "Events & Workshops", color: "rgba(230, 57, 70, 0.25)" },
              { icon: MapPin, value: counters.departments, suffix: "", label: "Departments", color: "rgba(29, 53, 87, 0.2)" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  {...(prefersReducedMotion ? {} : { 
                    initial: { opacity: 0, scale: 0.9 }, 
                    whileInView: { opacity: 1, scale: 1 }, 
                    viewport: { once: true }, 
                    transition: { delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 200 } 
                  })}
                >
                  <SpotlightCard 
                    className="stats-card min-h-[220px] flex flex-col items-center justify-center group"
                    spotlightColor={stat.color}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#E63946]/10 mb-5 group-hover:bg-[#E63946]/20 transition-colors">
                      <Icon className="text-[#E63946]" size={28} aria-hidden="true" />
                    </div>
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#F1FAEE] mb-3 goldman-bold" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm md:text-base lg:text-lg text-gray-400 inter-regular uppercase tracking-wide px-2">
                      {stat.label}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Participate Section - With SpotlightCard Effect */}
      <section className="section-spacing">
        <div className="content-container">
          <motion.div
            {...motionProps}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#F1FAEE] mb-4 goldman-bold tracking-tight">
              WHY <span className="text-[#E63946]">PARTICIPATE?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#457B9D] inter-regular max-w-2xl mx-auto">
              Join the movement of innovators and changemakers shaping the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {[
              {
                icon: Trophy,
                title: "Compete & Win",
                description: "Battle for glory with exciting prizes, cash rewards, and recognition that elevates your career. Winners gain industry visibility and exclusive opportunities.",
                color: "rgba(230, 57, 70, 0.25)"
              },
              {
                icon: Network,
                title: "Network",
                description: "Connect with 500+ talented peers, industry professionals, and tech leaders. Build relationships that open doors to internships, collaborations, and mentorship.",
                color: "rgba(69, 123, 157, 0.25)"
              },
              {
                icon: Lightbulb,
                title: "Learn & Grow",
                description: "Gain hands-on experience through workshops, expert talks, and real-world challenges. Develop skills that companies actively seek in tomorrow's innovators.",
                color: "rgba(230, 57, 70, 0.2)"
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...(prefersReducedMotion ? {} : { 
                    initial: { opacity: 0, y: 30 }, 
                    whileInView: { opacity: 1, y: 0 }, 
                    viewport: { once: true }, 
                    transition: { delay: index * 0.15, duration: 0.6 } 
                  })}
                  className="flex flex-col h-full"
                >
                  <SpotlightCard 
                    className="info-card flex flex-col h-full p-8 md:p-10 gap-6 group"
                    spotlightColor={item.color}
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#E63946]/10 rounded-full text-[#E63946] mx-auto group-hover:bg-[#E63946]/20 group-hover:scale-110 transition-all">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F1FAEE] goldman-bold text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#C5C6C7] text-base md:text-lg inter-regular leading-relaxed text-center flex-grow max-w-prose mx-auto">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When & Where + Mission - With SpotlightCard Effect */}
      <section className="section-spacing bg-[#11131A]">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* When & Where */}
            <motion.div
              {...(prefersReducedMotion ? {} : { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 } })}
            >
              <SpotlightCard 
                className="h-full p-8 lg:p-10"
                spotlightColor="rgba(230, 57, 70, 0.2)"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#E63946]/10 rounded-full">
                    <Calendar className="text-[#E63946]" size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] goldman-bold">When & Where</h3>
                </div>
                <div className="space-y-5 text-left">
                  <div>
                    <p className="text-sm text-[#457B9D] mb-1 inter-regular uppercase tracking-wide">Date</p>
                    <p className="text-xl md:text-2xl font-semibold text-[#F1FAEE] goldman-bold">November 10</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#457B9D] mb-1 inter-regular uppercase tracking-wide">Venue</p>
                    <p className="text-xl md:text-2xl font-semibold text-[#F1FAEE] goldman-bold">Srinivas Institute of Technology</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#457B9D] mb-1 inter-regular uppercase tracking-wide">Location</p>
                    <p className="text-xl md:text-2xl font-semibold text-[#F1FAEE] goldman-bold">Mangalore, Karnataka</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Mission */}
            <motion.div
              {...(prefersReducedMotion ? {} : { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 } })}
            >
              <SpotlightCard 
                className="h-full p-8 lg:p-10"
                spotlightColor="rgba(69, 123, 157, 0.2)"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1D3557]/30 rounded-full">
                    <Zap className="text-[#457B9D]" size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] goldman-bold">Our Mission</h3>
                </div>
                <p className="text-base md:text-lg text-[#C5C6C7] leading-relaxed inter-regular text-left" style={{ maxWidth: "70ch" }}>
                  To foster <span className="text-[#F1FAEE] font-semibold">innovation</span>, 
                  <span className="text-[#F1FAEE] font-semibold"> creativity</span>, and 
                  <span className="text-[#F1FAEE] font-semibold"> collaboration</span> among students while providing 
                  a world-class platform to showcase technical excellence and develop the practical skills that shape tomorrow's leaders.
                </p>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEW: Meet the Team Section --- */}
      <section className="section-spacing">
        <div className="content-container">
          <motion.div
            {...motionProps}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#F1FAEE] mb-4 goldman-bold tracking-tight">
              MEET THE <span className="text-[#E63946]">TEAM</span>
            </h2>
            <p className="text-lg md:text-xl text-[#457B9D] inter-regular max-w-2xl mx-auto">
              The minds behind the magic and the leaders guiding the way.
            </p>
          </motion.div>

          {/* Leadership */}
          <motion.div {...motionProps} className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] goldman-bold text-center mb-10">
              Our Principal
            </h3>
            <div className="flex justify-center flex-wrap gap-8">
              {leadership.map((person) => (
                <TeamCard 
                  key={person.name} 
                  name={person.name} 
                  role={person.role} 
                  imageUrl={person.imageUrl} 
                />
              ))}
            </div>
          </motion.div>

          {/* Event Coordinators */}
          <motion.div {...motionProps} className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] goldman-bold text-center mb-10">
              Event Coordinators
            </h3>
            <div className="flex justify-center flex-wrap gap-8">
              {coordinators.map((person) => (
                <TeamCard 
                  key={person.name} 
                  name={person.name} 
                  role={person.role} 
                  imageUrl={person.imageUrl} 
                />
              ))}
            </div>
          </motion.div>

          {/* Developers */}
          <motion.div {...motionProps}>
            <h3 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] goldman-bold text-center mb-10">
              Development Team
            </h3>
            <div className="flex justify-center flex-wrap gap-8">
              {developers.map((person) => (
                <TeamCard 
                  key={person.name} 
                  name={person.name} 
                  role={person.role} 
                  imageUrl={person.imageUrl} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - With SpotlightCard Effect */}
      <section className="section-spacing bg-gradient-to-b from-[#0B0C10] via-[#1D3557]/10 to-[#0B0C10]">
        <div className="content-container text-center">
          <motion.div
            {...motionProps}
          >
            <SpotlightCard 
              className="p-12 md:p-16 lg:p-20"
              spotlightColor="rgba(230, 57, 70, 0.3)"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F1FAEE] mb-6 goldman-bold tracking-tight">
                ALTIUS <span className="text-[#E63946]">2025</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent mx-auto mb-6" />
              
              <p className="text-lg md:text-xl text-[#C5C6C7] inter-regular leading-relaxed mb-2">
                Ignite Innovation • Shape the Future • Soar Beyond Limits
              </p>
              
              <p className="text-base md:text-lg text-[#457B9D] montserrat-light mb-8">
                Srinivas Institute of Technology's Premier Inter-Department Technical Fest
              </p>

              <Link href="/events">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<ChevronRight size={20} aria-hidden="true" />}
                  iconPosition="right"
                  aria-label="View all events at Altius 2025"
                >
                  View All Events
                </Button>
              </Link>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}