import React from "react";

const About = () => {
  return (
    <div
    name="About"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div>
      <h1 className="text-3xl mb-5 font-bold">About</h1>
      <p>
        Hello, I'm Sanjeev, passionate Web developer with a keen eye for FrontEnd React.
        Developer . With a background in IT , I strive to create imactful and
        visually stunnig software solutions that leaves a lasting impression.
      </p>
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
        Education & Training
      </h1>
      <span>
        {" "}
        MERN (MongoDB , ExpressJS, ReactJS , NodeJS) Stack , Geeksdoor ,  2024  || B.com (Computer),
        Barkatullah Univercity , Bhopal , 2024, || PGDCA , Adarsh College , Harda (M.P.),
        Running
      </span>

      <br />
      <br />

      <h1 className="text-green-600 font-semibold text-xl">
        Skills & Expertise
      </h1>
      <span>
        Proficient in Javascript Project made with
        React.js , React ReduxJS , Redux Toolkit , HTML , CSS using Typescript strong grasp of TailwindCSS and ReactBootstrap
         Excellent Problem-solving skills Effective
        Communication and collaborator
      </span>
      {/* <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
        Professional Experience
      </h1>
      <span>
         [Job title] 
        [Company, Organization],[Dates], [Breif description of Responsibilities and Achievements] [Job title], [Company, Organization]
        ,[Dates]
      </span> */}

      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
        Achievements & Awards
      </h1>
      <span>
         JavaScript Specialist Certification from 
        Infosys Springboard , Aug 2024 | Responsive Web Design from free Code Camp , Aug 2024
        
      </span>

      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
       Mission Statement
      </h1>
      <span>
        <p>
        My mission is to leverage my skills and creativity to deliver innovative Frontend Development solutions that exceed client
        expectations and contribute positively to the digital landscape. I am commited to Continuous learning and growth , always seeking
        new challenges to continuous learning and growth , always seeking new challenges and opportunities to expand my horizons.  
        </p>
      </span>

      </div>
    </div>
  );
};

export default About;
