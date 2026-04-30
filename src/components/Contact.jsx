import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    
    formData.append("access_key", "518f2f5f-9492-486d-a0a8-cc9c4b58911b");

    
    formData.append("from_name", "Portfolio Contact");
    formData.append("subject", "New Contact Message from Portfolio");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });

        event.target.reset(); 
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message!",
          icon: "error",
        });
      }

    } catch (error) {
      
      Swal.fire({
        title: "Network Error!",
        text: "Please try again later.",
        icon: "warning",
      });
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get IN <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or just want to chat? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div>
            <form onSubmit={onSubmit} className="space-y-6">

              <div>
                <label className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Lucknow, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">adityaranjan9628@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">9628137350</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">

                <a href="https://github.com/Aditya-Ranjan08" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/aditya-ranjan-b3a85836b/" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300">
                  <FaLinkedin />
                </a>

                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300">
                  <FaTwitter />
                </a>

                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300">
                  <FaDribbble />
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;