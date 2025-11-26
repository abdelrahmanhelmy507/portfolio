import { useState } from "react";
import "./Main.css";
const myProjects = [
  {
    id: 1,
    title: "Gym Template",
    cateegory: ["html", "css"],
    description:
      "A simple static Gym landing page built using HTML & CSS only. The design focuses on clean layout and basic sections without responsiveness.",
    imgurl: "/portfolio1.png",
    demo: "https://abdelrahmanhelmy507.github.io/portfolio1/",
    repo: "https://github.com/abdelrahmanhelmy507/portfolio1",
  },
  {
    id: 2,
    title: "Coffee Template",
    cateegory: ["html", "css"],
    description:
      "A coffee shop promotional template made with HTML & CSS. It includes hero section, products preview, and clean typography.",
    imgurl: "/portfolio2.png",
    demo: "https://abdelrahmanhelmy507.github.io/portfolio2/",
    repo: "https://github.com/abdelrahmanhelmy507/portfolio2",
  },
  {
    id: 3,
    title: "Leon Template",
    cateegory: ["html", "css"],
    description:
      "A modern personal portfolio template inspired by Leon Agency theme. Pure HTML & CSS with smooth sections structure.",
    imgurl: "/portfolio3.png",
    demo: "https://abdelrahmanhelmy507.github.io/portfolio3/",
    repo: "https://github.com/abdelrahmanhelmy507/portfolio3",
  },
  {
    id: 4,
    title: "Kasper Template",
    cateegory: ["html", "css"],
    description:
      "A clean creative agency template based on the Kasper theme design. Built using semantic HTML & organized CSS.",
    imgurl: "/portfolio4.png",
    demo: "https://abdelrahmanhelmy507.github.io/portfolio4/",
    repo: "https://github.com/abdelrahmanhelmy507/portfolio4",
  },
  {
    id: 5,
    title: "Tourism Template",
    cateegory: ["html", "css", "bootstrab"],
    description:
      "A responsive tourism website built using Bootstrap components. Includes sliders, cards, and responsive grids.",
    imgurl: "./portfolio5.png",
    demo: "https://abdelrahmanhelmy507.github.io/portfolio5/",
    repo: "https://github.com/abdelrahmanhelmy507/portfolio5",
  },
  {
    id: 6,
    title: "Bondi Theme",
    cateegory: ["html", "css", "bootstrab"],
    description:
      "A modern Bootstrap-based theme with multiple sections, icons integration, and responsive design inspired by Bondi.",
    imgurl: "./portfolio6.png",
    demo: "https://abdelrahmanhelmy507.github.io/portfolio6/",
    repo: "https://github.com/abdelrahmanhelmy507/portfolio6",
  },
  {
    id: 7,
    title: "Small E-commerce",
    cateegory: ["html", "css", "bootstrab", "js"],
    description:
      "A small e-commerce website with products listing, cart functionality, and interactive UI using JavaScript and Bootstrap.",
    imgurl: "./portfolio7.png",
    demo: "https://abdelrahmanhelmy507.github.io/portfolio7/",
    repo: "https://github.com/abdelrahmanhelmy507/portfolio7",
  },
  {
    id: 8,
    title: "To-Do List App",
    cateegory: ["html", "css", "bootstrab", "react"],
    description:
      "A simple and clean To-Do app built using React. Users can add, delete, and mark tasks as completed.",
    imgurl: "./portfolio8.png",
    demo: "https://abdelrahmanhelmy507.github.io/to-do-list/",
    repo: "https://github.com/abdelrahmanhelmy507/to-do-list",
  },
  {
    id: 9,
    title: "Movie Website",
    cateegory: ["html", "css", "bootstrab", "react"],
    description:
      "A movie explorer website built with React and API integration. Shows movie details, posters, and search functionality.",
    imgurl: "./portfolio9.png",
    demo: "https://abdelrahmanhelmy507.github.io/movie_website/",
    repo: "https://github.com/abdelrahmanhelmy507/movie_website",
  },
];

export default function Main() {
  const [active, setActive] = useState("all");
  const [arr ,setArr] =useState(myProjects);


  const handleClick = (selected) => { 
    setActive(selected);
    const category = myProjects.filter((item) => {

        const x = item.cateegory.find((ele) => {
          return ele === selected ;
         })
         return x === selected
        })
        setArr(category);
  }
  
  return (
    <div id="Projects" className="projects flex">
      <div className="left-side flex ">
        <button
          onClick={() => {
            setActive("all");
            setArr(myProjects)
          }}
          className={active === "all" ? "active" : null}
        >
          All projects
        </button>
        <button
          onClick={() => {
            handleClick("html");
          }}
          className={active === "html" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={active === "js" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("nodejs")
          }}
          className={active === "nodejs" ? "active" : null}
        >
          Node js & Express
        </button>
      </div>

      <div className="right-side flex">
        {arr.map((ele) => {
          return (
            <div className="card " key={ele.id}>
              <img src={ele.imgurl} alt="" />
              <div className="box ">
                <h4 className="title">{ele.title}</h4>
                <p>
                {ele.description}
                </p>
                <div className="links  flex">
                  <div className="icons flex">
                  <a href={ele.demo} target="_blank">  <div  className=" icon icon-link"></div></a>
                   <a href={ele.repo} target="_blank"> <div className=" icon icon-github"></div></a>
                  </div>
                  <div className="link">
                    <a href={ele.demo} target="_blank">
                      more <span className="icon-arrow-thin-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
