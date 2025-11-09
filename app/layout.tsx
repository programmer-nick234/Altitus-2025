import type { Metadata } from "next";
import { Goldman, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ALTIUS 25 | Inter-Department Technical Fest",
  description: "Soar Beyond Limits — Altius 2025 at Srinivas Institute of Technology. Join us for an exciting inter-department technical fest featuring competitions, live updates, and more!",
  keywords: ["Altius 25", "ALTIUS 25", "Altius 2025", "Technical Fest", "Srinivas Institute", "College Fest", "Tech Event"],
  authors: [{ name: "Srinivas Institute of Technology" }],
  openGraph: {
    title: "ALTIUS 25 | Inter-Department Technical Fest",
    description: "Soar Beyond Limits — Join Altius 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${goldman.variable} ${inter.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
