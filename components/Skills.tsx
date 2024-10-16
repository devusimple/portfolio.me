import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";

const Skills = ({
  setActiveSection,
}: {
  setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setActiveSection("skills");
  }, [setActiveSection]);

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="w-full max-w-3xl mx-auto">my skills</div>
      </div>
    </section>
  );
};

export default Skills;
