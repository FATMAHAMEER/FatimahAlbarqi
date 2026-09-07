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
  name: { ar: 'فاطمة البارقي', en: 'Fatimah Albarqi' },
  email: 'FatmahALbarqi@outlook.com',
  github: 'https://github.com/fatimahalbarqi',
  linkedin: 'https://www.linkedin.com/in/fatimah-albarqi/',
  x: 'https://x.com/fatimahalbarqi',

  /* يظهران في الشريط السفلي للبطل — المدينة، والساعة الحيّة فيها.
     Shown in the hero's bottom bar: your city, and the live time there.
     قائمة المناطق الزمنية / time zone list:
     https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  location: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
  timeZone: 'Asia/Riyadh',
}

/* روابط التنقّل — العناوين فقط قابلة للتغيير، أما `id` فمرتبط بأقسام الصفحة.
   Nav links — translate the labels, but leave `id` alone: it maps to section ids. */
export const NAV = [
  { id: 'home', ar: 'الرئيسية', en: 'Home' },
  { id: 'about', ar: 'نبذة', en: 'About' },
  { id: 'experience', ar: 'الخبرة', en: 'Experience' },
  { id: 'skills', ar: 'المهارات', en: 'Skills' },
  { id: 'projects', ar: 'المشاريع', en: 'Projects' },
  { id: 'contact', ar: 'تواصل', en: 'Contact' },
]

