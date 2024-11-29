"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lobortis gravida. Donec consequat eleifend massa.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sharone Angelica"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 889-7338-3838"
    },
    // {
    //   fieldName: "Experience",
    //   fieldValue: "2+ Years"
    // },
    {
      fieldName: "Gmail",
      fieldValue: "sharone.angelica@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian"
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lobortis gravida. Donec consequat eleifend massa.",
  items: [
    {
      company: "Tech Solutions Inc.", //project uts uas
      position: "Front End Developer", 
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc.", //project uts uas
      position: "Front End Developer", 
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc.", //project uts uas
      position: "Front End Developer", 
      duration: "2022 - Present",
    },
  ]
}

const Resume = () => {
  return (
    <div>resume page</div>
  )
}

export default Resume;