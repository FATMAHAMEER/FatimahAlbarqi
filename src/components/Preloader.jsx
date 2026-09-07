import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { PROFILE } from '../content'
import { useLanguage } from '../lib/useLanguage'

const EASE = [0.16, 1, 0.3, 1]

/** إيقاع الكتابة: حرفٌ كل 62ms — أبطأ من الآلة، أسرع من الانتظار */
const CHAR_MS = 62
const HOLD_MS = 420

/* الاسم داخل وسم JSX — التوقيع نفسه يقول «أكتب واجهات».
   الاسم اللاتيني دائماً، بأي لغة كانت الصفحة: هذا شعار مكتوب، لا نصّ واجهة. */
const NAME = `<${PROFILE.name.en}/>`
const SYNTAX = new Set(['<', '/', '>'])

export function Preloader({ onDone }) {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const [typed, setTyped] = useState(0)
  const done = typed >= NAME.length

  // حرفٌ بعد حرف — أما مع تقليل الحركة فيظهر الاسم كاملاً بلا كتابة
  useEffect(() => {
    if (reduce) {
      setTyped(NAME.length)
      return
    }
    if (typed >= NAME.length) return

    const id = setTimeout(() => setTyped((n) => n + 1), CHAR_MS)
    return () => clearTimeout(id)
  }, [typed, reduce])

  // وقفة قصيرة بعد آخر حرف، ثم تُرفع الستارة
  useEffect(() => {
    if (!done) return
    const id = setTimeout(onDone, reduce ? 260 : HOLD_MS)
    return () => clearTimeout(id)
  }, [done, reduce, onDone])

  return (
    <motion.div
      role="status"
      aria-label={t.loading}
      exit={reduce ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: reduce ? 0.25 : 0.9, ease: EASE }}
      className="grain fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-bg px-6"
    >
      <div className="aurora" aria-hidden="true" />

      <motion.div
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative z-10"
      >
        <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center rounded-full border-[7px] border-[#f5efe9]/90 bg-[#1a1a1a] shadow-[0_0_30px_rgba(245,239,233,0.08)]">
          <img
            src="/avatar/smile.svg"
            alt="Fatimah Albarqi logo"
            className="h-[200px] w-[200px] object-contain"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="h-2.5 w-2.5 rounded-full bg-[#f5efe9] opacity-80"
                style={{ animationDelay: `${dot * 160}ms` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
