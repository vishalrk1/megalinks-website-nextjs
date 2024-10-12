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
      <MockupLeftSection
        title="Scene Packs"
        image="/mockups/mockup-1.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Megalinks provides a wide range of resources for video editing
            enthusiasts. From scene packs to project files, we offer everything
            you need to enhance your editing skills."
      />
      <MockupRightSection
        title="Scene Packs"
        image="/mockups/mockup-2.png"
        buttonText="Explore Packs"
        onClick={() => router.push("/scenepacks")}
        description="Megalinks provides a wide range of resources for video editing
            enthusiasts. From scene packs to project files, we offer everything
            you need to enhance your editing skills."
      />
      {/* <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[700px] flex justify-center items-center">
            <div className="absolute lg:bottom-24 left-1/2 transform -translate-x-1/2 w-3/5 h-3/5 bg-blue-500 rounded-full"></div>
            <div className="relative z-10 w-3/4 h-full">
              <Image
                src="/mockups/mockup-1.png"
                alt="Megalinks app mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Scene Packs</h2>
            <p className="mb-4">
              Megalinks provides a wide range of resources for video editing
              enthusiasts. From scene packs to project files, we offer
              everything you need to enhance your editing skills.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md w-max">
              Learn More
            </button>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default HomePage;
