import Image from "next/image";
import { Navbar } from "./navbar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import {TypingText} from "@/components/ui/typing-text"
import { SvgAvatar } from "@/components/ui/svg-avatar";

export default function Home() {
  return (
    <BackgroundPaths>
        <div className="flex flex-col-reverse md:flex-row items-center justify-start w-full my-36">
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
          <p className="text-3xl text-foreground flex items-center gap-2">
            Hello, I'm
            <span className="animate-wave origin-bottom inline-block" role="img" aria-label="waving hand">
              👋
            </span>
          </p>
          <h1 className="text-6xl text-primary ">Mohamed Bousoufi</h1>
          <TypingText 
            text={["Software", "Developer"]} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            textColor="hsl(var(--primary))"
            />
          </div>
        <SvgAvatar 
          className="inline-block align-top bg-primary rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 " 
        />
        </div>
      </BackgroundPaths>
  );
}
