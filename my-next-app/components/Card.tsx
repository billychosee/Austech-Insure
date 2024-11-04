import React from 'react';

interface QuoteCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ icon, title, description }) => (
  <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md flex flex-col h-full transition-transform transform hover:scale-105"> {/* Added border classes */}
    <div className="flex flex-col flex-grow">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="font-bricolage text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <div className="flex gap-4 items-baseline mt-auto">
      <button className="text-purple-600 font-semibold border border-purple-600 rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white hover:scale-105">
        Get a Quote
      </button>
      <button className="text-purple-600 font-semibold hover:underline">
        Learn More
      </button>
    </div>
  </div>
);

export default QuoteCard;
