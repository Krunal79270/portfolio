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
  kryptoninc,
  squad,
  plutus,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  simEZ,
  OCL,
  Abhedya,
  scrap,
  archi_city,
  nado,
  spotter,
  mindmatters,
  ems,
  Arga,
  elefant,
  EmVite,
  Supi,
  aws,
  graphql,
  mysql,
  bootstrap,
  nextjs
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
    title: "Database Management",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Project Management",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
    name: "docker",
    icon: docker,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name:"AWS",
    icon: aws,
  },
  // {
  //   name:"Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name:"Next JS",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Kryptoninc",
    company_name: "Kryptoninc",
    icon: kryptoninc,
    iconBg: "#383E56",
    date: "June 2024",
    points: [
      "Management of the projects from start to end and leading the team upfront",
      "Development end to end applications from scracth to production using frontend and backend",
      "Managing the project with cross-functional teams including designers, testers, and other developers to create high-quality products.",
      "Scheduling Interviews and training freshers and polish them industry fit",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Plutus Technologies",
    icon: plutus,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain Fresher",
    company_name: "7bits",
    icon: meta,
    iconBg: "#383E56",
    date: "Jun 2022 - Jan 2023",
    points: [
     "Development of animated websites",
     "Worked on creation and deployment of smart contracts and NFTs in solidity",

    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Squad Technologies",
    icon: squad,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jun 2022",
    points: [
      "Learning and development of APIs using NodeJs and Express.Js",
      "Learnt Class and Functional components in React Js and designed some pages",
      "Database connection and storing and performing CRUD operations"
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
    name: "Spotter",
    description:
      "Spotter is the uber of jobs having dynamic candidate and company dynamic onboarding with learning of courses, giving quizzes, applying for jobs and also includes marketplace.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: spotter,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nado",
    description:
      "Nado is a AI based health care assistant provider designed for doctors. it also includes many features including basic versions of whatsapp, docusign,zoom.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: nado,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mind Matters",
    description:
      "Mind Matters is the ticketing system platform for the event.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: mindmatters,
    source_code_link: "https://github.com/",
  },
  {
    name: "Arga",
    description:
      "Arga is a web-based event management platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: Arga,
    source_code_link: "https://github.com/",
  },
  {
    name: "GST-scrap",
    description:
      "GST-scrap is a web-based finance automation platform designed to streamline the process of GST compliance by automatically downloading necessary details from the GST website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: scrap,
    source_code_link: "https://github.com/",
  },
  {
    name: "Abhedya",
    description:
      "Abhedya is an IoT-based home alarm and security solution project that sends responses from hardware using MQTT, ensuring real-time alerts and monitoring.",
    tags: [
      {
        name: "nodered",
        color: "blue-text-gradient",
      },
      {
        name: "mqtt",
        color: "green-text-gradient",
      },
    ],
    image: Abhedya,
    source_code_link: "https://github.com/",
  },
  {
    name: "SIM-E.Z",
    description:
      "SIM-E.Z is an eSIM provider platform that offers eSIMs for different countries and regions, facilitating easy connectivity for travelers.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: simEZ,
    source_code_link: "https://github.com/",
  },
  {
    name: "OCL",
    description:
      "OCL is a management platform designed for clients and suppliers, enabling efficient communication and management of resources.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
    ],
    image: OCL,
    source_code_link: "https://github.com/",
  },
  {
    name: "elefant",
    description:
      "Elefant is a toy library that allows users to rent toys, promoting sustainable play and sharing within the community.",
    tags: [
      {
        name: "graphql",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "white-text-gradient",
      },
    ],
    image: elefant,
    source_code_link: "https://github.com/",
  },
  {
    name: "EMS",
    description:
      "EMS is an employee management system designed to manage employee information and streamline HR processes.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "prime-react",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: ems,
    source_code_link: "https://github.com/",
  },
  {
    name: "Archi-city",
    description:
      "Archi-city is a city planning and construction management platform that aids in the efficient management of urban development projects.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: archi_city,
    source_code_link: "https://github.com/",
  },
  {
    name: "EmVite",
    description:
      "EmVite is a platform for gathering people and places, facilitating community events and social interactions.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: EmVite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Supi Web",
    description:
      "Supi Web is a payment integration provider platform that simplifies online transactions for businesses and consumers.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: Supi,
    source_code_link: "https://github.com/",
  },
];
// const projects = [
//   {
//     name: "Arga",
//     description:
//       "Web-based event management platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mysql",
//         color: "green-text-gradient",
//       },
//       {
//         name: "nodejs",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "GST-scrap",
//     description:
//       "Web based Finance Automation platform.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "nodejs",
//         color: "green-text-gradient",
//       },
//       {
//         name: "php",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Abhedya",
//     description:
//       "IoT based Home Alarm and Security Solution project which sends response from hardware using MQTT.",
//     tags: [
//       {
//         name: "nodered",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mqtt",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "SIM-E.Z",
//     description:
//       "eSIM provider platform which provides eSIM for different countries and regions.",
//     tags: [
//       {
//         name: "node",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "react",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "OCL",
//     description:
//       "A management platform for clients and suppliers.",
//     tags: [
//       {
//         name: "reactjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "nestjs",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "elefant",
//     description:
//       "A toy library which sells toys on rent.",
//     tags: [
//       {
//         name: "graphql",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "nextjs",
//         color: "green-text-gradient",
//       },
//       {
//         name: "reactjs",
//         color: "white-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "EMS",
//     description:
//       "Employee Management System for managing employees and their information.",
//     tags: [
//       {
//         name: "node",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "react",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Archi-city",
//     description:
//       "A city planning and construction management platform.",
//     tags: [
//       {
//         name: "node",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "react",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "EmVite",
//     description:
//       "A People and Places gathering Platform",
//     tags: [
//       {
//         name: "node",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "react",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Supi Web",
//     description:
//       "A Payment Integration Provider platform",
//     tags: [
//       {
//         name: "angular",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "react",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },

// ];

export { services, technologies, experiences, testimonials, projects };
