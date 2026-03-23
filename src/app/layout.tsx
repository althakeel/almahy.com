import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import favicon from "./Favicon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Almahy Legal Service",
  description: "Professional accounting services",
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <a
          href="https://wa.me/97142648831"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-16 right-4 md:bottom-12 md:right-5 z-50 transition-transform hover:scale-105"
        >
          <Image
            src="/assets/whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
            className="w-12 h-12 md:w-[56px] md:h-[56px]"
            priority
          />
        </a>
      </body>
    </html>
  );
}
