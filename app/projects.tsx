"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";
import { IoLogoDocker } from "react-icons/io5";
import { SiNginx } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { IconCloud } from "@/components/ui/icon-cloud";
import { cssColorToHex } from "./utils/ColorConverter";
import { useEffect, useState } from "react";


export function Projects() {
  const [primaryColor, setPrimaryColor] = useState("#d87943");

  useEffect(() => {
    const Labcolor = getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim();
    const color = cssColorToHex(Labcolor);
    if (color)  (() => setPrimaryColor(color))();
  }, []);

  const IconClouds = [
    <RiNextjsFill key="nextjs" size={96} color={primaryColor} />, 
    <FaPython key="python" size={96} color={primaryColor}/>, 
    <SiDjango key="django" size={96} color={primaryColor}/>,
    <RiTailwindCssFill key="tailwind" size={96} color={primaryColor}/>,
    <DiPostgresql key="postgresql" size={96} color={primaryColor}/>,
    <TbBrandThreejs key="threejs" size={96} color={primaryColor}/>,
    <IoLogoDocker key="docker" size={96} color={primaryColor}/>,
    <SiNginx key="nginx" size={96} color={primaryColor}/>,
    <FaLinux key="linux" size={96} color={primaryColor}/>,
    <FaReact key="react" size={96} color={primaryColor}/>,
    <FaGitAlt key="git" size={96} color={primaryColor}/>,
    <SiSocketdotio key="socketio" size={96} color={primaryColor}/>,
    <FaJava key="java" size={96} color={primaryColor}/>,
    <SiSpringboot key="springboot" size={96} color={primaryColor}/>
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
      <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center ">
        <div className="min-w-screen h-[98dvh] min-h-[98dvh] flex justify-center items-center overflow-y-auto md:h-full md:min-h-0">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-none flex flex-col items-center justify-center h-full p-16">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          <div className=" hidden sm:block">
              <IconCloud icons={IconClouds} />
            </div>
        </div>
      </div>
    );
}