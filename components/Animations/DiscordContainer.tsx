import Image from "next/image";
import React from "react";

import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";

const DiscordContainer = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      animate={isInView && { opacity: 1, y: 0 }}
      className="hidden md:flex gap-4 w-full rounded-md shadow-md p-4 bg-white"
    >
      <div className="w-3/4 h-[160px] md:h-[140px] relative">
        <Image
          src="/discord.png"
          alt=""
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 h-full items-start justify-start">
        <h1 className="text-xl md:text-2xl font-semibold">Join Our Discrod</h1>
        <p className="w-full text-gray-500 text-base">
          Join our discord community to hangout, ask questions and request more
          features, scene packs & many more
        </p>
        <Button className="w-1/2 bg-yellow-400 text-black hover:bg-yellow-400 font-semibold">
          Join Now
        </Button>
      </div>
    </motion.div>
  );
};

export default DiscordContainer;
