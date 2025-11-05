"use client";

import { motion } from "framer-motion";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  name?: string;
  id?: string;
}

export default function Checkbox({
  label,
  checked: controlledChecked,
  onChange,
  disabled = false,
  error,
  className = "",
  name,
  id,
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const checkboxId = id || name || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3">
        {/* Hidden Native Checkbox */}
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={controlledChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${checkboxId}-error` : undefined}
        />

        {/* Custom Checkbox */}
        <label
          htmlFor={checkboxId}
          className={`relative flex items-center justify-center w-6 h-6 rounded-md border-2 transition-all cursor-pointer ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-[#E63946]"
          } ${
            controlledChecked
              ? "bg-[#E63946] border-[#E63946]"
              : "bg-[#1F2833] border-[#457B9D]"
          }`}
        >
          {/* Checkmark */}
          {controlledChecked && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          )}
        </label>

        {/* Label */}
        <span className="text-sm md:text-base text-[#F1FAEE] inter-regular select-none">
          {label}
        </span>
      </div>

      {/* Error Message */}
      {error && (
        <motion.p
          id={`${checkboxId}-error`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-[#E63946] inter-regular text-center"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
