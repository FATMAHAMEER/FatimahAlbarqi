# قالب بورتفوليو · Portfolio Template

بورتفوليو من صفحة واحدة، عربي مع دعم RTL وزرّ للتبديل إلى الإنجليزية.
A one-page portfolio, Arabic with full RTL support and an English toggle.

`React 19` · `Vite` · `Tailwind CSS 4` · `Motion` · `Lenis`

**كل النصوص هنا نائبة — ضع بياناتك مكانها وسيصبح الموقع لك.**
**Everything here is a placeholder — fill in your data and it's yours.**

---

# العربية

## ١ · ابدأ

اضغط الزرّ الأخضر **Use this template** في أعلى هذه الصفحة، ثم
**Create a new repository**. حمّل مستودعك الجديد على جهازك ونفّذ:

```bash
npm install
npm run dev
```

افتح الرابط الذي يظهر في الطرفية — الموقع يعمل الآن بنصوص وصور نائبة.

## ٢ · اجعله لك

| ما تريد تغييره | الملف |
| --- | --- |
| كل النصوص: اسمك، بريدك، روابطك، مشاريعك | **`src/content.js`** ← الملف المهم |
| صورتك، بأربع وضعيات | `public/avatar/` |
| العنوان في تبويب المتصفّح ومعاينة الرابط | `index.html` |

- في `src/content.js` استبدل **القيم** فقط. **لا تغيّر أسماء المفاتيح** — المكوّنات تقرأ منها.
- في `public/avatar/` استبدل الملفات الأربعة بصورك، بنفس الأسماء:
  `point` و `think` و `smile` و `wink`. إن استخدمت صيغة أخرى مثل `.webp`، غيّر
  الامتدادات في `POSES` داخل `src/components/Avatar.jsx`.

هذا كل شيء. باقي الملفات لا تحتاج إلى لمسها.

## ٣ · اختياري

