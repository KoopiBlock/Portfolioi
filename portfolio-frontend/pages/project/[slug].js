import React from 'react'
import { client, urlFor } from '../../lib/sanity_client'
import shuffle from 'lodash.shuffle'
import {PortableText} from '@portabletext/react'
import { FaGithub } from "react-icons/fa";
import { ImSphere } from "react-icons/im";

import { motion } from 'framer-motion'

const projectPage = ({ project, projects }) => {

  console.log(project)

  return (
    <div className='w-[90%] lg:w-[70%] md:w-[90%] m-auto justify-center flex flex-col'>
      <div className='text-center'>
        <h1 className='text-[55px] text-[#e7fdff] font-extrabold tracking-wider'>{project.name}</h1>
        <h1 className='text-[15px] text-[#2fcbff] '>{project.releaseDate}</h1>
        <div className='flex flex-wrap justify-center mt-[30px]'>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            href={project.githubUrl}>
              <FaGithub className='text-[#e7fdff] mx-5 text-[35px]'/>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            href={project.webUrl}>
              <ImSphere className='text-[#e7fdff] mx-5 text-[35px]'/>
          </motion.a>
        </div>
      </div>
      <div className='my-[40px] flex flex-col md:flex-row justify-center'>
        <div className='md:w-[50%] w-[80%] mx-[2em] text-[20px] text-[#e7fdff]'>
          <PortableText value={project.myRichTextExample} />
        </div>
        <div className='w-[30%] mx-[2em]  my-5'>
          <h1 className='underline text-[20px] mb-[20px] text-[#e7fdff]'>Technologies Used:</h1>
          <div className='flex md:flex-wrap flex-col justify-center '>
            {project.techStack?.map((tech, i) => (
              <div key={i}>
                <p className='text-[#2fcbff] text-[15px] mr-[20px] mt-[10px]'>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto'>
        <img src={urlFor(project.imageBanner).url()} alt={project.name} />
      </div>
    </div>
  )
}

export default projectPage

export const getStaticPaths = async () => {
    const query = `*[_type == "project"]{
        slug{
        current
      }   
    }`

    const projects = await client.fetch(query)
    
    const paths = projects.map((project) => ({
        params: {
            slug: project.slug.current
        }
    }))

    return {
      paths,
      fallback: false
    }
  
  }
  
  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "project" && slug.current == '${slug}'][0]`
    const productQuery = '*[_type == "project"]'
    
    const project = await client.fetch(query)
    const projects = await client.fetch(productQuery)
  
   
    return {
      props: { 
        projects:shuffle(projects),
        project,
       }
    }
  }