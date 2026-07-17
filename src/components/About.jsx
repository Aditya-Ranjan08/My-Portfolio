// import React from "react";
// import { motion } from "framer-motion";
// import { aboutInfo, assets } from "../assets/assets";
// import { data } from "react-router-dom";
// import { div } from "framer-motion/client";

// const About = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//       id="about"
//       className="py-20 bg-dark-200"
//     >
//       <div className="container mx-0 px-6">
//         {/* heading */}
//         <h2 className="text-3xl font-bold text-center mb-4">
//           About <span className="text-purple">Me</span>{" "}
//         </h2>
//         <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
//           Get to know more about my background and passion
//         </p>
//         {/* img & journey */}
//         <div className=" flex flex-col md:flex-row items-center gap-12">
//           {/* img */}
//           <div className="md:w-1/2 rounded-2xl overflow-hidden">
//             <motion.img
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, ease: "easeOut" }}
//               viewport={{ once: false, amount: 0.2 }}
//               className="w-full h-full object-cover"
//               src={assets.adityaImg}
//               alt="profile"
//             />
//           </div>
//           {/* text content */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             viewport={{ once: false, amount: 0.2 }}
//             className="md:w-1/2"
//           >
//             <div className="rounded-2xl p-8">
//               <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
//               <p className="text-gray-300 mb-6">
//                 "I am a Full Stack Developer with a strong foundation in the
//                 MERN stack. I have completed professional internships at Softpro
//                 India Computer Consultants and Zidio Development, where I gained
//                 hands-on experience building real-world web solutions.
//               </p>
//               <p className="text-gray-300 mb-12">
//                 I focus on writing clean, maintainable code and developing
//                 functional applications that provide a seamless user experience.
//                 I am passionate about bridging the gap between robust backend
//                 logic and intuitive frontend design."
//               </p>
//               {/* card */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {aboutInfo.map((data, index) => (
//                   <div
//                     key={index}
//                     className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
//                   >
//                     <div className="text-purple text-4xl mb-4">
//                       <data.icon />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
//                     <p className="text-gray-400">{data.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-dark-200"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            About <span className="text-purple">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Get to know more about my journey, experience, and passion for
            building modern web applications.
          </p>
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark-300 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-semibold mb-6 text-white">
            My Journey
          </h3>

          <p className="text-gray-300 leading-8 mb-6">
            I’m a passionate{" "}
            <span className="text-purple font-semibold">
              MERN Stack Developer
            </span>{" "}
            currently pursuing B.Tech in Computer Science & Design.
            I have completed internships at{" "}
            <span className="text-white font-medium">Softpro India</span> and{" "}
            <span className="text-white font-medium">
              Zidio Development
            </span>
            , where I gained hands-on experience building real-world web
            applications using React.js, Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-gray-300 leading-8 mb-6">
            I enjoy designing responsive user interfaces, building scalable
            backend APIs, integrating databases, and writing clean,
            maintainable code. I always strive to create applications that are
            fast, secure, and user-friendly.
          </p>

          <p className="text-gray-300 leading-8">
            Currently, I’m focused on improving my Full Stack Development
            skills, strengthening my problem-solving abilities, and preparing
            for Software Developer opportunities while continuously learning
            modern technologies.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-dark-300 rounded-2xl p-6 text-center border border-gray-700 hover:border-purple transition-all duration-300"
          >
            <h3 className="text-4xl font-bold text-purple mb-2">
              10+
            </h3>
            <p className="text-gray-400">
              Projects Completed
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-dark-300 rounded-2xl p-6 text-center border border-gray-700 hover:border-purple transition-all duration-300"
          >
            <h3 className="text-4xl font-bold text-purple mb-2">
              2
            </h3>
            <p className="text-gray-400">
              Professional Internships
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-dark-300 rounded-2xl p-6 text-center border border-gray-700 hover:border-purple transition-all duration-300"
          >
            <h3 className="text-4xl font-bold text-purple mb-2">
              MERN
            </h3>
            <p className="text-gray-400">
              Full Stack Expertise
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-dark-300 rounded-2xl p-6 text-center border border-gray-700 hover:border-purple transition-all duration-300"
          >
            <h3 className="text-4xl font-bold text-purple mb-2">
              2027
            </h3>
            <p className="text-gray-400">
              Graduation Year
            </p>
          </motion.div>

        </div>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {aboutInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-300 rounded-2xl p-6 border border-gray-700 hover:border-purple"
            >
              <div className="text-purple text-4xl mb-4">
                <item.icon />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default About;