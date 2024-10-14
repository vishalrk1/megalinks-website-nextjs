"use client";
import MockupLeftSection from "@/components/DetailSection/MockupLeftSection";
import MockupRightSection from "@/components/DetailSection/MockupRightSection";
import Navbar from "@/components/nav-bar";
import BannerImage from "@/components/ui/banner";
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
      <section className="px-8 md:px-16 my-12 flex items-center justify-center w-full">
        <h1 className="text-3xl md:text-4xl font-bold ">About MegaLinks</h1>
      </section>
      <MockupLeftSection
        title="Scene Packs"
        image="/mockups/mockup-1.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Our collection of scene packs provides a wide array of pre-edited, high-quality footage ready for your video projects. Whether you're creating cinematic visuals, music videos, or other creative edits, these scene packs will help you bring your vision to life with ease."
      />
      <MockupRightSection
        title="Editing Tutorials"
        image="/mockups/mockup-1.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Take your video editing skills to the next level with our comprehensive tutorials. Whether you're a beginner looking to learn the basics or an experienced editor aiming to refine your techniques, our tutorials cover everything from software tips to advanced editing tricks."
      />
      <MockupLeftSection
        title="Anime Packs"
        image="/mockups/mockup-1.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Dive into the world of anime with our exclusive anime packs, designed for fans and editors alike. These packs feature iconic clips, animations, and visual effects from your favorite anime series. Perfect for AMVs (Anime Music Videos) or creative edits, our anime packs help you craft visually stunning content with a distinct anime flair."
      />
    </main>
  );
};

export default HomePage;
