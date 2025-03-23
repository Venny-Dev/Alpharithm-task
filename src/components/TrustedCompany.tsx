import { motion } from "motion/react";
import { companies } from "../data";

function TrustedCompany() {
  return (
    <div className="overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex shrink-0 "
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {companies.map((company, index) => (
            <img
              src={company}
              key={index}
              alt="logo"
              className="md:pr-20 pr-12"
            />
          ))}
        </motion.div>

        <motion.div
          className="flex shrink-0 "
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {companies.map((company, index) => (
            <img
              src={company}
              key={index}
              alt="logo"
              className="md:pr-20 pr-12"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TrustedCompany;
