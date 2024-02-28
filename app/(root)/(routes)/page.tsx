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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {data, pending, error} = useAppSelector(selectIndividualCategory);
  const {scenepackData} = useAppSelector(selectScenepack);
  const {tutorialsData} = useAppSelector(selectTutorials);
  const {editintoolData} = useAppSelector(selectEditingTools);
  const {feedbacksData} = useAppSelector(selectFeedbacks);

  useEffect(() => {
    setLoading(true);
    dispatch(getIndividualCategory('e4b4ad1d-e45d-4cf1-96a6-d10345c4bed2'))
    setLoading(false);
  }, [dispatch]);

  const featuredScenepack = scenepackData.filter((item) => item.isFeatured);
  const featuredTutorials = tutorialsData.filter((item) => item.isFeatured);
  const featuredFeedbacks = feedbacksData.filter((item) => item.isFeatured);

  return (
    <Container>
    <main className="p-1 md:p-8">
      <div className="flex flex-col">
        {pending && <div className="flex h-screen items-center justify-center">Loading...</div>}
        {
          data && (
            <div className="space-y-3 md:space-y-5 pb-3">
              <BannerImage data={data}/>
              <div className="flex flex-col p-4 space-y-8">
                <ScenepackList title="Featured Scenepacks" items={featuredScenepack} isHome={true}/>
                <TutorialsList title="Featured Tutorials" tutorialsData={featuredTutorials} isHome={true} editingtoolsData={editintoolData}/>
                <FeedbacHomekList title="User Reviews" feedbackData={featuredFeedbacks} isHome={true}/>
              </div>
            </div>
          )
        }
      </div>
    </main>
    </Container>
  );
};

export default HomePage;
