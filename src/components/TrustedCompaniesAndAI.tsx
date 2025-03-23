import TrustedCompany from "./TrustedCompany";
import { motion, Variants } from "motion/react";

function TrustedCompaniesAndAI() {
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
      transition: { duration: 0.9 },
    },
  };
  return (
    <div className="">
      <div className="mb-[116px]">
        <p className="text-[#667085] font-medium text-[16px]/[24px] tracking-[0%] text-center mt-6 mb-8">
          Join 4,000+ companies already growing
        </p>

        <TrustedCompany />
      </div>

      <motion.section
        className="text-center px-5 mb-[31px]"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="font-semibold mt-2 mb-6 tracking-[-2%]  md:text-[3.13rem]/[62px] text-[2.9rem]/[50px] text-[#22263F] max-w-[704px] mx-auto font-figtree"
          variants={childVariants}
        >
          AI Models tailored for your business needs
        </motion.h1>
        <motion.p
          className="font-medium md:text-[1.38rem]/[38px] text-[1rem]/[30px] tracking-[-2%] text-[#828282] max-w-[860px] mx-auto mb-6"
          variants={childVariants}
        >
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </motion.p>
      </motion.section>
    </div>
  );
}

export default TrustedCompaniesAndAI;
