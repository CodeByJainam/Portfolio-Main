import {
  Portfolio,
  robot,
  parallaxscroll,
  ecommercewebsite,
  backend,
  creator,
  coursera,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
  EMS,
  restaurant,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web Developer",
    icon: creator,
  },
];

const achievements = [
  {
    title: ["Bachelor of Computer Applications (BCA)"],
    company_name: "BCA",
    icon: fcc,
    iconBg: "#383E56",
    date: "2021 - May 2024",
    points: ["LJ College of Computer Applications", "Ahmedabad, Gujarat"],
    credential: [
      "",
      "",
    ],
  },
  {
    title: ["Skills"],
    company_name: "Skills",
    icon: hr,
    iconBg: "#E6DEDD",
    // date: "Apr 2025",
    points: [
      "Soft Skills:- Communication, Problem-Solving, Teamwork, Time Management, Adaptability.",
      "Languages:- English, Hindi, Gujarati."
    ],
    // credential: [
    //   "",
    //   "",
    //   "",
    //   "",
    // ],
  },
  // {
  //   title: ["Certiport"],
  //   company_name: "Certiport",
  //   icon: cp,
  //   iconBg: "#383E56",
  //   date: "Apr 2025",
  //   points: ["IT Specialist - HTML and CSS", "IT Specialist - Databases"],
  //   credential: [
  //     "",
  //   ],
  // },
  {
    title: ["Coursera"],
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#0056d2",
    // date: "Jul 2025",
    points: ["HTML5", "Java", "JavaScript", "DBMS", "C", "Networking Fundamentals", "UX"],
    credential: [""],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Jainam proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Jainamdoes.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "Jainam boosted our website traffic by 50% through his smart optimization. We are Truly grateful!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "A modern and fully responsive front-end e-commerce website built. Designed to provide a smooth and engaging user experience with a clean, intuitive interface.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "violet-text-gradient",
      },

    ],
    image: ecommercewebsite,
    source_code_link: "https://hydria.vercel.app/",
  },
  {
    name: "Restaurant (Production Demo)",
    description:
      "Built a production-ready single-page application demonstrating UI design, front-end logic, deployment and monitoring . Implemented modular components, responsive layout and best practices"
    ,
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },

    ],
    image: restaurant,
    source_code_link: "https://project-restaurant-tau.vercel.app/",
  },
  {
    name: "Employee Management System (EMS)",
    description:
      "Built a responsive CRUD application using React.js to manage employee records. Implemented client-side persistence with localStorage to allow basic offline support.Designed modular, reusable components and managed state"
    ,
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "violet-text-gradient",
      },
    ],
    image:EMS,
    source_code_link: "https://ems-employee-management-system-omega.vercel.app/",
  },
  {
    name: "Personal Portfolio",
    description:
     "Built a responsive personal portfolio website to showcase skills and projects with clean UI and smooth navigation."
    ,
    tags: [
     {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "violet-text-gradient",
      },

    ],
    image: Portfolio,
    source_code_link: "https://project-restaurant-tau.vercel.app/",
  },
   {
    name: "3D Robot With Cursor Effect",
    description:
   "An immersive 3D website built using Spline and front-end technologies, featuring a 3D robot model integrated into a modern user interface. Designed to provide an interactive and visually appealing experience for users."
    ,
    tags: [
     {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Spline",
        color: "pink-text-gradient",
      },
      

    ],
    image: robot,
    source_code_link: "https://3-d-robot-spline.vercel.app/",
  },
   {
    name: "Parallax Scroll",
    description:
     "Interactive, high-performance parallax scrolling website built with GSAP ScrollTrigger to create smooth, multi-layered motion that enhances storytelling and product presentation."
    ,
    tags: [
     {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },

    ],
    image: parallaxscroll,
    source_code_link: "https://projects-parallax-scroll.vercel.app/",
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, services, words };
