"use client";
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
      <section className="relative bg-white min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden">
        <div className="absolute h-[70%] bg-blue-500 top-0 left-0 right-0 rounded-b-md"></div>
        <div className="relative z-10 text-white mb-4">
          <h1 className="text-5xl leading-6 md:text-6xl font-bold mb-4 text-start mt-2">
            Mega Links Application
          </h1>
          <p className="text-center max-w-2xl mx-auto">
            Megalinks is an android app where we provide free resources
            available for video editing, like Scenepacks, project files of the
            big editor, tutorials, etc..
          </p>
        </div>
        <div className="relative z-2 flex flex-col md:flex-row gap-6 md:gap-16 justify-center items-center mt-6">
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
      <section className="px-20 flex items-center justify-between"></section>
    </main>
  );
};

export default HomePage;
