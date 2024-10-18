"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";
import { getAnimePacks } from "@/redux/animepacks/actions";
import { getCategories } from "@/redux/categories/actions";
import getEditingTools from "@/redux/editingtools/actions";
import { getFeedbacks } from "@/redux/feedbacks/actions";
import { useAppDispatch } from "@/redux/hooks";
import { getScenePackData } from "@/redux/scenepacks/actions";
import { RootState } from "@/redux/store";
import { getTutorials } from "@/redux/tutorials/actions";
import { getUserSession } from "@/redux/userSession/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MegalinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const sessionDispatch = useDispatch();
  const { session } = useSelector((state: RootState) => state.fetchUserSession);
  const { user } = useSelector((state: RootState) => state.auth);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAnimePacks({ isApproved: true }));
    dispatch(getTutorials({ isApproved: true }));
    dispatch(getFeedbacks({}));
    dispatch(getEditingTools());
    dispatch(getScenePackData({ isApproved: true }));
    dispatch(getUserSession());
    setMounted(true);
  }, [dispatch]);

  useEffect(() => {
    sessionDispatch(getUserSession());
  }, [user]);

  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
