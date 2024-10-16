import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    image:
      "https://foody.pockethost.io/api/files/nnb4l69cgch6tpm/m7yycpfb66e21pu/r_1_z3vd932aOw.png",
    date: "May 15, 2023",
    excerpt:
      "Learn how to use React Hooks to simplify your components and manage state effectively.",
  },
  {
    id: 2,
    title: "Building Scalable Node.js Applications",
    image:
      "https://foody.pockethost.io/api/files/nnb4l69cgch6tpm/m7yycpfb66e21pu/r_1_z3vd932aOw.png",
    date: "June 2, 2023",
    excerpt:
      "Discover best practices for building scalable and maintainable Node.js applications.",
  },
  {
    id: 3,
    title: "Introduction to GraphQL",
    image:
      "https://foody.pockethost.io/api/files/nnb4l69cgch6tpm/m7yycpfb66e21pu/r_1_z3vd932aOw.png",
    date: "June 20, 2023",
    excerpt:
      "Explore the benefits of GraphQL and how it can improve your API development process.",
  },
];

const Blog = ({
  setActiveSection,
}: {
  setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setActiveSection("blog");
  }, [setActiveSection]);

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
                placeholder="blur"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
