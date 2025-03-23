import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesButtons, servicesData } from "../data";
import { motion, Variants } from "motion/react";

function Services() {
  const [selected, setSelected] = useState<string>("market");
  const activeStyles = "bg-[#03217F] text-white rounded-[8px]";

  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const handleButtonClick = (value: string, index: number) => {
    setSelected(value);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const sliderRect = slider.getBoundingClientRect();
      const centerX = sliderRect.left + sliderRect.width / 2;
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(centerX - cardCenterX);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });
      setSelected(servicesData[closestIndex].title.toLowerCase());
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="px-5 ">
      <motion.div
        className="border max-w-[730px] mx-auto rounded-[12px] border-[#E4E4E7] p-1 mb-[33px]"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        {servicesButtons.map((button, index) => (
          <motion.button
            key={button.value}
            className={` text-[#AAAAAA] py-[6px] px-[10px]  font-semibold text-[1rem]/[150%] ${
              selected === button.title.toLowerCase() ? activeStyles : ""
            }`}
            variants={buttonVariants}
            onClick={() => handleButtonClick(button.value, index)}
          >
            {button.title}
          </motion.button>
        ))}
      </motion.div>

      <div
        className="mb-[58px] flex w-full gap-[30px] overflow-x-scroll hide-scrollbar"
        ref={sliderRef}
      >
        {servicesData.map((service) => (
          <ServiceCard key={service.id} data={service} ref={addToRefs} />
        ))}
      </div>
    </div>
  );
}

export default Services;
