import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { useLanguage } from '../lib/useLanguage'
import { Chip, Container, Reveal, SectionHeader } from './ui'

/**
 * المركبة الباعثة — بألوان الهوية: جسمٌ بنفسجي وفتحةٌ تشعّ باللافندر.
 * (الشعاع الذهبي في المرجع كان سيُدخل لوناً ثالثاً خارج النظام.)
 */
function BeamMark() {
  return (
    <svg className="beam-mark" width="96" height="52" viewBox="0 0 96 52" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="beam-aperture" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f6e8ff" />
          <stop offset="100%" stopColor="#d181ef" />
        </radialGradient>
      </defs>

      {/* القبّة */}
      <path d="M48 3 76 33H20L48 3Z" fill="#8e18b8" />
      <path d="M48 3 76 33H48V3Z" fill="#6d2c85" />
      {/* نافذة القمرة */}
      <ellipse cx="48" cy="24" rx="6" ry="5" fill="url(#beam-aperture)" opacity="0.9" />
      {/* القاعدة */}
      <rect x="12" y="31" width="72" height="12" rx="6" fill="#6d2c85" />
      {/* الفتحة الباعثة */}
      <ellipse cx="48" cy="43" rx="15" ry="5" fill="url(#beam-aperture)" />
      {/* مصابيح القاعدة */}
      <circle cx="24" cy="37" r="2" fill="#d181ef" />
      <circle cx="34" cy="37" r="2" fill="#d181ef" />
      <circle cx="62" cy="37" r="2" fill="#d181ef" />
      <circle cx="72" cy="37" r="2" fill="#d181ef" />
    </svg>
  )
}

/**
 * مجموعات المهارات — تُرسم مرّتين: مطفأةً ثم مضيئةً تحت الشعاع.
 *
 * التخطيط هنا مطلقٌ في الطبقتين، فلا يُمرَّر إلا `tone`. أي فرق آخر بينهما
 * يُزحزح إحداهما عن الأخرى فيظهر النصّ مزدوجاً.
 */
function Groups({ groups, tone }) {
  return (
    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-5">
          <p className="label">{group.title}</p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Chip key={item} tone={tone}>
                {item}
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Skills() {
  const { t } = useLanguage()
  const { skills } = t
  const reduce = useReducedMotion()

  /* الشعاع يمسح من نفسه، فلا يحتاج مؤشّراً — يعمل على اللمس كما على المكتب،
     وعلى كل العروض: دون 640px يدور محور المسح إلى الرأسي في CSS.

     يبقى معطّلاً عند تفضيل تقليل الحركة وحده، فتُعرض المهارات كلها بالنغمة
     العادية. ويبدأ معطّلاً قبل أول تأثير حتى لا تومض لمحةُ قسمٍ مطفأ. */
  const [beam, setBeam] = useState(false)
  useEffect(() => setBeam(!reduce), [reduce])

  return (
    /* بلا `border-y`: الخطّان الشعريّان كانا هما الحدّ الحادّ نفسه. التدرّج
       التوني يفصل القسم الآن، فالخطّ زائدٌ ومناقضٌ له. */
    <section
      id="skills"
      className="section-fade relative scroll-mt-24 overflow-hidden bg-bg-elev/40 py-[clamp(96px,12vw,176px)]"
    >
      {/* النسيج صار للموقع كله في `.grain`. هنا النجوم وحدها — تُؤنس المركبة.
          مطلقةٌ، فيلزم `z-10` على المحتوى وإلا رُسمت فوق النصّ. */}
      <span className="space-stars" aria-hidden="true" />

      <Container className="relative z-10">
        <SectionHeader
          index={skills.index}
          kicker={skills.kicker}
          before={skills.titleBefore}
          accent={skills.titleAccent}
          after={skills.titleAfter}
          intro={skills.intro}
        />

        {/* Reveal واحد يغلّف الطبقتين — لو تحرّكت كل طبقة وحدها لانفصلتا */}
        <Reveal className={`relative mt-14 ${beam ? 'beam-stage' : ''}`}>
          {beam && (
            <div className="beam-craft" aria-hidden="true">
              <BeamMark />
              <span className="beam-cone" />
            </div>
          )}

          {/* المخروط ينزل من المركبة إلى الشرائح، فتُحجز له مساحة فوقها.
              الحشوة على الغلاف الخارجي، و`relative` على الداخلي وحده — فقناع
              الطبقة المضيئة يقع على الشرائح بالضبط لا على الحشوة معها. */}
          {/* المخروط ينزل من المركبة إلى الشرائح، فتُحجز له مساحة فوقها */}
          <div className={beam ? 'pt-[100px]' : ''}>
            <div className="relative z-10">
              {/* بلا شعاع: النغمة العادية لا `lit`.

                  `lit` حالةُ إبرازٍ تفترض وجود ما هو مطفأٌ حولها. بلا شعاع
                  تُطبَّق على السبع عشرة شريحة معاً، فتتوهّج كلّها بالتساوي
                  ويسقط التسلسل — إبرازُ كل شيء إبرازٌ لا شيء. */}
              <Groups groups={skills.groups} tone={beam ? 'dim' : 'default'} />

              {beam && (
                <div className="beam-lit" aria-hidden="true">
                  <Groups groups={skills.groups} tone="lit" />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
