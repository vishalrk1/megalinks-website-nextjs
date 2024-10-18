import Image from "next/image";
import React from "react";

import appStorerIcon from "../../app/assets/apple-logo.png";
import toast from "react-hot-toast";
import { useInView, motion } from "framer-motion";

const AppStoreButton = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      animate={isInView && { opacity: 1, y: 0 }}
      onClick={() => {
        toast.error("App Not Available On App Store at the Moment");
      }}
      className="hidden md:flex items-center border rounded-lg px-4 py-2 w-auto bg-black cursor-pointer"
    >
      <Image src={appStorerIcon} alt="" height={40} width={40} />
      <div className="text-left ml-3">
        <p className="text-xs text-white">Download on </p>
        <p className="text-sm md:text-base text-white"> App Store </p>
      </div>
    </motion.div>
  );
};

export default AppStoreButton;
