"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TypingText from "@/components/TypingText";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/assets/Sharone_Angelica_Jovans-CV.pdf";
  link.download = "Sharone Angelica Jovans.pdf";
  link.click();
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TypingText />
            <h1 className="text-4xl sm:text-h1 md:text-6xl">
              Hello I'm <br /> <span className="text-accent text-5xl sm:text-h1 md:text-7xl font-bold">Sharone Angelica <br />Jovans</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-center sm:text-justify">
              An Informatics Engineering student at Universitas Multimedia Nusantara with experience in web development for
              campus organizations and strong teamwork skills. Passionate in creating innovative IT solutions and eager to
              contribute to dynamic projects. Interested in website developer and application developer.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={handleDownload}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="oder-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="xl:relative pb-20">
        <div className="xl:translate-y-[-40px] sm:translate-y-[30px]">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;