import About from "./components/About";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Works />
      <Contact />
    </div>
  );
}
