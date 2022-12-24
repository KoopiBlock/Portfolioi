import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'



const Footer = () => {
  return (
    
    <div className='flex flex-col m-10 justify-center'>
      
      
      <h1 className='text-[#fff] text-[22px] tracking-wider text-center'>- Made with love by me ;) -</h1>
      <div className='flex flex-row w-[70%] m-auto justify-center mt-10'>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          href='/'>
          <FaGithubSquare className='text-[#2fcbff] mx-5 text-[55px]' />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          href='/'>
          <FaLinkedin className='text-[#2fcbff] mx-5 text-[55px]' />
        </motion.a>
      </div>
      
    </div>
  )
}

export default Footer