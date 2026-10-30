/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every piece of copy on the site lives here. Change text without touching a
 * single component. Layout is driven by geometry (see `tokens.ts`), never by
 * the length of the content that happens to be sitting in it today.
 * ---------------------------------------------------------------------------
 */

export const site = {
  /** Shown letter-by-letter in the hero. Keep it short — it is the poster. */
  displayWord: 'PORTFOLIO',
  /** Index of the character in `displayWord` that the face illustration replaces. */
  faceLetterIndex: 5, // P-O-R-T-F-[O]-L-I-O

  eyebrow: 'AI/ML DEVELOPER',
  year: '2026',

  firstName: 'BHARATHVAJ',
  /**
   * The signature form the hero reveals as the visitor starts scrolling —
   * deliberately separate from `firstName`, which the introduction, the poster
   * and the contact note all use.
   */
  signatureName: 'BHARATHVAJ',
  /** Leave empty until a surname is supplied — the black strip adapts either way. */
  lastName: '',

  /**
   * An invitation, not a job application. "Available to talk" rather than
   * "available for hire" is the whole difference between a personal site and
   * a job board, and it is carried by four words.
   */
  connect: {
    status: 'is available to talk',
    cta: "Let's connect",
    /** Points at the CONTACT section. Swap for a mailto: if you prefer. */
    href: '#contact',
  },

  intro: {
    heading: 'HELLO',
    lede: "Hi, I'm BHARATHVAJ.",
    paragraphs: [
      'I am an Artificial Intelligence and Machine Learning professional.',
      "I have hands-on experience in developing intelligent applications, full stack web solutions, and data-driven systems.",
      "I'm committed to building innovative, efficient, and impactful technology solutions.",
    ],
  },

  education: {
    heading: 'EDUCATION',
    items: [
      {
        degree: 'B.Sc in Artificial Intelligence and Machine Learning',
        detail: 'Rathinam Global Deemed-to-be University | 2024 – 2027',
      },
      {
        degree: 'Higher Secondary Certificate (HSC)',
        detail: 'TMT Rukmaniammal Matriculation HSS | 2024',
      },
    ],
  },

  skills: {
    heading: 'SKILLS',
    /**
     * Three columns, two rows, in file order as supplied.
     */
    items: [
      { label: 'Python', short: 'Py', src: '/assets/skills/python.svg', scale: 1 },
      { label: 'TensorFlow', short: 'Tf', src: '/assets/skills/tensorflow.svg', scale: 1 },
      { label: 'React.js', short: 'Re', src: '/assets/skills/react.svg', scale: 1 },
      { label: 'MongoDB', short: 'Mg', src: '/assets/skills/mongodb.svg', scale: 1 },
      { label: 'JavaScript', short: 'Js', src: '/assets/skills/javascript.svg', scale: 1 },
      { label: 'Scikit-learn', short: 'Sk', src: '/assets/skills/scikit-learn.svg', scale: 1 },
    ] as { label: string; short: string; src: string | null; scale: number }[],
  },

  /**
   * THE STU — abbreviated on purpose. Do not expand it.
   *
   * Every angle, drop, shadow weight and slant of handwriting is a value here
   * rather than a random seed, because randomness reads as a bug and a
   * decision reads as a hand. Rotations follow the brief: -5 / +1.2 / +4.
   */
  studio: {
    heading: 'THE STU',
    items: [
      {
        quote: "You can't compete with someone who's having fun.",
        author: 'Tiago Forte',
        rotation: -5,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
      {
        quote: 'He who is back again, never quit, quick to sail.',
        author: 'Lil Yachty',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        /* The eyes sit high and right of centre — a dead-centre crop puts the
           frame edge through them. */
        objectPosition: '56% 38%',
        href: null as string | null,
      },
      {
        quote:
          'I know of no better life purpose than to perish in attempting the great and the impossible.',
        author: 'Friedrich Nietzsche',
        rotation: 4,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
    ],
  },

  experience: {
    heading: 'PROJECTS',
    items: [
      { period: 'Food Dev', role: 'Food Delivery Web App', company: 'React.js, Python, MongoDB' },
      { period: 'Placement Prediction', role: 'Machine Learning Model', company: 'Python, Scikit-learn, Pandas' },
    ],
  },

  /**
   * The last page. The giant heading IS the button — there is no separate
   * rectangular CTA, the typography is the interface.
   *
   * `href: null` means the CTA acknowledges the click (the heading flips to
   * `acknowledged` for a beat) but goes nowhere yet. Set a mailto:, a Calendly
   * URL, or a contact route and it becomes a real link with the same
   * behaviour. Same rule for the social row: null renders as a muted label
   * holding the composition; a real URL turns it into a link. No invented
   * destinations.
   */
  footer: {
    heading: "Let's connect",
    acknowledged: 'See you there',
    sub: 'Have an idea, a project, or simply want to say hello?',
    /** The ask goes to the inbox. Swap for a Calendly or contact route later. */
    href: 'mailto:bharathvajnatarajan@gmail.com',
    marquee: ['BHARATHVAJ', 'DEVELOPER', 'AI/ML'],
    /**
     * URLs are the canonical profile paths — the `igsi` and `utm_source=share_via`
     * parameters the share sheet appends are tracking artefacts, not part of the
     * address, and they resolve identically without them.
     *
     * A `null` href renders as a muted label rather than a link, so add Behance
     * or a portfolio here the moment you have one and it lights up on its own.
     */
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharathvaj-n-41b23433a/' as string | null },
      { label: 'GitHub', href: 'https://github.com/bharathvaj-n' as string | null },
      { label: 'Email', href: 'mailto:bharathvajnatarajan@gmail.com' as string | null },
    ],
  },
} as const

export type Site = typeof site
