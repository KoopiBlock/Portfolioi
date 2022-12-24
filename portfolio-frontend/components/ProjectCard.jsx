  import React from 'react'
  import Link from 'next/link';
  import { FaGithub } from "react-icons/fa";
  import { ImSphere } from "react-icons/im";
  import { fadeIn, staggerContainer } from '../utils/animations';

  import { motion } from 'framer-motion'

  
  const ProjectCard = ({ props, image, tech, index, active, handleClick  }) => {

    console.log(props.slug.current)
    const cardKey = props.name

    return (
      <div
        className='cursor-pointer md:w-[42%] w-[100% ] mt-10 mx-5 flex flex-col justify-center border-2 border-[#ffffff] rounded-[20px] py-5 overflow-hidden'
        onClick={() => handleClick(cardKey)}
      >
        <div >
            {active !== cardKey ? (
            <div>
                <div className='mt-[-37px]'>
                  <img className='w-[100%] max-h-[300px] m-auto' src={image}/>
                  <p className='text-center mt-5 text-[#e7fdff] text-[20px]'>{props.name}</p>
                </div>
                <div className='flex flex-wrap justify-center'>
                {tech?.map((tech, i) => (
                <p key={i} className='text-[#2fcbff] mx-[10px] mt-[15px] text-[15px]'>{tech}</p>
                ))}
              </div>
              
              </div>
            ) : (
              <>
               <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='text-[#e7fdff]  relative top-[5em] bg-transparent text-center z-10  cursor-pointer font-extrabold tracking-wider underline'
               >
                <Link
                  href={`/project/${props.slug.current}`}
                  className='bg-transparent'
                >
                  <p className='bg-transparent md:text-[30px] text-[30px]'>Learn More</p>
                </Link>
                </motion.div>
                <motion.div 
                  className='mix-blend-overlay h-[200%]'
                  initial={{ opacity: 0.5, }}
                  animate={{ opacity: 1,}}
                  transition={{ duration: 0.5 }}
                >
                  <div className='mt-[-70px]'>
                    <img className='w-[100%] m-auto max-h-[300px]' src={image}/>
                    <p className='text-center mt-5 text-[#e7fdff] text-[20px]'>{props.name}</p>
                  </div>
                  <div className='flex flex-wrap justify-center'>
                    {tech?.map((tech, i) => (
                    <p key={i} className='text-[#2fcbff] mx-[10px] mt-[15px] text-[15px]'>{tech}</p>
                    ))}
                  </div>
                </motion.div>
              </>
             ) } 
        </div>
      </div>
    )
  }
  
  export default ProjectCard