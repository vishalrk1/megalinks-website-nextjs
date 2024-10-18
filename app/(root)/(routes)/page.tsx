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
import React, { useEffect, useRef, useState } from "react";

import PlaystoreButton from "@/components/Buttons/PlaystoreButton";
import AppStoreButton from "@/components/Buttons/AppStoreButton";
import MockupHeroContainer from "@/components/Hero/MockupHeroContainer";

import { motion, useInView } from "framer-motion";
import CounterContainer from "@/components/Animations/CounterContainer";
import AnimatedText from "@/components/Animations/AnimatedText";
import DiscordContainer from "@/components/Animations/DiscordContainer";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data, pending, error } = useAppSelector(selectIndividualCategory);
  const { scenepackData } = useAppSelector(selectScenepack);
  const { tutorialsData } = useAppSelector(selectTutorials);
  const { editintoolData } = useAppSelector(selectEditingTools);
  const { feedbacksData } = useAppSelector(selectFeedbacks);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setLoading(true);
    dispatch(getIndividualCategory("e4b4ad1d-e45d-4cf1-96a6-d10345c4bed2"));
    setLoading(false);
  }, [dispatch]);

  const featuredScenepack = scenepackData.filter((item) => item.isFeatured);
  const featuredTutorials = tutorialsData.filter((item) => item.isFeatured);
  const featuredFeedbacks = feedbacksData.filter((item) => item.isFeatured);

  return (
    <main>
      <section className="relative bg-white flex flex-col justify-start items-center p-8 overflow-hidden">
        <div className="absolute h-[70%] bg-blue-500 top-0 left-0 right-0 rounded-b-md"></div>
        <div className="w-full flex flex-col items-center justify-center z-10 text-white mb-4">
          <AnimatedText
            text="Mega Links Application"
            delay={0.3}
            className="text-2xl md:text-5xl leading-6 lg:text-6xl font-bold mb-4 text-start md:mt-2"
          />
          <AnimatedText
            text="Megalinks provides a wide range of resources for video editing
            enthusiasts. From scene packs to project files, we offer everything
            you need to enhance your editing skills."
            delay={0.5}
            className="text-sm md:text-base text-center max-w-2xl mx-auto"
          />
        </div>
        <MockupHeroContainer />
      </section>
      <section className="px-8 md:px-16 my-4 md:my-6 flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="text-3xl md:text-5xl font-semibold">About MegaLinks</h1>
        <motion.div
          ref={ref}
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "100%", opacity: 1 } : "hidden"}
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.3 }}
          className="w-full md:w-[70%] bg-blue-500 rounded-md py-4 px-8 flex flex-wrap items-center justify-center gap-12 gap-y-4"
        >
          <CounterContainer delay={1} endCount={7500} title={"Downloads"} />
          <CounterContainer delay={1.2} endCount={176} title={"Countries"} />
          <CounterContainer delay={1.4} endCount={67} title={"Active users"} />
          <CounterContainer delay={1.6} endCount={4.8} title={"User Ratings"} />
        </motion.div>
      </section>
      <section className="w-full bg-slate-100 py-6 md:py-12 px-6 xl:px-40 mb-12">
        <h1 className="block md:hidden text-2xl font-semibold mb-4">
          {"Download App Now"}
        </h1>
        <div className="w-full flex flex-col md:flex-row items-start gap-4">
          <motion.div
            initial="hidden"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative h-[200px] md:h-[500px] w-full md:w-[40%]"
          >
            <Image
              src="/mockups/AboutMegaLiksMockup.png"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
          <div className="w-full md:w-[60%] flex flex-col gap-4 items-start">
            <AnimatedText
              text="Download App Now"
              delay={0.3}
              className="hidden md:block text-3xl md:text-4xl font-bold"
            />
            <AnimatedText
              text="Enhance your edits with our ScenePacks, project files, and editing tutorials. We provide all the essential editing resources and tools you need to create better edits in less time."
              delay={0.3}
              className="text-xs md:text-base text-gray-600 font-semibold"
            />
            <DiscordContainer />
            <div className="flex items-center justify-center gap-4">
              <PlaystoreButton />
              <AppStoreButton />
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
        onClick={() => router.push("/tutorials")}
        description="Take your video editing skills to the next level with our comprehensive tutorials. Whether you're a beginner looking to learn the basics or an experienced editor aiming to refine your techniques, our tutorials cover everything from software tips to advanced editing tricks."
      />
      <MockupRightSection
        title="Anime Raws"
        image="/mockups/ScenepackScreen.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/animepacks")}
        description="Dive into the world of anime with our exclusive anime packs, designed for fans and editors alike. These packs feature iconic clips, animations, and visual effects from your favorite anime series. Perfect for AMVs (Anime Music Videos) or creative edits, our anime packs help you craft visually stunning content with a distinct anime flair."
      />
      <div className="mb-12"></div>
    </main>
  );
};

export default HomePage;
