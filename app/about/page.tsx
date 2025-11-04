"use client";

import { motion } from "framer-motion";
import { 
  Network, Zap, Award, Rocket, Trophy, Building2, Users, Calendar,
  Target, Lightbulb, Linkedin, Github, Instagram, GraduationCap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers } from "@/lib/mockData";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [counters, setCounters] = useState({
    events: 0,
    departments: 0,
    participants: 0,
    colleges: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const targets = { events: 20, departments: 13, participants: 500, colleges: 20 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        events: Math.min(Math.floor((targets.events * step) / steps), targets.events),
        departments: Math.min(Math.floor((targets.departments * step) / steps), targets.departments),
        participants: Math.min(Math.floor((targets.participants * step) / steps), targets.participants),
        colleges: Math.min(Math.floor((targets.colleges * step) / steps), targets.colleges),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const whyParticipate = [
    {
      icon: Network,
      title: "Network with the Best",
      description: "Connect with peers, professionals, and industry experts from across the tech ecosystem."
    },
    {
      icon: Zap,
      title: "Hands-on Challenges",
      description: "Test your skills across 20+ technical and non-technical events designed to push boundaries."
    },
    {
      icon: Award,
      title: "Big Rewards",
      description: "Win prizes worth ₹50,000+, exclusive internships, and recognition from top tech industries."
    },
    {
      icon: Rocket,
      title: "Innovation at Core",
      description: "Compete to redefine the boundaries of creativity and technological advancement."
    }
  ];

  const highlights = [
    { icon: Trophy, label: "Events", value: "20+ Technical & Non-Technical" },
    { icon: Building2, label: "Departments", value: "13 Participating Departments" },
    { icon: Users, label: "Participants", value: "500+ from 20+ Colleges" },
    { icon: Calendar, label: "Duration", value: "3 Days of Non-stop Energy" },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Section 1: What is Altius? - Centered Introduction */}
      <section className="pt-32 pb-20 px-8 sm:px-10 lg:px-16 relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-[#E63946]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F1FAEE] mb-6 goldman-bold">
              What is <span className="text-[#E63946]">Altius</span>?
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto mb-10 rounded-full shadow-lg shadow-[#E63946]/50" />
            
            <p className="text-[#C5C6C7] text-lg md:text-xl lg:text-2xl inter-regular leading-relaxed mb-8">
              <span className="text-[#F1FAEE] font-semibold">ALTIUS 2025</span> is the official inter-departmental techno-cultural fest of{" "}
              <span className="text-[#457B9D] font-semibold">Srinivas Institute of Technology</span>, 
              where innovation, creativity, and competition collide.
            </p>

            <p className="text-[#C5C6C7] text-base md:text-lg lg:text-xl inter-regular leading-relaxed max-w-4xl mx-auto">
              Every year, Altius brings together bright minds across disciplines to challenge, create, and celebrate technology in action. 
              For over a decade, it has been the arena where innovation meets competition.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-[#1D3557]/30 hover:border-[#1D3557] transition-all group"
            >
              <Target className="w-12 h-12 text-[#1D3557] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-[#F1FAEE] mb-4 goldman-bold">Our Mission</h3>
              <p className="text-[#C5C6C7] inter-regular leading-relaxed">
                To ignite curiosity and collaboration among students while fostering practical problem-solving through hands-on events and competitions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-[#E63946]/30 hover:border-[#E63946] transition-all group"
            >
              <Lightbulb className="w-12 h-12 text-[#E63946] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-[#F1FAEE] mb-4 goldman-bold">Our Vision</h3>
              <p className="text-[#C5C6C7] inter-regular leading-relaxed">
                Empower the innovators of tomorrow by creating a platform that celebrates technical excellence and creative thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Participate - Two Column Layout */}
      <section className="py-20 px-8 sm:px-10 lg:px-16 bg-[#1F2833]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#F1FAEE] mb-6 goldman-bold">
                Why <span className="text-[#E63946]">Participate</span>?
              </h2>
              <div className="w-24 h-1 bg-[#E63946] mb-8 rounded-full" />

              <div className="space-y-6">
                {whyParticipate.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="glass p-3 rounded-lg border border-[#457B9D]/30 group-hover:border-[#E63946] transition-all">
                      <item.icon className="w-6 h-6 text-[#457B9D] group-hover:text-[#E63946] transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F1FAEE] mb-2 goldman-regular">{item.title}</h3>
                      <p className="text-[#C5C6C7] inter-regular leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-8 rounded-2xl border border-[#E63946]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/10 via-transparent to-[#1D3557]/10" />
                <div className="relative z-10">
                  <Image
                    src="/altius-bg.png"
                    alt="Altius Logo"
                    width={400}
                    height={400}
                    className="w-full h-auto drop-shadow-[0_0_50px_rgba(230,57,70,0.3)]"
                  />
                </div>
              </div>
              
              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass px-6 py-4 rounded-xl border border-[#E63946]/40"
              >
                <div className="text-3xl font-bold text-[#E63946] goldman-bold">₹50K+</div>
                <div className="text-xs text-[#C5C6C7] inter-regular">Prize Pool</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Event Highlights */}
      <section className="py-20 px-8 sm:px-10 lg:px-16 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1FAEE] mb-6 goldman-bold">
              Event <span className="text-[#E63946]">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E63946] to-[#1D3557] mx-auto mb-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-[#457B9D]/20 hover:border-[#E63946]/50 transition-all group text-center"
              >
                <highlight.icon className="w-12 h-12 text-[#457B9D] group-hover:text-[#E63946] mx-auto mb-4 transition-colors" />
                <h3 className="text-sm text-[#C5C6C7] mb-2 inter-medium uppercase tracking-wider">{highlight.label}</h3>
                <p className="text-[#F1FAEE] font-semibold inter-semibold">{highlight.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Animated Stats Counter */}
      <section className="py-20 px-8 sm:px-10 lg:px-16 bg-[#1F2833]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1FAEE] mb-6 goldman-bold">
              Our <span className="text-[#E63946]">Impact</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg inter-regular">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { key: 'events', label: 'Events', suffix: '+' },
              { key: 'departments', label: 'Departments', suffix: '' },
              { key: 'participants', label: 'Participants', suffix: '+' },
              { key: 'colleges', label: 'Colleges', suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-[#E63946]/20 hover:border-[#E63946]/60 transition-all group text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#E63946] goldman-bold mb-2 group-hover:scale-110 transition-transform">
                  {counters[stat.key as keyof typeof counters]}{stat.suffix}
                </div>
                <div className="text-[#C5C6C7] inter-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Meet the Team */}
      <section className="py-20 px-8 sm:px-10 lg:px-16 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1FAEE] mb-6 goldman-bold">
              Meet the <span className="text-[#E63946]">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto mb-6 rounded-full" />
            <p className="text-[#C5C6C7] text-lg inter-regular">The brilliant minds behind Altius 2025</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 6).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border border-[#457B9D]/20 hover:border-[#E63946]/50 transition-all group text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#E63946]/30 group-hover:border-[#E63946] transition-all bg-gradient-to-br from-[#1D3557] to-[#E63946]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-[#F1FAEE]" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#F1FAEE] mb-2 goldman-regular">{member.name}</h3>
                <p className="text-[#E63946] inter-semibold mb-2">{member.role}</p>
                <p className="text-[#C5C6C7] text-sm inter-regular mb-4">{member.department}</p>
                
                {member.social && (
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#457B9D] hover:text-[#E63946] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#457B9D] hover:text-[#E63946] transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#457B9D] hover:text-[#E63946] transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
