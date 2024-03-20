import styles from "./IntroSection.module.css";
import React, { useState, useEffect } from "react";

const jobTitles = [
  "Software Engineer.",
  "Web Developer.",
  ".NET Developer.",
  // Add more job titles as needed
];

const IntroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) =>
        prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change job title every 2 seconds (2000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section className={styles.introSection}>
      <h1 className={styles.introSection__title}>
        Hello, my name is Ghufran Ullah.
      </h1>
      <p className={styles.introSection__description}>
      
        I am a {jobTitles[currentTitleIndex]}
      </p>
    </section>
  );
};

export default IntroSection;
