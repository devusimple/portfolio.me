import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image:
      "https://foody.pockethost.io/api/files/nnb4l69cgch6tpm/m7yycpfb66e21pu/r_1_z3vd932aOw.png",
    description:
      "A full-stack e-commerce solution built with React and Node.js",
  },
  {
    id: 2,
    title: "Task Management App",
    image:
      "https://foody.pockethost.io/api/files/nnb4l69cgch6tpm/m7yycpfb66e21pu/r_1_z3vd932aOw.png",
    description:
      "A responsive task management application using React and Firebase",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    image:
      "https://foody.pockethost.io/api/files/nnb4l69cgch6tpm/m7yycpfb66e21pu/r_1_z3vd932aOw.png",
    description: "A weather forecast application integrating multiple APIs",
  },
];

const Projects = ({
  setActiveSection,
}: {
  setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setActiveSection("projects");
  }, [setActiveSection]);

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                placeholder="blur"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
