"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import Link from "next/link";
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  department?: string; // optional if exists
};
export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check user credentials in "users" table
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("password", password) // plain-text check (not secure for production)
        .single<User>();

      if (error || !data) {
        alert("❌ Invalid email or password");
        return;
      }

      // Save entire user object (including role) to localStorage
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("role", data.role); // 🔹 Save role separately too (for easy access)

      alert(`Welcome, ${data.name}! Your role is ${data.role}. 👋`);

      // Redirect based on role (optional)
      if (data.role === "super_admin") {
        router.push("/super-admin");
      } else if (data.role === "department_admin") {
        router.push("/department");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      console.error(err);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm p-8 rounded-2xl border border-gray-700 shadow-[0_0_20px_rgba(230,57,70,0.15)]"
      >
        <h1 className="text-3xl goldman-bold text-center mb-6 text-[#E63946]">
          Welcome Back 👋
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-[#E63946] outline-none transition"
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="mt-2 py-3 rounded-md bg-[#E63946] hover:bg-[#E63946]/80 transition-all font-semibold"
          >
            {loading ? "Please wait..." : "Login"}
          </motion.button>
        </form>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-gray-400 text-sm hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
