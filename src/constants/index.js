const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
    showOnMobile: false,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
    showOnMobile: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "2026",
    title: "Einstein’s Block Universe and the Illusion of Free Will",
    image: "public/images/4LB3RT.png",
    link: "https://sudhanshudubey.github.io/Blog/",
  },
  {
    id: 2,
    date: "2026",
    title: "Quantum Entanglement",
    image: "public/images/entanglement.png",
    link: "https://sudhanshudubey.github.io/Blog/",
  },
  {
    id: 3,
    date: "2026",
    title: "Exploring the Architecture of Reality",
    image: "public/images/Personal Illustrations  1 - Eduardo Soldatti.png",
    link: "https://sudhanshudubey.github.io/Blog/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "AI & Deep Learning",
    items: ["RAG","RLM","Supervised Fine-Tuning (SFT)"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Language",
    items: ["Python", "Java", "JavaScript"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/sudhanshudubey",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://sudhanshudubey.github.io/Blog/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/iamcyrusdux",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sudhanshu-dubey-8a2296186/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/IMG_3006.JPG",
  },
  {
    id: 2,
    img: "/images/IMG_2486.JPG",
  },
  {
    id: 3,
    img: "/images/IMG_2653.JPG",
  },
  {
    id: 4,
    img: "/images/IMG_2985.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Gta_landing_page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Gta_landing_page.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The GTA landing page is a sleek and modern platform designed for showcasing the latest GTA releases.",
            "Instead of a cluttered, outdated site, users get a visually stunning experience with easy access to game details, trailers, and news.",
            "The page features immersive visuals, intuitive navigation, and dynamic content sections that highlight the excitement of the GTA universe.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "gta6.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sudhanshudubey.github.io/gta_landing_page/",
          position: "top-10 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Divinark AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[20vh] left-45",
      children: [
        {
          id: 1,
          name: "Divinark AI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "",
            "",
            "",
            "",
          ],
        },
        {
          id: 2,
          name: "in development",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Cryptoverse",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-70",
      windowPosition: "top-[33vh] left-70",
      children: [
        {
          id: 1,
          name: "Cryptoverse Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Cryptoverse is a dynamic crypto dashboard that offers global market stats, trending coins, and the latest news in one polished experience.",
            "Instead of fragmented market tools, users get a central spot for crypto prices, exchange data, and real-time sentiment updates.",
            "The app shows top 10 cryptocurrencies, detailed coin pages, market overview cards, and a dedicated news feed for staying ahead of market moves.",
            "It’s built as a responsive React web app with live API data, crisp visuals, and fast navigation across markets, exchanges, and news.",
          ],
        },
        {
          id: 2,
          name: "cryptoverse.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sudhanshu-cryptoverse.netlify.app",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 8,
      name: "Divinark VC",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-20",
      windowPosition: "top-[30vh] left-5",
      children: [
        {
          id: 1,
          name: "Divinark VC Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Divinark VC is a modern venture capital portal designed for fast investor onboarding and seamless dealflow tracking.",
            "It centralizes sign-in, deal review, and portfolio management with a clean, professional experience.",
            "The interface is built to feel familiar yet efficient, helping investors and founders move from interest to investment quickly.",
            "It’s developed with React and modern web tooling to ensure responsive performance and polished interaction.",
          ],
        },
        {
          id: 2,
          name: "divinark-vc.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://divinark-vc.netlify.app/sign-in?redirect_url=https%3A%2F%2Fdivinark-vc.netlify.app%2F",
          position: "top-20 right-20",
        },
      ],
    },
    {
      id: 9,
      name: "Web3 Crowdfund",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-60",
      windowPosition: "top-[46vh] left-40",
      children: [
        {
          id: 1,
          name: "Web3 Crowdfund Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Web3 Crowdfund is a blockchain-powered fundraising platform for decentralized campaigns and community-led projects.",
            "It makes it easy to create, back, and manage campaigns with transparent token-based funding mechanics.",
            "By combining decentralized finance with intuitive design, it opens fundraise flows to both creators and supporters.",
            "The build is centered on Web3 infrastructure, smart contract integration, and responsive UX.",
          ],
        },
        {
          id: 2,
          name: "web3-crowdfund.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://thirdweb.com/login?next=%2Fcontracts%2Fdeploy%2FQmUNb6tbkwcdUnyAtYzKtLasxHNmLknwbfziaQUzMF3f8n",
          position: "top-20 right-20",
        },
        ,
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Aawwkward",
      icon: "public/images/IMG_3006.JPG",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "public/images/IMG_3006.JPG",
    },
    {
      id: 2,
      name: "Cringe",
      icon: "public/images/IMG_2653.JPG",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "public/images/IMG_2653.JPG",
    },
    {
      id: 3,
      name: "Google_conference.png",
      icon: "public/images/IMG_2985.jpg",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "public/images/IMG_2985.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "public/images/IMG_2486.JPG",
      description: [
        "Hey! I’m Sudhanshu 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "public/images/Wallpaper pc pulple aesthetic y2k.webp",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "public/images/Wallpaper pc pulple aesthetic y2k.webp",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "public/images/levi-ackerman-red-glitch-profile-desktop-wallpaper-4K.jpg",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "public/images/levi-ackerman-red-glitch-profile-desktop-wallpaper-4K.jpg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
