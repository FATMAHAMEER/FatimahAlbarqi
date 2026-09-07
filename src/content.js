/**
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  هذا هو الملف الوحيد الذي تحتاج إلى تعديله.                          │
 * │  This is the only file you need to edit.                             │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * كل نصوص الموقع هنا — عربي وإنجليزي جنباً إلى جنب. لا نصّ مكتوب داخل المكوّنات.
 * استبدل القيم النائبة أدناه ببياناتك. لا تغيّر أسماء المفاتيح.
 *
 * Every word on the site lives here, Arabic and English side by side.
 * Replace the placeholder values with your own. Do not rename the keys.
 *
 * ملاحظتان عن العربية / Two notes on the Arabic:
 *  - العربية تُلزمك باختيار جنس الفعل والصفة. اكتب النص الذي تتحدّث فيه عن نفسك
 *    بالصيغة التي تناسبك (المؤنث أو المذكّر)، وثبّت عليها في كل الفقرات.
 *  - النص الموجّه للزائر يبقى محايداً، لأن جنس الزائر غير معروف.
 */

export const PROFILE = {
  name: { ar: 'اسمك هنا', en: 'Your Name' },
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  x: 'https://x.com/your-handle',

  /* يظهران في الشريط السفلي للبطل — المدينة، والساعة الحيّة فيها.
     Shown in the hero's bottom bar: your city, and the live time there.
     قائمة المناطق الزمنية / time zone list:
     https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  location: { ar: 'مدينتك، بلدك', en: 'Your City, Country' },
  timeZone: 'Asia/Riyadh',
}

/* روابط التنقّل — العناوين فقط قابلة للتغيير، أما `id` فمرتبط بأقسام الصفحة.
   Nav links — translate the labels, but leave `id` alone: it maps to section ids. */
export const NAV = [
  { id: 'home', ar: 'الرئيسية', en: 'Home' },
  { id: 'about', ar: 'نبذة', en: 'About' },
  { id: 'skills', ar: 'المهارات', en: 'Skills' },
  { id: 'projects', ar: 'المشاريع', en: 'Projects' },
  { id: 'contact', ar: 'تواصل', en: 'Contact' },
]

export const CONTENT = {
  ar: {
    dir: 'rtl',
    hero: {
      /* العنوان سؤال قصير من سطرين. الجزء `Accent` يظهر بالبنفسجي الفاتح،
         وأول فقرة في «نبذة» هي جوابه — اربط الاثنين. */
      titleBefore: 'السطر الأول من',
      titleAccent: 'سؤالك',
      titleAfter: '؟',
      subtitle: 'جملة واحدة تشرح ما الذي تبنيه ولمن. اجعلها قصيرة ومحدّدة.',
      ctaPrimary: 'شاهد المشاريع',
      ctaSecondary: 'تواصل معي',
      scroll: 'مرّر للأسفل',
    },
    about: {
      index: '01',
      kicker: 'نبذة',
      /* ثلاث فقرات. الأولى تجيب على سؤال البطل، والثانية عن دراستك وعملك،
         والثالثة عن وجهتك القادمة. */
      paragraphs: [
        'الفقرة الأولى — ابدأ بجواب السؤال الذي طرحته في الأعلى.',
        'الفقرة الثانية — ماذا تدرس وماذا تبني، وما نوع المشاريع التي تشتغل عليها.',
        'الفقرة الثالثة — إلى أين تتّجه، وما الذي يعجبك في هذا المجال.',
      ],
      education: {
        kicker: 'التعليم',
        degree: 'اسم الدرجة — قيد الدراسة',
        school: 'اسم الجامعة · المدينة',
        period: 'من ٢٠٠٠ حتى الآن',
      },
    },
    skills: {
      index: '02',
      kicker: 'المهارات',
      titleBefore: 'الأدوات التي',
      titleAccent: 'أعتمد',
      titleAfter: 'عليها.',
      intro: 'سطر واحد عن طريقتك في اختيار أدواتك.',
      /* ثلاث مجموعات — هذا العدد مقصود: الشعاع في هذا القسم مبني على ثلاثة أعمدة.
         Three groups — the count matters: the light beam is built around three columns. */
      groups: [
        { title: 'الواجهة الأمامية', items: ['أداة', 'أداة', 'أداة', 'أداة'] },
        { title: 'الخلفية واللغات', items: ['أداة', 'أداة', 'أداة'] },
        { title: 'الأدوات والنشر', items: ['أداة', 'أداة', 'أداة', 'أداة'] },
      ],
    },
    projects: {
      index: '03',
      kicker: 'المشاريع',
      titleBefore: 'أشياء',
      titleAccent: 'بنيتها',
      titleAfter: 'بنفسي.',
      intro: 'سطر واحد يمهّد لقائمة مشاريعك.',
      viewProject: 'افتح المشروع',
      viewCode: 'اقرأ الكود',
      moreTitle: 'مشاريع أخرى',
    },
    contact: {
      index: '04',
      kicker: 'تواصل',
      titleBefore: 'لنتحدّث عمّا',
      titleAccent: 'تبنيه',
      titleAfter: '.',
      intro: 'جملة أو جملتان: ما الذي تبحث عنه، ومتى يسعدك أن يصلك أحد.',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال…',
        success: 'وصلت الرسالة — شكراً، وسيصل الردّ قريباً.',
        error: 'تعذّر الإرسال. المراسلة على البريد مباشرة تعمل دائماً.',
      },
    },
    footer: {
      top: 'للأعلى',
    },
    loading: 'جارٍ تحميل الصفحة',
  },

  en: {
    dir: 'ltr',
    hero: {
      titleBefore: 'The first line of',
      titleAccent: 'your question',
      titleAfter: '?',
      subtitle: 'One sentence on what you build and who it is for. Keep it short and specific.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll',
    },
    about: {
      index: '01',
      kicker: 'About',
      paragraphs: [
        'First paragraph — start by answering the question you asked above.',
        'Second paragraph — what you study and what you build, and the kind of work you do.',
        'Third paragraph — where you are heading, and what you like about this field.',
      ],
      education: {
        kicker: 'Education',
        degree: 'Your degree — in progress',
        school: 'Your university · City',
        period: '2000 — Present',
      },
    },
    skills: {
      index: '02',
      kicker: 'Skills',
      titleBefore: 'The tools I',
      titleAccent: 'reach for',
      titleAfter: 'most.',
      intro: 'One line about how you pick your tools.',
      groups: [
        { title: 'Frontend', items: ['Tool', 'Tool', 'Tool', 'Tool'] },
        { title: 'Backend & languages', items: ['Tool', 'Tool', 'Tool'] },
        { title: 'Tools & deployment', items: ['Tool', 'Tool', 'Tool', 'Tool'] },
      ],
    },
    projects: {
      index: '03',
      kicker: 'Projects',
      titleBefore: 'Things I',
      titleAccent: 'built',
      titleAfter: 'myself.',
      intro: 'One line introducing your list of projects.',
      viewProject: 'Open project',
      viewCode: 'View code',
      moreTitle: 'More projects',
    },
    contact: {
      index: '04',
      kicker: 'Contact',
      titleBefore: "Let's talk about what",
      titleAccent: "you're building",
      titleAfter: '.',
      intro:
        'A sentence or two: what you are looking for, and when you would like to hear from someone.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Message received — thank you, a reply is on the way.',
        error: 'Could not send. Emailing me directly always works.',
      },
    },
    footer: {
      top: 'Back to top',
    },
    loading: 'Loading the page',
  },
}

