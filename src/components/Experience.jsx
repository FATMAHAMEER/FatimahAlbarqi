import { EXPERIENCE } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Container, Reveal, SectionHeader } from './ui'

export function Experience() {
  const { lang } = useLanguage()
  const experience = EXPERIENCE[lang]

  return (
    <section id="experience" className="section-fade scroll-mt-24 py-[clamp(96px,12vw,176px)]">
      <Container>
        <SectionHeader
          index={experience.index}
          kicker={experience.kicker}
          before={experience.titleBefore}
          accent={experience.titleAccent}
          after={experience.titleAfter}
          intro={experience.intro}
        />

        <div className="mt-16 space-y-6">
          {experience.jobs.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}`} delay={index * 0.08}>
              <article className="card relative overflow-hidden p-7 lg:p-9">
                <span
                  aria-hidden="true"
                  className="absolute inset-s-0 top-0 h-full w-px bg-primary/70"
                />

                <div className="flex flex-col gap-3 border-b border-line pb-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                  <div>
                    <h3 className="text-h3 font-semibold text-text-1">{job.company}</h3>
                    <p className="mt-2 text-[1rem] text-primary-300">{job.role}</p>
                    <p className="mt-1 text-[0.9rem] text-text-3">{job.location}</p>
                  </div>
                  <p dir="ltr" className="num shrink-0 text-[0.82rem] text-text-3">
                    {job.period}
                  </p>
                </div>

                <div className="mt-7 grid gap-7 md:grid-cols-2">
                  {job.categories.map((category) => (
                    <div key={category.title}>
                      <p className="label mb-3">{category.title}</p>
                      <ul className="space-y-2.5">
                        {category.items.map((item) => (
                          <li key={item} className="flex gap-2 text-[0.94rem] leading-relaxed text-text-2">
                            <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-300" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}