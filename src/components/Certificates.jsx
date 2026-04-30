import React from 'react'
import { motion } from 'framer-motion'
import { certificationData } from '../assets/assets'
import { FiAward, FiExternalLink } from 'react-icons/fi' 

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='certificates'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Certifications & <span className='text-purple'>Workshops</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Professional training and technical workshops I have completed
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {certificationData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group bg-dark-300 border border-white/5 p-6 rounded-2xl hover:border-purple/50 transition-all duration-300 relative overflow-hidden'
            >
              {/* Background Glow Effect */}
              <div className='absolute -right-8 -top-8 w-24 h-24 bg-purple/10 rounded-full blur-3xl group-hover:bg-purple/20 transition-all'></div>

              <div className='flex items-start justify-between mb-4'>
                <div className='p-3 bg-purple/10 rounded-xl text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300'>
                  <FiAward size={24} />
                </div>
                <span className='text-xs text-gray-500 font-medium'>{cert.date}</span>
              </div>

              <h3 className='text-lg font-bold mb-1 group-hover:text-purple transition-colors'>
                {cert.title}
              </h3>
              <p className='text-purple text-sm font-medium mb-3'>
                {cert.organization}
              </p>
              <p className='text-gray-400 text-sm mb-6 line-clamp-2'>
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-2 text-sm font-semibold text-white group-hover:text-purple transition-colors'
              >
                View Certificate <FiExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Certificates