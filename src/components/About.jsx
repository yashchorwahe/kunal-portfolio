
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Kunal, a Data Analyst specializing in Power BI, SQL, and Python.
        With a passion for data storytelling, I craft interactive dashboards,
        perform predictive analytics, and optimize decision-making processes.
        My expertise spans business intelligence, automation, and AI-driven
        insights. Let's turn data into strategy!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
