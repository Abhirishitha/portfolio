import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Cryptocurrency Price Movement Analysis",
      image: p1,
      techStack:
        "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Random Forest, Linear Regression",
      description:
        "A machine learning project that analyzes historical cryptocurrency market data, performs feature engineering, and predicts short-term price movements using regression models.",
      gitHubLink:
        "https://github.com/Abhirishitha/Cryptocurrency-Price-Movement-Analysis",
    },

    {
      title: "Finance Tracker",
      image: p2,
      techStack:
        "Next.js 14, TypeScript, Tailwind CSS, Recharts, React Context API",
      description:
        "A modern personal finance management application for tracking income, expenses, budgets, and financial insights with interactive dashboards and multi-currency support.",
      gitHubLink:
        "https://github.com/Abhirishitha/FinanceTracker",
    },

    {
      title: "CareerConnect",
      image: p3,
      techStack:
        "HTML, CSS, JavaScript, Python, Flask, Adzuna API",
      description:
        "A job search and recommendation platform that provides real-time job listings, resume optimization suggestions, and career insights using the Adzuna Job Search API.",
      gitHubLink:
        "https://github.com/Abhirishitha/CareerConnect",
    },

    {
      title: "LeafLens AI",
      image: p4,
      techStack:
        "React.js, Flask, TensorFlow, CNN, Google Gemini API, OpenWeather API",
      description:
        "An AI-powered plant disease detection system that identifies crop diseases from leaf images and provides treatment recommendations, weather-based risk analysis, and farmer guidance.",
      gitHubLink:
        "https://github.com/Abhirishitha/plant-disease-detector",
    },

    {
      title: "QueueCure",
      image: p5,
      techStack:
        "React.js, Node.js, Express.js, MongoDB, Socket.IO",
      description:
        "An intelligent hospital queue management system that digitizes patient flow with live queue tracking, receptionist dashboard, and real-time updates for improved healthcare efficiency.",
      gitHubLink:
        "https://github.com/Abhirishitha/QueueCure",
    },
  ];

  return (
    <section className="projects-section">

      {/* Header */}
      <div className="projects-header">

        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects 💻
        </motion.h2>

        <motion.button
          className="practice-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/practice-projects")}
        >
          Practice Projects →
        </motion.button>

      </div>

      {/* Projects */}
      <div className="projects-container">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
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

export default Projects;