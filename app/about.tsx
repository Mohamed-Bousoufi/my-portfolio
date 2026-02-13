"use client"

import ProfileCard from "@/components/ProfileCard";
import AnimatedContent from "@/components/AnimatedContent";
import ContributionGraph from '@raulcanodev/react-github-dots';
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";



export default function About() {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const { theme } = useTheme();
    useEffect(() => {
        const currentElement = elementRef.current;
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });
        if (currentElement) {
            observer.observe(currentElement);
        }
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [isVisible]);

    return (
      <div ref={elementRef}>
        {isVisible && (
          <AnimatedContent
            distance={300}
            direction="horizontal"
            reverse={false}
            duration={2.9}
            ease="power.out"
            initialOpacity={0}
            animateOpacity
            scale={0.8}
            threshold={0.1}
            delay={0.5}
          >
            <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-4 sm:gap-8 md:gap-16 scroll-y-auto md:my-5 md:mx-auto max-w-7xl px-2 sm:px-4">
              <div className="flex-1 flex items-center justify-between min-h-[25vh] sm:min-h-30 gap-6 ">
                <ProfileCard
                  avatarUrl="/avatar.png"
                  name="Mohamed Bousouf"
                  title="Software Engineer"
                  handle="javicodes"
                  status="Online"
                  contactText="Contact Me"
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  behindGlowColor="rgba(var(--primary))"
                  innerGradient="linear-gradient(145deg,var(--primary),#71C4FF44 100%)"
                />
              </div>
              <div className="flex-3 flex flex-col items-center justify-center h-fit sm:min-h-0 w-full  ">
                <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground my-2 sm:my-4 text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  LET ME INTRODUCE MYSELF
                </h1>
                <p className="text-xs sm:text-sm md:text-xl lg:text-2xl font-semibold w-full text-center ">
                  I build websites and web apps that people actually enjoy
                  using. Recently wrapped up an internship at Saint-Gobain where
                  I developed data management interfaces with React and
                  integrated complex APIs. I love working with modern tools like
                  Next.js, Django, and PostgreSQL - they let me create complete
                  solutions from frontend to backend. Whether it's smooth
                  animations, real-time features, or clean UIs, I'm all about
                  making things work well and look good.
                </p>
              </div>
            </div>
            <div className="flex flex-col border-t-2 border-secondary overflow-x-auto">
                <span className="text-sm sm:text-xl font-extrabold p-2 sm:p-4 text-primary">Github Contributions</span>
              <div className="flex flex-row items-center justify-center font-light text-[10px] sm:text-xs text-secondary gap-1 sm:gap-3 md:gap-13 min-w-0">
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
              </div>
              <ContributionGraph
                username="Mohamed-Bousoufi"
                token={process.env.NEXT_PUBLIC_GITHUB_TOKEN ?? ""}
                theme={theme === "dark" ? "dark" : "light"}
                cacheTime="8h"
                customColorScheme={
                  theme === "dark"
                    ? [
                        "#222222", // No contributions (lightest variant)
                        "#b2c6c6", // 1-3 contributions (light variant)
                        "#5f8787", // 4-6 contributions (base color)
                        "#406060", // 7-9 contributions (dark variant)
                        "#253838", // 10+ contributions (darkest variant)
                      ]
                    : [
                        "#e3ecec", // No contributions (lightest variant)
                        "#b2c6c6", // 1-3 contributions (light variant)
                        "#5f8787", // 4-6 contributions (base color)
                        "#406060", // 7-9 contributions (dark variant)
                        "#253838", // 10+ contributions (darkest variant)
                      ]
                }
              />
            </div>
          </AnimatedContent>
        )}
      </div>
    );
}