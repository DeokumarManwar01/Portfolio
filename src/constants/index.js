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
  carrent,
  jobit,
  oneCab,
  tripguide,
  threejs,
  redis,
  cesium,
  chartjs,
  mern,
  flytbase,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MEAN Developer",
    icon: backend,
  },
  {
    title: "MERN Creator",
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
    name: "Redis",
    icon: redis,
  },
  {
    name: "cesium",
    icon: cesium,
  },
];

const experiences = [
  {
    title: "Software Development Engineer - 1",
    company_name: "Flytbase",
    icon: flytbase, // Use an appropriate icon for CesiumJS or Flytbase
    iconBg: "#383E56",
    date: "Feb 2024 – Present",
    points: [
      "Architected advanced 3D mapping using CesiumJS with terrain visualization, height-referenced entities, and altitude monitoring, reducing operational risks by 40%.",
      "Implemented orthographic view with terrain clamping and drone tracking, boosting mission success rates by 35%.",
      "Developed a guest-sharing platform with real-time drone telemetry visualization and map-based tracking, enhancing operational efficiency in international deployments by 60%.",
      "Established a multi-unit conversion system supporting international standards, increasing dashboard usability and customer satisfaction.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Manufacturing Adda",
    icon: mern,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Jan 2024",
    points: [
      "Led a complex project using React.js (TSX) for frontend and Node.js (TS) for backend, ensuring scalable and efficient architecture.",
      "Engineered and optimized AWS infrastructure, integrated Rupay payment services, and executed DevOps practices to enhance cloud computing capabilities.",
      "Improved system reliability and user experience through robust infrastructure and payment integration.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Alliedge Technologies",
    icon: mern,
    iconBg: "#383E56",
    date: "Sep 2023 – Dec 2023",
    points: [
      "Built a full-stack ERP system using React.js, Redux, Node.js, and MongoDB for EMS Electricals, reducing inventory errors by 45% and achieving 98% accuracy.",
      "Designed real-time dashboards, improving procurement decision-making speed by 95% and streamlining inventory management.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: javascript,
    iconBg: "#383E56",
    date: "Jan 2021 - Dec 2021",
    points: [
      "Developing and maintaining web applications using javascript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Cab Management System",
    description:
      "A real-time ride-sharing platform built during Afour Hackathon, connecting users and drivers seamlessly. Integrated Google Maps Autocomplete for location search and Socket.io for real-time communication. Reduced wait times and improved user experience.",
    role: "Full Stack Developer",
    context: "Hackathon Project, July 2023",
    impact:
      "Enabled real-time matching and communication; streamlined the ride booking process.",
    challenges:
      "Ensured low-latency updates and handled concurrent user requests using WebSockets.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "socket.io", color: "yellow-text-gradient" },
      { name: "google-maps", color: "pink-text-gradient" },
      { name: "redux", color: "purple-text-gradient" },
      { name: "tailwind", color: "indigo-text-gradient" },
    ],
    image: oneCab,
    source_code_link: "https://github.com/DeokumarManwar/Travel-Advisor",
  },
  {
    name: "One Music App",
    description:
      "Web application that enables users to search for Song and upload the song of their own onto the platform so that everyone can listen to it.",
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
    image: jobit,
    source_code_link:
      "https://github.com/DeokumarManwar/One-Music-Player-FrontEnd-",
  },
  {
    name: "Codechef <PCCOE> Chapter's website",
    description:
      "This was colloborative project were I have worked on designing and creating the login Page, SignUp Page, Integrating Redux, and Admin Page.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/codechefpccoe/CPC-Frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
