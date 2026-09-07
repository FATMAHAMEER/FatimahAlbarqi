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
      /* ستارة تُرفع للأعلى فيظهر الموقع من تحتها */
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
        {/* dir=ltr: اسمٌ لاتيني داخل صفحة عربية — يُعزل حتى لا تقلبه المحارف */}
        <p dir="ltr" className="font-mono text-[clamp(1.3rem,5.5vw,3rem)] leading-none">
          {/* طبقة شبح تحفظ العرض النهائي، فلا يتراقص السطر مع كل حرف */}
          <span className="relative block">
            <span aria-hidden="true" className="invisible whitespace-pre">
              {NAME}
            </span>

            <span
              aria-hidden="true"
              className="absolute inset-y-0 start-0 flex items-center whitespace-pre"
            >
              {NAME.slice(0, typed)
                .split('')
                .map((ch, i) => (
                  <span
                    key={i}
                    className={SYNTAX.has(ch) ? 'text-primary-300' : 'text-text-1'}
                  >
                    {ch}
                  </span>
                ))}

              {/* المؤشّر ثابتٌ أثناء الكتابة، ويومض بعد أن تنتهي */}
              <span
                className={`ms-[0.08em] inline-block h-[1.1em] w-[0.45ch] bg-primary-300
                            ${done ? 'animate-caret' : ''}`}
              />
            </span>
          </span>
        </p>

        {/* خطٌّ شعري يمتلئ مع الكتابة — التقدّم مقروءٌ بلا نسبة مئوية */}
        <span aria-hidden="true" className="mt-7 block h-px w-full overflow-hidden bg-line">
          <span
            className="block h-full origin-left bg-primary-300 transition-transform duration-200 ease-out"
            style={{ transform: `scaleX(${typed / NAME.length})` }}
          />
        </span>
      </motion.div>
    </motion.div>
  )
}
