import { Category } from "@/redux/types";

interface BannerImageProps {
  data: Category;
}

const BannerImage: React.FC<BannerImageProps> = ({ data }) => {
  console;
  return (
    <div className="p-2 sm:p-3 lg:p-4 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-video sm:aspect-[2.6/1.8] md:aspect-[2.6/1] overflow-hidden bg-cover"
      >
        {/* <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.bannerImageName}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BannerImage;
