
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Career Journey</p>
        <h2 className={styles.sectionHeadText}>Professional Experience</h2>
      </motion.div>

      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement key={index} date={experience.date}>
            <h3 className="text-white font-bold text-xl">{experience.role}</h3>
            <p className="text-secondary">{experience.company}</p>
            <p className="text-white-100 mt-2">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
