import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Features from "./components/Features";
import Highlight from "./components/Highlight";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Features />
        <Highlight />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
