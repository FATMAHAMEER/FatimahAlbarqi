import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { PROFILE } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Button, Container, Reveal, SectionHeader } from './ui'
import { ArrowUpRight, Github, Linkedin, XLogo } from './Icons'
import { Avatar } from './Avatar'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const EMAILJS_READY = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const SOCIALS = [
  { href: PROFILE.github, label: 'GitHub', Icon: Github },
  { href: PROFILE.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: PROFILE.x, label: 'X', Icon: XLogo },
]

const fieldClass = `w-full rounded-xl border border-line bg-fill-1 px-4 py-3.5 text-text-1 placeholder:text-text-3
  transition-colors duration-200 focus:border-primary-300/50 focus:bg-fill-2 focus:outline-none`

export function Contact() {
  const { t } = useLanguage()
  const { contact } = t
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(formRef.current)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    // مصيدة السبام: حقل مخفي لا تراه الزائرة، تملؤه الروبوتات وحدها
    if (data.get('website')) {
      formRef.current.reset()
      setStatus('success')
      return
    }

    // بلا مفاتيح EmailJS نفتح بريد المستخدمة بدل أن يفشل النموذج بصمت
    if (!EMAILJS_READY) {
      const subject = encodeURIComponent(`Portfolio — ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      // نرسل الاسم نفسه بعدة صيغ حتى يعمل القالب أياً كانت تسمية متغيّراته
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          from_name: name,
          email,
          from_email: email,
          reply_to: email,
          message,
          to_name: PROFILE.name.en,
          title: `Portfolio — ${name}`,
          time: new Date().toLocaleString('en-GB'),
        },
        { publicKey: PUBLIC_KEY },
      )
      formRef.current.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-[clamp(96px,12vw,176px)]">
      <div className="aurora opacity-70" aria-hidden="true" />
      {/* بعد الشفق في الترتيب، فيُرسم فوقه ويغمق الطرفين رغمه */}
      <span className="section-fade-over" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              index={contact.index}
              kicker={contact.kicker}
              before={contact.titleBefore}
              accent={contact.titleAccent}
              after={contact.titleAfter}
              intro={contact.intro}
            />

            <Reveal delay={0.2} className="mt-10">
              <a
                href={`mailto:${PROFILE.email}`}
                dir="ltr"
                className="link-wipe tap-target inline-flex items-center gap-2 text-start text-[clamp(1.25rem,3vw,2rem)] font-medium text-text-1"
              >
                {PROFILE.email}
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </a>
            </Reveal>

            <Reveal delay={0.28} className="mt-8">
              <ul className="flex flex-wrap gap-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-fill-1 px-4 py-2.5 text-[0.88rem] text-text-2
                                 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300/40 hover:text-text-1"
                    >
                      <Icon className="h-4 w-4" />
                      <span dir="ltr">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <form ref={formRef} onSubmit={handleSubmit} className="card relative space-y-5 p-7 lg:p-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label mb-2.5 block">
                      {contact.form.name}
                    </label>
                    <input id="name" name="name" type="text" required className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="label mb-2.5 block">
                      {contact.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      dir="ltr"
                      className={`${fieldClass} text-start`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label mb-2.5 block">
                    {contact.form.message}
                  </label>
                  <textarea id="message" name="message" rows={6} required className={`${fieldClass} resize-y`} />
                </div>

                {/* مصيدة السبام — بعيدة عن الشاشة لا مخفيّة بـ display حتى تقع فيها الروبوتات */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {/* الزرّ البنفسجي المصمت الوحيد في الموقع — الهوية تهبط كضربة أخيرة */}
                <Button
                  as="button"
                  type="submit"
                  variant="brand"
                  disabled={status === 'sending'}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? contact.form.sending : contact.form.submit}
                </Button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`flex min-h-[2rem] items-center gap-2.5 text-[0.88rem] ${
                    status === 'error' ? 'text-primary-300' : 'text-text-2'
                  }`}
                >
                  {/* الغمزة تظهر فقط لحظة نجاح الإرسال */}
                  {status === 'success' && <Avatar pose="wink" className="h-8 w-8 shrink-0" />}
                  {status === 'success' && contact.form.success}
                  {status === 'error' && contact.form.error}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
