"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";
import { IoLogoDocker } from "react-icons/io5";
import { SiNginx } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { useMemo } from "react";
import { LogoLoop } from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { useTheme } from "next-themes";


export function Projects() {
  const { theme } = useTheme();

  const primaryColor = useMemo(() => {
    if (theme === "dark") {
      return "#c1c1c1";
    }
    return "#111827";
  }, [theme]);

  const techLogos = [
    { node: <SiReact size={36} color={primaryColor} />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs size={36} color={primaryColor} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={36} color={primaryColor} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={36} color={primaryColor} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaPython size={36} color={primaryColor}/>, title: "Python", href: "https://python.org" },
    { node: <SiDjango size={36} color={primaryColor}/>, title: "Django", href: "https://djangoproject.com" },
    { node: <DiPostgresql size={36} color={primaryColor}/>, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <TbBrandThreejs size={36} color={primaryColor}/>, title: "Three.js", href: "https://threejs.org" },
    { node: <IoLogoDocker size={36} color={primaryColor}/>, title: "Docker", href: "https://docker.com" },
    { node: <SiNginx size={36} color={primaryColor}/>, title: "Nginx", href: "https://nginx.com" },
    { node: <FaLinux size={36} color={primaryColor}/>, title: "Linux", href: "https://linux.org" },
    { node: <FaGitAlt size={36} color={primaryColor}/>, title: "Git", href: "https://git-scm.com" },
    { node: <SiSocketdotio size={36} color={primaryColor}/>, title: "Socket.IO", href: "https://socket.io" },
    { node: <FaJava size={36} color={primaryColor}/>, title: "Java", href: "https://java.com" },
    { node: <SiSpringboot size={36} color={primaryColor}/>, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" }
  ];

  const testimonials = [
    {
      quote:
        "Ever wondered how chat apps like Discord work under the hood? I built my own chat server in C++ that handles real-time messaging for multiple users simultaneously. It's got everything you'd expect—secure logins, private DMs, public channels—all running over TCP connections. The coolest part was optimizing it to handle hundreds of messages per second without breaking a sweat.",
      name: "IRC",
      designation: "C++ Chat Server",
      src: "/ft_irc-.png",
    },
    {
      quote:
        "I recreated the classic Pong game as a modern web app where you can play against friends online in real-time. The tech stack is pretty comprehensive: Next.js and React for a smooth UI, Django managing the backend logic, and WebSockets keeping the gameplay perfectly synced. I even threw in Three.js to add some flashy 3D effects and implemented proper security with 2FA because nobody wants their high score stolen!",
      name: "Aqua Pong",
      designation: "Web Pong Application",
      src: "/AquaPong.png",
    },
    {
      quote:
        "At Saint-Gobain, I contributed to the development of the MDM Tab, a web application used to manage master data across multiple European business units. I built scalable and reusable React.js components and integrated REST APIs to ensure reliable and efficient data flow. The solution synchronized real-time data from Vice European APIs, improving data accuracy and validation.",
      name: "MDM Tab",
      designation: "Enterprise MDM Dashboard",
      src: "/Mdm.png",
    },
    {
      quote:
        "This project was all about learning modern DevOps practices by building a production-ready containerized setup. I orchestrated Nginx, WordPress, and MariaDB in Docker containers that work together like a well-oiled machine. The best part? I automated everything with CI/CD pipelines, so deploying updates is literally just a git push away. Now I can spin up the entire infrastructure on any machine in minutes instead of hours.",
      name: "Inception",
      designation: "Containerized Infrastructure Project",
      src: "/inception-.png",
    }
  ];


    return (
      <div className="min-h-screen w-full flex items-center justify-center ">
        <div className="flex flex-col w-full items-center justify-center h-screen">
          <div className="w-full max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl m-auto ">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          <div className="w-full">
            <LogoLoop 
              logos={techLogos}
              speed={15}
              direction="right"
              logoHeight={16}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technology partners"
              className="my-4 border-t-foreground border-t-1 "
            />
          </div>
        </div>
      </div>
    );
}