import Image from "next/image";
import React from "react";

interface MockupLeftSectionProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const MockupLeftSection: React.FC<MockupLeftSectionProps> = ({
  image,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <section className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[300px] sm:h-[400px] md:h-[600px] flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-blue-500 rounded-full"></div>
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
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
          <p className="mb-4 text-sm sm:text-base">{description}</p>
          <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md w-max text-sm sm:text-base"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MockupLeftSection;
