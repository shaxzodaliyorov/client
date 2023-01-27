import img from '../../images/project.jpg'
import './Projects.css'
import { text } from '../../animation/animation'
import ProjectCard from '../../ui/ProjectCard'
import { motion } from 'framer-motion'
import ProjectApi from '../../Services/project/Project'
import { useEffect } from 'react'
import { useState } from 'react'
const Project = () => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const getProject = async () => {
    setLoading(true)
    const data = await ProjectApi.GET()
    setLoading(false)
    setResult(data)
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <h1 variants={text} className='text-center text-[35px] text-[#fff] my-10' >Projects</h1>
      <div className='w-[100%] flex justify-around flex-wrap' id='projects' >
        {!result.length ? <h1 className='text-center text-[#fff] text-[20px]' >{loading ? "Loading..." : "No Projects"}</h1> : ''}
        {
          result.map((item, index) => {
            return <ProjectCard img={item.img} title={item.title} to={item.link} key={index} id={item._id} />
          })
        }
      </div>
    </motion.section>
  )
}

export default Project