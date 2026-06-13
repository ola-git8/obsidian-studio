import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import services from '../data/services'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

function Services() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

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

      itemRefs.current.forEach((item) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          }
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="services" id="services">

      <div className="services__header" ref={headingRef}>
        <p className="services__tag">What We Do</p>
        <h2 className="services__heading">
          OUR <span>SERVICES</span>
        </h2>
      </div>

      <div className="services__list">
        {services.map((service, i) => (
          <div
            className="services__item"
            key={service.number}
            ref={el => itemRefs.current[i] = el}
          >
            <div className="services__item-left">
              <span className="services__item-number">{service.number}</span>
              <h3 className="services__item-title">{service.title}</h3>
            </div>

            <div className="services__item-image">
              <img src={service.image} alt={service.title} />
            </div>

            <p className="services__item-desc">{service.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services