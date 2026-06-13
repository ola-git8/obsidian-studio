import { useState } from 'react'
import SmoothScroll from './components/SmoothScroll'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <SmoothScroll>
      <main>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        <Navbar />
        <Hero />
        <Intro />
        <Services />
        <Gallery />
        <Contact />
      </main>
    </SmoothScroll>
  )
}

export default App