import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: "🚗", // Replace with an actual icon or SVG
      title: "Search Cars",
      description: "Use our advanced search filters to find the perfect car for your needs.",
    },
    {
      id: 2,
      icon: "🛒",
      title: "Book Online",
      description: "Choose your car, select dates, and book securely through our platform.",
    },
    {
      id: 3,
      icon: "🔑",
      title: "Pick Up or Delivery",
      description: "Pick up your car from our location or get it delivered to you.",
    },
    {
      id: 4,
      icon: "✔️",
      title: "Enjoy Your Ride",
      description: "Drive comfortably and return the car at your convenience.",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
