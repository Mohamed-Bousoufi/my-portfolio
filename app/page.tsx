import Image from "next/image";
import { Navbar } from "./navbar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import {TypingText} from "@/components/ui/typing-text"

export default function Home() {
  return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <BackgroundPaths>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Hello, I'm</h1>
            <TypingText 
              text={["Developer", "Designer"]} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              textColor="hsl(var(--primary))"
            />
          </div>
        </BackgroundPaths>
      </div>
  );
}
