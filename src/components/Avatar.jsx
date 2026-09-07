import { useState } from 'react'

/**
 * صورتك الشخصية بأربع وضعيات، في public/avatar/:
 * Your avatar in four poses, in public/avatar/:
 *
 *   point — الإشارة إلى الأمام  → البطل / hero
 *   think — التفكير             → نبذة / about
 *   smile — ابتسامة             → شريط التنقّل والأيقونة المفضّلة / nav + favicon
 *   wink  — غمزة                → لحظة نجاح إرسال الرسالة / form success
 *
 * الملفات الموجودة الآن نائبة — استبدلها بصورك (ميموجي، رسم، أو صورة شخصية).
 * The files shipped here are placeholders — replace them with your own.
 * إن استخدمت صيغة أخرى (‎.webp‏ مثلاً) فغيّر الامتدادات في `POSES` أدناه،
 * وفي رابط الأيقونة داخل index.html.
 * If you use another format (.webp, say), update the extensions in `POSES`
 * below and the favicon link in index.html.
 *
 * إن فُقد أي ملف يختفي العنصر بهدوء — لا أيقونة صورة مكسورة.
 * If a file is missing the element quietly disappears — no broken-image icon.
 */
const POSES = {
  point: '/avatar/point.svg',
  think: '/avatar/think.svg',
  smile: '/avatar/smile.svg',
  wink: '/avatar/wink.svg',
}

export function Avatar({ pose = 'smile', className = '', alt = '', glow = false }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null

  return (
    <span className={`relative inline-block ${className}`}>
      {glow && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-primary/40 blur-2xl"
        />
      )}
      <img
        src={POSES[pose]}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-contain"
      />
    </span>
  )
}
