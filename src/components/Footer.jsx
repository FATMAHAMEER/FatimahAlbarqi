import { PROFILE } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Container } from './ui'
import { ArrowUp } from './Icons'

/**
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  سطر الإشارة إلى صاحبة القالب — الشيء الوحيد في المشروع الذي ليس لك. │
 * │  Template credit — the one thing in this project that isn't yours.   │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * رخصة هذا القالب (راجع LICENSE) تمنحك كل شيء مجاناً بشرطٍ واحد: أن يبقى هذا
 * السطر ورابطه ظاهرين في تذييل الموقع المنشور. حذفه يُسقط حقّك في استخدام القالب.
 * غيّر ما شئت في بقيّة الموقع — النصوص والصور والألوان كلّها لك.
 *
 * This template's license (see LICENSE) gives you everything for free on one
 * condition: this line and its link stay visible in the footer of your published
 * site. Removing it terminates your right to use the template. Everything else —
 * text, images, colors — is yours to change.
 *
 * مكتوب هنا مباشرةً لا في content.js، لأن content.js ملفُّك أنت.
 * Hardcoded here rather than in content.js, because content.js is your file.
 */
/* الاسم لاتينيٌّ في النسختين، كسطر الحقوق فوقه تماماً — ولذلك يُعزل بـ dir="ltr"
   داخل الجملة العربية حتى لا يعيد المتصفّح ترتيبه.
   The name stays Latin in both languages, exactly like the copyright line above,
   so it is isolated with dir="ltr" inside the Arabic sentence. */
const CREDIT_NAME = 'Aljazy Banaemah'
const CREDIT_BEFORE = { ar: 'القالب من', en: 'Template by' }
const CREDIT_URL = 'https://github.com/aljazikb'

export function Footer() {
  const { t, lang } = useLanguage()

  /* أعمقُ نقطةٍ في الصفحة، بلا `border-t`: «تواصل» ينتهي عند `bg-deep`
     فيلتقيه التذييل بنفس اللون — والخطّ الشعري كان سيرسم الحدّ الذي ألغاه
     التدرّج. */
  return (
    <footer className="bg-bg-deep py-10">
      <Container>
        <div className="label flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            {/* الاسم اللاتيني في النسختين. السطر كلّه لاتيني، فيُعزل بـ dir="ltr"
                حتى لا يعيد الترتيب البصري خلط «©» بالرقم داخل صفحة عربية. */}
            <p dir="ltr">
              © {new Date().getFullYear()} {PROFILE.name.en}
            </p>

            {/* أخفتُ من سطر الحقوق: إشارةٌ واجبة، لا عنصرٌ يزاحم صاحب الموقع. */}
            <p className="text-text-3/70">
              {CREDIT_BEFORE[lang]}{' '}
              <a
                href={CREDIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="text-text-2 underline decoration-line-strong decoration-from-font
                           underline-offset-4 transition-colors duration-200
                           hover:text-primary-300 hover:decoration-primary-300/60"
              >
                {CREDIT_NAME}
              </a>
            </p>
          </div>

          <a
            href="#home"
            className="tap-target inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:text-text-1"
          >
            {t.footer.top}
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
