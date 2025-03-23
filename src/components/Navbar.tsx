import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | Event) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (customDelay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: customDelay,
        duration: 0.5,
      },
    }),
  };
  const navItems = [
    "Models",
    "Pricing",
    "About Us",
    "Contact Us",
    "Custom Models",
  ];

  return (
    <nav
      className="py-[20px] px-[35px] flex justify-between items-center lg:px-[70px] lg:py-[54px] relative "
      ref={dropdownRef}
      aria-label="Main Navigation"
    >
      <button className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent">
        <img
          src="/logo.png"
          alt="logo"
          className="lg:size-[48px] size-[30px] "
        />
      </button>

      <ul className="md:flex gap-[24px] hidden text-[16px] font-medium text-white">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            custom={index * 0.3}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <a
              href="#"
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className=" gap-[10px] hidden md:flex"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.button
          className="border border-white text-white py-[10px] px-[26px] rounded-[4px] font-medium text-[0.875rem] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          custom={navItems.length * 0.3}
          variants={itemVariants}
          aria-label="Login"
        >
          Login
        </motion.button>
        <motion.button
          custom={navItems.length * 0.3 + 0.3} // additional delay for the next button
          variants={itemVariants}
          className=" bg-white text-black p-[10px] rounded-[4px] font-medium text-[0.875rem] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Get Started Now"
        >
          Get Started Now
        </motion.button>
      </motion.div>

      <button
        className="md:hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
        onClick={toggleDropdown}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label="Toggle Menu"
      >
        <img src="/icon-hamburger.svg" alt="menu" className="img-white" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="bg-white absolute w-40 h-60 right-5 top-14 rounded-lg flex flex-col gap-2 py-3 px-3 text-[#667085] font-medium text-[16px]/[24px] tracking-[0%]"
          role="menu"
        >
          <li role="none">
            <a
              href="#"
              role="menuitem"
              tabIndex={0}
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsOpen(false)}
            >
              Models
            </a>
          </li>
          <li role="none">
            <a
              href="#"
              role="menuitem"
              tabIndex={0}
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
          </li>
          <li role="none">
            <a
              href="#"
              role="menuitem"
              tabIndex={0}
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>
          <li role="none">
            <a
              href="#"
              role="menuitem"
              tabIndex={0}
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </li>
          <li role="none">
            <a
              href="#"
              role="menuitem"
              tabIndex={0}
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsOpen(false)}
            >
              Custom Models
            </a>
          </li>
          <li role="none">
            <a
              href="#"
              role="menuitem"
              tabIndex={0}
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsOpen(false)}
            >
              Get Started Now
            </a>
          </li>
          <li role="none">
            <a
              href="#"
              role="menuitem"
              tabIndex={0}
              className="focus:outline-none focus:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
