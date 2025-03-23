import { motion, Variants } from "motion/react";
function SectionHero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.section
      className="text-center px-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p
        className="text-[#7191FF] font-bold text-[1rem]"
        variants={childVariants}
      >
        Leverage on Automation
      </motion.p>
      <motion.h1
        className="font-medium mt-2 mb-6 tracking-[-2%] md:text-[4.75rem]/[82px] text-[3.75rem]/[70px]    text-white max-w-[676px] mx-auto font-figtree"
        variants={childVariants}
      >
        AI Models for Business Solutions
      </motion.h1>
      <motion.p
        className="font-medium text-[1.38rem]/[38px]  tracking-[-2%] text-white max-w-[900px] mx-auto mb-6 "
        variants={childVariants}
      >
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our specialized models are designed to fit different business
        needs
      </motion.p>
      <motion.button
        className=" bg-white text-black p-[10px] rounded-[4px] font-medium text-[0.875rem]"
        variants={childVariants}
      >
        Get Started Now
      </motion.button>
    </motion.section>
  );
}

export default SectionHero;
