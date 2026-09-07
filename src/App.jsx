import { useCallback, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from 'motion/react'

import { LanguageProvider } from './lib/language'
import { Preloader } from './components/Preloader'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/** تمرير ناعم — يُعطَّل تماماً عند تفضيل تقليل الحركة */
function useSmoothScroll(enabled) {
  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 })
    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // روابط التنقّل الداخلية تمرّ عبر Lenis حتى لا تتقافز
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const target = document.querySelector(link.getAttribute('href'))
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -80 })
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [enabled])
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-primary rtl:origin-right"
      aria-hidden="true"
    />
  )
}

/** شاشة البداية تُبقي الصفحة ثابتة حتى تنتهي، وتبدأ دائماً من الأعلى */
function useBootLock(booted) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (booted) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [booted])
}

export default function App() {
  const reduce = useReducedMotion()
  const [booted, setBooted] = useState(false)
  const onDone = useCallback(() => setBooted(true), [])

  useBootLock(booted)
  // Lenis يبدأ بعد رفع الستارة — لا تمرير ناعم على شيء لا يُمرَّر
  useSmoothScroll(!reduce && booted)

  return (
    <LanguageProvider>
      <AnimatePresence>{!booted && <Preloader onDone={onDone} />}</AnimatePresence>

      <div className="grain relative min-h-svh">
        <ScrollProgress />
        <Nav />

        <main>
          {/* ظهور البطل مربوطٌ بالستارة: تُرفع، فيبدأ المشهد */}
          <Hero booted={booted} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
