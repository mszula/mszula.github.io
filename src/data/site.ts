// ---------------------------------------------------------------------------
// Site config. Deliberately light — no job titles, years or numbers that go
// stale. The "serious CV" stuff lives on LinkedIn.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Mateusz Szuła',
  initials: 'MS',
  location: 'Rybnik, Poland',
  // Casual, evergreen one-liner
  tagline: "I build odd little things — for the web, the terminal and old game consoles.",
  // SEO / Open Graph
  description:
    'Mateusz Szuła — engineer and tinkerer. A sorting-algorithm visualiser, a ' +
    'from-scratch remake of a 1998 adventure game, and assorted low-level ' +
    'rabbit holes.',
  url: 'https://mszula.github.io',
  socials: [
    { label: 'GitHub', handle: '@mszula', href: 'https://github.com/mszula', icon: 'github' },
    {
      label: 'LinkedIn',
      handle: 'in/mszula',
      href: 'https://www.linkedin.com/in/mszula/',
      icon: 'linkedin',
    },
  ],
} as const;
