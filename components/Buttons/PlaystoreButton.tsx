import Image from "next/image";
import Link from "next/link";
import React from "react";

import playstoreIcon from "../../app/assets/playstore-logo.png";
import { useInView, motion } from "framer-motion";

const PlaystoreButton = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Link
      href={"https://play.google.com/store/apps/details?id=com.vk.MegaLinks"}
      target="_"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        animate={isInView && { opacity: 1, y: 0 }}
        className="flex items-center border rounded-lg px-4 py-2 w-auto bg-black"
      >
        <Image src={playstoreIcon} alt="" height={40} width={40} />
        <div className="text-left ml-3">
          <p className="text-xs text-white">Download on </p>
          <p className="text-sm md:text-base text-white"> Google Play Store </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default PlaystoreButton;
