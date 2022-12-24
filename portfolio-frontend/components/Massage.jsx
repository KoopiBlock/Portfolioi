import React from 'react'

import { fadeIn } from '../utils/animations'
import { motion } from 'framer-motion'

const Massage = ({ onClick }) => {
  return (
    <motion.div 
        className='flex flex-col justify-center my-2 rounded-[4px] '
        variants={fadeIn('right', 'spring', 0.75)}
    >
        <h1 className='text-[#ffff] text-center text-[30px] py-2 '>Thanks you! will reply as soon as possible!</h1>
        <motion.button 
            className='text-[#2fcbff] m-auto text-center text-[20px] my-5 rounded-[12px] border-[#2fcbff] w-[20%] border-[2px]'
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            onClick={onClick}
        >
             Close
        </motion.button>
    </motion.div>
  )
}

export default Massage