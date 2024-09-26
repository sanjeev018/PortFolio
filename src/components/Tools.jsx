import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import tailwind from "../../public/tailwindcss.png"
import redux from "../../public/redux.png"
import typescript from "../../public/typescript.png"
import github from "../../public/github.png"

const cardItem = [ 
    { 
        id:1,
        logo:html,
        name: "Html",
    },
    { 
        id:2,
        logo: css,
        name: "Css",
    },
    { 
        id:3,
        logo: javascript,
        name: "Javascript",
    },
    { 
        id:4,
        logo:tailwind,
        name: "TailwindCss",
    },
    { 
        id:5,
        logo: reactjs,
        name: "ReactJS",
    },
    { 
        id:6,
        logo: redux,
        name: "React-redux",
    },
    { 
        id:7,
        logo: typescript,
        name: "TypeScript",
    },
    { 
        id:8,
        logo: github,
        name: "GitHub",
    },
]

const Tools = () => {
  return (
    <div
    name="Tools"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl mb-5 font-bold">Tools</h1>
        <p className='underline'>
        I've no Tools yet but I made some projects with amazing technologies
             </p>
        <div className='grid grid-cols-3 md:grid-cols-7 gap-5 my-3'>

            {cardItem?.map(({id, logo})=> ( 

                <div
                className='flex flex-col items-center border-[2px] rounded-full  md:w-[100px] md:h-[100px] shadow-md p-1 curser-pointer hover:scale-110 duration-300'
                 key={id}>
                    <img src={logo} className='w-[150px] h-[120px] rounded-full' alt="imgs" />

                    <div>
                        {/* <div className=''>{name}</div> */}
                    </div>
                     </div>     
            ))}
        </div>
      </div>
    </div>
  )
}

export default Tools
