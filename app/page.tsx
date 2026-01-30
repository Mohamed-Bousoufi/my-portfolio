import Home from "./home"
import About from "./about"





export default function Page(){
  return (
  <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    <section id="Home" className="h-screen w-full snap-start snap-always flex items-center justify-center">
      <Home />
    </section>
    <section id="About" className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <About/>
    </section>
  </main>)
}