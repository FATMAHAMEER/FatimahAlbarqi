const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

/** سهم "للأمام" — ينعكس تلقائياً في الاتجاه من اليمين لليسار */
export const ArrowForward = (props) => (
  <svg {...base} {...props} className={`rtl:-scale-x-100 ${props.className ?? ''}`}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ArrowUp = (props) => (
  <svg {...base} {...props}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export const Github = (props) => (
  <svg {...base} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a4.3 4.3 0 0 0-1.2-3 4 4 0 0 0-.1-3S17.6 3 15 4.8a13.4 13.4 0 0 0-6 0C6.4 3 5.3 3 5.3 3a4 4 0 0 0-.1 3A4.3 4.3 0 0 0 4 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
    <path d="M9 18c-4.5 1.5-4.5-2.5-6-3" />
  </svg>
)

export const Linkedin = (props) => (
  <svg {...base} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const XLogo = (props) => (
  <svg {...base} {...props} fill="currentColor" stroke="none">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
)