export const CONTENT = {
  ar: {
    dir: 'rtl',
    hero: {
      titleBefore: 'أربط احتياجات الأعمال',
      titleAccent: 'بالتقنية',
      titleAfter: 'لبناء حلول رقمية تصنع قيمة مستدامة.',
      subtitle: 'تحليل الأعمال | التحول الرقمي | إدارة المشاريع التقنية',
      ctaPrimary: 'شاهد المشاريع',
      ctaSecondary: 'تواصل معي',
      scroll: 'مرّر للأسفل',
    },
    about: {
      index: '01',
      kicker: 'نبذة',
      paragraphs: [
        'أنا فاطمة البارقي، محللة أعمال وتقنية ومُنسّقة مشاريع تعمل في الاتحاد السعودي للجامعات الرياضية، حيث أساهم في قيادة المشاريع الرقمية وتحويل الأهداف التشغيلية إلى خدمات فعالة ومُدارة بشكل منظم.',
        'أركز على جمع متطلبات الأعمال، تجهيز مستندات BRD وSRS وSOP، متابعة Agile، وتنسيق الفرق متعددة التخصصات لضمان تنفيذ مشاريع قابلة للقياس مع متابعة الأداء بعد deployment.',
        'أحب بناء أنظمة رقمية تدعم الحوكمة، تعزز تجربة المستخدم، وتُسهم في التحول الرقمي في المؤسسات من خلال التعاون، التوثيق، والتعلم المستمر.',
      ],
      education: {
        kicker: 'التعليم',
        entries: [
          {
            degree: 'بكالوريوس في علوم الحاسب',
            school: 'جامعة الإمام محمد بن سعود الإسلامية · الرياض، المملكة العربية السعودية',
            period: 'يناير ٢٠٢٥',
          },
          {
            degree: 'دبلوم في إدارة الأعمال',
            school: 'جامعة الأميرة نورة بنت عبدالرحمن · الرياض، المملكة العربية السعودية',
            period: 'يناير ٢٠١٩',
          },
        ],
      },
      achievements: {
        kicker: 'الإنجازات الرئيسية',
        entries: [
          { title: 'إطلاق ٣ منصات رقمية رئيسية', description: 'الإشراف على دورة التطوير والنشر والتشغيل الكاملة بنجاح.' },
          { title: 'أثر واسع النطاق', description: 'قيادة مبادرات رقمية وتقديم الدعم التقني لأكثر من ٧٠ جامعة في المنطقة.' },
          { title: 'تمكين المستخدمين', description: 'تدريب وتهيئة أكثر من ١٠٠ مستخدم على الأنظمة والبوابات الجديدة.' },
          { title: 'قيادة المشاريع', description: 'إدارة ٦ مشاريع تحول رقمي مختلفة في الوقت نفسه بنجاح.' },
          { title: 'دمج الذكاء الاصطناعي', description: 'توجيه تنفيذ ومتابعة أداء مبادرة المساعد الذكي بالذكاء الاصطناعي.' },
        ],
      },
      awards: {
        kicker: 'الجوائز والتقدير',
        entries: [
          'خطاب توصية لإتمام ٣٥٠ ساعة من التدريب التعاوني المتميز في مدينة الملك فهد الطبية، الإدارة التنفيذية لتقنية المعلومات · مايو ٢٠٢٥',
          'شهادة تقدير كمدربة لتقديم دورة «العادات العشر للشخصية الناجحة» في كلية الخدمة الاجتماعية بجامعة الأميرة نورة.',
          'شهادة تقدير كمنظمة لتنظيم دورة «إعداد الميزانية» في كلية المجتمع بجامعة الأميرة نورة.',
          'شهادة تقدير كمشاركة في المنتدى العلمي الداخلي التاسع بكلية العلوم والدراسات الإنسانية بجامعة شقراء · ١٤٤٠–١٤٤١هـ.',
        ],
      },
      volunteer: {
        kicker: 'التطوع والأنشطة الإضافية',
        entries: [
          'منظمة مؤتمر DevFest بالتعاون مع المركز الوطني لتنمية القطاع غير الربحي وجامعة الإمام محمد بن سعود الإسلامية · ديسمبر ٢٠٢٣.',
          'خبرة تدريبية من خلال تقديم وتنفيذ دورات تدريبية متنوعة في جامعة الأميرة نورة بنت عبدالرحمن.',
        ],
      },
    },
    skills: {
      index: '03',
      kicker: 'المهارات',
      titleBefore: 'الأدوات التي',
      titleAccent: 'أعتمد',
      titleAfter: 'عليها.',
      intro: 'أجمع بين تحليل الأعمال، إدارة المشاريع، والتقنيات التي تسهل التنفيذ الفعلي للحلول الرقمية.',
      groups: [
        { title: 'تحليل الأعمال', items: ['Requirements Gathering', 'BRD', 'SRS', 'SOP', 'Workflow Design', 'UI/UX Review', 'UAT', 'Stakeholder Management'] },
        { title: 'تسليم المشاريع', items: ['Agile', 'Project Coordination', 'Sprint Planning', 'Jira', 'Confluence', 'Risk Management', 'Microsoft Project'] },
        { title: 'التحول الرقمي', items: ['Governance', 'Process Improvement', 'Technical Documentation', 'Knowledge Management', 'AI Initiatives', 'Platform Management'] },
        { title: 'الحلول التقنية', items: ['ASP.NET', 'SQL Server', 'GitHub', 'GitLab', 'System Testing', 'Prompt Engineering', 'ChatGPT'] },
      ],
    },
    projects: {
      index: '04',
      kicker: 'المشاريع',
      titleBefore: 'أبرز',
      titleAccent: 'إنجازاتي',
      titleAfter: 'الرقمية.',
      intro: 'أعرض هنا بعض المشاريع والأنظمة التي ساهمت فيها في مجالات التحليل، التطوير، والتحول الرقمي.',
      viewProject: 'افتح المشروع',
      viewCode: 'عرض الكود',
      moreTitle: 'مشاريع أخرى',
    },
    contact: {
      index: '05',
      kicker: 'تواصل',
      titleBefore: 'لنتحدّث عمّا',
      titleAccent: 'تحتاجه',
      titleAfter: '.',
      intro: 'أرحب بالتواصل لفرص التعاون، المشاريع الرقمية، أو دعم التحول الرقمي في المؤسسات.',
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
      titleBefore: 'Bridging business needs and technology',
      titleAccent: 'to build',
      titleAfter: 'digital solutions that create lasting value.',
      subtitle: 'Business Analysis | Digital Transformation | Technical Project Management',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll',
    },
    about: {
      index: '01',
      kicker: 'About',
      paragraphs: [
        'I’m Fatimah Albarqi, an IT Business Analyst focused on digital transformation, project delivery, and turning business needs into practical solutions.',
        'I work on requirements gathering, technical documentation, Agile coordination, and cross-functional collaboration to ensure initiatives are aligned and measurable.',
        'I enjoy building digital systems that improve operations, strengthen governance, and support better decision-making across organizations.',
      ],
      education: {
        kicker: 'Education',
        entries: [
          {
            degree: 'Bachelor’s Degree in Computer Science',
            school: 'Imam Mohammad Ibn Saud Islamic University · Riyadh, Saudi Arabia',
            period: 'January 2025',
          },
          {
            degree: 'Diploma in Business Administration',
            school: 'Princess Nourah Bint Abdulrahman University · Riyadh, Saudi Arabia',
            period: 'January 2019',
          },
        ],
      },
      achievements: {
        kicker: 'Key Achievements',
        entries: [
          { title: 'Launched 3 Major Digital Platforms', description: 'Successfully oversaw the complete development, deployment, and operational rollout lifecycle.' },
          { title: 'Widespread Impact', description: 'Led digital initiatives and provided technical support serving over 70 universities across the region.' },
          { title: 'User Empowerment', description: 'Trained and onboarded more than 100 users on newly implemented systems and portals.' },
          { title: 'Project Leadership', description: 'Successfully managed 6 distinct digital transformation projects simultaneously.' },
          { title: 'AI Integration', description: 'Directed the execution and continuous monitoring of a Smart AI Assistant initiative.' },
        ],
      },
      awards: {
        kicker: 'Awards & Recognition',
        entries: [
          'Recommendation Letter for completing 350 hours of exceptional cooperative training at King Fahad Medical City (KFMC), Executive Administration of IT · May 2025.',
          'Certificate of Appreciation as Trainer for delivering “The Ten Habits of a Successful Personality” course at the College of Social Work, PNU.',
          'Certificate of Appreciation as Organizer for organizing the “Budget Preparation” course at the Community College, PNU.',
          'Certificate of Appreciation as Participant in the Ninth Internal Scientific Forum at the College of Science and Human Studies, Shaqra University · 1440–1441 AH.',
        ],
      },
      volunteer: {
        kicker: 'Volunteer & Extra-Curricular Activities',
        entries: [
          'Conference Organizer for DevFest with the National Center for Non-Profit Sector and IMSIU · December 2023.',
          'Trainer experience delivering various training courses at Princess Nourah Bint Abdulrahman University.',
        ],
      },
    },
    skills: {
      index: '03',
      kicker: 'Skills',
      titleBefore: 'The tools I',
      titleAccent: 'work with',
      titleAfter: 'most.',
      intro: 'I combine business understanding, project execution, and practical technology to deliver effective digital solutions.',
      groups: [
        { title: 'Business Analysis', items: ['Requirements Gathering', 'BRD', 'SRS', 'SOP', 'Workflow Design', 'UI/UX Review', 'UAT', 'Stakeholder Management'] },
        { title: 'Project Delivery', items: ['Agile Methodology', 'Project Coordination', 'Sprint Planning', 'Jira', 'Confluence', 'Risk Management', 'Microsoft Project'] },
        { title: 'Digital Transformation', items: ['Governance', 'Process Improvement', 'Technical Documentation', 'Knowledge Management', 'AI Initiatives', 'Platform Management'] },
        { title: 'Technical Solutions', items: ['ASP.NET', 'SQL Server', 'GitHub', 'GitLab', 'System Testing', 'Prompt Engineering', 'ChatGPT'] },
      ],
    },
    projects: {
      index: '04',
      kicker: 'Projects',
      titleBefore: 'My selected',
      titleAccent: 'work',
      titleAfter: 'and outcomes.',
      intro: 'Here are some of the digital projects and initiatives I contributed to in analysis, development, and transformation work.',
      viewProject: 'Open project',
      viewCode: 'View code',
      moreTitle: 'More projects',
    },
    contact: {
      index: '05',
      kicker: 'Contact',
      titleBefore: "Let's talk about what",
      titleAccent: "you need",
      titleAfter: '.',
      intro: 'I’m open to collaboration on digital projects, business analysis, and transformation initiatives.',
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

export const EXPERIENCE = {
  ar: {
    index: '02',
    kicker: 'الخبرة',
    titleBefore: 'خبرتي في',
    titleAccent: 'بناء الحلول',
    titleAfter: 'الرقمية.',
    intro: 'خبرة عملية تجمع بين تحليل الأعمال، تنسيق المشاريع، التطوير التقني، ودعم التحول الرقمي من التخطيط حتى التشغيل.',
    jobs: [
      {
        company: 'الاتحاد السعودي للجامعات الرياضية (SUSF) – وزارة التعليم',
        location: 'الرياض، المملكة العربية السعودية',
        role: 'محللة أعمال تقنية ومنسقة مشاريع',
        period: 'نوفمبر ٢٠٢٥ – حتى الآن',
        categories: [
          { title: 'إدارة المشاريع وتنسيق أصحاب المصلحة', items: ['قيادة المشاريع الرقمية من التخطيط حتى النشر والتشغيل.', 'تنسيق دورات Agile وتوزيع المهام عبر Jira ومتابعة التقدم.', 'تيسير اجتماعات أصحاب المصلحة لتحديد الأولويات والتحقق من أهداف الأعمال.'] },
          { title: 'تحليل الأعمال وتسليم الحلول', items: ['جمع متطلبات الأعمال وتحويلها إلى مواصفات وظيفية.', 'إعداد BRD وSRS وSOP وسير العمل ووثائق المشاريع.', 'مراجعة تصاميم UI/UX والإشراف على أنشطة UAT قبل الإطلاق.'] },
          { title: 'التحول الرقمي والحوكمة', items: ['تطوير أطر حوكمة تعزز توثيق المشاريع ومشاركة المعرفة.', 'تنسيق تنفيذ المساعد الذكي ومتابعة الأداء التشغيلي.', 'إدارة ست منصات رقمية تدعم عمليات الاتحاد وخدماته الرقمية.'] },
          { title: 'العمليات التقنية ودعم المستخدمين', items: ['تقديم تدريب المستخدمين والدعم التقني بعد الإطلاق.', 'إدارة سجلات أصول تقنية المعلومات وطلبات الخدمة ووثائق دورة حياة المعدات.', 'تقديم الدعم التقني لأكثر من ٧٠ جامعة باستخدام منصات الاتحاد.'] },
        ],
      },
      {
        company: 'مدينة الملك فهد الطبية (KFMC)',
        location: 'الرياض، المملكة العربية السعودية',
        role: 'مطورة Full Stack · تدريب تعاوني',
        period: 'مارس ٢٠٢٥ – مايو ٢٠٢٥',
        categories: [
          { title: 'المهام والإنجازات', items: ['تطوير تطبيقات ASP.NET باستخدام C# وSQL Server وMVC.', 'بناء منصة خيرية وبوابة آمنة لإدارة المعلمين.', 'تصميم لوحات Power BI وتحليل العمليات لدعم اتخاذ القرار.', 'أتمتة إنشاء الشهادات باستخدام Excel VBA ونشر التطبيقات على الاستضافة السحابية.'] },
        ],
      },
      {
        company: 'Niche Office ART-P',
        location: 'الرياض، المملكة العربية السعودية',
        role: 'منسقة حلول تقنية وإدارية · تدريب تعاوني',
        period: 'يونيو ٢٠٢١ – أغسطس ٢٠٢١',
        categories: [
          { title: 'المهام والإنجازات', items: ['تنظيم برامج الابتكار وورش ريادة الأعمال لطلاب الجامعات.', 'تقديم التوجيه في الأعمال وتحسين تنسيق الفريق وسير العمليات.', 'تقديم الدعم التقني والإداري عبر قنوات تواصل متعددة.'] },
        ],
      },
    ],
  },
  en: {
    index: '02',
    kicker: 'Experience',
    titleBefore: 'My experience in',
    titleAccent: 'building digital',
    titleAfter: 'solutions.',
    intro: 'Practical experience across business analysis, project coordination, technical delivery, and digital transformation from planning through operations.',
    jobs: [
      {
        company: 'Saudi University Sports Federation (SUSF) – Ministry of Education',
        location: 'Riyadh, Saudi Arabia',
        role: 'IT Business Analyst & Project Coordinator',
        period: 'Nov 2025 – Present',
        categories: [
          { title: 'Project Management & Stakeholder Coordination', items: ['Lead end-to-end digital projects from planning through deployment and operational rollout.', 'Coordinate Agile sprints, assign tasks through Jira, and monitor project progress.', 'Facilitate stakeholder meetings to define priorities and validate business objectives.'] },
          { title: 'Business Analysis & Solution Delivery', items: ['Gather business requirements and translate them into functional specifications.', 'Prepare BRDs, SRSs, SOPs, workflows, and project documentation.', 'Review UI/UX designs and oversee UAT activities before production releases.'] },
          { title: 'Digital Transformation & Governance', items: ['Develop governance frameworks that strengthen project documentation and knowledge sharing.', 'Coordinate AI assistant implementation and monitor operational performance.', 'Manage six digital platforms supporting federation operations and digital services.'] },
          { title: 'Technical Operations & User Support', items: ['Deliver user training and provide post-deployment technical support.', 'Manage IT asset records, service requests, and equipment lifecycle documentation.', 'Provide technical assistance for more than 70 universities using federation platforms.'] },
        ],
      },
      {
        company: 'King Fahad Medical City (KFMC)',
        location: 'Riyadh, Saudi Arabia',
        role: 'Full Stack Developer · Cooperative Training',
        period: 'Mar 2025 – May 2025',
        categories: [
          { title: 'Responsibilities & Delivery', items: ['Developed ASP.NET web applications using C#, SQL Server, and MVC architecture.', 'Built web solutions including a charity platform and a secure teacher management portal.', 'Designed Power BI dashboards and analyzed business processes to support decision-making.', 'Automated certificate generation with Excel VBA and deployed web applications to cloud hosting.'] },
        ],
      },
      {
        company: 'Niche Office ART-P',
        location: 'Riyadh, Saudi Arabia',
        role: 'Technical & Administrative Solutions Coordinator · Cooperative Training',
        period: 'Jun 2021 – Aug 2021',
        categories: [
          { title: 'Responsibilities & Delivery', items: ['Organized innovation programs and entrepreneurship workshops for university students.', 'Provided business guidance while improving team coordination and operational workflows.', 'Delivered technical and administrative support across multiple communication channels.'] },
        ],
      },
    ],
  },
}

export const PROJECTS = [
  {
    id: '01',
    kind: 'live',
    featured: true,
    url: 'https://example.com',
    title: { ar: 'التحول الرقمي في الاتحاد السعودي للجامعات الرياضية', en: 'Digital Transformation at SUSF' },
    description: {
      ar: 'قيادة ومواءمة ستة منصات رقمية تدعم عمليات الاتحاد، مع متابعة Agile وتوثيق متطلبات الأعمال، وتحسين الحوكمة التشغيلية.',
      en: 'Led and coordinated six digital platforms supporting federation operations, while aligning Agile delivery, governance, and service continuity across stakeholders.',
    },
    tech: ['Agile', 'Jira', 'BRD', 'SOP', 'UAT'],
  },
  {
    id: '02',
    kind: 'code',
    featured: true,
    url: 'https://github.com/fatmah/smart-tourist',
    title: { ar: 'نظام توصيات السفر الذكي', en: 'Smart Tourist Recommendation System' },
    description: {
      ar: 'نظام شخصي يوصي بالوجهات السياحية باستخدام التصفية التعاونية والمحتوى مع خريطة تفاعلية وتطبيق Flutter.',
      en: 'A personalized tour recommendation system using collaborative and content-based filtering with Flutter, Firebase, and Google Maps integration.',
    },
    tech: ['Flutter', 'Firebase', 'Google Maps', 'AI'],
  },
  {
    id: '03',
    kind: 'live',
    featured: true,
    url: 'https://example.com',
    title: { ar: 'Magic Hand', en: 'Magic Hand' },
    description: {
      ar: 'دراسة جدوى واستراتيجية تسويقية كاملة لدعم الفن المحلي رقميًا، مع تخطيط موارد، ميزانية، وتنسيق فريق تنفيذ.',
      en: 'Conducted feasibility studies, marketing strategy development, and execution planning for a digital project supporting local artists, earning first place recognition.',
    },
    tech: ['SWOT', 'Strategy', 'Marketing', 'Planning'],
  },
  {
    id: '04',
    kind: 'code',
    featured: true,
    url: 'https://github.com/fatmah/stroke-prediction',
    title: { ar: 'تنبؤ السكتة الدماغية باستخدام ML', en: 'Stroke Prediction with Machine Learning' },
    description: {
      ar: 'تقييم ثلاثة خوارزميات تعلم آلي على بيانات صحية لاختيار أفضل نموذج بدقة ومعدل دقة أعلى.',
      en: 'Evaluated three machine learning models to predict stroke risk and identify the highest-performing algorithm for accuracy and precision.',
    },
    tech: ['Python', 'ML', 'SVM', 'Data Analysis'],
  },
  {
    id: '05',
    kind: 'live',
    url: 'https://example.com',
    title: { ar: 'تطبيق ويب جامعي', en: 'University Web Application' },
    description: {
      ar: 'بناء منصة تعليمية بواجهة رئيسية، لوحة إدارة، وتسجيل مستخدمين مع نظام خلفي باستخدام Node.js وMongoDB.',
      en: 'Built a university web platform with a landing page, admin panel, and registration flow using Node.js and MongoDB.',
    },
    tech: ['Node.js', 'MongoDB', 'HTML', 'CSS'],
  },
  {
    id: '06',
    kind: 'live',
    url: 'https://example.com',
    title: { ar: 'منصة تتبع الحافلات الجامعية', en: 'University Bus Tracking Platform' },
    description: {
      ar: 'تطوير منصة إلكترونية لتتبع الحافلات والجدول بين الكليات، مع تحسين تنظيم النقل الجامعي.',
      en: 'Developed a web platform to track university buses and schedules between colleges to improve transport visibility and operation.',
    },
    tech: ['Web App', 'UX', 'Operations', 'Scheduling'],
  },
]
