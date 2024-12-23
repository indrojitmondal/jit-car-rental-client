import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "This platform made my car rental experience seamless and hassle-free. Highly recommended!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s", 
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "The best prices and a great variety of cars to choose from. Booking was a breeze!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXRiLS-e95TPUEerH-8LA27pgzffJceyIjw&s",
      rating: 4,
    },
    {
      id: 3,
      name: "Mike Johnson",
      feedback:
        "Excellent customer service! They answered all my questions and made the process smooth.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Speaker_Mike_Johnson_Official_Portrait.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
       <Slide>
       <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
        
       </Slide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{testimonial.feedback}</p>
              <div className="mt-4 flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <span key={index} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
