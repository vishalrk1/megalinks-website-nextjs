"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";
import { getAnimePacks } from "@/redux/animepacks/actions";
import { getCategories } from "@/redux/categories/actions";
import getEditingTools from "@/redux/editingtools/actions";
import { getFeedbacks } from "@/redux/feedbacks/actions";
import { useAppDispatch } from "@/redux/hooks";
import { getScenePackData } from "@/redux/scenepacks/actions";
import { getTutorials } from "@/redux/tutorials/actions";
import { useEffect, useState } from "react";

export default function MegalinksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getAnimePacks({isApproved: true}));
        dispatch(getTutorials({isApproved: true}));
        dispatch(getFeedbacks({}));
        dispatch(getEditingTools());
        dispatch(getScenePackData({isApproved: true}));
        setMounted(true);
    }, [dispatch]);

    if(!mounted){
        return null;
    }

    return (
        <>
            <div className="fixed top-0 z-10 w-full h-max"> 
                <Navbar />
            </div>
            {children}
            <Footer />
        </>
    );
};