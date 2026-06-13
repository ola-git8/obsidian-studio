import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.set(headingRef.current, { opacity: 0, y: 100 })
    gsap.set(subRef.current, { opacity: 0, y: 40 })
    gsap.set(btnRef.current, { opacity: 0, y: 30 })

    const tl = gsap.timeline({ delay: 0.3 })

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out',
    })
    .to(subRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.7')
    .to(btnRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')

  }, heroRef)

  return () => ctx.revert()
}, [])

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">

        <h1 ref={headingRef} className="hero__heading">
          WE BUILD WHAT <br />
          <span>OTHERS</span> ONLY <br />
          IMAGINE
        </h1>

        <p ref={subRef} className="hero__sub">
          Obsidian Studio crafts premium digital experiences for brands that refuse to blend in.
        </p>

        <button ref={btnRef} className="hero__btn">
          See Our Work
        </button>
      </div>
    </section>
  )
}

export default Hero