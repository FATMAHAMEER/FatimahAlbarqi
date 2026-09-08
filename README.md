# Fatimah Albarqi Portfolio

Personal portfolio for **Fatimah Albarqi**, an IT Business Analyst and Project Coordinator focused on business analysis, digital transformation, technical project delivery, and user support.

## Highlights

- Bilingual Arabic/English interface with RTL/LTR language switching
- Professional experience at SUSF, KFMC, and Niche Office ART-P
- Education, achievements, awards, volunteer work, projects, and core competencies
- Custom circular F|A monogram branding
- EmailJS contact form
- Motion animations and Lenis smooth scrolling

## Technology

`React 19` · `Vite` · `Tailwind CSS 4` · `Motion` · `Lenis` · `EmailJS`

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## EmailJS Configuration

Create a `.env` file in the project root with:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

The contact form sends these template variables:

- `name`
- `from_name`
- `email`
- `from_email`
- `reply_to`
- `message`
- `to_name`
- `title`
- `time`

Set `{{reply_to}}` as the EmailJS reply-to address. Configure allowed domains and a rate limit before deploying. Never commit the real `.env` file; it is ignored by Git.

## Project Structure

```text
src/content.js                 Bilingual portfolio content
src/components/About.jsx       About, education, achievements, awards
src/components/Experience.jsx  Professional experience
src/components/Skills.jsx      Core competencies
src/components/Projects.jsx    Selected projects
src/components/Contact.jsx     EmailJS contact form
public/avatar/smile.svg        F|A monogram logo
```

Most portfolio text is stored in `src/content.js`. Page metadata is in `index.html`.

## GitHub Deployment

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Repository: [FATMAHAMEER/FatimahAlbarqi](https://github.com/FATMAHAMEER/FatimahAlbarqi)

GitHub Projects: [Projects · FATMAHAMEER/FatimahAlbarqi](https://github.com/FATMAHAMEER/FatimahAlbarqi/projects)

For Vercel or Netlify, connect the repository and add the EmailJS variables in the hosting provider's environment settings.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## العربية

موقع فاطمة البارقي الشخصي، وهي محللة أعمال تقنية ومنسقة مشاريع متخصصة في تحليل الأعمال، التحول الرقمي، وتسليم المشاريع التقنية.

يتضمن الموقع الخبرة المهنية، التعليم، الإنجازات، الجوائز، العمل التطوعي، المشاريع، المهارات الأساسية، وشعار F|A المخصص، مع نموذج تواصل متصل بـ EmailJS.

لتشغيل المشروع:

```bash
npm install
npm run dev
```

لتجهيز نسخة الإنتاج:

```bash
npm run build
```


## License

See [LICENSE](LICENSE) for the project license.
