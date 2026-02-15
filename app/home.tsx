"use client"
import { TypingText } from "@/components/ui/typing-text";
import Lottie from "lottie-react";
import animationData from "../public/space boy developer.json";
import AnimatedContent from "@/components/AnimatedContent";
import { changeLottieColors } from "@/app/utils/animationChange";
import { useMemo } from "react";
import { cssColorToHex, getCssVar } from "./utils/ColorConverter";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";




export default function Home() {
  const colorMap = useMemo(() => ({
    "#639c639": cssColorToHex(getCssVar("--primary", "#313e38")),
    "#17273a": cssColorToHex(getCssVar("--primary", "#00b262")),
    "#639c639c": cssColorToHex(getCssVar("--background", "#f0fffa")),
    "#e8ebed": cssColorToHex(getCssVar("--secondary", "#fcfcfc")),
    "#371a45": cssColorToHex(getCssVar("--background", "#282d3e")),
    "#afb3b7": cssColorToHex(getCssVar("--primary", "#c3d0da")),
    "#20272c": cssColorToHex(getCssVar("--muted", "#282d3e")),
    "#000000": cssColorToHex(getCssVar("--primary", "#080b14")),
    "#ffffff": cssColorToHex(getCssVar("--primary", "#f0fffa")),
    "#d9e0e6": cssColorToHex(getCssVar("--secondary", "#d2e0ea")),
    "#35ca35": cssColorToHex(getCssVar("--primary", "#00b262")),
  }), []);
  console.log("DEBUG ENV:", process.env.NEXT_PUBLIC_GA_ID);
  console.log("DEBUG ENV GITHUB:", process.env.NEXT_PUBLIC_GiTHUB_USERNAME,process.env.NEXT_PUBLIC_GITHUB_TOKEN);
  const coloredAnimation = useMemo(() => {
    return changeLottieColors(animationData, colorMap);
  }, [colorMap]);
  
  return (
    // <BackgroundPaths>
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        duration={3}
        ease="power1.out"
        initialOpacity={0}
        animateOpacity
        scale={0.5}
        threshold={0.2}
        delay={0.5}
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-start w-full my-12 sm:my-20 md:my-36">
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 flex-1">
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground flex items-center gap-2">
              Hello, I&apos;m
              <span
                className="animate-wave origin-bottom inline-block"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-medium text-center">Mohamed Bousoufi</h1>
            <TypingText
              text={["Software Engineer", "Web Developer", "Tech Enthusiast"]}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold my-4 sm:my-8"
              textColor="var(--primary)"
            />
            <div className="flex flex-row gap-2 sm:gap-4">
              <Button
                onClick={()=> window.open('https://www.linkedin.com/in/bousoufi-mohamed-ab3aa8252/', '_blank')}
                size={"lg"} className="self-center flex flex-row items-center justify-center heartbeateffect bg-transparent text-foreground border border-2 border-secondary font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent px-2 sm:px-4 text-xs sm:text-sm">
                Linkedin <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" /></Button>
              <Button
                onClick={()=>window.open('https://github.com/Mohamed-Bousoufi','_blank')}
                size={"lg"} className="self-center flex flex-row items-center justify-center heartbeateffect bg-transparent text-foreground border border-2 border-secondary font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent px-2 sm:px-4 text-xs sm:text-sm">
                Github <Github className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" /></Button>
            </div>
          </div>
          <Lottie animationData={coloredAnimation} loop={true} className="inline-block align-top rounded-full w-32 h-32 sm:w-96 sm:h-96 md:w-128 md:h-128 lg:w-128 lg:h-128 shrink-0 " />
        </div>
      </AnimatedContent>
  );
}
