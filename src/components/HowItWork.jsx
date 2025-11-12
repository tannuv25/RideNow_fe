import React from "react";
import { MapPin, Car, CreditCard } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <MapPin size={40} className="text-amber-500" />,
      title: "Enter Pickup & Drop",
      desc: "Add your pickup and destination points to get started.",
    },
    {
      icon: <Car size={40} className="text-amber-500" />,
      title: "Choose Your Ride",
      desc: "Select a ride type that fits your comfort and budget.",
    },
    {
      icon: <CreditCard size={40} className="text-amber-500" />,
      title: "Book & Go",
      desc: "Confirm your ride and enjoy a seamless travel experience.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-linear-to-b from-amber-50 to-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          How <span className="text-amber-500">RideNow</span> Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Book your ride in just 3 easy steps — simple, fast, and reliable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 flex flex-col items-center text-center border border-amber-100"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
