import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Units from './components/Units.jsx'
import Clube from './components/Clube.jsx'
import Noivo from './components/Noivo.jsx'
import BookCta from './components/BookCta.jsx'

import Footer from './components/Footer.jsx'
import TopButton from './components/TopButton.jsx'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroOn, setHeroOn] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [showTop, setShowTop] = useState(false)

  const navRef = useRef(null)
  const heroRef = useRef(null)
  const phRef = useRef(null)
  const clubeWordRef = useRef(null)
  const progRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // hero entrance
  useEffect(() => {
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => setHeroOn(true))
      return () => cancelAnimationFrame(id2)
    })
    return () => cancelAnimationFrame(id1)
  }, [])

  // scrollspy
  useEffect(() => {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveId(e.target.id)
      })
    }, { rootMargin: '-35% 0px -55% 0px' })
    document.querySelectorAll('main section[id]').forEach((sec) => spy.observe(sec))
    return () => spy.disconnect()
  }, [])

  // reveal-on-scroll
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.add('in')
        io.unobserve(e.target)
      })
    }, { threshold: .16, rootMargin: '0px 0px -7% 0px' })
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // scroll: progress bar, nav bg, parallax
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = scrollY, h = document.documentElement.scrollHeight - innerHeight
        if (progRef.current) progRef.current.style.transform = `scaleX(${h ? y / h : 0})`
        if (navRef.current) {
          navRef.current.classList.toggle('scrolled', y > 40)
          navRef.current.classList.toggle('ctaon', y > innerHeight * .55)
        }
        setShowTop(y > 600)
        if (!reduced) {
          if (phRef.current && y < innerHeight) {
            phRef.current.style.transform = `scale(1.06) translateY(${y * .16}px)`
          }
          const clube = document.getElementById('clube')
          if (clube && clubeWordRef.current) {
            const r = clube.getBoundingClientRect()
            if (r.top < innerHeight && r.bottom > 0) {
              clubeWordRef.current.style.transform =
                `translate(-50%,-50%) translateY(${(r.top - innerHeight / 2) * -.08}px)`
            }
          }
        }
        ticking = false
      })
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on outside click / Escape
  useEffect(() => {
    function onClick(e) {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    function onKey(e) { if (e.key === 'Escape') setMenuOpen(false) }
    addEventListener('click', onClick)
    addEventListener('keydown', onKey)
    return () => { removeEventListener('click', onClick); removeEventListener('keydown', onKey) }
  }, [menuOpen])

  return (
    <>
      {/* filtro de refração do liquid glass (feDisplacementMap) */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="torres-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.012" numOctaves="2" seed="7" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="34" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div id="prog" aria-hidden="true"><i ref={progRef}></i></div>
      <Nav
        navRef={navRef}
        activeId={activeId}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((o) => !o)}
      />
      <main id="top">
        <Hero heroRef={heroRef} phRef={phRef} on={heroOn} />
        <Marquee />
        <Units />
        <Clube wordRef={clubeWordRef} />
        <Noivo />
        <BookCta />
      </main>
      <Footer />
      <TopButton visible={showTop} />
    </>
  )
}
