"use client";
import BannerImage from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-result";
import TutorialsList from "@/components/ui/tutorials/tutorials-list";
import { selectCategories } from "@/redux/categories/selector";
import { selectEditingTools } from "@/redux/editingtools/selector";
import { useAppSelector } from "@/redux/hooks";
import { selectTutorials } from "@/redux/tutorials/selector";
import { useState } from "react";

const TutorialsPage = () => {
    const {data} = useAppSelector(selectCategories);
    const tutorialCategory = data?.find(item => item.id === '7d4b3674-be06-4bcd-9c9c-d737078bfe93');
    const {tutorialsData} = useAppSelector(selectTutorials);
    const {editintoolData} = useAppSelector(selectEditingTools);

    const [filteredTutorialsData, setFilteredTutorialsData] = useState(tutorialsData);
    const [toolCat, setToolCat] = useState('default-id');

    const filterButtonsData = [{
        id: 'default-id',
        categoryId: '7d4b3674-be06-4bcd-9c9c-d737078bfe93',
        title: 'All'
    }, ...editintoolData]

    const handelTutorialFilter = (toolId: string) => {
        setToolCat(toolId);
        const newList  = tutorialsData.filter((tutorial) => tutorial.editingToolId === toolId);
        setFilteredTutorialsData(toolId === 'default-id' ? tutorialsData : newList);
    };

    return (
        <Container>
            <div className="flex flex-col p-2 md:p-8 space-y-1 md:space-y-5 pb-10">
                <BannerImage data={tutorialCategory!}/>
                <h3 className="p-2 font-bold md:text-3xl sm:text-2xl">All Available Tutorials</h3>
                <div className="overflow-x-auto no-scrollbar">
                    <div className="flex flex-row space-x-3 p-2">
                        {
                            filterButtonsData.map((item) => (
                                <Button key={item.id} variant='outline' className={toolCat === item.id ? "text-xs bg-black text-white" : "text-xs"} onClick={() => handelTutorialFilter(item.id)}>
                                    {item.title}
                                </Button>
                            ))
                        }
                    </div>
                </div>
                {tutorialsData.length === 0 && <NoResults />}
                <TutorialsList title="" tutorialsData={filteredTutorialsData} editingtoolsData={editintoolData}/>
            </div>
        </Container>
    );
};

export default TutorialsPage;