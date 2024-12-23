import React from 'react';
import '../../styles/SpecialOffers.css'
import { Fade, Slide } from "react-awesome-reveal";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Get 15% off for weekend rentals!",
      description: "Book your car now and enjoy a weekend getaway with great savings.",
      buttonText: "Learn More",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Luxury cars at $99/day this holiday season!",
      description: "Drive in style with our exclusive holiday offers on luxury cars.",
      buttonText: "Book Now",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Slide>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Special Offers</h2>
        
        </Slide>
        <div className="flex flex-wrap justify-center gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative max-w-sm w-full p-6 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105 ${offer.bgColor}`}
              style={{ animation: 'slide-in 0.5s ease-out' }}
            >
              <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
              <p className="text-sm mb-6">{offer.description}</p>
              <button className="py-2 px-4 bg-white text-gray-800 font-semibold rounded shadow hover:bg-gray-100 transition-colors">
                {offer.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for slide-in animation */}
      {/* <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style> */}
    </section>
  );
};

export default SpecialOffers;