/**
 * مشاريعك. الحقول:
 *   kind: 'live' موقع منشور يمكن فتحه — 'code' مستودع على GitHub.
 *   featured: true يظهر في بطاقة عريضة. اجعل أفضل أربعة مشاريع فقط مميّزة،
 *             والباقي يظهر تلقائياً في قائمة مضغوطة أسفلها.
 *   image: '/shots/x.png' اختياري — لقطة شاشة تظهر أعلى البطاقة.
 *          احذف الحقل إن لم تكن لديك لقطة؛ لن تُرسم لوحة فارغة مكانها.
 *
 * Your projects. `kind: 'live'` is a deployed site, `'code'` is a repo.
 * Mark only your best four as `featured` — the rest render as a compact list.
 * `image` is optional; omit it entirely rather than leaving it empty.
 *
 * تحقّق من أن كل رابط يفتح فعلاً قبل النشر.
 * Check that every link actually opens before you publish.
 */
export const PROJECTS = [
  {
    id: '01',
    kind: 'live',
    featured: true,
    url: 'https://example.com',
    title: { ar: 'اسم المشروع الأول', en: 'First Project' },
    description: {
      ar: 'فقرة قصيرة: ما الذي يفعله المشروع، ولمن، وما الجزء الذي بنيته أنت. اذكر المشكلة قبل التقنية.',
      en: 'A short paragraph: what the project does, who for, and which part you built. Lead with the problem, not the stack.',
    },
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: '02',
    kind: 'code',
    featured: true,
    url: 'https://github.com/your-username/your-repo',
    title: { ar: 'اسم المشروع الثاني', en: 'Second Project' },
    description: {
      ar: 'فقرة قصيرة تصف المشروع والتقنيات التي تعلّمتها منه.',
      en: 'A short paragraph describing the project and what you learned building it.',
    },
    tech: ['Python', 'REST API'],
  },
  {
    id: '03',
    kind: 'live',
    featured: true,
    url: 'https://example.com',
    title: { ar: 'اسم المشروع الثالث', en: 'Third Project' },
    description: {
      ar: 'فقرة قصيرة تصف المشروع.',
      en: 'A short paragraph describing the project.',
    },
    tech: ['Next.js', 'Node.js'],
  },
  {
    id: '04',
    kind: 'code',
    featured: true,
    url: 'https://github.com/your-username/your-repo',
    title: { ar: 'اسم المشروع الرابع', en: 'Fourth Project' },
    description: {
      ar: 'فقرة قصيرة تصف المشروع.',
      en: 'A short paragraph describing the project.',
    },
    tech: ['Java', 'OOP'],
  },

  /* ما بعد هذا السطر يظهر في القائمة المضغوطة — سطر واحد لكل مشروع.
     Everything below renders in the compact list — one line each. */
  {
    id: '05',
    kind: 'live',
    url: 'https://example.com',
    title: { ar: 'مشروع أصغر', en: 'A smaller project' },
    description: {
      ar: 'سطر واحد يكفي هنا.',
      en: 'One line is enough here.',
    },
    tech: ['JavaScript', 'CSS'],
  },
  {
    id: '06',
    kind: 'code',
    url: 'https://github.com/your-username/your-repo',
    title: { ar: 'مشروع أصغر', en: 'A smaller project' },
    description: {
      ar: 'سطر واحد يكفي هنا.',
      en: 'One line is enough here.',
    },
    tech: ['Python'],
  },
]
