import { motion, useReducedMotion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1]

/** الحاوية — عرض ثابت وهوامش مرنة */
export function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}

/** ظهور بالتمرير — مرة واحدة فقط، ويحترم تفضيل تقليل الحركة */
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div', ...props }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  if (reduce)
    return (
      <MotionTag className={className} {...props}>
        {children}
      </MotionTag>
    )

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

/**
 * الأزرار — الأبيض هو المستوى الأساسي.
 * البنفسجي المصمت محجوز لزرّ الإرسال وحده في نهاية الصفحة.
 */
const buttonStyles = {
  primary:
    'bg-white text-bg hover:bg-white/90 border border-transparent',
  secondary:
    'bg-transparent text-text-1 border border-line-strong hover:border-primary-300/40 hover:bg-fill-1',
  brand:
    'bg-primary text-white border border-transparent hover:bg-secondary shadow-glow',
}

export function Button({ variant = 'primary', as = 'a', className = '', children, ...props }) {
  const Tag = as
  return (
    <Tag
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium
        transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5
        ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

const ARABIC = /[؀-ۿ]/

/**
 * شريحة تقنية. أسماء التقنيات اللاتينية تُعزل بـ dir="ltr" حتى لا يختلّ
 * ترتيبها داخل فقرة عربية — أما الشرائح العربية («قواعد البيانات») فتُترك
 * على اتجاه الصفحة، لأن فرض LTR عليها خطأ دلالي.
 */
/**
 * `dim` و `lit` لطبقتي شعاع المهارات — نفس الشريحة بنفس المقاسات تماماً،
 * فلا تتزحزح إحدى الطبقتين عن الأخرى. و`default` يبقى كما هو للمشاريع.
 */
const chipTones = {
  default: 'border-line bg-fill-1 text-text-2 hover:border-primary-300/40 hover:bg-fill-2 hover:text-text-1',
  dim: 'border-line bg-transparent text-text-3',
  lit: 'border-primary-300/55 bg-fill-2 text-text-1 shadow-[0_0_22px_-8px_rgb(209_129_239_/_0.6)]',
  muted: 'border-dashed border-line-strong bg-transparent text-text-3',
}

export function Chip({ children, muted = false, tone = 'default' }) {
  const isArabic = ARABIC.test(String(children))

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.8rem] transition-colors duration-200
        ${chipTones[muted ? 'muted' : tone]}`}
    >
      {isArabic ? children : <span dir="ltr" className="[unicode-bidi:isolate]">{children}</span>}
    </span>
  )
}

/* علامات ترقيم تلتصق بالكلمة التي قبلها — عربية ولاتينية */
const LEADING_PUNCT = /^[.,،؛:!?؟]/

/**
 * عنوان القسم — رقم بخط مونو + كلمة تمييز بخط العرض.
 *
 * الجزء الأخير يلتصق بلا مسافة إن بدأ بعلامة ترقيم («لأفهمها.»)، ويأخذ
 * مسافة إن بدأ بكلمة («أعتمد عليها.»). بدون هذا تظهر مسافة قبل النقطة.
 */
export function SectionHeader({ index, kicker, before, accent, after, intro, className = '' }) {
  const hasTitle = Boolean(before || accent)
  const tail = after ? (LEADING_PUNCT.test(after) ? after : ` ${after}`) : null

  /* بلا عنوان كبير، يصبح السطر الصغير هو عنوان القسم — حتى لا ينكسر
     تسلسل العناوين لقارئات الشاشة ومحرّكات البحث. */
  const Kicker = hasTitle ? 'p' : 'h2'

  return (
    <div className={`max-w-2xl ${className}`}>
      <Reveal>
        <Kicker className={`label flex items-center gap-3 ${hasTitle ? 'mb-5' : ''}`}>
          <span dir="ltr" className="font-mono text-primary-300">
            {index}
          </span>
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          {kicker}
        </Kicker>
      </Reveal>

      {hasTitle && (
        <Reveal delay={0.08}>
          <h2 className="display text-h2 text-text-1">
            {before}{' '}
            <span className="accent">{accent}</span>
            {tail}
          </h2>
        </Reveal>
      )}

      {intro && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[62ch] text-body-lg text-text-2">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

/** فاصل شعري بعرض الشاشة بين الأقسام */
export function Divider() {
  return <div className="h-px w-full bg-line" aria-hidden="true" />
}
