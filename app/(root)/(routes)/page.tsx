"use client";
import MockupLeftSection from "@/components/DetailSection/MockupLeftSection";
import MockupRightSection from "@/components/DetailSection/MockupRightSection";
import Navbar from "@/components/nav-bar";
import BannerImage from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import FeedbacHomekList from "@/components/ui/feedbacks/feedback-home-list";
import ScenepackList from "@/components/ui/scenepacks/scenepack-list";
import TutorialsList from "@/components/ui/tutorials/tutorials-list";
import { getCategories } from "@/redux/categories/actions";
import { getIndividualCategory } from "@/redux/categories/categoryId/actions";
import { selectIndividualCategory } from "@/redux/categories/categoryId/selector";
import { selectEditingTools } from "@/redux/editingtools/selector";
import { selectFeedbacks } from "@/redux/feedbacks/selector";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectScenepack } from "@/redux/scenepacks/selector";
import { selectTutorials } from "@/redux/tutorials/selector";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import playstoreIcon from "../../assets/playstore.svg";

interface Props {
  src: string;
  alt: string;
  isCenter?: boolean;
}

const MobileMockup: React.FC<Props> = ({ src, alt, isCenter }) => (
  <div
    className={`relative flex-shrink-0 ${
      isCenter
        ? "w-[180px] h-[340px] md:w-[320px] md:h-[640px] z-10"
        : "w-[180px] h-[310px] md:w-[250px] md:h-[500px]"
    } transition-all duration-500 ease-in-out`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="rounded-[2rem] overflow-hidden object-contain"
    />
  </div>
);

const HomePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data, pending, error } = useAppSelector(selectIndividualCategory);
  const { scenepackData } = useAppSelector(selectScenepack);
  const { tutorialsData } = useAppSelector(selectTutorials);
  const { editintoolData } = useAppSelector(selectEditingTools);
  const { feedbacksData } = useAppSelector(selectFeedbacks);

  useEffect(() => {
    setLoading(true);
    dispatch(getIndividualCategory("e4b4ad1d-e45d-4cf1-96a6-d10345c4bed2"));
    setLoading(false);
  }, [dispatch]);

  const featuredScenepack = scenepackData.filter((item) => item.isFeatured);
  const featuredTutorials = tutorialsData.filter((item) => item.isFeatured);
  const featuredFeedbacks = feedbacksData.filter((item) => item.isFeatured);

  return (
    <main className="">
      <section className="relative bg-white flex flex-col justify-start items-center p-8 overflow-hidden">
        <div className="absolute h-[70%] bg-blue-500 top-0 left-0 right-0 rounded-b-md"></div>
        <div className="w-full flex flex-col items-center justify-center z-10 text-white mb-4">
          <h1 className="text-2xl md:text-5xl leading-6 lg:text-6xl font-bold mb-4 text-start md:mt-2">
            Mega Links Application
          </h1>
          <p className="text-sm md:text-base text-center max-w-2xl mx-auto">
            Megalinks provides a wide range of resources for video editing
            enthusiasts. From scene packs to project files, we offer everything
            you need to enhance your editing skills.
          </p>
        </div>
        <div className="relative z-2 flex flex-row md:gap-16 justify-center items-center md:mt-6">
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
        </div>
      </section>
      <section className="px-8 md:px-16 my-4 md:my-6 flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="text-3xl md:text-5xl font-semibold">About MegaLinks</h1>
        <div className="w-full md:w-[70%] bg-blue-500 rounded-md py-4 px-8 flex flex-wrap items-center justify-center gap-12 gap-y-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-3xl text-white font-semibold md:font-bold">
              7.5k+
            </p>
            <p className="text-base text-white md:font-semibold align-text-top">
              Downloads
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-3xl text-white font-semibold md:font-bold">
              176
            </p>
            <p className="text-base text-white md:font-semibold align-text-top">
              Countries
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-3xl text-white font-semibold md:font-bold">
              67
            </p>
            <p className="text-base text-white md:font-semibold align-text-top">
              Active users
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="flex items-center text-xl md:text-3xl text-white font-semibold md:font-bold">
              4.8⭐
            </p>
            <p className="text-base text-white md:font-semibold align-text-top">
              User Ratings
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-100 py-6 md:py-12 px-6 xl:px-40 mb-12">
        <h1 className="block md:hidden text-2xl font-semibold mb-4">
          {"Download App Now"}
        </h1>
        <div className="w-full flex flex-col md:flex-row items-start gap-4">
          <div className="relative h-[200px] md:h-[500px] w-full md:w-[40%]">
            <Image
              src="/mockups/AboutMegaLiksMockup.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-[60%] flex flex-col gap-4 items-start">
            <h1 className="hidden md:block text-3xl md:text-4xl font-bold">
              {"Download App Now"}
            </h1>
            <p className="text-xs md:text-lg text-gray-600 font-semibold">
              Enhance your edits with our ScenePacks, project files, and editing
              tutorials. We provide all the essential editing resources and
              tools you need to create better edits in less time.
            </p>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.vk.MegaLinks"
              }
              target="_"
            >
              <div className="flex items-center border rounded-lg px-4 py-2 w-auto bg-black">
                <Image src={playstoreIcon} alt="" height={40} width={40} />
                <div className="text-left ml-3">
                  <p className="text-xs text-white">Download on </p>
                  <p className="text-sm md:text-base text-white">
                    {" "}
                    Google Play Store{" "}
                  </p>
                </div>
              </div>
            </Link>
            <div className="hidden md:flex gap-4 w-full rounded-md shadow-md p-4 bg-white">
              <div className="w-3/4 h-[140px] relative">
                <Image
                  src="/discord.png"
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 h-full items-start justify-start">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Join Our Discrod
                </h1>
                <p className="w-full text-gray-500 text-base">
                  Join our discord community to hangout, ask questions and
                  request more features, scene packs & many more
                </p>
                <Button className="w-1/2 bg-yellow-400 text-black hover:bg-yellow-400 font-semibold">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MockupRightSection
        title="Scene Packs"
        image="/mockups/ScenepackScreen.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Our collection of scene packs provides a wide array of pre-edited, high-quality footage ready for your video projects. Whether you're creating cinematic visuals, music videos, or other creative edits, these scene packs will help you bring your vision to life with ease."
      />
      <MockupLeftSection
        title="Editing Tutorials"
        image="/mockups/TutorialScreen.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Take your video editing skills to the next level with our comprehensive tutorials. Whether you're a beginner looking to learn the basics or an experienced editor aiming to refine your techniques, our tutorials cover everything from software tips to advanced editing tricks."
      />
      <MockupRightSection
        title="Scene Packs"
        image="/mockups/ScenepackScreen.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Our collection of scene packs provides a wide array of pre-edited, high-quality footage ready for your video projects. Whether you're creating cinematic visuals, music videos, or other creative edits, these scene packs will help you bring your vision to life with ease."
      />
    </main>
  );
};

export default HomePage;
