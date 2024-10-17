import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MHU
        </Link>
        <ul className="hidden md:flex space-x-6">
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Blog",
            "Testimonials",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`text-gray-600 hover:text-blue-600 ${
                  activeSection === item.toLowerCase() ? "font-bold" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={()=> setOpen(!open)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
            {open && (
      <div className="bg-white p-6 w-full">
        
        <ul className="md:hidden space-y-3">
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Blog",
            "Testimonials",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`text-gray-600 hover:text-blue-600 ${
                  activeSection === item.toLowerCase() ? "font-bold" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
