import Nav from './components/Nav'
import Hero from './components/Hero'
import Agitate from './components/Agitate'
import Divider from './components/Divider'
import PatternSection from './components/PatternSection'
import Method from './components/Method'
import Paths from './components/Paths'
import Shift from './components/Shift'
import Stories from './components/Stories'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <>
      <div className="mesh">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <Nav />
      <Hero />
      <Agitate />
      <Divider />
      <PatternSection />
      <Method />
      <Paths />
      <Shift />
      <Stories />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </>
  )
}
