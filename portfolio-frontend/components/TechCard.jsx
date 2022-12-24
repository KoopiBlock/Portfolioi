import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'

const TechCard = ({ props, image, index }) => {
  
  
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
      className=' w-[20%] md:w-[15%] sm:w-[10%] mt-10 mx-5 flex flex-col justify-center rounded-[20px] py-5'
    >
      <img className='w-[50%] m-auto' src={image}/>
      <p className='text-center mt-5 text-[#e7fdff] text-[17px] md:text-[20px]'>{props.name}</p>
    </motion.div>
  )
}

export default TechCard