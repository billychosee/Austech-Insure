// FeatureCard.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FeatureCardProps {
  imageSrc: string | StaticImageData; // Accept both string and StaticImageData
  altText: string;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  bgColor,
}) => {
  return (
    <div className={`flex flex-col ${bgColor} px-4 py-5 md:px-7 md:py-10 w-full md:w-1/3 md:mx-5 rounded-3xl border border-gray-200 shadow-custom-lg mb-5 md:mb-0`}>
      <Image
        src={imageSrc}
        alt={altText}
        className="w-full h-full md:h-full object-cover mb-4" // Adjusted height for mobile and tablet
      />
      <h1 className="text-lg md:text-2xl font-bricolage text-darkGray">{title}</h1>
      <p className="text-sm md:text-base text-mediumGray pt-3">{description}</p>
    </div>
  );
};

export default FeatureCard;
