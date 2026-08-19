import React, { useState } from "react";
// Importing React icons
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRobot,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaChartBar,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiTensorflow, SiTailwindcss } from "react-icons/si";
// Import images for coding profiles
import lc from '../assets/imglc.png'; 
import gfg from '../assets/imggfg.png'; 
import hr from '../assets/imghr.png'; 
import cc from '../assets/imgcc.png'; 
import cf from '../assets/imgcf.png'; 

import "./Skills.css"; // Import CSS file for styling

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("skills");

const skillsData = [
  { label: "Java", icon: <FaJava /> },
  { label: "Python", icon: <FaPython /> },
  { label: "C", icon: <SiC /> },
  { label: "JavaScript", icon: <FaJsSquare /> },
  { label: "HTML5", icon: <FaHtml5 /> },
  { label: "CSS3", icon: <FaCss3Alt /> },
  { label: "React.js", icon: <FaReact /> },
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "Express.js", icon: <SiExpress /> },
  { label: "MongoDB", icon: <SiMongodb /> },
  { label: "MySQL", icon: <FaDatabase /> },
  { label: "Machine Learning", icon: <FaRobot /> },
  { label: "Scikit-learn", icon: <SiScikitlearn /> },
  { label: "Pandas", icon: <SiPandas /> },
  { label: "NumPy", icon: <SiNumpy /> },
  { label: "OpenAI APIs", icon: <FaRobot /> },
  { label: "AWS PartyRock", icon: <FaAws /> },
  { label: "Altair AI Studio", icon: <FaChartBar /> },
  { label: "Git", icon: <FaGitAlt /> },
  { label: "GitHub", icon: <FaGithub /> },
];

  const codingProfiles = [
    { label: "LeetCode", link: "https://leetcode.com/u/Abhirishitha_Naraharisetti/", Image: lc },
    { label: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/profile/abhirishithans3fb", Image: gfg }, 
    { label: "Hackerrank", link: "https://www.hackerrank.com/profile/abhirishithanar1", Image: hr },
    { label: "CodeChef", link: "https://www.codechef.com/users/abhirishitha", Image: cc },
    { label: "Codeforces", link: "https://codeforces.com/profile/Abhirishitha", Image: cf }, 
  ];

  // Render skills grid
  const renderSkillsGrid = () =>
    skillsData.map((skill, index) => (
      <div className="grid-item" key={index}>
        <div className="skill-icon">{skill.icon}</div>
        <p className="skill-label">{skill.label}</p>
      </div>
    ));

  // Render coding profiles grid
  const renderProfilesGrid = () =>
    codingProfiles.map((profile, index) => (
      <div className="grid-item" key={index}>
        <div className="profile-icon">
          <img
            src={profile.Image}
            alt={profile.label}
            className="profile-image" // Apply the profile-image class to each image
          />
        </div>
        <a
          className="profile-link"
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.label}
        </a>
      </div>
    ));

  return (
    <div className="skills-page">
      <h2 className="skills-heading">My Skills & Profiles</h2>
      <div className="skills-container">
        {/* Buttons Section */}
        <div className="skills-buttons">
          <button
            className={`skills-btn ${selectedCategory === "skills" ? "active" : ""}`}
            onClick={() => setSelectedCategory("skills")}
          >
            Skills
          </button>
          <button
            className={`skills-btn ${selectedCategory === "profiles" ? "active" : ""}`}
            onClick={() => setSelectedCategory("profiles")}
          >
            Coding Profiles
          </button>
        </div>

        {/* Display Section */}
        <div className="skills-display-box">
          {selectedCategory === "skills" ? (
            <div className="grid-container">{renderSkillsGrid()}</div>
          ) : (
            <div className="grid-container">{renderProfilesGrid()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
