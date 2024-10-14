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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
  isCenter?: boolean;
}

const MobileMockup: React.FC<Props> = ({ src, alt, isCenter }) => (
  <div
    className={`relative w-[180px] h-[500px] md:h-[500px]${
      isCenter
        ? "scale-110 z-10 h-[620px] md:w-[320px]"
        : "scale-75 md:w-[250px]"
    } transition-transform duration-500 ease-in-out`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className={`rounded-[2rem] overflow-hidden object-contain`}
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
      <section className="relative bg-white min-h-screen flex flex-col justify-start items-center p-8 overflow-hidden">
        <div className="absolute h-[50%] lg:h-[70%] bg-blue-500 top-0 left-0 right-0 rounded-b-md"></div>
        <div className="relative w-full flex flex-col items-center justify-center z-10 text-white mb-4">
          <h1 className="text-2xl md:text-5xl leading-6 lg:text-6xl font-bold mb-4 text-start md:mt-2">
            Mega Links Application
          </h1>
          <p className="text-sm md:text-base text-center max-w-2xl mx-auto">
            Megalinks provides a wide range of resources for video editing
            enthusiasts. From scene packs to project files, we offer everything
            you need to enhance your editing skills.
          </p>
        </div>
        <div className="relative z-2 flex flex-row gap-6 md:gap-16 justify-center items-center md:mt-6 bottom-28 lg:bottom-0">
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
      <section className="px-8 md:px-16 my-24 flex items-center justify-center w-full">
        <h1 className="text-3xl md:text-6xl font-bold ">About MegaLinks</h1>
      </section>
      <MockupLeftSection
        title="Scene Packs"
        image="/mockups/ScenepackMockup.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Our collection of scene packs provides a wide array of pre-edited, high-quality footage ready for your video projects. Whether you're creating cinematic visuals, music videos, or other creative edits, these scene packs will help you bring your vision to life with ease."
      />
      <MockupRightSection
        title="Editing Tutorials"
        image="/mockups/mockup-2.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Take your video editing skills to the next level with our comprehensive tutorials. Whether you're a beginner looking to learn the basics or an experienced editor aiming to refine your techniques, our tutorials cover everything from software tips to advanced editing tricks."
      />
      <MockupLeftSection
        title="Anime Packs"
        image="/mockups/AnimeRawMockup.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Dive into the world of anime with our exclusive anime packs, designed for fans and editors alike. These packs feature iconic clips, animations, and visual effects from your favorite anime series. Perfect for AMVs (Anime Music Videos) or creative edits, our anime packs help you craft visually stunning content with a distinct anime flair."
      />
      <section className="w-full bg-slate-100 flex items-start py-12 px-6 mt-16 md:px-40">
        <div className="relative h-[500px] w-[40%]">
          <Image
            src="/mockups/AboutMegaLiksMockup.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="w-[60%] flex flex-col gap-4 items-start">
          <h1 className="text-3xl md:text-4xl font-bold">
            {"Download App Now"}
          </h1>
          <p className="text-sm md:text-base text-gray-600 font-semibold">
            Mega Link is a Editing stuff app .. which is developed by Vishal &
            Abhijit Make your edit Better with our ScenePacks, Project Files,
            Editing tutorial We provide you all necessary Editing Stuff &
            Requirements which will help you to make a better edit within Less
            time
          </p>
          <p className="text-sm md:text-base text-gray-600 font-semibold">
            Be part of the movement! Mega Link, is the first pro editing stuff
            app for your smartphone, Bringing you professional Quality full Hd
            Scenepacks, One of the best animation & editing tutorial, Overlays
            and many more.
          </p>
          <div className="flex gap-4 w-full rounded-md shadow-md p-4 bg-white">
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
                Join our discord community to hangout, ask questions and request
                more features, scene packs & many more
              </p>
              <Button className="w-1/2 bg-yellow-400 text-black hover:bg-yellow-400 font-semibold">Join Now</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
