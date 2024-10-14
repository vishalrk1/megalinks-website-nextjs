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
    <section className="container mx-auto px-6 md:px-12">
      <div className="flex items-center">
        <div className="flex-1 flex-col justify-center ml-20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
          <p className="mb-4 text-sm sm:text-base">{description}</p>
          <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md w-max text-sm sm:text-base"
          >
            {buttonText}
          </button>
        </div>
        <div className="relative flex-1 h-[300px] sm:h-[400px] flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="aspect-square w-[60%] h-3/4 bg-blue-500 rounded-full"></div>
          </div>
          <div className="relative z-10 w-full h-full">
            <Image
              src={image}
              alt="Megalinks app mockup"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupRightSection;
