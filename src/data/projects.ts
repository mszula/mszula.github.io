// ---------------------------------------------------------------------------
// Projects — the heart of the page.
//
// `accent` is a CSS custom-property name from global.css (--c-coral, --c-teal,
// …). Featured projects show a screenshot; the rest show a glyph "cover".
// No star counts on purpose — they change over time and aren't the point.
// ---------------------------------------------------------------------------

export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  repo: string;
  /** Optional live demo / guide link. */
  demo?: { label: string; href: string };
  /** Screenshot for featured projects. */
  image?: { src: string; alt: string };
  /** Big emoji used as a "cover" when there's no screenshot. */
  glyph?: string;
  /** CSS variable name for this card's accent colour. */
  accent: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'visual-sorting',
    blurb:
      'Watch sorting algorithms race across the screen — and hear them while ' +
      'they sort. 20+ algorithms, real-time Web Audio, weirdly hypnotic. ' +
      'Easily my most-starred project.',
    tags: ['Svelte', 'Web Audio', 'Algorithms'],
    repo: 'https://github.com/mszula/visual-sorting',
    demo: { label: 'Play with it', href: 'https://mszula.github.io/visual-sorting/' },
    image: {
      src: '/images/visual-sorting.png',
      alt: 'The Visual Sorting app: a screen full of bars with the algorithm picker and controls',
    },
    accent: '--c-teal',
    featured: true,
  },
  {
    name: 'wacki',
    blurb:
      'A 1998 Polish point-and-click adventure, rebuilt from scratch in C/SDL2 ' +
      '— reverse-engineered from the original .exe, down to byte-identical ' +
      'save files. Runs on everything from a laptop to a PlayStation 2.',
    tags: ['C', 'SDL2', 'Reverse engineering'],
    repo: 'https://github.com/mszula/wacki',
    demo: { label: 'Play guide', href: 'https://mszula.github.io/wacki/' },
    image: {
      src: '/images/wacki.png',
      alt: 'A scene from the Wacki point-and-click adventure game',
    },
    accent: '--c-coral',
    featured: true,
  },
  {
    name: 'crypt3-md5',
    blurb:
      "glibc's crypt(3) MD5 password scheme, faithfully reimplemented in " +
      'TypeScript. A small deep-dive into a crusty old Unix primitive.',
    tags: ['TypeScript', 'Crypto'],
    repo: 'https://github.com/mszula/crypt3-md5',
    glyph: '🔐',
    accent: '--c-purple',
  },
  {
    name: 'php-newcamd',
    blurb:
      'A Newcamd card-server client in PHP — binary protocol wrangling and raw ' +
      'sockets in a language nobody expects to see it in.',
    tags: ['PHP', 'Networking'],
    repo: 'https://github.com/mszula/php-newcamd',
    glyph: '🛰️',
    accent: '--c-blue',
  },
  {
    name: 'newcamd-client',
    blurb:
      'The same Newcamd protocol, but a clean, typed TypeScript client this time.',
    tags: ['TypeScript', 'Protocols'],
    repo: 'https://github.com/mszula/newcamd-client',
    glyph: '📡',
    accent: '--c-yellow',
  },
];
