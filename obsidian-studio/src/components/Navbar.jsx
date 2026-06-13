import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Navbar.css'

function Navbar() {
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    gsap.set(navRef.current, { y: -80, opacity: 0 })
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    })

    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const nav = navRef.current

      if (currentScroll > 50) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(nav, { y: -100, duration: 0.4, ease: 'power3.out' })
      } else {
        gsap.to(nav, { y: 0, duration: 0.4, ease: 'power3.out' })
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      })
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [isOpen])

  return (
    <>
      <nav ref={navRef} className="nav">
        <a className="nav__logo">OBSIDIAN<span>.</span></a>

        {/* Desktop links */}
        <ul className="nav__links d-none d-lg-flex">
          <li><a href="#work" className="nav__link">Work</a></li>
          <li><a href="#about" className="nav__link">About</a></li>
          <li><a href="#services" className="nav__link">Services</a></li>
          <li><a href="#contact" className="nav__cta">Let's Talk</a></li>
        </ul>

        {/* Hamburger */}
        <button
          className="nav__hamburger d-lg-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div ref={menuRef} className="nav__mobile">
        <ul className="nav__mobile-links">
          <li><a href="#work" className="nav__mobile-link" onClick={() => setIsOpen(false)}>Work</a></li>
          <li><a href="#about" className="nav__mobile-link" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" className="nav__mobile-link" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#contact" className="nav__mobile-cta" onClick={() => setIsOpen(false)}>Let's Talk</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar