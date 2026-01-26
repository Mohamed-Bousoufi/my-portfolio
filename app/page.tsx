
"use client"
import Image from "next/image";
import { Navbar } from "./navbar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { TypingText } from "@/components/ui/typing-text";
import Lottie from "lottie-react";
import animationData from "../public/space boy developer.json";
import AnimatedContent from "@/components/AnimatedContent";
import {changeLottieColors, extractLottieColors} from "@/app/utils/animationChange"
import { useEffect, useMemo, useState } from "react";
import { cssColorToHex,getCssVar } from "./utils/ColorConverter";






export default function Home() {

  const [colorMap, setColorMap] = useState<Record<string, string> | null>(null);

  useEffect(() => {


    setColorMap({
      "#639c639": cssColorToHex(getCssVar("--primary", "#313e38")),
      "#17273a": cssColorToHex(getCssVar("--primary", "#00b262")),
      "#639c639c": cssColorToHex(getCssVar("--background", "#f0fffa")),
      "#e8ebed": cssColorToHex(getCssVar("--background", "#fcfcfc")),
      "#371a45": cssColorToHex(getCssVar("--background", "#282d3e")),
      "#afb3b7": cssColorToHex(getCssVar("--input", "#c3d0da")),
      "#20272c": cssColorToHex(getCssVar("--muted", "#282d3e")),
      "#000000": cssColorToHex(getCssVar("--muted", "#080b14")),
      "#ffffff": cssColorToHex(getCssVar("--primary", "#f0fffa")),
      "#d9e0e6": cssColorToHex(getCssVar("--secondary", "#d2e0ea")),
      "#35ca35": cssColorToHex(getCssVar("--primary", "#00b262")),
    });
  }, []);

  const coloredAnimation = colorMap ? changeLottieColors(animationData, colorMap) : animationData;
  
  return (
    <BackgroundPaths>
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
              Hello, I'm
              <span
                className="animate-wave origin-bottom inline-block"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>
            </p>
            <h1 className="text-6xl text-primary ">Mohamed Bousoufi</h1>
            <TypingText
              text={["Software", "Developer"]}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              textColor="hsl(var(--primar))"
            />
          </div>

          <Lottie animationData={coloredAnimation} loop={true} className="inline-block align-top  rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-128 md:h-128 lg:w-128 lg:h-128 flex-shrink-0 " />
        </div>
      </AnimatedContent>
   </BackgroundPaths>
  );
}
