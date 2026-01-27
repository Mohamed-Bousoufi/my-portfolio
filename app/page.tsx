import Home from "./home"
import About from "./about"





export default function Page(){
  return (
  <main className="w-full  flex flex-col overflow-y-auto">
    <section id="Home" className="h-screen w-full">
      <Home />
    </section>
    <section id="About" className="h-screen w-full">
        <About/>
    </section>
  </main>)
}