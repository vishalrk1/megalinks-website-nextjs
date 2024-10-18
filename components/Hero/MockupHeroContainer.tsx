import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  isCenter?: boolean;
}

const MobileMockup: React.FC<Props> = ({ src, alt, isCenter }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: isCenter ? 1.4 : 1.5,
          ease: "easeInOut",
        },
      },
    }}
    className={`relative flex-shrink-0 ${
      isCenter
        ? "w-[180px] h-[340px] md:w-[320px] md:h-[640px] z-10"
        : "w-[180px] h-[310px] md:w-[250px] md:h-[500px]"
    }`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="rounded-[2rem] overflow-hidden object-contain"
    />
  </motion.div>
);

const MockupHeroContainer: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="relative z-2 flex flex-row md:gap-16 justify-center items-center md:mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MobileMockup
        src="/mockups/ScenepackScreen.png"
        alt="Temperature control screen"
      />
      <MobileMockup
        src="/mockups/Homepage1.png"
        alt="Energy management screen"
        isCenter={true}
      />
      <MobileMockup
        src="/mockups/TutorialScreen.png"
        alt="Room control screen"
      />
    </motion.div>
  );
};

export default MockupHeroContainer;
