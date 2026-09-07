import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NAV, PROFILE } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Avatar } from './Avatar'

/** يتتبّع القسم الظاهر حالياً لتحريك النقطة النشطة */
function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

export function Nav() {
  const { lang, toggle } = useLanguage()
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // إغلاق القائمة عند تبديل اللغة أو الضغط على Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* الشعار = الميموجي وحده. الاسم مكتوب يبقى في اسم الرابط لقارئات الشاشة. */
  const wordmark = (
    <a
      href="#home"
      onClick={() => setOpen(false)}
      aria-label={PROFILE.name[lang]}
      className="group/logo relative flex shrink-0 items-center"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-primary/60 opacity-0 blur-xl
                   transition-opacity duration-300 group-hover/logo:opacity-100"
      />
      <Avatar
        pose="smile"
        className="h-10 w-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/logo:scale-110"
      />
    </a>
  )

  const langToggle = (
    <button
      type="button"
      onClick={toggle}
      // «ع» حرف عربي — لا يجوز عرضه بخط mono اللاتيني
      className={`tap-target inline-flex items-center justify-center rounded-full border border-line-strong
                 px-3 py-1.5 text-[0.72rem] text-text-2 transition-colors duration-200
                 hover:border-primary-300/50 hover:text-text-1
                 ${lang === 'ar' ? 'font-mono tracking-[0.08em]' : 'font-sans text-[0.85rem]'}`}
      aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      {lang === 'ar' ? 'EN' : 'ع'}
    </button>
  )

  return (
    <>
      {/* شريط عائم — يظهر فوق كل شيء عدا القائمة الكاملة */}
      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-5">
        <nav
          className="flex w-full max-w-[1200px] items-center justify-between gap-6 rounded-full border border-line
                     bg-bg/70 px-5 py-2.5 backdrop-blur-xl md:w-auto md:px-3 md:ps-6"
        >
          {wordmark}

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map(({ id, ...labels }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative block rounded-full px-4 py-2 text-[0.9rem] transition-colors duration-200
                    ${active === id ? 'text-text-1' : 'text-text-3 hover:text-text-2'}`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-fill-2"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative">{labels[lang]}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {langToggle}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="tap-target flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-text-1 md:hidden"
              aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={open}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute inset-x-0 h-px bg-current transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1.5 h-px bg-current transition-opacity duration-200 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute inset-x-0 h-px bg-current transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* القائمة الكاملة على الجوال */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-bg/95 backdrop-blur-2xl md:hidden"
          >
            {NAV.map(({ id, ...labels }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="display px-6 py-3 text-3xl text-text-1"
              >
                {labels[lang]}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
