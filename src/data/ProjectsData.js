import spot_img from "../images/project-react.png";
import iflix from "../images/project-react.png";
import aaron from "../images/project-react.png";
import natours from "../images/project-react.png";
import oberlo from "../images/project-react.png";
import pc_tech from "../images/project-react.png";
import electrum from "../images/project-react.png";
import iflixV3 from "../images/project-react.png";
import businessClass from "../images/project-react.png";

let serverIp = "104.131.1.91";

const data = [
  {
    id: 1,
    name: "what to wear",
    image: businessClass,
    production: true,
    code: false,
    live: `https://www.americanexpress.com/en-us/business/trends-and-insights/`,
    description:
      "Business Class from American Express provides a modern business education through insights, tips, and inspiration to help your business adapt to changing times.",
    techs_used: [
      "React",
      "Redux",
      "Sass",
      "Webpack",
      "Jest",
      "CI/CD",
      "Docker",
    ],
  },
  {
    id: 2,
    name: "what to wear",
    image: iflixV3,
    production: true,
    code: "https://github.com/Kmonterohenriquez/iflix-v3",
    live: `http://${serverIp}:5001/#/`,
    description:
      "This a website which provide information about movies and series where users can watch their favorite movies and series trailers and save them into their favorite tv shows and movies sections.",
    techs_used: ["React", "Redux", "Express", "Node", "Sass", "Webpack"],
  },
  {
    id: 3,
    name: "what to wear",
    production: false,
    image: pc_tech,
    code: "https://github.com/Kmonterohenriquez/PcTech",
    live: `http://${serverIp}:4060/#/`,
    description:
      "Pc Tech is a company specialized in Computer Repairs and Services, We repair out of warranty laptops and Computer. It is a ecommerce website where users can buy most recent tech devices.",
    techs_used: [
      "React",
      "Redux",
      "Express",
      "Node",
      "Sass",
      "PostgreSQL",
      "Massive",
      // 'Bcrypt',
      "Heroku",
      "AWS",
    ],
  },
  {
    id: 4,
    name: "what to wear",
    image: spot_img,
    production: true,
    code: "https://github.com/Kmonterohenriquez/Spot",
    live: "https://spot-agency.netlify.com/",
    description:
      "Spot is an Agency website where clients can get information about awesome services of certain company. Attractive and clean design is what makes this website unique to have a great experience.",
    techs_used: ["React", "Sass", "React Router"],
  },
  {
    id: 5,
    name: "what to wear",
    image: oberlo,
    production: true,
    code: "https://github.com/Kmonterohenriquez/housing",
    live: "https://oberlo.netlify.com/",
    description:
      "Whether you’re looking to buy your home locally or expand your real estate globally, commercially, or into the luxury realm -- Oberlo can help. And with franchises and agents available in all 50 states, you’re sure to find one that specializes in your city and specific needs.",
    techs_used: ["React", "Sass", "Grid", "Flex-box"],
  },
  {
    id: 6,
    name: "what to wear",
    image: electrum,
    production: true,
    code: "https://github.com/Kmonterohenriquez/insurance-app",
    live: "https://insurance-demo.netlify.app/",
    description:
      "Evaluate business or individual customers’ needs and financial status and propose protection plans that meet their criteria. Work with clients to deliver risk management strategies that fit their risk profiles.",
    techs_used: ["React", "Sass", "Grid", "Flex-box"],
  },
  {
    id: 7,
    name: "what to wear",
    image: natours,
    production: true,
    code: "https://github.com/Kmonterohenriquez/Natours",
    live: "https://gonatours.netlify.com/",
    description:
      "Connect to the world with small group adventure travel. This an informative website about tours with incredible discount on prices. Tour & Experience Incredible Destinations is our main goal to every client we get.",
    techs_used: ["HTML5", "CSS"],
  },
  {
    id: 8,
    name: "what to wear",
    image: aaron,
    production: true,
    code: "https://github.com/Kmonterohenriquez/ecommerce-website",
    live: `http://${serverIp}:4010/#/`,
    description:
      "E-commerce website where clients can get sophisticated and the most elegant clothes such as suit, ties, pants and shoes. This was made for men who love to wear and look elegant, simple and attractive to others.",
    techs_used: ["React", "Express", "Node", "Sass", "PostgreSQL"],
  },
  {
    id: 9,
    name: "what to wear",
    image: iflix,
    production: true,
    code: "https://github.com/Kmonterohenriquez/Movie-App",
    live: `http://${serverIp}:4000/#/`,
    description:
      "This a website which provide information about movies and series where users can watch their favorite movies and series trailers and save them into their favorite tv shows and movies sections.",
    techs_used: [
      "React",
      "Redux",
      "Express",
      "Node",
      "Sass",
      "PostgreSQL",
      "Massive",
      // "Bcrypt",
      "Heroku",
      "AWS",
    ],
  },
];

export default data;
