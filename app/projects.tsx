import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function Projects() {

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
        <AnimatedTestimonials testimonials={testimonials} />
    )
}