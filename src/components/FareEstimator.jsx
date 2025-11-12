import React, { useState } from "react";
import { MapPin, Navigation, Car, Calculator } from "lucide-react";

export default function FareEstimator() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [rideType, setRideType] = useState("Economy");
  const [fare, setFare] = useState(null);

  const handleEstimate = () => {
    // Static logic (API integration will come later)
    const baseFare = rideType === "Economy" ? 120 : rideType === "Premium" ? 200 : 300;
    const distance = pickup && drop ? Math.floor(Math.random() * 15) + 3 : 0;
    const estimatedFare = baseFare + distance * 15;
    setFare({ distance, estimatedFare });
  };

  return (
    <section className="bg-linear-to-b from-white to-amber-50 py-20" id="fare">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Fare <span className="text-amber-500">Estimator</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Get an instant fare estimate before booking your ride with{" "}
          <span className="text-amber-500 font-semibold">RideNow</span>.  
          Plan smarter, travel better.
        </p>

        {/* Estimator Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 border border-gray-100 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-amber-500" size={20} />
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Navigation className="absolute left-3 top-3 text-amber-500" size={20} />
              <input
                type="text"
                placeholder="Drop Location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:w-1/2">
              <Car className="absolute left-3 top-3 text-amber-500" size={20} />
              <select
                value={rideType}
                onChange={(e) => setRideType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              >
                <option>Economy</option>
                <option>Premium</option>
                <option>Business</option>
                <option>Outstation</option>
                <option>Airport Pickup</option>
              </select>
            </div>

            <button
              onClick={handleEstimate}
              className="w-full md:w-auto px-8 py-3 bg-linear-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-lg hover:from-amber-500 hover:to-amber-600 transition shadow-md"
            >
              <Calculator className="inline-block mr-2" size={20} />
              Estimate Fare
            </button>
          </div>
        </div>

        {/* Estimated Fare Card */}
        {fare && (
          <div className="mt-10 bg-white shadow-lg rounded-xl border border-gray-100 p-6 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Estimated Fare
            </h3>
            <p className="text-gray-600">
              <strong>Distance:</strong> {fare.distance} km
            </p>
            <p className="text-gray-800 text-xl font-bold mt-2">
              ₹{fare.estimatedFare} /-
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
