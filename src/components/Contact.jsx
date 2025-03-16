
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <motion.div variants={slideIn("up", "spring", 0.1, 1)}>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me</h2>
      </motion.div>

      <div className="mt-5 text-white-100 text-[18px]">
        <p>Email: <a href="mailto:kunal7533@gmail.com" className="text-[#915EFF]">kunal7533@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kunal-g-3710971b6" className="text-[#915EFF]">Kunal's LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/kunal7533" className="text-[#915EFF]">github.com/kunal7533</a></p>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
