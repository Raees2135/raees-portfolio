import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Statement } from "./components/sections/Statement";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <div
        className="bg-noise pointer-events-none fixed inset-0 z-20 opacity-[0.025]"
        aria-hidden
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Statement />
        <Contact />
      </main>
      <Footer />
      </div>
  );
}

export default App;
