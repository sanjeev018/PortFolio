import React from "react";
import flavoro from "../../public/flavoro.png"
import todolist from "../../public/todolist.png"
import disney from "../../public/disney.png"

const cardItem = [
  {
    id: 1,
    logo: flavoro,
    name: "Flavoro: Savor Every Bite",
    about: "React.js is a JavaScript library for building dynamic user interfaces using components.",
    view: <a href="https://flavoro-web.vercel.app/" target="_blank">
          <button className="bg-blue-500 hove:bg-blue-700 text-white font-bold px-2 py-2 rounded">
           {" "}
           Preview
         </button>
          </a>,
    sourceCode: <a href="https://github.com/sanjeev018/Disney-hotstar-clone" target="_blank">
                <button className="bg-green-500 hove:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
                   </a>    
  },
  {
    id: 2,
    logo:todolist,
    name: "To-do List",
    about: "Vite.js is a fast build tool and development server for modern web projects.",
    view: <a href="https://todo-local-storage-mauve.vercel.app/" target="_blank">
    <button className="bg-blue-500 hove:bg-blue-700 text-white font-bold px-3 py-2 rounded">
     {" "}
     Preview
   </button>
          </a>,
    sourceCode: <a href="https://github.com/sanjeev018/Todo-ReduxToolkit" target="_blank">
     <button className="bg-green-500 hove:bg-blue-700 text-white font-bold px-4 py-2 rounded">
       Source code
     </button>
        </a>

  },
  
  {
    id: 3,
    logo: disney,
    name: "Disney+Hotstar clone",
    about: "Tailwind CSS is a utility-first CSS framework for building custom designs.",
    view: <a href="https://disney-hotstar-clone-liart.vercel.app/" target="_blank">
    <button className="bg-blue-500 hove:bg-blue-700 text-white font-bold px-2 py-2 rounded">
     {" "}
     Preview
   </button>
  </a>,
    sourceCode: <a href="https://github.com/sanjeev018/Disney-hotstar-clone" target="_blank">
                <button className="bg-green-500 hove:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                 Source code
                </button>
                </a> 
  },
];

const PortFolio = () => {
  return (
    <div
    name="PortFolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl mb-5 font-bold">PortFolio</h1>
        <span className="underline font-semibold"> Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem?.map(({ id, logo, name, about , view, sourceCode }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 curser-pointer hover:scale-110 duration-500"
              key={id}
            >
              <img
                src={logo}
                className="w-[300px] h-[120px] p-1 rounded-md border-[2px]"
                alt="imgs"
              />
              <div>
                <div className="px-2 py-1 font-bold text-lg">{name}</div>
                <p className="px-2 text-gray-700">
                 {about}
                </p>
              </div>
              <div className="justify-around px-6 py-4 space-x-4"> 
                {view}
                {sourceCode}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
