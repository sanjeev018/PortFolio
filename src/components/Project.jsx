import React, { useEffect } from "react";
import flavoro from "../../public/flavoro.png";
import todolist from "../../public/todolist.png";
import disney from "../../public/disney.png";
import AOS from "aos";
import "aos/dist/aos.css"

const cardItem = [
  {
    id: 1,
    logo: flavoro,
    name: "Flavoro: Savor Every Bite",
    about:
      "Flavoro is an online food ordering application in which we have used different types of technologies.",
    view: (
      <a href="https://flavoro-web.vercel.app/" target="_blank">
        <button
          className="border border-green-600 text-green-600 font-sans px-2 rounded hover:bg-green-400
           hover:text-white duration-300 hover:scale-105"
        >
          {" "}
          Preview
        </button>
      </a>
    ),
  },
  {
    id: 2,
    logo: todolist,
    name: "To-do List",
    about:
      "The to do list has the option to add, update and delete content and also the option to store content.",
    view: (
      <a href="https://todo-local-storage-mauve.vercel.app/" target="_blank">
        <button
          className="border border-green-600 text-green-600 font-sans px-2 rounded hover:bg-green-400
           hover:text-white duration-300 hover:scale-105"
        >
          {" "}
          Preview
        </button>
      </a>
    ),
  },
  {
    id: 3,
    logo: disney,
    name: "Disney+Hotstar clone",
    about:
      "In Hotstar clone, the data of all the movies is shown by calling the API with Seach option.",
    view: (
      <a href="https://disney-hotstar-clone-liart.vercel.app/" target="_blank">
        <button
          className="border border-green-600 text-green-600 font-sans px-2 rounded hover:bg-green-400
           hover:text-white duration-300 hover:scale-105"
        >
          {" "}
          Preview
        </button>
      </a>
    ),
  },
];

const Projects = () => {
  useEffect(()=> { 
    AOS.init({duration: "500", delay: "100"})

  },[])
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl mb-5 font-bold">Projects</h1>
        <span className="underline font-semibold"> Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem?.map(({ id, logo, name, about, view }) => (
            <div
            data-aos="fade-right"
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 curser-pointer 
              transition-shadow duration-300 hover:shadow-2xl hover:animate-none animate-pulse"
              key={id}
            >
              <img
                src={logo}
                className="w-[300px] h-[120px] p-1 rounded-md border-[2px]"
                alt="imgs"
              />
              <div>
                <div className="px-2 py-1 font-bold text-lg">{name}</div>
                <p className="px-2 text-sm text-gray-700">{about}</p>
              </div>
              <div className="justify-around px-1 py-4 space-x-4">{view}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
