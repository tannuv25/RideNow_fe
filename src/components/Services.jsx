import React from "react";
import { Car, Crown, Briefcase, MapPin, Plane, Sun } from "lucide-react";

export default function ServicesSection() {
  const rides = [
    {
      title: "Economy Ride",
      icon: <Car size={28} className="text-amber-500" />,
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80",
      desc: "Affordable city rides in compact cars — ideal for your daily commutes and short trips.",
    },
    {
      title: "Premium Ride",
      icon: <Crown size={28} className="text-amber-500" />,
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      desc: "Experience comfort and luxury in our premium sedans — designed for professionals and style lovers.",
    },
    {
      title: "Business Ride",
      icon: <Briefcase size={28} className="text-amber-500" />,
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      desc: "Spacious SUVs for corporate travel, meetings, or events — arrive relaxed and in style.",
    },
    {
      title: "Outstation Ride",
      icon: <MapPin size={28} className="text-amber-500" />,
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
      desc: "Seamless long-distance trips for your weekend getaways or city-to-city travel plans.",
    },
    {
      title: "Airport Pickup",
      icon: <Plane size={28} className="text-amber-500" />,
      image:
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=800&q=80",
      desc: "Timely airport pickups and drops with real-time flight tracking and live updates.",
    },
    {
      title: "Holiday Ride",
      icon: <Sun size={28} className="text-amber-500" />,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      desc: "Explore new places stress-free — perfect for family vacations and leisure travel.",
    },
  ];

  return (
    <section className="bg-white py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-amber-500">Ride Services</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Choose a ride that fits your journey — from budget-friendly options to
          premium experiences, <span className="text-amber-500">RideNow</span>{" "}
          has it all.
        </p>

        {/* Ride Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rides.map((ride, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={ride.image}
                alt={ride.title}
                className="rounded-t-2xl h-48 w-full object-cover"
              />
              <div className="p-5 flex flex-col items-center text-center">
                <div className="mb-2">{ride.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">
                  {ride.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {ride.desc}
                </p>
                <button className="mt-4 px-5 py-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-medium rounded-lg hover:from-amber-500 hover:to-amber-600 transition shadow-md">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
