import React from "react";
import tailwind from "../../public/tailwindcss.png";
import vitejs from "../../public/vitejs.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const cardItem = [
  {
    id: 1,
    logo: mongodb,
    name: "MongoDb",
    about: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
  },
  {
    id: 2,
    logo: express,
    name: "Express",
    about: "Express.js is a lightweight Node.js framework for building web and API servers.",

  },
  {
    id: 3,
    logo: reactjs,
    name: "Reactjs",
    about: "React.js is a JavaScript library for building dynamic user interfaces using components.",

  },
  {
    id: 4,
    logo: nodejs,
    name: "Nodejs",
    about: "Node.js is a JavaScript runtime for executing code on the server side.",
  },
  {
    id: 5,
    logo: vitejs,
    name: "ViteJS",
    about: "Vite.js is a fast build tool and development server for modern web projects.",
  },
  {
    id: 6,
    logo: tailwind,
    name: "Tailwind CSS",
    about: "Tailwind CSS is a utility-first CSS framework for building custom designs.",
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
          {cardItem?.map(({ id, logo, name, about }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 curser-pointer hover:scale-110 duration-500"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt="imgs"
              />
              <div>
                <div className="px-2 font-bold text-lg">{name}</div>
                <p className="px-2 text-gray-700">
                 {about}
                </p>
              </div>
              <div className="justify-around px-6 py-4 space-x-4">
                <button className="bg-blue-500 hove:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  {" "}
                  Video
                </button>
                <button className="bg-green-500 hove:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
