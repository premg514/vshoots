import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Vshoots - Premium iPhone Reels & Content Creation in Vijayawada",
  description: "Shoot • Edit • Instant Delivery. Professional cinematic reel production, product showcases, and branding content for businesses. Get high-quality 4K reels delivered faster than anyone else.",
  keywords: ["Vshoots", "Reel Production Vijayawada", "iPhone Photography", "Content Creation", "Social Media Marketing", "Video Editing", "Cinematic Reels"],
  authors: [{ name: "Digital Arc Technologies" }],
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/deeejohfw/image/upload/v1774190718/IMG_3745_dacau7.png", type: "image/png" },
    ],
    apple: "https://res.cloudinary.com/deeejohfw/image/upload/v1774190718/IMG_3745_dacau7.png",
  },
  openGraph: {
    title: "Vshoots - Premium Content Creation",
    description: "Shoot • Edit • Instant Delivery. Premium iPhone reels for brands.",
    url: "https://vshoots.in",
    siteName: "Vshoots",
    images: [
      {
        url: "https://res.cloudinary.com/deeejohfw/image/upload/v1774190718/IMG_3745_dacau7.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vshoots - Premium Content Creation",
    description: "High-end iPhone reels delivered instantly.",
    images: ["https://res.cloudinary.com/deeejohfw/image/upload/v1774190718/IMG_3745_dacau7.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col scroll-smooth">
        {children}
      </body>
    </html>
  );
}
