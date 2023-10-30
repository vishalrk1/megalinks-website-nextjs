"use client";
import BannerImage from "@/components/ui/banner";
import Container from "@/components/ui/container";
import ScenepackList from "@/components/ui/scenepacks/scenepack-list";
import { categoriesSelector } from "@/redux/categories/selector";
import { useAppSelector } from "@/redux/hooks";
import { scenepackSelector } from "@/redux/scenepacks/selector";

const ScenepackPage = () => {
    const {data, pending, error} = useAppSelector(categoriesSelector);
    const scenepackCategory = data?.find(item => item.id === '653ead2e-ba7d-4bb9-8dbf-cfd392ee6815');
    const {scenepackData, scenepackPending, scenepackError} = useAppSelector(scenepackSelector);
    return(
        <Container>
            {
                pending ? <div className='flex items-center justify-center h-screen p-8'>Loading...</div> : 
                <div className="p-2 md:p-8">
                    <div className="space-y-2 md:space-y-10 pb-10">
                        <BannerImage data={scenepackCategory!}/>
                        <div className="flex flex-col space-y-3 p-4">
                            {
                                scenepackData && <ScenepackList items={scenepackData} title="All Available Scenepacks"/>
                            }
                        </div>
                    </div>
                </div>
            }
        </Container>
    );
};

export default ScenepackPage;