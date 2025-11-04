"use client";

import { motion } from "framer-motion";
import { Target, Users, Trophy, Lightbulb, Linkedin, Github, Instagram, Zap, Award, Network, Rocket, Calendar, Building2, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers, type TeamMember } from "@/lib/mockData";
import { useEffect, useState } from "react";

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
    const duration = 2000; // 2 seconds
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return Linkedin;
      case "github":
        return Github;
      case "instagram":
        return Instagram;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-[#E63946]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#1D3557]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#F1FAEE] mb-4 goldman-bold">
              About <span className="text-[#E63946]">Altius</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto mb-6" />
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E63946]/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-6 goldman-bold">
                Our Mission
              </h2>
              <p className="text-[#C5C6C7] text-lg leading-relaxed inter-regular mb-4">
                Altius, meaning "higher" in Latin, represents our commitment to elevating the standards of technical education 
                and innovation at Srinivas Institute of Technology. We believe in creating a platform where students from all 
                departments can showcase their talents, learn from each other, and push the boundaries of what's possible.
              </p>
              <p className="text-[#C5C6C7] text-lg leading-relaxed inter-regular">
                Our annual inter-department technical fest brings together the brightest minds from Computer Science, Electronics, 
                Mechanical, Civil, and other departments to compete, collaborate, and celebrate the spirit of innovation. 
                Through diverse events ranging from coding competitions to robotics challenges, we aim to foster a culture of 
                continuous learning and excellence.
              </p>
            </div>
          </motion.div>

          {/* Vision & Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-12 text-center goldman-bold">
              Our <span className="text-[#E63946]">Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass rounded-xl p-6 text-center hover:border-[#457B9D]/50 transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-blue-red flex items-center justify-center"
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#F1FAEE] mb-3 goldman-bold">
                      {value.title}
                    </h3>
                    <p className="text-[#C5C6C7] text-sm leading-relaxed inter-regular">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-12 text-center goldman-bold">
              Altius by the <span className="text-[#E63946]">Numbers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "5+", label: "Years Running" },
                { value: "2000+", label: "Total Participants" },
                { value: "50+", label: "Events Conducted" },
                { value: "100+", label: "Prizes Won" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-blue-red bg-clip-text text-transparent goldman-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#C5C6C7] inter-regular">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-4 text-center goldman-bold">
              Meet Our <span className="text-[#E63946]">Team</span>
            </h2>
            <p className="text-[#C5C6C7] text-center mb-12 inter-regular max-w-2xl mx-auto">
              The dedicated individuals working tirelessly to make Altius 2025 a grand success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-xl overflow-hidden group hover:border-[#457B9D]/50 transition-all"
                >
                  {/* Avatar Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#1D3557] to-[#457B9D] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/20 goldman-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#E63946]/20 to-transparent"
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#F1FAEE] mb-1 goldman-bold group-hover:text-[#457B9D] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#E63946] text-sm font-semibold mb-2 inter-regular">
                      {member.role}
                    </p>
                    <p className="text-[#C5C6C7] text-sm mb-4 inter-regular">
                      {member.department}
                    </p>

                    {/* Social Links */}
                    {member.social && (
                      <div className="flex space-x-3">
                        {Object.entries(member.social).map(([platform, url]) => {
                          const Icon = getSocialIcon(platform);
                          if (!Icon) return null;
                          return (
                            <motion.a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-8 h-8 rounded-lg bg-[#1F2833] flex items-center justify-center text-[#C5C6C7] hover:text-[#457B9D] transition-colors"
                            >
                              <Icon size={16} />
                            </motion.a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
