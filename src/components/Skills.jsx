// import React from 'react'
// import { motion } from 'framer-motion'
// import { skills } from '../assets/assets'

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.1 }}
//       id='skills'
//       className='py-12 bg-dark-100'
//     >
//       <div className='container mx-auto px-6 text-center'>
//         <h2 className='text-3xl font-bold mb-4'>
//           My <span className='text-purple'>Skills</span>
//         </h2>
//         <p className='text-gray-400 max-w-2xl mx-auto mb-16'>
//           Technologies I work with to bring ideas to life
//         </p>

        
//         <div className='flex flex-wrap justify-center gap-8 max-w-6xl mx-auto'>
//           {
//             skills.map((skill, index) => (
//               <div 
//                 key={index} 
//                 className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px] text-left'
//               >
//                 <div className='flex items-center mb-4'>
//                   <skill.icon className='w-12 h-12 text-purple mr-6 flex-shrink-0'/>
//                   <h3 className='text-xl font-semibold'>
//                     {skill.title}
//                   </h3>
//                 </div>
//                 <p className='text-gray-400 mb-4 h-auto md:h-20 lg:h-24'>
//                   {skill.description}
//                 </p>
//                 <div className='flex flex-wrap gap-2 mt-auto'>
//                   {skill.tags.map((tech) => (
//                     <span key={tech} className='px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300 border border-white/5'>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Skills

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-dark-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-7">
            Technologies and tools I use to build responsive, scalable, and
            high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-dark-300
                rounded-3xl
                p-8
                border
                border-white/10
                hover:border-purple
                hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                transition-all
                duration-300
                h-full
              "
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center mb-6"
              >
                <skill.icon className="w-8 h-8 text-purple" />
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl font-semibold mb-4">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-8 mb-8 min-h-[100px]">
                {skill.description}
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 mb-6"></div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-purple/10
                      border
                      border-purple/30
                      text-purple
                      text-sm
                      font-medium
                      hover:bg-purple
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Skills;