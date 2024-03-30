import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering",
    link: "https://github.com/aydhiny",
    icon: web,
  },
  {
    title: "Music Production",
    link: "https://www.beatstars.com/aydhiny",
    icon: mobile,
  },
  {
    title: "User Interface Design",
    link: "https://www.instagram.com/plansio_central/",
    icon: backend,
  },
  {
    title: "Social Media Marketing",
    link: "https://www.linkedin.com/in/ajdin-mehmedovic/",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Music Producer",
    company_name: "Aydhiny Beats",
    icon: starbucks,
    iconBg: "#1D24CA",
    date: "October 2018 - Present",
    points: [
      "A rising music producer with a passion for creating fresh, innovative beats that push the boundaries of the industry.",
      "With an impressive list of credits including YBN Nahmir, The Shark Puppet, QBIK, 2BONA, Lil Barty, Ogano, and many more, I've established myself as a go-to producer for artists looking to elevate their sound.",
      "Collaborating with the likes of Soulker, Fewtile, Call Me G, Evince, Depo, Sinato, and countless others,",
      "I've proven my ability to work seamlessly with others to create music that resonates with audiences worldwide.",
    ],
  },
  {
    title: "UI Designer",
    company_name: "Plansio",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Welcome to Plansio. In a world of technology, we bring the human touch.",
      "Whether you're a seasoned designer or just starting out, Plansio has something for everyone.",
      "Our Instagram page boasts over 3k followers and is filled with helpful tips, tricks, and advice to help you create engaging and user-friendly interfaces.",
      "Done eye-catching and marketing wise UI post designs and promotive content for various local agencies.",
    ],
  },
  {
    title: "Social Media Marketer",
    company_name: "Wealthy Minds, Plansio, Aydhiny",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Rounded up social media posts to over 500k+ impressions.",
      "Collaborating with international well-known producers and designers.",
      "Implementing eye-catchy visuals that allign with the goals of the agencies.",
      "Promotive content that reached over 1M+ views.",
    ],
  },
  {
    title: "Software Engineering Student",
    company_name: "Faculty of Information Technologies in Mostar",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2022 - 2026",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Researching technologies such as React, SQL, C# (Game Development & Windows Forms), Full-Stack Frameworks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've worked with him for over 4+ years in the music industry and we greatly succeeded together.",
    name: "Call Me G",
    designation: "CEO",
    company: "Call Me G Beats",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_kXmF6NYswe1tk5MghgAmPJP0Ni76OdWB6X-FV6Rg=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    testimonial:
      "I've never met a more hardworking person in general. A great leader, designer, marketing specialist and producer.",
    name: "UX Alok",
    designation: "COO",
    company: "ALOK Designs",
    image: "https://yt3.googleusercontent.com/C48q1Xl1zGW59pBaGl51SwaVG5I5YncdkuATf17b1rkxRuIO3dZTmWasNptyl3B0Z2jRKrrSv34=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    testimonial:
      "A very determined and versatile individual that likes to prove others wrong. Recommended for teamwork.",
    name: "Esmir Hero",
    designation: "CEO",
    company: "FIT Marketing",
    image: "https://www.fit.ba/content/public/images/og-image.jpg",
  },
];

const projects = [
  {
    name: "The Hunter Mouse",
    description:
      "In this adrenaline-fueled 3D platformer, step into the tiny shoes of a courageous mouse on a mission to conquer treacherous landscapes, outsmart cunning adversaries, and unveil ancient mysteries. 🏆",
    tags: [
      {
        name: "C-sharp",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Shaderlab",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Aydhiny/unity-hunter-mouse",
  },
  {
    name: "React Pomodoro Timer",
    description:
      "Web application that enables users to schedule their productivity timeline over the day. Serves as a productivity timer using the pomodoro technique. Changeable timers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Aydhiny/react-pomodoro-timer",
  },
  {
    name: "React Quote Machine",
    description:
      "A simple web-app that uses a twitter connected API that fetches motivational quotes. Done using React, HTML, CSS and plain JS. One of my beginner projects in web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };