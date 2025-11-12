import React, { useState } from "react";
import { MapPin, Navigation, Search } from "lucide-react";

export default function Hero() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const heroImage = "../../img/p6.jpg";

  const handleSearch = () => {
    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations");
      return;
    }
    console.log(`Searching ride from ${pickup} to ${drop}`);
  };

  return (
    <section className="bg-linear-to-b from-amber-100 via-white to-white pt-24 pb-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
        
        {/* Left Section */}
        <div className="text-center md:text-left md:w-[48%]">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Ride <span className="text-amber-500">Smarter</span>,<br />
            Arrive <span className="text-amber-600">Faster</span>.
          </h1>

          <p className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed">
            Book your ride instantly with <strong>RideNow</strong> — your trusted
            partner for safe, quick, and affordable city travel. Get there with
            comfort and style.
          </p>

          {/* Pickup–Drop Box */}
          <div className="mt-7 bg-white rounded-xl shadow-lg border border-amber-100 p-4 flex flex-col gap-3 max-w-sm md:max-w-md mx-auto md:mx-0">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-amber-500" size={20} />
              <input
                type="text"
                placeholder="Enter Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800"
              />
            </div>

            <div className="relative">
              <Navigation className="absolute left-3 top-3 text-amber-500" size={20} />
              <input
                type="text"
                placeholder="Enter Drop Location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800"
              />
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-linear-to-r from-amber-400 to-amber-500 text-black font-semibold py-3 rounded-lg hover:from-amber-500 hover:to-amber-600 transition flex items-center justify-center shadow-md"
            >
              <Search className="mr-2" size={18} /> Search Ride
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-[47%] mt-12 md:mt-0 flex justify-center">
          <img
            src={heroImage}
            alt="RideNow Taxi"
            className="w-Full h-100 md:w-[90%] rounded-2xl shadow-xl border border-amber-100 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
