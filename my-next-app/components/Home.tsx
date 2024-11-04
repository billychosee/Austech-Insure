import React from 'react'
import Image from "next/image";
import Tablet from '../public/Images/woman_with_tablet.png'
import Globe from '../public/Images/World.png'
import Laptop from '../public/Images/Human_Resource.png'
import Dog from '../public/Images/Dog.png'
import LapI from '../public/Images/lptop.png'
import Contact from '../public/images/People.png'
import Stars from '../public/images/stars.png'
import FeatureCard from './FeaturedCard';
import QuoteCard from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
import Counter from './Counter'
import ContactSection from './ContactSection';


function Home() {
  return (
    <div className='text-black'>

      <Navbar></Navbar>

{/* Start Hero Section */}
<div className="flex flex-col-reverse lg:flex-row items-center mx-5 md:mx-36 md:pt-5 lg:space-y-0 py-16 md:py-10">
  {/* Text Section */}
  <div className="flex flex-col items-center lg:items-start justify-center space-y-8 lg:space-y-10 lg:w-1/2 text-left">
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bricolage leading-tight">
      Insurance, tailored for your business.
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl">
      Fast quotes. Custom coverage. Complete peace of mind.
    </p>
    <div className="flex flex-col items-center space-y-4">
  <button className="text-white py-3 px-36 md:px-7 w-full sm:w-auto bg-violet-700 border rounded-full cursor-pointer hover:bg-violet-800 text-center transition duration-300 ease-in-out transform hover:scale-105">
    Get a quote
  </button>
  <p className="text-violet-700 font-semibold text-center cursor-pointer">
    Return to Your Quote
  </p>
</div>

  </div>
  
  {/* Image Section */}
  <div className="flex justify-center lg:justify-end w-full lg:w-1/2 py-4 lg:pb-10 transition-transform duration-300 transform hover:scale-105">
    <Image 
      src={Tablet} 
      alt="Tablet Girl" 
      className="hidden lg:block w-full sm:w-3/4 md:w-2/3 lg:w-auto" 
    />
  </div>
</div>
{/* End Hero Section */}

{/* // Reliability Section Component */}
<div className="flex flex-col justify-center items-center pt-10 md:pt-32 px-6 md:px-36 bg-gray-100 mt-5">
  <h1 className="text-3xl md:text-5xl w-full md:w-4/5 text-center font-bricolage">
    Insurance Made Simple. Get back to business faster.
  </h1>
  <p className="pt-5 text-center text-lg md:text-xl w-full md:w-4/5">
    Austech Insure cuts through insurance complexity with custom quotes in minutes and hassle-free
    coverage tailored to your industry.
  </p>

  <div className="flex flex-col md:flex-row pt-10 md:pt-16 space-y-6 md:space-y-0 md:space-x-6">
    <FeatureCard
      imageSrc={Globe}
      altText="Globe"
      title="All your Insurance needs in one stop"
      description="Skip the quote comparison hassle and lengthy paperwork. We've got all the coverage you need in one place."
      bgColor="bg-lime-300"
    />
    <FeatureCard
      imageSrc={Laptop}
      altText="Laptop"
      title="Human smarts and tech speed in one platform"
      description="We offer the personalized touch of a broker with the speed and convenience of technology."
      bgColor="bg-teal-300"
    />
    <FeatureCard
      imageSrc={Dog}
      altText="Dog"
      title="Transparent solutions that prioritize you"
      description="Unlike some insurers, we prioritize what's right for your business, not our own sales quotas."
      bgColor="bg-orange-300"
    />
  </div>

  <button className="mt-10 md:mt-16 text-white py-3 px-5 bg-violet-700 hover:bg-violet-500 border border-violet-700 rounded-full transition duration-300 mb-16 md:mb-28 w-full md:w-auto">
    Get a quote
  </button>
</div>
{/* End Reliability Section */}



 {/* Quick Quotes Section */}
 <div className="px-8 md:px-36 pt-28">
        <h1 className="font-bricolage text-5xl mb-12">Our quick quotes save you time</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuoteCard
            icon={<Image src={LapI} alt="Laptop Icon" width={40} height={40}  quality={100}/>}
            title="Technology Errors and Omissions / Cyber"
            description="Covers liability claims that allege financial losses arising from your tech products or services, and costs arising from a security breach (ransomware, system damage, etc.)."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Laptop Icon" width={40} height={40}  quality={100} />}
            title="Cyber Insurance"
            description="A modern business must-have, Cyber covers first and third party claims resulting from security/data breaches and cybercrimes like ransomware, phishing, and more."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Dog Icon" width={40} height={40} />}
            title="Another Insurance"
            description="Description for another insurance type goes here."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Dog Icon" width={40} height={40} />}
            title="Another Insurance"
            description="Description for another insurance type goes here."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Laptop Icon" width={40} height={40}  quality={100}/>}
            title="Technology Errors and Omissions / Cyber"
            description="Covers liability claims that allege financial losses arising from your tech products or services, and costs arising from a security breach (ransomware, system damage, etc.)."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Laptop Icon" width={40} height={40}  quality={100} />}
            title="Cyber Insurance"
            description="A modern business must-have, Cyber covers first and third party claims resulting from security/data breaches and cybercrimes like ransomware, phishing, and more."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Dog Icon" width={40} height={40} />}
            title="Another Insurance"
            description="Description for another insurance type goes here."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Dog Icon" width={40} height={40} />}
            title="Another Insurance"
            description="Description for another insurance type goes here."
          />
          <QuoteCard
            icon={<Image src={LapI} alt="Dog Icon" width={40} height={40} />}
            title="Another Insurance"
            description="Description for another insurance type goes here."
          />
        </div>

      </div>

      {/* End Quick Quotes Section */}
      
      <div className='flex justify-center mt-16'>
        <button className="text-purple-600 font-semibold border border-purple-600 rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white hover:scale-105">View All Coverage </button>  
      </div>
{/* 
      // Start Contact Us Section */}
<ContactSection
        title="Need help finding an insurance solution?"
        description="Let us know your needs and we'll connect you with the right options."
        buttonText="Contact Us"
        imageSrc={Contact} // Adjust this path to point to your image file
      />
{/* Content Section for Trust and Expertise */}
<div className="px-4 sm:px-8 md:px-36 pt-20 md:pt-28">
  
  <div className="font-bricolage w-full md:w-3/5">
    <h1 className="text-3xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 md:mb-9">Expertise you can trust</h1>
    <p className="text-lg sm:text-2xl md:text-3xl">
      Discover industry accolades, dive into data-driven insights, and learn why our customers rate us 4.5 stars.
    </p>
  </div>

  <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col md:flex-row gap-4 sm:gap-5">
    <div className="w-full md:w-3/5 font-bricolage rounded-3xl border border-gray-200 bg-violet-700 text-white p-6 sm:p-8 md:p-10">
      <h1 className="text-4xl sm:text-5xl mb-6 sm:mb-8 md:mb-9">Customer Reviews</h1>
      <p className="text-lg sm:text-2xl md:text-3xl">
      &quot;You helped us streamline the insurance process to assist with risk mitigation, saving us time and headaches. We sleep well knowing we’re covered and our business is protected.&quot;
      </p>
      <p className="text-lg sm:text-2xl pt-4 sm:pt-5">Peter Holden</p>
      <p className="text-lg sm:text-2xl">Head of Finance and Accounting, Truebill</p>
    </div>
    <div className="w-full md:w-2/5 rounded-3xl border border-gray-200 bg-mediumGreen p-5 sm:p-7 font-bricolage">
      <h1 className="text-3xl sm:text-4xl">Trusted by Businesses Nationwide</h1>
      <p className="text-darkGray text-base sm:text-lg md:text-xl pt-6 sm:pt-10">
        Leading the way in business insurance with a 4.5-star rating from Advisor Smith.
      </p>
      <div className="flex pt-10 sm:pt-20 items-center justify-center">
        <h1 className="text-5xl sm:text-7xl">4.5</h1>
        <Image src={Stars} alt="Stars" className="py-2 md:py-10 md:w-4/5" />
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row mt-5 font-bricolage gap-4 sm:gap-5 mb-16 md:mb-28">
    
    {/* <div className="flex w-full md:w-1/3">
      <div className="bg-orange-200 p-6 sm:p-8 md:p-10 rounded-3xl border">
        <h1 className="text-3xl sm:text-4xl font-semibold">Austech Insure at a Glance</h1>
        <div className="flex justify-between mt-4">
          <div>
            <Image src={Build} alt="laptop" width={50} height={50} className="py-6 sm:py-10" />
            <p className="text-5xl sm:text-7xl">9K</p>
            <p className="pt-2 sm:pt-5">Businesses Protected</p>
          </div>
          <div>
            <Image src={Secu} alt="laptop" width={50} height={50} className="py-6 sm:py-10" />
            <p className="text-5xl sm:text-7xl">14K</p>
            <p className="pt-2 sm:pt-5">Policies Secured</p>
          </div>
        </div>
      </div>
    </div> */}

    <Counter></Counter>

    <div className="w-full md:w-1/3 p-6 sm:p-7 bg-white rounded-3xl border shadow-md flex flex-col">
      <h1 className="text-3xl sm:text-4xl font-semibold">Did you know?</h1>
      <p className="text-lg sm:text-2xl pt-6 sm:pt-8">
        Professional Liability Insurance can cover legal defense costs, even for groundless lawsuits.
      </p>
      <button className="text-white text-base sm:text-xl py-3 sm:py-4 w-full bg-violet-700 hover:bg-violet-500 border border-violet-700 rounded-full mt-auto transition duration-300">
        Learn More
      </button>
    </div>

    <div className="w-full md:w-1/3 p-6 sm:p-7 bg-white rounded-3xl border shadow-md flex flex-col">
      <h1 className="text-3xl sm:text-4xl font-semibold">Calculate Your Risk</h1>
      <p className="text-lg sm:text-2xl pt-6 sm:pt-8">
        Take our Risk Archetype Quiz to discover strategies for smarter business protection.
      </p>
      <button className="text-white text-base sm:text-xl py-3 sm:py-4 w-full bg-violet-700 hover:bg-violet-500 border border-violet-700 rounded-full mt-auto transition duration-300">
        Take the Quiz
      </button>
    </div>

  </div>
</div>
{/* End of Content Section for Trust and Expertise */}

      <Footer></Footer>
    </div>
  )
}

export default Home