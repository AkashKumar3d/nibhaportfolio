import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import three from "@/public/3.png";
import one from "@/public/1.png";
import two from "@/public/2.png";
import four from "@/public/4.jpeg";
import six from "@/public/6.jpeg";
import mstock from "@/public/mstock.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ecommerce Store",
    location: "Personal Project",
    description:
      "Built a role-based Ecommerce platform where Admin can create, update, and delete products, orders, and users. Users can register/login, browse products, purchase items using Stripe, and leave product reviews. Integrated Cloudinary for image management.",
    icon: "",
    date: "2024-03 - 2024-05",
  }
  // {
  //   title: "Software Developer",
  //   location: "Version Next Technologies Private Limited. (client:- mStock)",
  //   description:"Developing the mStock-2.0 React web application using At Mirae Asset Capital Markets",
  //     // "I ly work as a Software developer. My stack includes React, Next.js, JavaScript, Bootsrap, Css, Html, Express and MongoDB.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2024-06 - Current",
  // },
  // {
  //   title: "Software Developer",
  //   location: "GoFin Technology Ltd, Kandivali",
  //   description:
  //     "I am work as a Software developer. My stack includes React, Next.js, JavaScript, Bootsrap, Css, Html, Express and MongoDB.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2023-12 - 2024-06",
  // },
  // {
  //   title: "Executive Frontend Developer",
  //   location: "Agarwal Packers And Movers Ltd, Goregaon",
  //   description:
  //     "I currently work as a frontend developer. My stack includes React, Next.js, JavaScript, Bootsrap, Css, Html, Express and MongoDB.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2022-08 - 2023-12",
  // },
  // {
  //   title: "Front-End Developer Internship",
  //   location: "Agarwal Packers And Movers Ltd, Goregaon",
  //   description:
  //     "I worked as a front-end developer Intern for 2 months.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2022-05 - 2022-08",
  // },
  
  
] as const;


export const projectsData = [
  {
    title: "Ecommerce Store",
    description:
      "This is a role based store admin and user, Admin can create delete update products, orders and users, the other side user can login, buy products, give reviews to products",
    tags: ["React", , "Html-Css", "Stripe", "Cloudinary"],
    imageUrl: six,
  },
  // {
  //   title: "MStock 2.O Trading App.",
  //   description:"MStock 2.0 is a cutting-edge trading app designed for modern investors, offering real-time stock market insights, advanced charting tools, and seamless trading experiences. With intuitive features for portfolio management, in-depth analysis, and secure transactions, MStock 2.0 empowers both beginners and seasoned traders to make informed investment decisions. Stay ahead in the market with personalized alerts, expert insights, and fast execution in a user-friendly platform.",
  //   tags: ["React", "Express", "MongoDB", "Html-Css", "leaf-lete",],
  //   imageUrl: mstock,
  // },
  // {
  //   title: "Collection and Recovery Management System.",
  //   description:"Developed user-friendly front-end interfaces for a collection and recovery managementsystem, specializing in loan cases. Implemented dynamic dashboards using Chart.js to visualize key metrics such as overdue payments, recovery rates, and case allocations across different branches",
  //   tags: ["React", "Express", "MongoDB", "Html-Css", "leaf-lete",],
  //   imageUrl: six,
  // },
  // {
  //   title: "SHPL Dashboard",
  //   description:
  //     "I specialize in creating user-friendly experiences, demonstrated through my development of a client dashboard for real-time vehicle insights and a portal for easy order management. With a focus on high-quality solutions, I integrate Facebook, Google Analytics, and Firebase into frontend applications. My strong communication and collaboration skills, along with adaptability to new technologies, ensure effective project delivery.",
  //   tags: ["React", "Express", "MongoDB", "Html-Css", "leaf-lete",],
  //   imageUrl: six,
  // },
 
  // {
  //   title: "Xrypto",
  //   description:
  //     "xcrypto  shows us real time data in different currencies, Link: https://react-crypto-app-ten-theta.vercel.app/ ",
  //   tags: ["React", "Chakra-ui", "Html-Css", "Chart-js", "Coingecko-api", "axios"],
  //   imageUrl: one,
  // },
  // {
  //   title: "Vudio",
  //   description:
  //     "Vudio web application is a video player where we can upload and play video. Link: https://videohub-rho.vercel.app/",
  //   tags: ["React", "Html-Css"],
  //   imageUrl: three,
  // },
  // {
  //   title: "Natours",
  //   description:
  //     "Natours is an online tour booking demo website. Link: https://natours-8ugrn4nps-shiv-sawant.vercel.app/",
  //   tags: ["Html", "Sass",],
  //   imageUrl: two,
  // },
  // {
  //   title: "Omnifood",
  //   description:
  //     "Omnifood is a new premium food delivery demo website, Link: https://omnifood-65tzdmjxe-shiv-sawant.vercel.app/",
  //   tags: ["React", "Html-Css"],
  //   imageUrl: four,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React js",
  "Github",
  "Bootstrap",
  "Redux",
  "Vercel",
  "Postman",
  "Jira"
  
] as const;