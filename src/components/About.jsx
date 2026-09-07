import { PROFILE } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Container, Reveal, SectionHeader } from './ui'
import { Avatar } from './Avatar'

export function About() {
  const { t, lang, isRTL } = useLanguage()
  const { about } = t

  return (
    <section id="about" className="section-fade scroll-mt-24 py-[clamp(96px,12vw,176px)]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* العنوان لاصق أثناء التمرير على الشاشات الكبيرة */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              {/* البورتريه — وضعية التفكير تقابل «أفكّك الأنظمة لأفهمها».
                  الإطار الدائري بحدّ أبيض 8٪ يجعلها بورتريه مقصوداً لا ملصقاً عائماً. */}
              <Reveal className="mb-7">
                {/* الوهج خارج الإطار: داخله كان يقصّه overflow-hidden. و`relative`
                    على الإطار يرفعه فوق الوهج بلا z-index سالب. */}
                <div className="relative w-fit">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-primary/35 blur-2xl"
                  />
                  {/* flex لا inline-flex — العنصر السطري يجلس على خطّ الأساس
                      فيضيف فراغاً أسفله بمقدار line-height 1.9.
                      الميموجي 512×512 بلا حشوة شفافة تقريباً، فـ 74% تُبقي
                      الخوذة والشعر بعيدين عن الحدّ الدائري، و overflow-hidden
                      يضمن ألّا يتسرّب شيء خارجه بأي حال. */}
                  <span className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-line bg-surface/50 lg:h-48 lg:w-48">
                    <Avatar pose="think" alt={PROFILE.name[lang]} className="h-[74%] w-[74%]" />
                  </span>
                </div>
              </Reveal>

              <SectionHeader
                index={about.index}
                kicker={about.kicker}
                before={about.titleBefore}
                accent={about.titleAccent}
                after={about.titleAfter}
              />

              <Reveal delay={0.2} className="mt-10">
                <div className="card p-6">
                  <p className="label mb-4">{about.education.kicker}</p>
                  <h3 className="text-[1.05rem] font-semibold leading-relaxed text-text-1">
                    {about.education.degree}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-text-2">{about.education.school}</p>
                  {/* يحوي عربية في النسخة العربية، فلا مونو هناك */}
                  <p className={`mt-3 text-[0.82rem] tabular-nums text-primary-300 ${isRTL ? '' : 'num'}`}>
                    {about.education.period}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08} as="p" className="prose-serif text-body-lg text-text-2">
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
