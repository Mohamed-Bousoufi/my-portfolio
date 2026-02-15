import Home from "./home"
import About from "./about"
import { Projects } from "./projects"
import  Contact  from "./contact";





export default function Page() {
  console.log("DEBUG ENV:", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  console.log("DEBUG ENV GITHUB:", process.env.NEXT_PUBLIC_GiTHUB_USERNAME,process.env.NEXT_PUBLIC_GITHUB_TOKEN);
  return (
    <main
      className="h-screen w-full overflow-y-scroll bg-transparent scroll-smooth snap-y snap-mandatory"
    >
      <section
        id="Home"
        className="h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden snap-start"
      >
        <Home />
      </section>
      <section
        id="About"
        className="h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden snap-start"
      >
        <About />
      </section>
      <section
        id="Project"
        className="h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden snap-start"
      >
        <Projects />
      </section>
      <section
        id="Contact"
        className="h-screen w-full flex items-center justify-center overflow-hidden snap-start"
      >
        <Contact />
      </section>
    </main>
  );
}