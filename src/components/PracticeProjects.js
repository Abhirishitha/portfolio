import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/spotify-genre-classification.png";
import "./PracticeProjects.css";

const PracticeProjects = () => {

const projects = [
{
  title: "FreshNest",
  image: p6,
  techStack: "HTML, CSS, JavaScript",
  description:
    "A responsive house cleaning services website that enables users to explore services, book appointments, make payments, and contact the service provider through a modern interface.",
  gitHubLink:
    "https://github.com/Abhirishitha/FreshNest",
},

{
  title: "HCARM AI Recommendation System",
  image: p7,
  techStack:
    "Python, Machine Learning, Flask, HTML, CSS, JavaScript",
  description:
    "An AI-powered recommendation system that provides intelligent recommendations using semantic search and hybrid ranking techniques.",
  gitHubLink:
    "https://github.com/Abhirishitha/HCARM-AI-Recommendation-System",
},

{
  title: "Focus Tracker",
  image: p8,
  techStack:
    "React, TypeScript, Node.js, Express, MongoDB, Chrome Extension",
  description:
    "A productivity tracking platform with a Chrome Extension that monitors website usage and visualizes productivity analytics in real time.",
  gitHubLink:
    "https://github.com/Abhirishitha/focus-tracker-mern",
},

{
  title: "Smart Weather Advisor",
  image: p9,
  techStack:
    "HTML, CSS, JavaScript, Weather API, Google Gemini AI",
  description:
    "A weather application that combines real-time weather updates with AI-generated recommendations for users.",
  gitHubLink:
    "https://github.com/Abhirishitha/smart-weather-advisor",
},

{
  title: "TaskFlow",
  image: p10,
  techStack:
    "React, TypeScript, Tailwind CSS, Framer Motion, dnd-kit",
  description:
    "A premium productivity app featuring task management, planners, streak tracking, drag-and-drop support, and responsive design.",
  gitHubLink:
    "https://github.com/Abhirishitha/taskflow",
},
{
  title: "Online Examination Portal",
  image: p11,
  techStack: "Java, MySQL, HTML, CSS, JavaScript",
  description:
    "A web-based examination platform that enables students to take online exams, manage questions, track exam progress, and receive results through an interactive interface.",
  gitHubLink:
    "https://github.com/Abhirishitha/online-examination-portal",
},
{
  title: "Spotify Track Genre Classification",
  image: p12,
  techStack: "Python, Pandas, Scikit-learn, CatBoost",
  description:
    "Machine learning application that classifies Spotify tracks into music genres using audio features and a CatBoost model, achieving 74.04% accuracy.",
  gitHubLink:
    "https://github.com/Abhirishitha/Spotify-Track-Genre-Classification",
},
];

return (
<section className="projects-section">

<motion.h2
className="projects-title"
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
Practice Projects 💻
</motion.h2>

<div className="projects-container">

{projects.map((project,index)=>(

<motion.div
key={index}
className="project-card"
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
whileHover={{scale:1.03}}
transition={{duration:0.4}}
>

<div className="project-left">

<img
src={project.image}
alt={project.title}
className="project-image"
/>

</div>

<div className="project-right">

<h3 className="project-title">
{project.title}
</h3>

<p className="project-tech-stack">
<strong>Tech Stack:</strong> {project.techStack}
</p>

<p className="project-description">
{project.description}
</p>

<div className="project-buttons">

<a
href={project.gitHubLink}
target="_blank"
rel="noopener noreferrer"
className="project-button github-button"
>

<FaGithub />
GitHub

</a>

</div>

</div>

</motion.div>

))}

</div>

</section>

);

};

export default PracticeProjects;