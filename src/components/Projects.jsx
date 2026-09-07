import { PROJECTS } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Chip, Container, Reveal, SectionHeader } from './ui'
import { ArrowUpRight } from './Icons'

const FEATURED = PROJECTS.filter((p) => p.featured)
const REST = PROJECTS.filter((p) => !p.featured)

/** شارة تميّز المنشور عن مفتوح المصدر */
function KindBadge({ kind }) {
  const live = kind === 'live'
  return (
    <span
      dir="ltr"
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] ${
        live ? 'border-primary-300/40 text-primary-300' : 'border-line-strong text-text-3'
      }`}
    >
      {live && <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />}
      {live ? 'LIVE' : 'CODE'}
    </span>
  )
}

/**
 * لقطة المشروع — تُعرض فقط إن أضفتِ `image` للمشروع في content.js.
 *
 * بلا صورة لا تُحجز مساحة فارغة. لوحة «متصفّح وهمي» برقمٍ باهت كانت تُقرأ
 * كصورة فشل تحميلها، لا كتصميم — والنصّ وحده أصدق من لقطةٍ غير موجودة.
 */
function ProjectShot({ project, lang }) {
  if (!project.image) return null

  return (
    <div className="mb-1 overflow-hidden rounded-[16px] border border-line">
      <img
        src={project.image}
        alt={project.title[lang]}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-expo group-hover:scale-[1.04]"
      />
    </div>
  )
}

export function Projects() {
  const { t, lang } = useLanguage()
  const { projects } = t

  return (
    <section id="projects" className="section-fade scroll-mt-24 py-[clamp(96px,12vw,176px)]">
      <Container>
        <SectionHeader
          index={projects.index}
          kicker={projects.kicker}
          before={projects.titleBefore}
          accent={projects.titleAccent}
          after={projects.titleAfter}
          intro={projects.intro}
        />

        {/* المشاريع الرئيسية — بطاقتان في الصفّ، والمحتوى هو البطل */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {FEATURED.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group relative flex h-full flex-col gap-5 overflow-hidden p-7 lg:p-9"
              >
                {/* خطّ بنفسجي ينساب على الحدّ الأعلى عند التمرير */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[linear-gradient(to_right,transparent,var(--color-primary-300),transparent)]
                             transition-transform duration-500 ease-expo group-hover:scale-x-100"
                />

                <ProjectShot project={project} lang={lang} />

                <div className="flex items-center gap-3">
                  <span dir="ltr" className="font-mono text-[0.8rem] text-primary-300">
                    {project.id}
                  </span>
                  <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
                  <KindBadge kind={project.kind} />
                </div>

                <h3 className="text-h3 font-semibold text-text-1">{project.title[lang]}</h3>

                <p className="text-[0.98rem] leading-relaxed text-text-2">
                  {project.description[lang]}
                </p>

                {/* mt-auto يثبّت التقنيات والرابط في القاع، فتتحاذى البطاقات المتجاورة */}
                <div className="mt-auto flex flex-col gap-5 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>

                  <span className="link-wipe inline-flex w-fit items-center gap-1.5 text-[0.92rem] font-medium text-text-1">
                    {project.kind === 'live' ? projects.viewProject : projects.viewCode}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* البقية — فهرس بأسطر، أخفّ من البطاقات فيبقى التسلسل واضحاً */}
        <Reveal className="mt-20">
          <p className="label mb-2 flex items-center gap-3">
            {projects.moreTitle}
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </p>
        </Reveal>

        <div className="divide-y divide-line border-b border-line">
          {REST.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-x-6 gap-y-3 rounded-[12px] px-2 py-6 transition-colors duration-300
                           hover:bg-fill-1 sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:items-center sm:px-4"
              >
                <span dir="ltr" className="font-mono text-[0.8rem] text-primary-300">
                  {project.id}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-[1.08rem] font-semibold text-text-1">
                      {project.title[lang]}
                    </h3>
                    <KindBadge kind={project.kind} />
                  </div>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-text-2">
                    {project.description[lang]}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-[0.88rem] font-medium text-text-3 transition-colors duration-300 group-hover:text-text-1 sm:justify-self-end">
                  {project.kind === 'live' ? projects.viewProject : projects.viewCode}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
