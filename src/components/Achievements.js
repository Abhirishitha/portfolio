import React from "react";
import "./Achievements.css";
import { FaAward, FaClipboardList, FaTrophy } from "react-icons/fa";
import a1Image from "../assets/a1.png";
import a2Image from "../assets/a2.png";
import a3Image from "../assets/a3.png";
import a4Image from "../assets/a4.png";
import a5Image from "../assets/a5.png";
const Achievements = () => {
const achievementsData = [
  {
    title: "GirlScript Summer of Code (GSSoC) Contributor",
    description:
      "Selected as a contributor in GirlScript Summer of Code (GSSoC), contributing to open-source projects and collaborating with developers across the community.",
    image: a1Image,
    link: "#",
    demoLink: null,
    icon: <FaTrophy />,
  },
  {
    title: "Elite Quiz – National Level Open Source Quiz",
    description:
      "Recognized among the top performers in the National Level Open Source Elite Quiz, showcasing strong knowledge of open-source technologies.",
    image: a2Image,
    link: "#",
    demoLink: null,
    icon: <FaAward />,
  },
  {
    title: "AI/ML Internship Test – Top 10",
    description:
      "Secured a place in the Top 10 of the AI/ML Internship Test conducted by Unstop, demonstrating strong Artificial Intelligence and Machine Learning skills.",
    image: a3Image,
    link: "#",
    demoLink: null,
    icon: <FaAward />,
  },
  {
    title: "MedhaSprint & ST&C Challenge",
    description:
      "Ranked among the top participants in the MedhaSprint and ST&C Challenge conducted by Unstop for technical problem-solving and innovation.",
    image: a4Image,
    link: "#",
    demoLink: null,
    icon: <FaClipboardList />,
  },
  {
    title: "LeetCode Weekly Contest 508",
    description:
      "Achieved Rank 154 in LeetCode Weekly Contest 508 by solving competitive programming problems under timed conditions.",
    image: a5Image,
    link: "#",
    demoLink: "https://leetcode.com/",
    icon: <FaTrophy />,
  },
];

  const handleCardClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  const handleDemoClick = (demoLink) => {
    if (demoLink) {
      window.open(demoLink, "_blank"); // Opens demo link in a new tab if exists
    }
  };

  return (
    <section className="achievements-section">
      <h2 className="achievements-title">My Achievements</h2>
      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <div
            className="achievement-card"
            key={index}
            onClick={() => handleCardClick(achievement.link)} // Make the entire card clickable for the certificate
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            {achievement.image && (
  <img
    src={achievement.image}
    alt={achievement.title}
    className="achievement-image"
  />
)}
            {/* Conditionally Render View Demo Button */}
            {achievement.demoLink && (
              <button
                className="view-demo-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card click from firing
                  handleDemoClick(achievement.demoLink); // Opens demo link in a new tab
                }}
              >
                See More...
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
