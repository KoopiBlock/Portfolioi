import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../styles'
import { navVariants } from '../utils/animations'
import { GiEyeOfHorus } from "react-icons/gi";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-12 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row justify-center gap-8 px-2`}>
      <div className='flex flex-row md:justify-between justify-center w-[100%]'>
        <Link href='/'>
          <h1 className="font-extrabold text-[34px] leading-[30px] text-[#d2f9ff] mx-7 flex">
            <GiEyeOfHorus className='mr-5 mt-[-10px] text-[50px] text-[#2fcbff]'/> Daniel.K
          </h1>
        </Link>
      </div>
      <ul className='flex flex-row justify-between content-center mx-auto'>
        <motion.li 
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className='mx-5 md:mx-10 font-extrabold text-[#2fcbff] text-[15px] md:text-[20px] leading-[30px]'
        >
          <Link href='/#project'>
            Projects
          </Link>
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className='mx-5 md:mx-10 font-extrabold text-[#2fcbff] text-[15px] md:text-[20px] leading-[30px]'
        >
          <Link href='/#contact'>
            Contact
          </Link>
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className='mx-5 md:mx-10 font-extrabold text-[#2fcbff] text-[15px] md:text-[20px] border-[2px] border-[#2fcbff] p-3 px-4 rounded-md mt-[-.6em] leading-[30px]'
        >
          <Link href='/resume'>
            Resume
          </Link>
        </motion.li>
      </ul>
    </div>
  </motion.nav>
);

export default Navbar;
