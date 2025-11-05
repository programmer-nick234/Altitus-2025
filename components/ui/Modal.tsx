"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  centered = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
}: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-[95vw]",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlayClick ? onClose : undefined}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1040]"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            className={`fixed inset-0 z-[1050] overflow-y-auto ${
              centered ? "flex items-center justify-center" : ""
            } p-4`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`${sizes[size]} w-full mx-auto`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? "modal-title" : undefined}
            >
              {/* Modal Content */}
              <div className="glass rounded-2xl shadow-2xl relative">
                {/* Header */}
                {(title || showCloseButton) && (
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    {title && (
                      <h2
                        id="modal-title"
                        className="text-2xl md:text-3xl font-bold text-[#F1FAEE] goldman-bold text-center flex-1"
                      >
                        {title}
                      </h2>
                    )}
                    {showCloseButton && (
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="text-[#C5C6C7] hover:text-[#E63946] transition-colors p-2 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                        aria-label="Close modal"
                      >
                        <X size={24} />
                      </motion.button>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className="p-6 md:p-8">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
