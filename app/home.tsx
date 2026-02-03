"use client"
import { TypingText } from "@/components/ui/typing-text";
import Lottie from "lottie-react";
import animationData from "../public/space boy developer.json";
import AnimatedContent from "@/components/AnimatedContent";
import { changeLottieColors } from "@/app/utils/animationChange";
import { useMemo } from "react";
import { cssColorToHex, getCssVar } from "./utils/ColorConverter";
import { Button } from "@/components/ui/button";
import "@/components/shadcn-space/button/button-04.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";




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
        <div className="flex flex-col-reverse md:flex-row items-center justify-start w-full my-36">
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <p className="text-3xl text-foreground flex items-center gap-2">
              Hello, I&apos;m
              <span
                className="animate-wave origin-bottom inline-block"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>
            </p>
            <h1 className="text-6xl text-foreground font-medium ">Mohamed Bousoufi</h1>
            <TypingText
              text={["Software", "Developer"]}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-8"
              textColor="var(--primary)"
            />
            <div className="flex flex-row gap-4">
              <Button size={"lg"} className="self-center flex flex-row items-center justify-center heartbeateffect bg-transparent text-foreground border border-2 border-secondary font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent px-4">
                Linkedin <SlSocialLinkedin className="w-18 h-18 text-secondary" /></Button>
              <Button size={"lg"} className="self-center flex flex-row items-center justify-center heartbeateffect bg-transparent text-foreground border border-2 border-secondary font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent px-4">
                Github <FiGithub className="w-18 h-18 text-secondary" /></Button>
            </div>
          </div>
          <Lottie animationData={coloredAnimation} loop={true} className="inline-block align-top rounded-full w-40 h-40 sm:w-96 sm:h-96 md:w-128 md:h-128 lg:w-128 lg:h-128 shrink-0 " />
        </div>
      </AnimatedContent>
  //  </BackgroundPaths>
  );
}
