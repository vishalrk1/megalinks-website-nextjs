"use client";
import BannerImage from "@/components/ui/banner";
import Container from "@/components/ui/container";
import FeedbackList from "@/components/ui/feedbacks/feedback-list";
import { getIndividualCategory } from "@/redux/categories/categoryId/actions";
import { selectIndividualCategory } from "@/redux/categories/categoryId/selector";
import { selectFeedbacks } from "@/redux/feedbacks/selector";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

const FeedbackPage = () => {
    const dispatch = useAppDispatch();
    const {data, pending, error} = useAppSelector(selectIndividualCategory);
    const {feedbacksData} = useAppSelector(selectFeedbacks);
    useEffect(() => {
        dispatch(getIndividualCategory('258620ae-f888-4170-906d-65339d11787a'));
    }, [dispatch]);
    return(
        <Container>
            <div className='p-1 md:p-8'>
                <div className='flex flex-col space-y-3'>
                    {pending && <h2 className='flex h-screen items-center justify-center'>Loading...</h2>}
                    {
                        data && (
                            <div className="space-y-3 md:space-y-5 pb-10">
                                <BannerImage data={data}/>
                                <div className="flex flex-col p-4 space-y-8">
                                    <FeedbackList title="User Reviews" feedbackData={feedbacksData} isHome={false}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default FeedbackPage;