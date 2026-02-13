"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu,House,FolderKanban,CircleUserRound,MessageSquareMore,Moon,Sun, DownloadIcon, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button" ;
import {Button as ToggelTheme} from  "@/components/ui/moving-border"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#Home", icon: House },
  { name: "About", href: "#About", icon: CircleUserRound },
  { name: "Projects", href: "#Project", icon: FolderKanban },
  { name: "Contact", href: "#Contact", icon: MessageSquareMore },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("#Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();


  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver((entries)=>{
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        
        }
        , { rootMargin: "-20% 0px -35% 0px" }  
      );
    sections.forEach(section => observer.observe(section));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  
  return (
    <header
      className={cn(
        "sticky flex items-start top-0 z-50 w-full transition-all duration-300 mt-4 sm:mt-8 md:mt-12 lg:mt-20 px-2 sm:px-4 ",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      
      <div className="flex items-start ">
        <Image
          src="/my_logo.png"
          alt="Logo"
          width={96}
          height={96}
          className="object-cover h-8 md:h-12 w-20 md:w-36 pt-2"
          priority
        />
      </div>
      <nav className="container max-w-[40%] sm:max-w-xl md:max-w-2xl mx-auto h-8 sm:h-10 flex items-center justify-between rounded-full border border-solid border-border bg-background/50 backdrop-blur-sm shadow-2xl pl-2 sm:pl-4">

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => {
            if (item.name === "About") {
              return (
                <button
                  key={item.href}
                  onClick={() => {
                    const el = document.getElementById("About");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn(
                    "text-xs lg:text-sm font-medium transition-colors hover:text-primary relative bg-transparent border-none outline-none cursor-pointer",
                    activeSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="inline-block h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs lg:text-sm font-medium transition-colors hover:text-primary relative",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="inline-block h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                {item.name}
                {activeSection === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
          <div className="hidden md:flex border border-solid border-border shadow-2xl rounded-full overflow-hidden">
              <ToggelTheme
                borderRadius="1.75rem"
                borderClassName="h-10 sm:h-8 bg-primary w-10"
                className="h-10 sm:h-8 w-18 bg-background border border-solid border-border shadow-2xl"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Moon className="text-muted-foreground"/> <span className="text-muted-foreground text-2xl"> | </span>
                <Sun className="text-primary"/>
              </ToggelTheme>
          </div>
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden relative ">
            <Button variant="ghost" size="icon-sm">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-75 sm:w-100">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary px-4 py-2 rounded-md",
                      activeSection === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t p-4 gap-4 flex flex-col">
                <Button 
                  onClick={() => {
                      setIsOpen(false);
                      window.open('/mohamed_bousoufi_cv.pdf', '_blank');
                    }}
                  className="relative text-sm font-medium rounded-full h-9  heartbeateffect ps-6 pe-12 group transition-all duration-500 hover:ps-14 hover:pe-2 w-38 overflow-hidden  bg-transparent border border-2 border-secondary hover:bg-transparent">
                  <span className="relative z-10 transition-all duration-500  bg-transparent font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Download cv
                    </span>
                  <div className="absolute right-0 w-9 h-9 bg-secondary text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-32px)]">
                      <DownloadIcon size={16} />
                  </div>
                </Button>
              <div className="w-19 md:flex border border-solid border-border shadow-2xl rounded-full overflow-hidden">
                <ToggelTheme
                  borderRadius="1.75rem"
                  borderClassName="h-10 sm:h-8 bg-primary w-10"
                  className="h-10 sm:h-8 w-18 bg-background border border-solid border-border shadow-2xl"
                  onClick={() =>{ 
                    setTheme(theme === "light" ? "dark" : "light")
                    setIsOpen(false);
                  }}
                >
                  <Moon className="text-muted-foreground"/> <span className="text-muted-foreground text-2xl"> | </span>
                  <Sun className="text-primary"/>
                </ToggelTheme>
              </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
      <div className="hidden md:flex justify-end mx-16">
        <Button 
          onClick={() => {
            window.open('/mohamed_bousoufi_cv.pdf', '_blank');
          }}
          className="relative text-sm font-medium rounded-full h-9  heartbeateffect ps-6 pe-12 group transition-all duration-500 hover:ps-14 hover:pe-2 w-38 overflow-hidden  bg-transparent border border-2 border-secondary hover:bg-transparent"
        >
        <span className="relative z-10 transition-all duration-500  bg-transparent font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Download cv
        </span>
          <div className="absolute right-0 w-9 h-9 bg-secondary text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-32px)]">
            <DownloadIcon size={16} />
          </div>
        </Button>
      </div>
    </header>
  );
}
