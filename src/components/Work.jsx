import { motion as Motion, useReducedMotion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id='experience'
      aria-labelledby='experience-heading'
      className='bg-dark-100 py-16 sm:py-20'
    >
      <div className='mx-auto max-w-6xl px-5 sm:px-8'>
        <div className='mb-9 text-center sm:mb-12'>
          <h2 id='experience-heading' className='text-3xl font-bold text-white sm:text-4xl'>
            Experience
        </h2>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg'>
            Practical experience gained through internships and hands-on web development.
          </p>
        </div>

        <div className='relative mx-auto max-w-4xl space-y-4 before:absolute before:bottom-6 before:left-1.75 before:top-6 before:w-px before:bg-purple/35 sm:space-y-5 sm:before:left-2'>
          {workData.map((data, index) => (
            <Motion.article
              key={data.company}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: 'easeOut',
              }}
              className='relative pl-7 sm:pl-10'
            >
              <span aria-hidden='true' className='absolute left-0 top-6 h-4 w-4 rounded-full border-[3px] border-dark-100 bg-purple shadow-[0_0_0_1px_rgba(139,92,246,0.5)] sm:left-0.5' />
              <div className='rounded-lg border border-white/10 bg-dark-300 p-4 sm:p-6'>
                <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4'>
                  <div>
                    <h3 className='text-lg font-semibold leading-snug text-white sm:text-xl'>{data.role}</h3>
                    <p className='mt-1 font-medium text-gray-300'>{data.company}</p>
                  </div>
                  <time className='w-fit shrink-0 rounded-md border border-purple/25 bg-purple/10 px-2.5 py-1 text-xs font-medium text-purple sm:text-sm'>
                    {data.duration}
                  </time>
                </div>

                <p className='mt-4 text-sm leading-6 text-gray-400 sm:text-base'>
                  {data.description}
                </p>

                {data.technologies?.length > 0 && (
                  <ul aria-label={`Technologies used at ${data.company}`} className='mt-4 flex flex-wrap gap-2'>
                    {data.technologies.map((technology) => (
                      <li key={technology} className='rounded border border-white/10 bg-dark-400/70 px-2.5 py-1 text-xs font-medium text-gray-300'>
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={data.certificateLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`View ${data.company} internship certificate`}
                  className='button-control button-accent-outline mt-4 w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple'
                >
                  View Certificate
                </a>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work