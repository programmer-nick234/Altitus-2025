"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input, TextArea, Button, Card, Toast } from "@/components/ui";
import toast, { Toaster } from "react-hot-toast";

// Scroll to top on page load
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  useScrollToTop();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form data:", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "#1877F2", label: "Facebook" },
    { icon: Instagram, href: "#", color: "#E4405F", label: "Instagram" },
    { icon: Twitter, href: "#", color: "#1DA1F2", label: "Twitter" },
    { icon: Linkedin, href: "#", color: "#0A66C2", label: "LinkedIn" },
    { icon: Youtube, href: "#", color: "#FF0000", label: "YouTube" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Srinivas Institute of Technology, Valachil, Mangalore, Karnataka 574143"
    },
    {
      icon: Mail,
      title: "Email",
      content: "altius2025@sit.edu",
      link: "mailto:altius2025@sit.edu"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 12345 67890",
      link: "tel:+911234567890"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Toaster position="top-right" />
      <Navbar />

      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 min-h-[50vh] flex items-center">
        <div className="content-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F1FAEE] goldman-bold drop-shadow-[0_0_30px_rgba(230,57,70,0.3)]">
              Contact <span className="text-[#E63946]">Us</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto rounded-full" />
            <p className="text-[#C5C6C7] text-xl md:text-2xl max-w-3xl mx-auto inter-regular leading-relaxed px-4">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="info-card glass rounded-xl hover:border-[#457B9D]/50 transition-all"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg gradient-blue-red flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[#F1FAEE] mb-3 goldman-bold">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#C5C6C7] hover:text-[#457B9D] transition-colors inter-regular text-base md:text-lg"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-[#C5C6C7] inter-regular text-base md:text-lg">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-[#F1FAEE] mb-4 goldman-bold">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-lg bg-[#1F2833] flex items-center justify-center text-[#C5C6C7] hover:text-white transition-colors"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = social.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#1F2833';
                        }}
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#F1FAEE] mb-6 goldman-bold">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[#C5C6C7] inter-regular mb-2">
                      Your Name <span className="text-[#E63946]">*</span>
                    </label>
                    <Input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="John Doe"
                      error={errors.name?.message}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-[#C5C6C7] inter-regular mb-2">
                      Your Email <span className="text-[#E63946]">*</span>
                    </label>
                    <Input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      type="email"
                      placeholder="john@example.com"
                      error={errors.email?.message}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-[#C5C6C7] inter-regular mb-2">
                      Phone Number <span className="text-[#E63946]">*</span>
                    </label>
                    <Input
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit phone number"
                        }
                      })}
                      type="tel"
                      placeholder="1234567890"
                      error={errors.phone?.message}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[#C5C6C7] inter-regular mb-2">
                      Your Message <span className="text-[#E63946]">*</span>
                    </label>
                    <TextArea
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters"
                        }
                      })}
                      rows={5}
                      placeholder="Tell us more about your query..."
                      error={errors.message?.message}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send size={20} />}
                    loading={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-[#1D3557] to-[#457B9D] relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-white/30 mx-auto mb-4" size={48} />
                  <p className="text-white/50 inter-regular">
                    Google Maps Embed
                  </p>
                  <p className="text-white/30 text-sm inter-regular mt-2">
                    Srinivas Institute of Technology, Mangalore
                  </p>
                </div>
              </div>
              {/* You can replace this with actual Google Maps iframe */}
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=..."
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
