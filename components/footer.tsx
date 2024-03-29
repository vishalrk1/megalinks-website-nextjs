import Image from "next/image";
import Link from "next/link";

import playstoreIcon from "../app/assets/playstore.svg";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-xl md:text-3xl mb-3">
              {" "}
              Download MegaLinks Android App{" "}
            </h3>
            <p> Stay updated and Keep Editing. </p>
            <div className="flex justify-center my-3">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.vk.MegaLinks"
                }
                target="_"
              >
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                  <Image
                    src={playstoreIcon} //{"https://icons8.com/icon/L1ws9zn2uD01/google-play-store"}
                    alt=""
                    height={40}
                    width={40}
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-3 md:mt-0">
              {" "}
              &copy; MegaLinks, 2021.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <Link href="/privacy">
                <span className="px-2 border-l">Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
