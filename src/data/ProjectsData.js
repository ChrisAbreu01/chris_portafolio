import practicumLibrary from "../images/practicumlibrary.png";
import practicumCoffeeShop from "../images/practicumcoffeeshop.png";
import edtonomy from "../images/edtonomy.png";
import aroundTheUS from "../images/aroundtheus.png";
import whatToWear from "../images/project-react.png";

const data = [
  {
    id: 1,
    name: "Edtonomy",
    production: true,
    image: edtonomy,
    code: "https://www.edtonomy.com/",
    live: `https://www.edtonomy.com/`,
    description:
      "The EdTonomy platform is a software platform that is designed to help learners take control of their own learning. It provides a variety of features that support personalization, flexibility, mastery-based learning, and social learning.",
    techs_used: ["React", "Redux", "Node.js", "HTML", "Tailwind"],
  },
  {
    id: 2,
    name: "What to wear",
    image: whatToWear,
    production: true,
    code: `https://github.com/ChrisAbreu01/se_project_react`,
    live: `	https://www.wtw.twilightparadox.com`,
    description:
      "The What-to-Wear web app provides users with recommendations on what to wear based on the current weather conditions in their location.",
    techs_used: ["React", "Redux", "Webpack", "Node.js", "GitHub"],
  },
  {
    id: 3,
    name: "Around the US",
    image: aroundTheUS,
    production: true,
    code: "https://github.com/ChrisAbreu01/se_project_aroundtheus",
    live: `https://chrisabreu01.github.io/se_project_aroundtheus/`,
    description:
      "This is a project that showcases the hometowns of some of Practicum's tutors and personnel. They share some interesting information about the places they come from, share some of their culture, and pictures of their hometowns.",
    techs_used: ["JavaScript", "HTML", "CSS", "NPM", "Webpack"],
  },
  // {
  //   id: 3,
  //   name: "Practicum Coffee Shop",
  //   production: true,
  //   image: practicumCoffeeShop,
  //   code: "https://github.com/ChrisAbreu01/web_project_2",
  //   live: `https://chrisabreu01.github.io/web_project_2/`,
  //   description:
  //     "This is a versatile landing page that can be repurposed for a variety of businesses and applications.",
  //   techs_used: ["HTML", "CSS", "BEM"],
  // },
  {
    id: 4,
    name: "Practicum Library",
    image: practicumLibrary,
    production: true,
    code: "https://github.com/ChrisAbreu01/web_project_1",
    live: "https://chrisabreu01.github.io/web_project_1/",
    description:
      "This is a versatile landing page that can be repurposed for a variety of businesses and applications.",
    techs_used: ["HTML", "CSS", "BEM"],
  },
];

export default data;