**الخطوط.** التصميم مبني على خطوط **ثمانية**، ورخصتها تمنع نشر ملفاتها فهي ليست
في المستودع. حمّلها من [thmanyah.com](https://thmanyah.com) وضعها في
`public/fonts/` بأسماء: `thmanyah-sans-400/500/700` و `thmanyah-display-300/700`
و `thmanyah-serif-300` بصيغة `woff2`. بدونها الموقع يعمل ويبدو مرتّباً بخطوط النظام.

**نموذج التواصل.** انسخ `.env.example` إلى `.env` واملأ مفاتيح
[EmailJS](https://dashboard.emailjs.com) الثلاثة. إن تركتها فارغة فالنموذج لا يفشل:
يفتح تطبيق البريد لدى الزائر بالرسالة جاهزة.

> ⚠️ **قبل النشر:** هذه المفاتيح تُدمج في ملفات الصفحة ويستطيع أي زائر قراءتها.
> اذهب إلى لوحة EmailJS وحدّد **allowed domains** لنطاقك وفعّل **rate limit**،
> وإلا استطاع أي أحد الإرسال عبر قالبك.

## ٤ · انشره

```bash
npm run build
```

انشر مجلّد `dist/`. على Vercel أو Netlify يكفي ربط المستودع. ضع مفاتيح EmailJS في
لوحة الاستضافة لا في المستودع، وارفع ملفات الخطوط إلى الاستضافة مباشرة.

> **شرط واحد.** القالب مجاني بالكامل، مقابل أن يبقى سطر **«القالب من …»** ورابطه
> ظاهرين في تذييل موقعك المنشور. ما عدا ذلك — النصوص والصور والألوان — كلّه لك.
> راجع [LICENSE](LICENSE).

## أربعة أشياء لا تغيّرها

ليست أذواقاً — تغييرها يكسر شيئاً حقيقياً:

1. **لا تباعد بين الحروف العربية.** الحروف متّصلة، والتباعد يفكّك الكلمة.
2. **لا خطّ mono مع العربية.** لا يحوي حروفاً عربية، فيستبدله المتصفّح بخطٍّ يكسر الاتصال.
3. **لا مائل (italic) في العربية.** للتأكيد استخدم خطّ العناوين بالبنفسجي الفاتح.
4. **ثلاث مجموعات مهارات.** قسم المهارات مبني على شعاعٍ يمسح ثلاثة أعمدة.

---

# English

## 1 · Start

Click the green **Use this template** button at the top of this page, then
**Create a new repository**. Clone your new repo and run:

```bash
npm install
npm run dev
```

Open the URL printed in the terminal — the site already runs, with placeholder
text and placeholder avatars.

## 2 · Make it yours

| What you want to change | File |
| --- | --- |
| All text: your name, email, links, projects | **`src/content.js`** ← the one that matters |
| Your avatar, in four poses | `public/avatar/` |
| Browser-tab title and link preview | `index.html` |

- In `src/content.js`, replace the **values** only. **Do not rename the keys** —
  the components read them.
- In `public/avatar/`, replace the four files with your own, same names:
  `point`, `think`, `smile`, `wink`. If you use another format such as `.webp`,
  update the extensions in `POSES` inside `src/components/Avatar.jsx`.

That's it. You don't need to touch anything else.

## 3 · Optional

**Fonts.** The design is built around the **thmanyah** typeface. Its license
forbids redistributing the files, so they are not in this repo. Download them from
[thmanyah.com](https://thmanyah.com) into `public/fonts/` as
`thmanyah-sans-400/500/700`, `thmanyah-display-300/700` and `thmanyah-serif-300`
in `woff2`. Without them the site still works and still looks tidy, using system fonts.

**Contact form.** Copy `.env.example` to `.env` and fill in the three
[EmailJS](https://dashboard.emailjs.com) keys. If you leave them empty the form
doesn't break: it opens the visitor's mail app with the message pre-filled.

> ⚠️ **Before you deploy:** these keys get bundled into the page and any visitor
> can read them. In your EmailJS dashboard, set **allowed domains** to your own
> domain and enable a **rate limit** — otherwise anyone can send through your template.

## 4 · Deploy

```bash
npm run build
```

Publish the `dist/` folder. On Vercel or Netlify, connecting the repo is enough.
Put the EmailJS keys in the host's dashboard, never in the repo, and upload the
font files to the host directly.

> **One condition.** The template is completely free, in exchange for keeping the
> **"Template by …"** line and its link visible in your published site's footer.
> Everything else — text, images, colors — is yours. See [LICENSE](LICENSE).

## Four things not to change

These aren't preferences — changing them breaks something real:

1. **No letter-spacing on Arabic.** Arabic letters connect; spacing them apart breaks the word.
2. **No monospace for Arabic.** It has no Arabic glyphs, so the browser substitutes a font that breaks the joins.
3. **No italics in Arabic.** Emphasise with the display font in light purple instead.
4. **Three skill groups.** The skills section is built around a beam sweeping three columns.

---

## الأوامر · Commands

| | |
| --- | --- |
| `npm run dev` | تشغيل خادم التطوير · start the dev server |
| `npm run build` | بناء نسخة الإنتاج في `dist/` · production build |
| `npm run preview` | معاينة نسخة الإنتاج محلياً · preview the build |
| `npm run lint` | فحص الكود · run Oxlint |

## الرخصة · License

[MIT مع شرط الإشارة إلى المصدر](LICENSE) — استخدمه وعدّله وانشر نسختك بحرّية،
وأبقِ سطر الإشارة في التذييل.
[MIT with required attribution](LICENSE) — use it, modify it, publish your version
freely, and keep the credit line in the footer.

الرخصة تشمل الكود فقط؛ الخطوط لها رخصتها الخاصة وليست جزءاً من المستودع.
The license covers the code only; the fonts carry their own license and are not
part of this repository.
