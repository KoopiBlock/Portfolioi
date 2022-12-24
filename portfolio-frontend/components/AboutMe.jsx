import React from 'react'
import { GiEyeOfHorus } from "react-icons/gi";

const AboutMe = ({ props }) => {
  return (
    <div className='flex flex-row m-auto w-[100%]'>
        <div className='md:w-[65%] w-[60%] md:m-5 m-4'>
            <p className='md:text-[23px] text-[15px] md:leading-9 leading-5 text-[#fff]'>
                {props.aboutMePargraph}
            </p>
        </div>
        <div className='md:w-[35%] w-[30%] md:mx-10 mx-3' >
            {props.bulletPoints.map((bulletpoint, index) => (
                 <div className='flex md:my-10 my-5'>
                 <GiEyeOfHorus className='mx-3  text-[#2fcbff] md:text-[34px] text-[20px]'/> <p className='md:text-[24px] text-[10px] text-[#fff]' key={index} >{bulletpoint}</p>
             </div>
            ))}
        </div>
    </div>
  )
}

export default AboutMe