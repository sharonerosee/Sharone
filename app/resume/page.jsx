"use client";

// import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
// import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about = {
  title: 'About me',
  description: 'Informatics Engineering student at Universitas Multimedia Nusantara with experience in web development for campus organizations. Passionate about creating innovative IT solutions and eager to contribute to dynamic projects, with a focus on website and application development.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sharone Angelica"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 889-7338-3838"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Gmail",
      fieldValue: "sharone.angelica@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian"
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/~',
  title: 'My experience',
  description:
    '',
  items: [
    {
      company: "UMN ECO 2024",
      project: "UMN ECO`s Web",
      position: "Front End Developer",
      duration: "2024 - Present",
    },
    {
      company: "Cross Platform Programming Class",
      project: "Cloning App",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Object Oriented Programming Class",
      project: "Movie Review Site",
      position: "Front End Developer",
      duration: "2023",
    },
    {
      company: "Intro to Technology Class",
      project: "Virtual Pet Game",
      position: "Front End Developer",
      duration: "2022",
    },
    {
      company: "Intro to Technology Class",
      project: "Clicker Game",
      position: "Front End Developer",
      duration: "2022",
    },
  ]
}

//education data
const education = {
  icon: '/assets/~',
  title: 'My education',
  description: '',
  items:
    [
      {
        Course: "Python Training Intermediate Level",
        Organizer: "Sololearn",
        Year: "2024"
      },
      {
        Course: "Python Training Advance Level",
        Organizer: "Sololearn",
        Year: "2024"
      },
      {
        Course: "Coding Foundation",
        Organizer: "Sololearn",
        Year: "2024"
      },
      {
        Course: "HCIA-AI V3.5",
        Organizer: "Huawei",
        Year: "2024"
      },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"

const Resume = () => {
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
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.Year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Course}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Organizer}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return(
                      <li key={index}
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;