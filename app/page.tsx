import Home from "./home"
import About from "./about"
import { Projects } from "./projects"





export default function Page() {
  return (
    <main
      className="h-screen w-full overflow-y-scroll bg-transparent scroll-smooth snap-y snap-mandatory"
    >
      <section
        id="Home"
        className="h-screen w-full flex items-center justify-center p-4 md:p-8 overflow-hidden snap-start"
      >
        <Home />
      </section>
      <section
        id="About"
        className="h-screen w-full flex items-center justify-center overflow-hidden snap-start"
      >
        <About />
      </section>
      <section
        id="Project"
        className="h-screen w-full flex items-center justify-center  overflow-hidden snap-start"
      >
        <Projects />
      </section>
    </main>
  );
}