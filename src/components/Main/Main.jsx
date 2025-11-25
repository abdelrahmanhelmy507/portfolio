import { useState } from "react";
import "./Main.css";
const myProjects = [
  {
    id: 1,
    title: "Gym Templet",
    cateegory: ["html", "css"],
    description:
      " my first templet is contain html and css and non responsive ",
    imgurl: "./Screenshot 2025-08-07 221112.png",
  },
  {
    id: 2,
    title: "Gym Templet (js)",
    cateegory: ["html", "js"],
    description:
      " my first templet is contain html and css and non responsive ",
    imgurl: "./Screenshot 2025-08-07 221112.png",
  },
  {
    id: 3,
    title: "Gym Templet (react)",
    cateegory: ["html", "css" , "react"],
    description:
      " my first templet is contain html and css and non responsive ",
    imgurl: "./Screenshot 2025-08-07 221112.png",
  },
  {
    id: 4,
    title: "Gym Templet back",
    cateegory: [,"nodejs"],
    description:
      " my first templet is contain html and css and non responsive ",
    imgurl: "./Screenshot 2025-08-07 221112.png",
  },
  {
    id: 5,
    title: "Gym Templet back",
    cateegory: [ "nodejs"],
    description:
      " my first templet is contain html and css and non responsive ",
    imgurl: "./Screenshot 2025-08-07 221112.png",
  },
  {
    id: 6,
    title: "Gym Templet react",
    cateegory: ["html", "react"],
    description:
      " my first templet is contain html and css and non responsive ",
    imgurl: "./Screenshot 2025-08-07 221112.png",
  },{
    id: 7,
    title: "Gym Templet",
    cateegory: ["html", "css"],
    description:
      " my first templet is contain html and css and non responsive ",
    imgurl: "./Screenshot 2025-08-07 221112.png",
  }
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
    <div className="projects flex">
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
                    <div className=" icon icon-link"></div>
                    <div className=" icon icon-github"></div>
                  </div>
                  <div className="link">
                    <a href="">
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
