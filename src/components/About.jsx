import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import { data } from "react-router-dom";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>{" "}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>
        {/* img & journey */}
        <div className=" flex flex-col md:flex-row items-center gap-12">
          {/* img */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.adityaImg}
              alt="profile"
            />
          </div>
          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                "I am a Full Stack Developer with a strong foundation in the
                MERN stack. I have completed professional internships at Softpro
                India Computer Consultants and Zidio Development, where I gained
                hands-on experience building real-world web solutions.
              </p>
              <p className="text-gray-300 mb-12">
                I focus on writing clean, maintainable code and developing
                functional applications that provide a seamless user experience.
                I am passionate about bridging the gap between robust backend
                logic and intuitive frontend design."
              </p>
              {/* card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
