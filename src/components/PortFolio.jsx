import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const cardItem = [
  {
    id: 1,
    logo: mongodb,
    name: "MongoDb",
  },
  {
    id: 2,
    logo: express,
    name: "Express",
  },
  {
    id: 3,
    logo: reactjs,
    name: "Reactjs",
  },
  {
    id: 4,
    logo: nodejs,
    name: "Nodejs",
  },
  {
    id: 5,
    logo: python,
    name: "Python",
  },
  {
    id: 6,
    logo: java,
    name: "Java",
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
          {cardItem?.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 curser-pointer hover:scale-110"
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam, molestiae.
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
