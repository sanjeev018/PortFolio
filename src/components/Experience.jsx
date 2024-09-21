import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import java from "../../public/java.png"
import spring from "../../public/spring.png"
import springBoot from "../../public/springBoot.jpg"

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
        logo:java,
        name: "Java",
    },
    { 
        id:5,
        logo: oracle,
        name: "Oracle",
    },
    { 
        id:6,
        logo: spring,
        name: "Spring",
    },
    { 
        id:7,
        logo: springBoot,
        name: "SpringBoot",
    },
]

const Experience = () => {
  return (
    <div
    name="Eperience"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl mb-5 font-bold">Experience</h1>
        <p className='underline'>
             I've more than 1  years of Experience in below technologies
             </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>

            {cardItem?.map(({id, logo, name})=> ( 

                <div className='flex flex-col items-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 curser-pointer hover:scale-110' key={id}>
                    <img src={logo} className='w-[150px] h-[120px] rounded-full' alt="imgs" />

                    <div>
                        <div className=''>{name}</div>
                    </div>
                     </div> 
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
