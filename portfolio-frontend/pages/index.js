import { Hero, TechCard, ProjectCard, AboutMe, Massage } from '../components'
import { client, urlFor } from '../lib/sanity_client'
import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { staggerContainer, dropIn, fadeIn } from '../utils/animations'




export default function Home({ pageDetails, projects }) {

  const [active, setActive] = useState('')

  const [showModal, setShowModal] = useState(false)

  const open = () => {setShowModal(true)}
  const close = () => {setShowModal(false)}

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_wdxd3zs',
      'template_ppxk5ge',
      form.current,
      '88Kc1OO783prebvJr')
      .then((result) => {
        console.log(result.text)
        open()
      }, (error) => {
        console.log(error.text)
      }
    )
    

  }
  
  console.log(active)

  return (
  
   <div className=' w-screen m-auto'>

       <div className='m-auto mt-[3em] w-[90%] lg:w-[70%] md:w-[90%]'>
        <Hero props={pageDetails} />
       </div>
       
   
      
       <div className='m-auto mt-[7em] w-[95%] lg:w-[70%] md:w-[90%]'>
        <h1 className='text-[#2fcbff]' >About me:</h1>
        <AboutMe props={pageDetails} />
       </div>

       <motion.div 
        className='m-auto mt-[7em] w-[95%] lg:w-[70%] md:w-[90%] sm:w-[100%]'
        variants={staggerContainer}
        initial='hidden' 
        whileInView='show'
        viewport={{once: false , amount: 0.25}}
       >
        <h1 className='text-[#2fcbff]' >My Tech Stack:</h1>
          <div className='flex flex-wrap justify-center w-[100%] m-auto'>
            {pageDetails.techStackCards.map((card, index) => (
              <TechCard props={card} image={urlFor(card.image).url()} key={card.name} index={index} />
            ))}
          </div>
       </motion.div>

      <div className='relative'>
       
      
        <motion.div 
          className='m-auto mt-[7em] w-[95%] lg:w-[70%] md:w-[70%] sm:w-[90%] z-10'
          variants={staggerContainer}
          initial='hidden' 
          whileInView='show'
          viewport={{once: false , amount: 0.25}}
        >
          <h1 className='text-[#2fcbff]'>Projects I did:</h1>
          <div className='flex flex-wrap justify-center w-[100%]' id='project'>
            {projects.map((project, index ) => (
              <ProjectCard 
                props={project}
                index={index}
                image={urlFor(project.image).url()}
                tech={project.techStack}
                key={project.name} 
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>

      </div>



       <div className='m-auto mt-[7em] w-[100%] lg:w-[70%] md:w-[70%]'>
        <h1 className='text-[#2fcbff] text-[45px] text-center font-bold tracking-widest '>Lets Talk!</h1>
        { showModal && 
            <motion.div 
              variants={staggerContainer}
              initial='hidden' 
              whileInView='show'
              viewport={{once: false , amount: 0.25}}
            >
              <Massage onClick={close}/>
            </motion.div>
          }
        <div className='m-auto w-[70%]'>            
          <form className=' m-2 flex flex-col align-center' id='contact' onSubmit={sendEmail} ref={form}>
            <label className='text-[#ffff] my-2'>Name:</label>
            <input type="text" name="user_name" className='border-[#2fcbff] border-2 rounded-[10px] text-[#ffff] p-3' required/>
            <label className='text-[#ffff] my-2'>Email:</label>
            <input type="email" name="user_email" className='border-[#2fcbff] border-2 rounded-[10px] text-[#ffff] p-3' required/>
            <label className='text-[#ffff] my-2'>Message:</label>
            <textarea name="message" className='border-[#2fcbff] border-2 rounded-[10px] text-[#ffff] p-3' required/>
            <div className=' m-auto justify-center '>
              <motion.input
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                type="submit"
                value='Lets Talk'
                className='text-[#ffff] my-8 py-3 px-8 border-[#2fcbff] bg-[#2fcbff] border-2 rounded-[10px] ' 
              />
            </div>
          </form>
        </div>
          
       </div>
   </div>

  )
}

export async function getStaticProps() {
  const mainPageQuery = '*[_type == "mainPage"]'
  const projectsQuery = '*[_type == "project" ]'

  const pageDetails = await client.fetch(mainPageQuery)
  const projects = await client.fetch(projectsQuery)

  console.log(pageDetails)

  return {
    props: {
      pageDetails: pageDetails[0],
      projects: projects,
    }
  }
}