import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

const RecentListings = () => {
  const listings = [
    {
      id: 1,
      image: "https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg", // Replace with actual image URLs
      model: "Toyota Camry 2023",
      dailyPrice: "$45/day",
      availability: "Available",
      datePosted: "Added 2 days ago",
    },
    {
      id: 2,
      image: "https://www.motortrend.com/uploads/2021/12/2022-honda-accord-sport-2-0t-15.jpg",
      model: "Honda Accord 2022",
      dailyPrice: "$40/day",
      availability: "Unavailable",
      datePosted: "Added 1 week ago",
    },
    {
      id: 3,
      image: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1698421413/autoexpress/2023/10/Tesla%20Model%203%202023.jpg",
      model: "Tesla Model 3 2023",
      dailyPrice: "$65/day",
      availability: "Available",
      datePosted: "Added 5 hours ago",
    },
    {
      id: 4,
      image: "https://hips.hearstapps.com/hmg-prod/images/2021-ford-mustang-mach-1-109-1592231891.jpg?crop=0.822xw:0.695xh;0.141xw,0.192xh&resize=2048:*",
      model: "Ford Mustang 2021",
      dailyPrice: "$70/day",
      availability: "Unavailable",
      datePosted: "Added 3 days ago",
    },
    {
      id: 5,
      image: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1675682840/autoexpress/2023/02/BMW%20X5%20facelift%202023-9.jpg",
      model: "BMW X5 2023",
      dailyPrice: "$90/day",
      availability: "Available",
      datePosted: "Added 4 days ago",
    },
    {
      id: 6,
      image: "https://i.gaw.to/content/photos/52/75/527570-meilleurs-achats-2022-du-guide-de-l-auto-audi-a6-et-a7.jpeg",
      model: "Audi A6 2022",
      dailyPrice: "$80/day",
      availability: "Available",
      datePosted: "Added 1 day ago",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
    
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Listings</h2>
        
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">{car.model}</h3>
                <p className="text-gray-600 mt-1">{car.dailyPrice}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                    car.availability === "Available"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {car.availability}
                </span>
                <p className="text-sm text-gray-500 mt-2">{car.datePosted}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentListings;
