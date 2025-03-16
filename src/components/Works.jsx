
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Data Analytics Work</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <motion.div key={index} variants={fadeIn("up", "spring")}>
            <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
              <div className="bg-tertiary p-5 rounded-2xl w-full">
                <h3 className="text-white font-bold text-xl">{project.name}</h3>
                <p className="text-secondary mt-2">{project.description}</p>
                <p className="text-white-100 mt-3">Tools: {project.tags.join(", ")}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
