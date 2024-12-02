"use client";

import { FaWhatsapp, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion"


const info = [
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    description: "(+62) 889 7336 3838",
    link: "https://wa.me/6288973363838",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sharone.angelica@gmail.com",
    link: "https://mail.google.com/",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Tangerang, Indonesia",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col xl:flex-row gap-10 xl:mt-20 mt-10">
            {info.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-6 animate-float transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-[rgba(255,255,255,0.1)_0_4px_6px_0] hover:translate-y-[-12px]"
                  >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                  </a>
                  <div>
                    <p>{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
