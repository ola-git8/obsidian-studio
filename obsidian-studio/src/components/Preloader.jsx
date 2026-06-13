import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Preloader.css'

function Preloader({ onComplete }) {
  const preloaderRef = useRef(null)
  const panelRef = useRef(null)
  const barRef = useRef(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const counter = { val: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide preloader content out, then panel
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        })

        gsap.to(panelRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          delay: 0.3,
          onComplete: () => {
            onComplete()
          }
        })
      }
    })

    tl.to(counter, {
      val: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        setPercent(Math.round(counter.val))
      }
    })

    tl.to(barRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut',
    }, 0)

    return () => tl.kill()
  }, [onComplete])

  return (
    <>
      <div ref={preloaderRef} className="preloader">
        <div className="preloader__logo">
          OBSIDIAN<span>.</span>
        </div>
        <div className="preloader__bar-wrap">
          <div ref={barRef} className="preloader__bar" />
        </div>
        <p className="preloader__percent">{percent}%</p>
      </div>
      <div ref={panelRef} className="preloader__panel" />
    </>
  )
}

export default Preloader