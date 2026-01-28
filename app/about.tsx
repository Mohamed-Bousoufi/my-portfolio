
"use client"
import ProfileCard from "@/components/ProfileCard";
import { FocusCards } from "@/components/ui/focus-cards";



export default function About() {

    return (
        <div className="flex flex-col sm:flex-row-reverse items-center justify-around  gap-8" >
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
                showIcon={false}
                showBehindGlow={false}
                behindGlowColor="rgba(var(--primary))"
                customInnerGradient="linear-gradient(145deg,var(--primary) 0%,#71C4FF44 100%)"
            />
                    <div className="flex flex-col items-center justify-center w-[350px] h-[350px] sm:w-[500px] sm:h-[400px] md:w-[600px] md:h-[450px] lg:w-[700px] lg:h-[500px]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground my-4">LET ME INTRODUCE MYSELF</h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent w-full h-full">I build websites and web apps that people actually enjoy using. 
                                Recently wrapped up an internship at Saint-Gobain where I developed data management interfaces with React and integrated complex APIs.
                                I love working with modern tools like Next.js, Django, and PostgreSQL - they let me create complete solutions from frontend to backend. 
                                Whether it's smooth animations, real-time features, or clean UIs, I'm all about making things work well and look good.
                        </p>
                    </div>
        </div>
    );
}