import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const formRef = useRef(null)
  const bgTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(bgTextRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      })

      tl.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from(formRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5')

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="contact">

      <p ref={bgTextRef} className="contact__bg-text">OBSIDIAN</p>

      <div className="contact__content container">
        <div className="row align-items-center g-5">

          {/* Left — Heading */}
          <div className="col-lg-5">
            <p className="contact__tag">Get In Touch</p>
            <h2 ref={headingRef} className="contact__heading">
              LET'S BUILD <br />
              SOMETHING <br />
              <span>GREAT</span>
            </h2>
            <p className="contact__sub">
              Have a project in mind? We'd love to hear about it.
              Let's create something that sets you apart.
            </p>

            <div className="contact__details">
              <p>
                <span>Email</span>
                hello@obsidianstudio.com
              </p>
              <p>
                <span>Phone</span>
                +1 (555) 000-0000
              </p>
              <p>
                <span>Location</span>
                New York, USA
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="col-lg-7">
            <form ref={formRef} className="contact__form">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="contact__field">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact__field">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="contact__field">
                    <label>Project Type</label>
                    <select>
                      <option value="">Select a service</option>
                      <option value="web">Web Design</option>
                      <option value="brand">Brand Identity</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="campaign">Digital Campaign</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="contact__field">
                    <label>Message</label>
                    <textarea rows="5" placeholder="Tell us about your project..." />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="contact__btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

      <div className="contact__footer">
        <p>© 2026 <span>Obsidian Studio</span>. All rights reserved.</p>
        <p>Crafted with precision.</p>
      </div>

    </section>
  )
}

export default Contact