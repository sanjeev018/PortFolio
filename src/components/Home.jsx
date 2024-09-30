import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import giphy from "../../public/giphy.webp";
import resume from "../../public/Resume.pdf";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          {/* left container   */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={70}
                backSpeed={60}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              👋 Welcome to My Frontend Playground! Hi there! I'm Sanjeev Gour,
              a passionate React Frontend Developer who transforms ideas into
              engaging, interactive user experiences. Here, you'll find a
              showcase of my favorite projects, combining clean, modern design
              with responsive, lightning-fast performance.
            </p>
            <br />
            {/* {social media icons} */}
            <div className="flex flex-col justify-between md:flex-row space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5 text-center ml-3 md:ml-0">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] text-green-500 bg-black" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] bg-black text-sky-400" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] text-green-800" />
                </div>
              </div>
              <div className="space-y-2">
                <button className="hover:bg-green-500 hover:text-white rounded px-2 font-semibold  border border-black mt-5">
                  <a href={resume} download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* {right container} */}
          <div className="md:w-1/2 md:ml-[48px] md:mt-[20px] order-1">
            <img
              src={giphy}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="this is img"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
