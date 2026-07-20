import React, { useState } from "react";
import "./CertAndIntern.css";
import c1Image from '../assets/c1.png';
import c2Image from '../assets/c2.png';
import c3Image from '../assets/c3.png';
import c4Image from '../assets/c4.png';
import c5Image from '../assets/c5.png';
import c6Image from '../assets/c6.png';
import c7Image from '../assets/c7.png';
import c8Image from '../assets/c8.png';
import c9Image from '../assets/c9.png';
import c10Image from '../assets/c10.png';
import c11Image from "../assets/c11.png";
import c12Image from "../assets/c12.png";
import c13Image from "../assets/c13.png";
import c14Image from "../assets/c14.png";
import intern1Image from '../assets/in1.png';
import intern2Image from '../assets/in2.png';
import intern3Image from '../assets/in3.png';

const CertAndIntern = () => {
  const certifications = [
    {
      category: "NPTEL",
      subcategories: [
        { name: "Affective Computing", image: c1Image },
        { name: "Foundations of AR and vR", image: c2Image },
      ],
    },
    {
      category: "Hackerrank",
      subcategories: [
        { name: "Java", image: c3Image },
        { name: "SQL", image: c4Image },
      ],
    },
    {
      category: "Cisco Networking Academy",
      subcategories: [
        { name: "CCNA:Introduction to Networks", image: c10Image },
        { name: "Python Essentials", image: c11Image },
              { name: "Introduction to Cyber Security", image: c12Image },
],
    },
    {
      category: "Google",
      subcategories: [
        { name: "Google Cloud Computing Badge", image: c5Image },
      ],
    },
    {
      category: "AWS Academy",
      subcategories: [
        { name: "AWS Academy Cloud Foundations", image: c8Image },
             { name: "AWS Academy Data Engineering", image: c9Image },

      ],
    },
        {
      category: "Celonis Ai",
      subcategories: [
        { name: "AI Foundations", image: c13Image },
             { name: "Get Data into Celnois", image: c14Image },

      ],
    },
    {
      category: "BodhaSoft",
      subcategories: [
        { name: "MERN Stack Development", image: c6Image },
      ],
    },
        {
      category: "Volunteering",
      subcategories: [
        { name: "Hackathon Volunteer", image: c7Image },
      ],
    },
  ];

  const internships = [
    {
      name: " Microsoft AI Azure",
      description:
        "The certificate recognizes the completion of a 4-week virtual internship on AI Azure internship by <b>Edunet Foundations</b> in collaboration with the AICTE.",
      image: intern1Image,
    },
    {
      name: " Data Analysis Using Python",
      description:
        "This certificate marks the completion of a two-month summer online internship in Data Analysis Using Python at <b>APSSDC</b>, focusing on practical skills and project contributions.",
      image: intern2Image,
    },
    {
      name: "MERN Stack Internship",
      description:
        "This certificate signifies the completion of a 8-week MERN Stack internship supported by <b>EduSkills</b>, conducted from January to March 2026.",
      image: intern3Image,
    },
  ];

  const [showCertifications, setShowCertifications] = useState(true);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const toggleSection = (section) => {
    setShowCertifications(section === "certifications");
    setOpenSubcategory(null); // Close all subcategories
  };

  const handleToggle = (subcategoryName) => {
    setOpenSubcategory(openSubcategory === subcategoryName ? null : subcategoryName);
  };

  return (
    <div className="xyz-section">
<h2 className="skills-heading">Certifications & Internships</h2>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${showCertifications ? "active" : ""}`}
          onClick={() => toggleSection("certifications")}
        >
          Certifications
        </button>
        <button
          className={`toggle-button ${!showCertifications ? "active" : ""}`}
          onClick={() => toggleSection("internships")}
        >
          Internships
        </button>
      </div>

      {showCertifications ? (
        <div className="certifications">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <h2>{cert.category}</h2>
              <div className="cert-subcategories">
                {cert.subcategories.map((subcat, subIndex) => (
                  <div className="cert-subcategory" key={subIndex}>
                    <h3
                      className="subcategory-title"
                      onClick={() => handleToggle(subcat.name)}
                    >
                      {subcat.name}{" "}
                      <span className="toggle-icon">
                        {openSubcategory === subcat.name ? "▲" : "▼"}
                      </span>
                    </h3>
                    {openSubcategory === subcat.name && (
                      <img
                        src={subcat.image}
                        alt={subcat.name}
                        className="subcategory-image"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="internships">
          {internships.map((intern, index) => (
            <div key={index} className="intern-card">
              <h3
                className="subcategory-title"
                onClick={() => handleToggle(intern.name)}
              >
                {intern.name}{" "}
                <span className="toggle-icon">
                  {openSubcategory === intern.name ? "▲" : "▼"}
                </span>
              </h3>
              <p
                className="subcategory-description"
                dangerouslySetInnerHTML={{ __html: intern.description }}
              ></p>
              {openSubcategory === intern.name && (
                <img
                  src={intern.image}
                  alt={intern.name}
                  className="subcategory-image"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertAndIntern;
