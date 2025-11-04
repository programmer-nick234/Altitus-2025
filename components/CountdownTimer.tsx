"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 max-w-3xl mx-auto">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative flex-1 min-w-[75px] sm:min-w-[90px] md:min-w-[110px] max-w-[110px] md:max-w-[140px]"
        >
          <div className="glass rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-8 text-center group hover:border-[#E63946]/60 hover:shadow-lg hover:shadow-[#E63946]/20 transition-all">
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at center, rgba(230, 57, 70, 0.15) 0%, transparent 70%)',
              }}
            />
            
            {/* Number */}
            <motion.div
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold goldman-bold text-[#F1FAEE] leading-none drop-shadow-[0_0_20px_rgba(230,57,70,0.5)]">
                {String(unit.value).padStart(2, "0")}
              </div>
            </motion.div>

            {/* Label */}
            <div className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base font-semibold text-[#E63946] uppercase tracking-widest inter-semibold relative z-10">
              {unit.label}
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-7 h-7 md:w-10 md:h-10 border-t-2 border-r-2 border-[#E63946] rounded-tr-xl md:rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-7 h-7 md:w-10 md:h-10 border-b-2 border-l-2 border-[#1D3557] rounded-bl-xl md:rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Separator Colon (except for last item) */}
          {index < timeUnits.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-[#E63946] goldman-bold"
            >
              :
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
