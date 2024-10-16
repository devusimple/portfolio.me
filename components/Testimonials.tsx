import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO, Tech Corp",
    image: "https://avatar.iran.liara.run/public/88",
    text: "Mehedi is an exceptional developer. His attention to detail and problem-solving skills are unmatched.",
  },
  {
    id: 2,
    name: "Mike Smith",
    role: "CTO, Startup Inc",
    image: "https://avatar.iran.liara.run/public/45",
    text: "Working with John was a pleasure. He delivered our project on time and exceeded our expectations.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Manager, InnovateTech",
    image: "https://avatar.iran.liara.run/public/12",
    text: "Mehedi's expertise in full- stack development helped us launch our product successfully.Highly recommended!",
  },
];

const Testimonials = ({
  setActiveSection,
}: {
  setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setActiveSection("testimonials");
  }, [setActiveSection]);

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
