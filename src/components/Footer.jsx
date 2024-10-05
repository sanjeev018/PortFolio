import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sanjeev-gour-5a80502b3/"
                target="_blank"
              >
                <FaLinkedinIn
                  className="bg-blue-700 rounded-sm text-white hover:scale-105 duration-300 mt-[3px]"
                  size={20}
                />
              </a>

              <a href="https://github.com/sanjeev018" target="_blank">
                <FaGithub
                  className="hover:scale-105 duration-300 mt-[1px]"
                  size={23}
                />
              </a>

              <a
                href="https://www.instagram.com/sanjeev.gour_23/"
                target="_blank"
              >
                <FaInstagram
                  className="bg-rose-600 text-white rounded-md hover:scale-105 duration-300 mt-[2px]"
                  size={22}
                />
              </a>
              <a
                href="https://www.facebook.com/sanjeev.gour.3386"
                target="_blank"
              >
                <FaFacebook
                  className="bg-white rounded-full text-blue-700 hover:scale-105 duration-300 mt-[2px]"
                  size={22}
                />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner Rishabh Gour</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
