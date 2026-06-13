import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Intro.css'

gsap.registerPlugin(ScrollTrigger)

function Intro() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const rightRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(lineRef.current, {
  scaleY: 0,
  transformOrigin: 'top center',
  duration: 1.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top 80%',
  }
})

gsap.from(headingRef.current, {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top 75%',
  }
})

gsap.from(textRef.current, {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 0.2,
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top 75%',
  }
})

     gsap.from(rightRef.current, {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top 70%',
  }
})

gsap.from(imageRef.current, {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top 70%',
  }
})

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="intro">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-6">
            <div className="intro__left">
              <div ref={lineRef} className="intro__line" />
              <div>
                <p className="intro__tag">Who We Are</p>
                <h2 ref={headingRef} className="intro__heading">
                  CRAFTING <br />
                  <span>DIGITAL</span> <br />
                  LEGACIES
                </h2>
                <p ref={textRef} className="intro__text">
                  Obsidian Studio is a full-service creative agency built for brands
                  that want to lead, not follow. We combine strategy, design, and
                  technology to create experiences that leave a mark.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side — Image + Stats */}
          <div className="col-lg-6" ref={rightRef}>
            <div ref={imageRef} className="intro__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Obsidian Studio workspace"
                className="intro__image"
              />
              <div className="intro__image-accent" />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Intro