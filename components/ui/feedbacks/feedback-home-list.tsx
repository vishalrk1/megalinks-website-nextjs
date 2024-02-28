import { EditingTool, Feedback, Tutorial } from "@/redux/types";
import NoResults from "../no-result";
import { Button } from "../button";
import { ArrowRight, Forward } from "lucide-react";
import Link from "next/link";
import FeedbackCard from "./feedback-card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { useRef } from "react";

interface FeedbackListProps {
  title: string;
  feedbackData: Feedback[];
  isHome?: boolean;
}
const FeedbacHomekList: React.FC<FeedbackListProps> = ({
  title,
  feedbackData,
  isHome,
}) => {
  return (
    <section className="space-y-2">
      <div className="flex flex-row items-center">
        <h3 className="flex-1 font-bold md:text-3xl sm:text-2xl">{title}</h3>
        {isHome && (
          <Link href="/feedbacks">
            <Button variant="ghost" className="flex-2">
              Explore
              <ArrowRight size={15} className="mx-1" />
            </Button>
          </Link>
        )}
      </div>
      {feedbackData.length === 0 && <NoResults />}
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {feedbackData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-base font-bold">{item.message}</p>
                <p className="text-sm">
                  - <span className="text-sm">{item.userName}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="overflow-x-auto no-scrollbar">
          <div className="flex flex-row">
            {feedbackData.map((item) => (
              <FeedbackCard key={item.id} data={item} />
            ))}
          </div>
        </div> */}
      </>
    </section>
  );
};

export default FeedbacHomekList;
