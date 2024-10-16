import Image from "next/image";
import React from "react";

import appStorerIcon from "../../app/assets/apple-logo.png";
import toast from "react-hot-toast";

const AppStoreButton = () => {
  return (
    <div
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
    </div>
  );
};

export default AppStoreButton;
