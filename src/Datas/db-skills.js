import HTML5 from '../assets/skills/html.svg';
import CSS3 from '../assets/skills/css.svg';
import JAVASCRIPT from '../assets/skills/javascript.svg';
import REACTJS from '../assets/skills/reactjs.svg';
import NODEJS from '../assets/skills/nodejs.svg';
import EXPRESSJS from '../assets/skills/expressjs.svg';
import BOOTSTRAP from '../assets/skills/bootstrap.svg';
import TAILWINDCSS from '../assets/skills/tailwindcss.svg';
import MONGODB from '../assets/skills/mongodb.svg';

export const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: JAVASCRIPT,
        skillName: "JavaScript",
      },{
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: REACTJS,
        skillName: "React JS",
      },
    ],
    backend:[
        {
          link: "https://nodejs.org/en",
          imgAltText: "nodejs",
          imgSrc: NODEJS,
          skillName: "NodeJS", 
        },
        {
          link: "https://www.mongodb.com/",
          imgAltText: "mongodb",
          imgSrc: MONGODB,
          skillName: "MongoDB"
        },        {
          link: "https://expressjs.com",
          imgAltText: "expressjs",
          imgSrc: EXPRESSJS,
          skillName: "ExpressJS"
        }
        
    ],
    frameworks:[
          {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: BOOTSTRAP,
            skillName: "Bootstrap",
          },
          {
            link: "https://tailwindcss.com/",
            imgAltText: "tailwindcss",
            imgSrc: TAILWINDCSS,
            skillName: "Tailwind CSS",
          },
          
    ],
}