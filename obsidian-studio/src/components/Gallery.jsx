import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projects from '../data/projects'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)


function Gallery() {
  const headingRef = useRef(null)
  const cardRefs = useRef([])
  const imgRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading animation
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        }
      })

      cardRefs.current.forEach((card, i) => {
        const img = imgRefs.current[i]

        // Card slides up and fades in on scroll
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        })

        // Parallax on image
        gsap.fromTo(img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        )
      })

    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="gallery">
      <div className="gallery__header" ref={headingRef}>
        <p className="gallery__tag">Our Work</p>
        <h2 className="gallery__heading">
          SELECTED <span>PROJECTS</span>
        </h2>
      </div>

      <div className="gallery__grid">
        {projects.map((project, i) => (
          <div
            className="gallery__card"
            key={project.id}
            ref={el => cardRefs.current[i] = el}
          >
            <div className="gallery__card-img-wrap">
              <img
                src={project.image}
                alt={project.title}
                ref={el => imgRefs.current[i] = el}
              />
            </div>
            <div className="gallery__card-info">
              <span className="gallery__card-number">{project.id}</span>
              <div>
                <p className="gallery__card-category">{project.category}</p>
                <h3 className="gallery__card-title">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery