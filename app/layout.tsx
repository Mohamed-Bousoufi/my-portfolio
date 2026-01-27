import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/app/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import LiquidEther from "@/components/ui/eitherbackground"
import { BackgroundPaths } from "@/components/ui/background-paths";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
      
        <div className="fixed inset-0 -z-10 w-screen h-screen pointer-events-none">

                 <LiquidEther
                  colors={[ 'var(--primary)', 'var(--secondary)', 'var(--tertiary)' ]}
                  mouseForce={20}
                  cursorSize={100}
                  isViscous
                  viscous={30}
                  iterationsViscous={32}
                  iterationsPoisson={32}
                  resolution={0.5}
                  isBounce={false}
                  autoDemo
                  autoSpeed={0.5}
                  autoIntensity={2.2}
                  takeoverDuration={0.25}
                  autoResumeDelay={3000}
                  autoRampDuration={0.6}
                />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <Navbar />
          <BackgroundPaths>
          {children}
          </BackgroundPaths>
        </ThemeProvider>
      </body>
    </html>
  );
}
