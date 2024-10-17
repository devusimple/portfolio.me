import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = ({
  setActiveSection,
}: {
  setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setActiveSection("about");
  }, [setActiveSection]);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://foody.pockethost.io/api/files/nnb4l69cgch6tpm/jnkx466aqth7c1i/photoroom_20241002_173803_TCop5SdBys.png"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
            placeholder="blur"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 mb-4">
            Hi, I&apos;m Mehedi Hasan, a passionate full-stack developer with
            over 5 years of experience in creating innovative web solutions. I
            specialize in React, Node.js, and modern web technologies.
          </p>
          <p className="text-gray-600 mb-4">
            My goal is to build efficient, scalable, and user-friendly
            applications that solve real-world problems. I&apos;m constantly
            learning and staying up-to-date with the latest trends in web
            development.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
