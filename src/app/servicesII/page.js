'use client'


import React from "react";

const ServicesII = () => {
  const restaurantsData = [
    {
      id: 1,
      name: "Restaurant 1",
      image: "./doctor2.jpg",
    },
    {
      id: 2,
      name: "Restaurant 2",
      image: "./doctor2.jpg",
    },
    {
      id: 3,
      name: "Restaurant 3",
      image: "./doctor2.jpg",
    },
    {
      id: 4,
      name: "Restaurant 4",
      image: "./doctor2.jpg",
    },
  ];
 
  return (
    <div className="container">
      <div className="flex items-center justify-center w-screen min-h-screen bg-black">
        <div className="flex flex-wrap justify-center">
          {restaurantsData.map((restaurant) => (
            <div
              key={restaurant.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded overflow-hidden shadow-md m-6 mx-4 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 transition-transform transform hover:scale-105"
            >
              <div className="relative group">
                <img
                  className="w-full h-full object-cover hover:scale-105 transform transition-all duration-500 hover:opacity-20"
                  src={restaurant.image}
                  alt={restaurant.name}
                />
                <div
                  className="absolute bottom-1/2 left-1/3 text-white text-3xl font-normal opacity-0 group-hover:opacity-100 z-0 hover:z-10 transition-all duration-500"
                >
                  Check Out
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesII;
