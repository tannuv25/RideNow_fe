import React from "react";
import { Car, Users, Globe, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-linear-to-b from-white to-amber-50 py-24" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="uppercase tracking-widest text-amber-500 font-semibold text-sm">
            Your Trusted Ride Partner
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            About <span className="text-amber-500">RideNow</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="text-amber-500 font-semibold">RideNow</span> isn’t just a taxi app —
            it’s your city companion. We combine technology and trust to make
            every journey <span className="text-amber-400 font-semibold">safe</span>,{" "}
            <span className="text-amber-400 font-semibold">comfortable</span>, and{" "}
            <span className="text-amber-400 font-semibold">on time</span>.
          </p>

          <p className="text-gray-600">
            Whether you're heading to work, the airport, or a night out — RideNow
            makes sure your travel is smooth, affordable, and always reliable.
          </p>

          <div className="pt-4">
            <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition shadow-lg hover:shadow-amber-400/30">
              Become a Driver
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1000&q=80"
            alt="RideNow Taxi Street"
            className="rounded-2xl shadow-xl hover:scale-[1.03] transition-transform duration-300 border-2 border-amber-100"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-white border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: <Car size={34} />, value: "10K+", label: "Rides Completed" },
            { icon: <Users size={34} />, value: "5K+", label: "Happy Riders" },
            { icon: <Globe size={34} />, value: "50+", label: "Cities Covered" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
            >
              <div className="text-amber-500">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-amber-50 py-16 mt-6">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Driven by Trust. <span className="text-amber-500">Powered by Technology.</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is simple — to make every ride stress-free and enjoyable.
            Here’s why thousands of users choose us daily.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <ShieldCheck size={36} />,
              title: "Safe & Secure",
              text: "All drivers are verified and rides are GPS tracked for your safety.",
            },
            {
              icon: <Clock size={36} />,
              title: "Always On Time",
              text: "Smart route optimization means you’ll never be late again.",
            },
            {
              icon: <MapPin size={36} />,
              title: "Widespread Reach",
              text: "Serving across multiple cities — RideNow is growing fast.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border border-amber-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-amber-500">{card.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900">{card.title}</h4>
                <p className="text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
