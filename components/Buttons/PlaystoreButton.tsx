import Image from "next/image";
import Link from "next/link";
import React from "react";

import playstoreIcon from "../../app/assets/playstore-logo.png";

const PlaystoreButton = () => {
  return (
    <Link
      href={"https://play.google.com/store/apps/details?id=com.vk.MegaLinks"}
      target="_"
    >
      <div className="flex items-center border rounded-lg px-4 py-2 w-auto bg-black">
        <Image src={playstoreIcon} alt="" height={40} width={40} />
        <div className="text-left ml-3">
          <p className="text-xs text-white">Download on </p>
          <p className="text-sm md:text-base text-white"> Google Play Store </p>
        </div>
      </div>
    </Link>
  );
};

export default PlaystoreButton;
