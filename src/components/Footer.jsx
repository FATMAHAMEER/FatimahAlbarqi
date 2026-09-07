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
/* تم حذف سطر الإشارة إلى القالب كما طلبت. */

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-bg-deep py-8">
      <Container>
        <div className="label flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p dir="ltr" className="text-text-3/80">
            © {new Date().getFullYear()} {PROFILE.name.en}
          </p>

          <a
            href="#home"
            className="tap-target inline-flex items-center justify-center gap-2 text-text-3 transition-colors duration-200 hover:text-text-1"
          >
            {t.footer.top}
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
