import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedButtonProps {
  onClick: () => void;
  buttonText: string;
}
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  buttonText,
  onClick,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      animate={isInView && { opacity: 1, y: 0 }}
      onClick={onClick}
      className="bg-blue-500 text-white px-6 py-2 rounded-md w-max text-sm sm:text-base hover:bg-blue-600 transition-colors"
    >
      {buttonText}
    </motion.button>
  );
};

export default AnimatedButton;
