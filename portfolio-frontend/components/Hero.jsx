import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/animations'

const Hero = ({ props }) => {
    console.log(props)
  return (
    <motion.div
     className=' flex justify-center flex-col  my-10'
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false , amount: 0.25 }}  
    >
        <motion.h1 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            className='text-[#2fcbff]'>Hi, my name is</motion.h1>
        <motion.h1 
            variants={fadeIn('up', 'tween', 0.2, 1)} 
            className='text-[#e7fdff] md:text-[65px] text-[50px] font-extrabold'>
            {props.name}
        </motion.h1>
        <motion.h1 
            variants={fadeIn('up', 'tween', 0.3, 1)} 
            className='text-[#8cc4c9] md:text-[50px] text-[33px] font-extrabold my-2'>
            {props.subTitle}
        </motion.h1>
        <motion.p variants={fadeIn('up', 'tween', 0.4, 1)} className='text-[#e7fdff] md:text-[25px] text-[20px] my-5'>
            {props.heroPargraph}
        </motion.p>
    </motion.div>
  )
}

export default Hero