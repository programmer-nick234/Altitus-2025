"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Youtube 
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", color: "#1877F2" },
  { icon: Instagram, href: "#", color: "#E4405F" },
  { icon: Twitter, href: "#", color: "#1DA1F2" },
  { icon: Linkedin, href: "#", color: "#0A66C2" },
  { icon: Youtube, href: "#", color: "#FF0000" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Scoreboard", href: "/scoreboard" },
  { name: "Gallery", href: "/gallery" },
];

const aboutLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-[#1F2833] mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/altius-bg.png"
                  alt="Altius 2025 Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="goldman-bold text-xl font-bold text-[#F1FAEE]">
                ALTIUS <span className="text-[#E63946]">2025</span>
              </span>
            </div>
            <p className="text-[#C5C6C7] text-sm inter-regular leading-relaxed">
              Soar Beyond Limits — Join us for an extraordinary inter-department technical fest at Srinivas Institute of Technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-[#1F2833] flex items-center justify-center text-[#C5C6C7] hover:text-white transition-colors"
                    style={{ 
                      ['--hover-color' as any]: social.color 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1F2833';
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="goldman-bold text-[#F1FAEE] font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#C5C6C7] hover:text-[#457B9D] transition-colors text-sm inter-regular flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#E63946] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="goldman-bold text-[#F1FAEE] font-semibold text-lg mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#C5C6C7] hover:text-[#457B9D] transition-colors text-sm inter-regular flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#E63946] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="goldman-bold text-[#F1FAEE] font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-[#C5C6C7] text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#E63946]" />
                <span className="inter-regular">
                  Srinivas Institute of Technology,<br />
                  Mangalore, Karnataka
                </span>
              </li>
              <li className="flex items-center space-x-3 text-[#C5C6C7] text-sm">
                <Mail size={18} className="flex-shrink-0 text-[#E63946]" />
                <a 
                  href="mailto:altius2025@sit.edu" 
                  className="inter-regular hover:text-[#457B9D] transition-colors"
                >
                  altius2025@sit.edu
                </a>
              </li>
              <li className="flex items-center space-x-3 text-[#C5C6C7] text-sm">
                <Phone size={18} className="flex-shrink-0 text-[#E63946]" />
                <a 
                  href="tel:+911234567890" 
                  className="inter-regular hover:text-[#457B9D] transition-colors"
                >
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1F2833]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#C5C6C7] text-sm inter-regular text-center md:text-left">
              © 2025 Altius, Srinivas Institute of Technology. All rights reserved.
            </p>
            <p className="text-[#C5C6C7] text-sm inter-regular">
              Made with <span className="text-[#E63946]">❤</span> by Team Altius
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
