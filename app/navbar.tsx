"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu,House,FolderKanban,CircleUserRound,MessageSquareMore,Moon,Sun } from "lucide-react";
import { Button } from "@/components/ui/button" ;
import {Button as ToggelTheme} from  "@/components/ui/moving-border"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "/", icon: House },
  { name: "About", href: "/about", icon: CircleUserRound },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Contact", href: "/contact", icon: MessageSquareMore },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 mt-4 sm:mt-8 md:mt-12 lg:mt-20 px-2 sm:px-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container max-w-[50%] sm:max-w-xl md:max-w-2xl mx-auto h-12 sm:h-10 flex items-center justify-between rounded-full border border-solid border-border bg-background/50 backdrop-blur-sm shadow-2xl pl-2 sm:pl-4">

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs lg:text-sm font-medium transition-colors hover:text-primary relative",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {
                <item.icon className="inline-block h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              }
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>
          <div className="hidden md:flex border border-solid border-border shadow-2xl rounded-full">
              <ToggelTheme
                borderRadius="1.75rem"
                borderClassName="h-12 sm:h-10 text-primary bg-background"
                className="h-12 sm:h-10 bg-background border border-solid border-border shadow-2xl"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Moon className="text-foreground"/>
                <Sun className="text-foreground"/>
              </ToggelTheme>
          </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary px-4 py-2 rounded-md",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}