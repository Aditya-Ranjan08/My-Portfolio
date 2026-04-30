import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id='skills'
      className='py-12 bg-dark-100'
    >
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          My <span className='text-purple'>Skills</span>
        </h2>
        <p className='text-gray-400 max-w-2xl mx-auto mb-16'>
          Technologies I work with to bring ideas to life
        </p>

        
        <div className='flex flex-wrap justify-center gap-8 max-w-6xl mx-auto'>
          {
            skills.map((skill, index) => (
              <div 
                key={index} 
                className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] text-left'
              >
                <div className='flex items-center mb-4'>
                  <skill.icon className='w-12 h-12 text-purple mr-6 flex-shrink-0'/>
                  <h3 className='text-xl font-semibold'>
                    {skill.title}
                  </h3>
                </div>
                <p className='text-gray-400 mb-4 h-auto md:h-20 lg:h-24'>
                  {skill.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-auto'>
                  {skill.tags.map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300 border border-white/5'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Skills