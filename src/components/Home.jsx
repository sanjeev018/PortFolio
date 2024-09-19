import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs , FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import avif from "../../public/photo.avif";
import { FaGithub } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* left container   */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
             
          <ReactTyped
          className="text-red-700 font-bold"
          strings={["Developer" , "Programmer" , "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              repellendus, culpa placeat deleniti illo sequi officia inventore
              quaerat accusantium nobis. Est molestias harum adipisci ullam modi
              ipsa porro a at ad asperiores,
            </p>
            <br />
            {/* {social media icons} */}
            <div className="flex flex-col justify-between md:flex-row space-y-6 md:space-y-0 items-center">

            <div className="space-y-2">
              <h1 className="font-bold">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                  <FaLinkedin className="text-2xl cursor-pointer" />
                </li>
                
                <li>
                  <FaGithub className="text-2xl cursor-pointer" />
                </li> 
                
                <a href="https://www.facebook.com/sanjeev.gour.3386" target="_blank">
                <li>
                  <FaSquareFacebook className="text-2xl cursor-pointer" />
                </li>
                </a>

                <li>
                  <FaXTwitter className="text-2xl cursor-pointer" />
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1 className="font-bold">Currently working on</h1>
              <div className="flex space-x-5">
              <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />

              </div>
            </div>
            </div>

          </div>

          {/* {right container} */}
          <div className="md:w-1/2 md:ml-[48px] md:mt-[20px] order-1">
          <img src={avif} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
          
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
