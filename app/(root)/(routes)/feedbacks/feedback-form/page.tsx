"use client";
import BannerImage from "@/components/ui/banner";
import Container from "@/components/ui/container";
import { categoriesSelector } from "@/redux/categories/selector";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const UserFeedbackFormPage = () => {
    const {data, pending, error} = useAppSelector(categoriesSelector);
    const homeCategory = data?.find((item) => item.id === '653ead2e-ba7d-4bb9-8dbf-cfd392ee6815');

    return (
        <Container>
        <div className="h-screen">
            <BannerImage data={homeCategory!}/>
        </div>
        </Container>
    );
};

export default UserFeedbackFormPage;
