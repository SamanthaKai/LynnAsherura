import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Education from './components/sections/Education.jsx'
import Coursework from './components/sections/Coursework.jsx'
import Skills from './components/sections/Skills.jsx'
import Experience from './components/sections/Experience.jsx'
import Training from './components/sections/Training.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Coursework />
        <Skills />
        <Experience />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
