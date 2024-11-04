import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image'; // Import StaticImageData

interface ContactSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string | StaticImageData; // Updated type definition
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col px-8 md:flex-row md:px-36 bg-gray-300 font-bricolage md:mt-32 mt-5">
  
      {/* Image section */}
      <div className="flex justify-center items-center md:w-1/2 mt-6 md:mt-0 order-first md:order-last">
        <Image src={imageSrc} alt="Contact" className="w-full md:w-4/5 md:h-3/4" />
      </div>
      
      {/* Text section */}
      <div className="pt-10 md:pt-32 md:w-1/2">
        <h1 className="text-4xl md:text-6xl mb-6 md:mb-9">
          {title}
        </h1>
        <p className="text-xl md:text-3xl font-semibold mb-4 md:mb-2 md:w-4/5 text-darkGray">
          {description}
        </p>
        <button className="text-white py-2 md:px-5 w-full md:w-1/4 bg-violet-700 hover:bg-violet-500 border border-violet-700 rounded-full mt-10 md:mt-16 transition duration-300 mb-10 md:mb-28">
          {buttonText}
        </button>
      </div>

    </div>
  );
};

export default ContactSection;
