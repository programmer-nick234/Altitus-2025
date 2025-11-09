"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, MapPin, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import EventCard from "@/components/EventCard";
import SpotlightCard from "@/components/SpotlightCard";
import PixelBlast from "@/components/PixelBlast";
import { Button } from "@/components/ui";
import { EVENT_START_DATE, events } from "@/lib/mockData";
import { getEventStatus } from "@/lib/eventUtils";

export default function Home() {
  const currentTime = new Date();
  const featuredEvents = events
    .filter(e => getEventStatus(e, currentTime) === "live")
    .slice(0, 3);

  const scrollToContent = () => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Hero Section */}
<section className="hero-section overflow-hidden relative">
  {/* Looping Horizontal Background */}
  <div className="bg-scroll-x " />

        {/* PixelBlast Background */}
        <div className="absolute inset-0 z-0">
          <PixelBlast
            variant="circle"
            pixelSize={4}
            color="#457B9D"
            patternScale={2.5}
            patternDensity={1.1}
            pixelSizeJitter={0.3}
            enableRipples
            rippleSpeed={0.35}
            rippleThickness={0.15}
            rippleIntensityScale={1.2}
            liquid
            liquidStrength={0.08}
            liquidRadius={1.0}
            liquidWobbleSpeed={4.0}
            speed={0.4}
            edgeFade={0.3}
            transparent
          />
        </div>

        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/80 via-[#1D3557]/10 to-[#0B0C10]/80 z-[1]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E63946]/15 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1D3557]/15 rounded-full blur-[120px]"
          />
        </div>

        {/* Content - Perfectly Centered */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center">          {/* Logo with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative inline-block" // REMOVED: mb-2
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/altius-bg.png"
                alt="Altius Logo"
                width={260}
                height={260}
                className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64"
                priority
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(230, 57, 70, 0.4))',
                }}
              />
            </motion.div>
            
            {/* Animated Wings/Glow Effect */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#E63946]/30 blur-3xl rounded-full -z-10"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F1FAEE] goldman-bold leading-none tracking-wide 
                       mt-4" // ADDED: mt-4, REMOVED: mb-3
          >
            ALTIUS <span className="text-[#E63946]">25</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#457B9D] font-semibold montserrat-semibold tracking-wide 
                       mt-6 md:mt-8" // CHANGED: from mt-4 md:mt-6 mb-2
          >
            Soar Beyond Limits
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-[#C5C6C7] inter-regular max-w-3xl leading-relaxed 
                       mt-4"
          >
            Inter-Department Technical Fest | Srinivas Institute of Technology, Mangalore
          </motion.p>

          {/* Countdown Timer - Now Primary Feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="w-full max-w-14xl mt-10 md:mt-12 lg:mt-16"
          >
            <CountdownTimer targetDate={EVENT_START_DATE} />
          </motion.div>

          {/* Event Details - Now Below Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl 
                       mt-10 md:mt-12"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-5 md:px-8 md:py-6 rounded-2xl hover:border-[#E63946]/50 hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] transition-all duration-300"
            >
              <Calendar className="text-[#E63946] w-8 h-8 md:w-10 md:h-10" />
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-xs text-[#C5C6C7]/70 inter-medium uppercase tracking-widest">Date</span>
                <span className="text-[#F1FAEE] text-base md:text-lg inter-bold">Nov 10, 2025</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-5 md:px-8 md:py-6 rounded-2xl hover:border-[#1D3557]/50 hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] transition-all duration-300"
            >
              <MapPin className="text-[#1D3557] w-8 h-8 md:w-10 md:h-10" />
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-xs text-[#C5C6C7]/70 inter-medium uppercase tracking-widest">Venue</span>
                <span className="text-[#F1FAEE] text-base md:text-lg inter-bold">SIT, Mangalore</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-5 md:px-8 md:py-6 rounded-2xl hover:border-[#457B9D]/50 hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] transition-all duration-300"
            >
              <Users className="text-[#457B9D] w-8 h-8 md:w-10 md:h-10" />
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-xs text-[#C5C6C7]/70 inter-medium uppercase tracking-widest">Expected</span>
                <span className="text-[#F1FAEE] text-base md:text-lg inter-bold">500+ Students</span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with Industry-Grade Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl px-4 mt-10 md:mt-12"
          >
            <Link href="/events" className="w-full sm:w-auto">
              <Button 
                variant="gradient" 
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
                className="min-w-[180px] px-8 py-3 text-base font-bold tracking-wide rounded-full w-full sm:w-auto shadow-2xl transition-all duration-300"
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
    size="lg"
    className="min-w-[180px] px-8 py-3 text-base font-bold tracking-wide rounded-full w-full sm:w-auto shadow-2xl transition-all duration-300"
  >
    View Rulebook
  </Button>
</Link>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
            className="text-[#457B9D] hover:text-[#F1FAEE] transition-colors
                       mt-12 md:mt-16" // ADDED: Explicit margin-top
          >
            <ArrowDown size={32} />
          </motion.button>
        </div>
      </section>

      {/* About Section - With SpotlightCard */}
      <section id="about-section" className="section-spacing relative bg-[#0B0C10]">
        <div className="content-container">
          {/* Stats - With SpotlightCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
            {[
              { value: "75+", label: "Events", color: "rgba(230, 57, 70, 0.2)" },
              { value: "500+", label: "Participants", color: "rgba(69, 123, 157, 0.2)" },
              { value: "15", label: "Departments", color: "rgba(230, 57, 70, 0.25)" },
              { value: "1", label: "Day", color: "rgba(29, 53, 87, 0.2)" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard 
                  className="flex flex-col items-center justify-center p-6 md:p-8 min-h-[200px] group"
                  spotlightColor={stat.color}
                >
                  <div className="relative">
                    {/* Soft glow background */}
                    <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#E63946]/40 via-[#457B9D]/40 to-[#E63946]/40 opacity-50 group-hover:opacity-80 transition-all duration-300"></div>

                    {/* Animated gradient text */}
                    <div
                      className="relative text-6xl md:text-7xl font-bold goldman-bold mb-4 
                                bg-gradient-to-r from-[#E63946] via-[#F1FAEE] to-[#60859b] 
                                bg-[length:200%_200%] bg-clip-text text-transparent 
                                animate-gradientMove group-hover:scale-110 transition-transform"
                    >
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-lg md:text-xl text-[#C5C6C7] inter-semibold uppercase tracking-wider">{stat.label}</div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

      <Footer />
    </div>
  );
}