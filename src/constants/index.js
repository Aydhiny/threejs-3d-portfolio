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
    icon: web,
  },
  {
    title: "Music Production",
    icon: mobile,
  },
  {
    title: "User Interface Design",
    icon: backend,
  },
  {
    title: "Social Media Marketing",
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
    iconBg: "#383E56",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };