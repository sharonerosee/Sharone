import { useState, useEffect } from "react";

const TypingText = () => {
  const [displayText, setDisplayText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const [currentText, setCurrentText] = useState(""); 
  const [isErasing, setIsErasing] = useState(false); 
  const [textIndex, setTextIndex] = useState(0); 

  const texts = [
    "Application Developer",
    "Web Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Tech Enthusiast",
  ]; 

  const typingSpeed = 100; 
  const erasingSpeed = 50; 
  const pauseDuration = 1000;

  useEffect(() => {
    let interval;

    if (isErasing) {
      if (index > 0) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, index - 1)); // Erase one character
          setIndex(index - 1);
        }, erasingSpeed);
      } else {
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsErasing(false);
        }, pauseDuration);
      }
    } else {
      if (index < currentText.length) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev + currentText.charAt(index)); // Type one character
          setIndex(index + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsErasing(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(interval);
  }, [index, currentText, isErasing]);

  useEffect(() => {
    setCurrentText(texts[textIndex]);
  }, [textIndex]);

  useEffect(() => {
    setCurrentText(texts[0]);
  }, []);

  return (
    <span className="text-xl font-bold">
      {displayText}
      <span className="text-accent">|</span>
    </span>
  );
};

export default TypingText;
