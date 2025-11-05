"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

export default function Toast({
  message,
  type = "info",
  isVisible,
  onClose,
  duration = 5000,
  position = "top-right",
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const styles = {
    success: "bg-green-500/10 border-green-500/30 text-green-400",
    error: "bg-[#E63946]/10 border-[#E63946]/30 text-[#E63946]",
    info: "bg-[#457B9D]/10 border-[#457B9D]/30 text-[#457B9D]",
    warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  };

  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className={`fixed ${positions[position]} z-[1070] max-w-md`}
        >
          <div
            className={`${styles[type]} backdrop-blur-sm border-2 rounded-xl p-4 shadow-2xl flex items-center gap-3`}
            role="alert"
            aria-live="assertive"
          >
            <Icon size={24} className="flex-shrink-0" />
            <p className="flex-1 text-sm md:text-base inter-regular text-[#F1FAEE]">
              {message}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="flex-shrink-0 text-[#C5C6C7] hover:text-[#F1FAEE] transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
              aria-label="Close notification"
            >
              <X size={20} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
