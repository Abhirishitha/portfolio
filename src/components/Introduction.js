import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Introduction.css";

const Introduction = () => {
const firstName = "ABHIRISHITHA";
const lastName = "NARAHARISETTI";
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  // Memoize the texts array to avoid unnecessary re-renders
const texts = useMemo(() => [
  "Full Stack Developer",
  "Java Developer",
  "ML & DS Enthusiast",
  "MERN Stack Developer",
   "AI Engineer"
], []);

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentString = texts[currentIndex];
    if (!isDeleting) {
      // Typing effect
      timer = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentText.length + 1));
        if (currentText === currentString) {
          setTimeout(() => setIsDeleting(true), 2000); // Hold text for 2 seconds
        }
      }, 150);
    } else {
      // Deleting effect
      timer = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Move to the next text
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <section id="home" className="introduction">
      {/* Background GIF removed */}

      <div className="intro-container">
        <div className="intro-box">
          {/* Static Text */}
          <p className="static-text">
            <span className="step-into-text">Step into my world !!! </span><span className="hand-icon"></span>
          </p>

          {/* Animated Name */}
 <div className="animated-name">
  {[firstName, lastName].map((line, lineIndex) => (
    <div key={lineIndex} className="name-line">
      {line.split("").map((char, index) => (
        <motion.span
          key={`${lineIndex}-${index}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: (lineIndex * line.length + index) * 0.08,
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
          className="animated-letter"
        >
          {char}
        </motion.span>
      ))}
    </div>
  ))}
</div>

          {/* About Me Button */}
          <motion.button
            className="about-button"
            onClick={handleAboutClick}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.button>

          {/* Dynamic Role Display with Typewriter Effect */}
          <motion.div
            className="dynamic-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="dynamic-text">{currentText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
