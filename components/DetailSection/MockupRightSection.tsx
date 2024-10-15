import Image from "next/image";
import React from "react";

interface MockupRightSectionProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const MockupRightSection: React.FC<MockupRightSectionProps> = ({
  image,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <section className="container my-4 md:my-0 mx-auto px-6 md:px-12">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="flex-1 flex flex-col justify-center md:ml-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 md:mb-4">
            {title}
          </h2>
          <p className="mb-2 md:mb-6 text-sm sm:text-base">{description}</p>
          <button
            onClick={onClick}
            className="bg-blue-500 text-white px-6 py-2 rounded-md w-max text-sm sm:text-base hover:bg-blue-600 transition-colors"
          >
            {buttonText}
          </button>
        </div>
        <div className="relative flex-1 h-[300px] sm:h-[400px] w-full flex justify-center items-center mb-8 md:mb-0 px-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[60%] w-[40%] md:w-[45%] rounded-full mx-6 bg-blue-300"></div>
            <div className="absolute h-[70%] w-[50%] md:w-[55%] rounded-full mx-6 bg-blue-300 opacity-25"></div>
          </div>
          <div className="relative z-10 w-full h-full min-h-[200px]">
            <Image
              src={image}
              alt="Megalinks app mockup"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupRightSection;
