import { client, urlFor } from '../lib/sanity_client'

const resume = ({ resume }) => {

  console.log(resume.name)

  return (
    <div className='w-[80%] m-auto'>
      <div className='w-[100%] h-[100%] '>
        <h1 className='text-center text-[#d2f9ff] text-[69px] my-5' >{resume.name}:</h1>
        <img
          src={urlFor(resume.image)}
          alt='resume'
          className='w-[100%] h-[100%]'
        />
      </div>
    </div>
  )
}

export default resume

export async function getStaticProps() {
    const resumeQuery = '*[_type == "resume"]'

    const resume = await client.fetch(resumeQuery)
  
    console.log(resume)
  
    return {
      props: {
       resume: resume[0],
      }
    }
  }