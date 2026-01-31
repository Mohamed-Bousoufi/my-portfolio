
"use client"

import ProfileCard from "@/components/ProfileCard";
import AnimatedContent from "@/components/AnimatedContent";
import { useEffect, useRef, useState } from "react";



export default function About() {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

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
                    <div className="flex flex-col sm:flex-row-reverse items-stretch justify-around gap-8 min-h-[100svh]">
                        <div className="flex-1 flex items-center justify-center min-h-[40vh] sm:min-h-0">
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
                                showBehindGlow={true}
                                behindGlowColor="rgba(var(--primary))"
                                customInnerGradient="linear-gradient(145deg,var(--primary),#71C4FF44 100%)"
                            />
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[40vh] sm:min-h-0 w-full">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground my-4 text-center">LET ME INTRODUCE MYSELF</h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent w-full text-center">
                                I build websites and web apps that people actually enjoy using. 
                                Recently wrapped up an internship at Saint-Gobain where I developed data management interfaces with React and integrated complex APIs.
                                I love working with modern tools like Next.js, Django, and PostgreSQL - they let me create complete solutions from frontend to backend. 
                                Whether it's smooth animations, real-time features, or clean UIs, I'm all about making things work well and look good.
                            </p>
                        </div>
                    </div>
                </AnimatedContent>
            )}
        </div>
    );
}