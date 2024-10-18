import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface Props {
  title: string;
  endCount: number;
  delay: number;
}

const CounterContainer: React.FC<Props> = ({ endCount, title, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    latest === 4.8 ? 4.8 : Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(count, endCount, { duration: 3 });
    return () => controls.stop();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : "hidden"}
      transition={{ delay: delay, duration: 0.5 }}
      className="flex flex-col items-center justify-center"
    >
      <motion.p className="text-xl md:text-3xl text-white font-semibold md:font-bold">
        {rounded}
      </motion.p>
      <p className="text-base text-white md:font-semibold align-text-top">
        {title}
      </p>
    </motion.div>
  );
};

export default CounterContainer;
