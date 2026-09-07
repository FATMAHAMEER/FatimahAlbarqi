import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../lib/useLanguage'
import { PROFILE } from '../content'
import { Button, Container } from './ui'
import { ArrowForward } from './Icons'
import { HeroBackground } from './HeroBackground'
import { Avatar } from './Avatar'

const EASE = [0.16, 1, 0.3, 1]

/** الوقت المحلي في مدينتك — تفصيلة صغيرة تجعل الصفحة تبدو حيّة.
    المنطقة الزمنية تأتي من `PROFILE.timeZone` في src/content.js */
function useLocalTime(lang) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: PROFILE.timeZone,
        }).format(new Date()),
      )
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [lang])

  return time
}

/** سطر يُكشف من خلف قناع */
function MaskedLine({ children, delay = 0, show = true }) {
  const reduce = useReducedMotion()
  if (reduce) return <span className="block">{children}</span>

  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: show ? '0%' : '110%' }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero({ booted = true }) {
  const { t, lang } = useLanguage()
  const time = useLocalTime(lang)
  const { hero } = t

  return (
    /* الحشوة تنكمش على الشاشات القصيرة (الجوال بالعرض): بـ pt-28/pb-20 كان
       المحتوى المتوسّط رأسياً يصطدم بالشريط السفلي المطلق عند ارتفاع 390px. */
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20
                 [@media(max-height:560px)]:pt-20 [@media(max-height:560px)]:pb-10"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="max-w-4xl text-start">
          <h1 className="display text-display text-text-1">
            <MaskedLine delay={0.25} show={booted}>
              {hero.titleBefore}
            </MaskedLine>
            <MaskedLine delay={0.35} show={booted}>
              <span className="accent">{hero.titleAccent}</span>
              {hero.titleAfter}
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="mt-8 max-w-[58ch] text-body-lg text-text-2"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.68, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" variant="primary">
              {hero.ctaPrimary}
              <ArrowForward className="h-4 w-4 transition-transform duration-200 ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </Button>
            <Button href="#contact" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* الصورة الشخصية — تطفو بهدوء إلى ما لا نهاية، على الشاشات الكبيرة فقط */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={booted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          className="pointer-events-none absolute end-4 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <Avatar
            pose="point"
            glow
            className="h-56 w-56 animate-float xl:h-72 xl:w-72"
          />
        </motion.div>
      </Container>

      {/* الشريط السفلي */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        /* يختفي على الشاشات القصيرة: شريطٌ يعلن «مرّر للأسفل» في واجهةٍ لا
           تملأ الشاشة أصلاً لا معنى له، وهو أول ما يزاحم المحتوى على المساحة. */
        className="absolute inset-x-0 bottom-6 z-10 [@media(max-height:560px)]:hidden"
      >
        <Container>
          <div className="label flex items-center justify-between gap-4 border-t border-line pt-5">
            <span>{PROFILE.location[lang]}</span>
            <span dir="ltr" className="font-mono tabular-nums">
              {time}
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              {hero.scroll}
              <span className="inline-block h-4 w-px animate-pulse bg-line-strong" />
            </span>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
