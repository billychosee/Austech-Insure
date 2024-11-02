"use client"; // Ensure this component is treated as a client component

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Build from '../public/Images/building.png'; // Correct path for the building image
import Secu from '../public/Images/Security.png'; // Correct path for the security image

const Counter = () => {
  const countToBusinesses = 9000; // Define the target count for businesses
  const countToPolicies = 14000;   // Define the target count for policies

  const [businessesCount, setBusinessesCount] = useState(0);
  const [policiesCount, setPoliciesCount] = useState(0);

  useEffect(() => {
    const businessesIncrement = 100; // Increment by 100
    const policiesIncrement = 100; // Increment by 100

    const speed = 1; // Speed of counting (lower value means faster)

    const businessesInterval = setInterval(() => {
      setBusinessesCount((prev) => {
        if (prev < countToBusinesses) {
          return Math.min(prev + businessesIncrement, countToBusinesses);
        }
        clearInterval(businessesInterval);
        return countToBusinesses;
      });
    }, speed);

    const policiesInterval = setInterval(() => {
      setPoliciesCount((prev) => {
        if (prev < countToPolicies) {
          return Math.min(prev + policiesIncrement, countToPolicies);
        }
        clearInterval(policiesInterval);
        return countToPolicies;
      });
    }, speed);

    return () => {
      clearInterval(businessesInterval);
      clearInterval(policiesInterval);
    };
  }, []);

  return (
    <div className="flex w-full md:w-1/3">
      <div className="bg-orange-200 p-6 sm:p-8 md:p-10 rounded-3xl border">
        <h1 className="text-3xl sm:text-4xl font-semibold">Austech Insure at a Glance</h1>
        <div className="flex justify-between mt-4">
          <div>
            <Image src={Build} alt="Building" width={50} height={50} className="py-6 sm:py-10" />
            <p className="text-5xl sm:text-7xl">{businessesCount < countToBusinesses ? (businessesCount / 1000).toFixed(0) + 'K' : '9K'}</p>
            <p className="pt-2 sm:pt-5">Businesses Protected</p>
          </div>
          <div>
            <Image src={Secu} alt="Security" width={50} height={50} className="py-6 sm:py-10" />
            <p className="text-5xl sm:text-7xl">{policiesCount < countToPolicies ? (policiesCount / 1000).toFixed(0) + 'K' : '14K'}</p>
            <p className="pt-2 sm:pt-5">Policies Secured</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
