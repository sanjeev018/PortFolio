import React from "react";

const About = () => {
  return (
    <div
    name="About"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="font-sans">
      <h1 className="text-3xl mb-5 font-bold">About</h1>
      <p >
        Hello, I'm Sanjeev, passionate Web developer with a keen eye for FrontEnd React.
        Developer . With a background in IT , I strive to create imactful and
        visually stunnig software solutions that leaves a lasting impression.
      </p>
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
        Education & Training
      </h1>
        {" "}
        <ul className="list-disc ml-6">
          <li><span className="font-semibold">MERN Stack (MongoDB , ExpressJS, ReactJS , NodeJS) -</span>
          <span className="italic"> Geeksdoor, 2024</span>
          </li>

          <li><span className="font-semibold">B.Com (Computer) – </span>
          <span className="italic">  Barkatullah University, Bhopal, 2024</span>
          </li>

          <li><span className="font-semibold">PGDCA –  </span>
          <span className="italic">  Adarsh College, Harda (M.P.) – Ongoing</span>
          </li>
        </ul>
  
      <br />
      <br />

      <h1 className="text-green-600 font-semibold text-xl">
        Skills & Expertise
      </h1>
      <ul className="list-disc ml-6">
        <li className="">Proficient in JavaScript and building projects using React.js, React Redux, and Redux Toolkit</li>
        <li>Strong knowledge of HTML, CSS, and TypeScript </li>
        <li>Experienced in TailwindCSS and React Bootstrap </li>
        <li> Excellent problem-solving skills </li>
        <li> Effective communicator and team collaborator </li>
      </ul>

      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
        Achievements & Awards
      </h1>
      <ul className="list-disc ml-6">
          <li><span className="font-semibold">JavaScript Specialist Certification – </span>
          <span className="italic">Infosys Springboard, August 2024</span>
          </li>

          <li><span className="font-semibold">Responsive Web Design – </span>
          <span className="italic"> freeCodeCamp, August 2024</span>
          </li>
        </ul>
      
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
