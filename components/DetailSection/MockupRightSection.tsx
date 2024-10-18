import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { PlaySquare } from "lucide-react";
import AnimatedText from "../Animations/AnimatedText";

interface MockupRightSectionProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const MockupRightSection: React.FC<MockupRightSectionProps> = ({
  image,
  title,
  description,
  buttonText,
  onClick,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full flex md:flex-row flex-col-reverse items-center gap-4 md:gap-8 py-2 md:py-0 px-4 md:px-4 xl:px-40 mb-8 md:mb-0">
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <AnimatedText
          text={title}
          delay={0.3}
          className="hidden md:block text-2xl sm:text-3xl font-semibold mb-2 md:mb-4"
        />
        <AnimatedText
          text={description}
          delay={0.3}
          className="mb-2 md:mb-6 text-xs sm:text-base text-gray-500 font-semibold"
        />
        <button
          onClick={onClick}
          className="bg-blue-500 text-white px-6 py-2 rounded-md w-max text-sm sm:text-base hover:bg-blue-600 transition-colors"
        >
          {buttonText}
        </button>
      </div>
      <motion.div
        ref={ref}
        className="relative w-full md:w-1/2 flex flex-col items-center justify-center gap-4 md:p-8 my-4 md:my-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={circleVariants}
          className="absolute h-[70vw] w-[70vw] md:h-[40vw] md:w-[40vw] lg:h-[40vw] lg:w-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-blue-500/10"
        ></motion.div>
        <motion.div
          variants={circleVariants}
          className="absolute h-[50vw] w-[50vw] md:h-[30vw] md:w-[30vw] lg:h-[30vw] lg:w-[30vw] max-w-[375px] max-h-[375px] rounded-full bg-blue-500/20"
        ></motion.div>
        <motion.div
          variants={imageVariants}
          className="relative w-[60vw] h-[60vw] md:w-[25vw] md:h-[500px] lg:w-[20vw] lg:h-[450px] max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[500px]"
        >
          <Image
            alt="Scene pack mockup"
            src={image}
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
      <h2 className="w-full block md:hidden text-2xl sm:text-3xl font-semibold mb-2 md:mb-4 text-left">
        {title}
      </h2>
    </section>
  );
};

export default MockupRightSection;
