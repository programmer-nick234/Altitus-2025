"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, MapPin, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import EventCard from "@/components/EventCard";
import  Button  from "@/components/ui/Button"; // ✅ fixed import path
import { EVENT_START_DATE, events } from "@/lib/mockData";

export default function Home() {
  const featuredEvents = (events || []).filter((e) => e.isLive).slice(0, 3);

  const scrollToContent = () => {
    if (typeof window !== "undefined") {
      document
        .getElementById("about-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#1D3557]/20 to-[#0B0C10] -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#E63946]/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#1D3557]/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-4 md:space-y-6 lg:space-y-8 py-20 md:py-32">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative inline-block mb-2"
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
                className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 drop-shadow-[0_0_40px_rgba(230,57,70,0.4)]"
                priority
              />
            </motion.div>

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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F1FAEE] goldman-bold leading-none tracking-wide mb-3"
          >
            ALTIUS <span className="text-[#E63946]">2025</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#457B9D] font-semibold montserrat-semibold tracking-wide mt-4 md:mt-6 mb-2"
          >
            Soar Beyond Limits 🚀
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-[#C5C6C7] inter-regular max-w-3xl leading-relaxed mb-6"
          >
            Inter-Department Technical Fest | Srinivas Institute of Technology
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 w-full max-w-5xl"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 md:px-10 md:py-8 rounded-2xl hover:border-[#E63946]/50 hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] transition-all duration-300"
            >
              <Calendar className="text-[#E63946] w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-xs text-[#C5C6C7]/70 inter-medium uppercase tracking-widest">
                  Date
                </span>
                <span className="text-[#F1FAEE] text-lg md:text-xl inter-bold">
                  Nov 10, 2025
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 md:px-10 md:py-8 rounded-2xl hover:border-[#1D3557]/50 hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] transition-all duration-300"
            >
              <MapPin className="text-[#1D3557] w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-xs text-[#C5C6C7]/70 inter-medium uppercase tracking-widest">
                  Venue
                </span>
                <span className="text-[#F1FAEE] text-lg md:text-xl inter-bold">
                  SIT, Mangalore
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 md:px-10 md:py-8 rounded-2xl hover:border-[#457B9D]/50 hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] transition-all duration-300"
            >
              <Users className="text-[#457B9D] w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-xs text-[#C5C6C7]/70 inter-medium uppercase tracking-widest">
                  Expected
                </span>
                <span className="text-[#F1FAEE] text-lg md:text-xl inter-bold">
                  500+ Students
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className="w-full max-w-7xl mt-12 md:mt-16"
          >
            <CountdownTimer targetDate={EVENT_START_DATE} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl px-4 mt-10 md:mt-12"
          >
            <Link href="/events" aria-label="Explore Events">
              <Button
                size="xl"
                className="min-w-[220px] px-12 py-5 text-lg font-bold tracking-wide rounded-full shadow-2xl w-full sm:w-auto hover:shadow-[0_0_20px_rgba(69,123,157,0.5)] transition-all duration-300 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white"
              >
                Explore Events <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
 
            <Link href="/register" aria-label="Register Now">
              <Button
                size="xl"
                className="min-w-[220px] px-12 py-5 text-lg font-bold tracking-wide rounded-full shadow-2xl w-full sm:w-auto hover:shadow-[0_0_40px_rgba(230,57,70,0.5)] transition-all duration-300 bg-[#E63946] text-white"
              >
                Register Now
              </Button>
            </Link>
          </motion.div>

          {/* Scroll Down Button */}
          <motion.button
            onClick={scrollToContent}
            aria-label="Scroll down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              delay: 1.5,
              y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
            }}
            className="text-[#457B9D] hover:text-[#F1FAEE] mt-6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#457B9D] rounded-full"
          >
            <ArrowDown size={32} />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-section"
        className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-[#0B0C10]"
      >
        <div className="content-container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1FAEE] goldman-bold">
              About <span className="text-[#E63946]">Altius 2025</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto rounded-full" />
            <p className="text-[#C5C6C7] text-lg md:text-xl max-w-4xl mx-auto inter-regular leading-relaxed px-4">
              Altius 2025 is the premier inter-department technical fest at
              Srinivas Institute of Technology. Bringing together brilliant
              minds from across departments to compete, collaborate, and
              celebrate innovation.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-24">
            {[
              { value: "20+", label: "Events" },
              { value: "500+", label: "Participants" },
              { value: "6", label: "Departments" },
              { value: "3", label: "Days" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:border-[#457B9D]/50 hover:scale-105 hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] transition-all duration-300 group"
              >
                <div className="text-6xl md:text-7xl font-bold gradient-blue-red bg-clip-text text-transparent goldman-bold mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl text-[#C5C6C7] inter-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-6 mb-16"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#F1FAEE] goldman-bold">
                  Live <span className="text-[#E63946]">Events</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto rounded-full mb-2" />
                <p className="text-[#C5C6C7] text-lg md:text-xl inter-regular max-w-2xl mx-auto px-4 m-2 relative z-30">
                  Join the action happening right now
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 ">
                {featuredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}










