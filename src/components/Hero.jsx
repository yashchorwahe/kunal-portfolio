
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Kunal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Data Analyst | Power BI Expert | Python Enthusiast <br />
            Transforming raw data into actionable insights.
          </p>

          <Typewriter
            options={{
              strings: [
                "Visualizing data for better decisions",
                "Building dashboards that tell stories",
                "Automating analytics with Python & AI",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
    