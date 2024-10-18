import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay: number;
  className: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay,
  className,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: delay }}
      animate={isInView && { opacity: 1, y: 0 }}
      className={className}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
