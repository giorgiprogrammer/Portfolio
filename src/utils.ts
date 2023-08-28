export function getScreenY(id: string) {
  const node = document.getElementById(id)?.getBoundingClientRect() as DOMRect;
  // return node;
  const y = node.y - window.innerHeight;
  return Math.abs(y > 100 ? 0 : y) / node.height; // > 0
}

export function useScroll() {
  return {
    y: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
  };
}

export function onResize(fn: () => void) {
  document.addEventListener('resize', fn);
}

export const projects = [
  {
    title: 'Linux Virtual Machine',
    img_sd: '/assets/linux.png',
    img_hd: '/assets/linux.png',
    img_2k: '/assets/linux.png',
    descr: 'Personal portfolio website simulating Ubuntu 20.04, made using NEXT.js & tailwind CSS',
    uri: 'https://linux-virtual-machine-iota.vercel.app/',
    source: 'https://github.com/giorgiprogrammer/Linux-VirtualMachine',
  },
  {
    img_sd: '/assets/e-commerce.png',
    img_hd: '/assets/e-commerce.png',
    img_2k: '/assets/e-commerce.png',
    title: 'E-commerce in React',
    descr: 'A thumbnails ranking app designed for YouTubers',
    uri: 'https://e-commerce-react-4njhqonrs-giorgiprogrammer.vercel.app/',
    source: 'https://github.com/giorgiprogrammer/E-commerce-React',
  },
  {
    img_sd: '/assets/lapetite.png',
    img_hd: '/assets/lapetite.png',
    img_2k: '/assets/lapetite.png',
    title: 'Sutakku',
    descr: 'A task tracker for developer working with GitHub',
    uri: 'https://lapetitealice.com/',
    source: 'https://github.com/giorgiprogrammer?tab=repositories',
  },
  {
    img_sd: '/assets/quizu-sd.webp',
    img_hd: '/assets/quizu-hd.webp',
    img_2k: '/assets/quizu-2k.webp',
    descr: 'A fun quiz game with various categories',
    title: 'Quizu',
    uri: 'https://lyn-eva.github.io/QUIZU/',
    source: 'https://github.com/lyn-eva/QUIZU',
  },
];

export const focus = [
  {
    src: '/assets/ts.svg',
    title: 'Typescript',
    tooltip: 'JavaScript with syntax for types',
  },
  {
    src: '/assets/nodejs.svg',
    title: 'Node.js',
    tooltip: 'JavaScript runtime environment',
  },
  {
    src: '/assets/express.svg',
    title: 'Express.js',
    tooltip: 'Minimalist nodejs web framework',
  },
  {
    src: '/assets/nextjs.svg',
    title: 'Next.js',
    tooltip: 'Full stack React framework',
  },
  {
    src: '/assets/react.svg',
    title: 'React.js',
    tooltip: 'JS ibrary for building user interfaces',
  },
  {
    src: '/assets/tailwind.svg',
    title: 'Tailwindcss',
    tooltip: 'Utility-first CSS framework',
  },
  {
    src: '/assets/prisma.svg',
    title: 'Prisma',
    tooltip: 'Next-generation Node.js ORM',
  },
  {
    src: '/assets/mysql.svg',
    title: 'MySQL',
    tooltip: 'Relational database management system',
  },
];
export const familiar = [
  {
    src: '/assets/docker.svg',
    title: 'Docker',
    tooltip: 'open platform for developing, shipping, and running applications',
  },
  {
    src: '/assets/python.svg',
    title: 'Python',
    tooltip: 'General-purpose programming language',
  },
  {
    src: '/assets/astro.svg',
    title: 'Astro',
    tooltip: 'Static framework with Island Architecture',
  },
  {
    src: '/assets/redux.svg',
    title: 'Redux.js',
    tooltip: 'predictable state management container',
  },
  {
    src: '/assets/firebase.svg',
    title: 'Firebase',
    tooltip: 'Backend-as-a-service platform',
  },
  {
    src: '/assets/chakraui.svg',
    title: 'Chakra UI',
    tooltip: 'UI library for React.js',
  },
  { src: '/assets/mui.svg', title: 'MUI', tooltip: 'UI library for React.js' },
  {
    src: '/assets/figma.svg',
    title: 'Figma',
    tooltip: 'Web-based designing tool',
  },
];
