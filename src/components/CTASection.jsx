import React from "react";
import { Smartphone, Download, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="download"
      className="bg-linear-to-b from-amber-50 via-white to-amber-100 py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Download the <span className="text-amber-500">RideNow</span> App
          </h2>
          <p className="mt-5 text-gray-600 text-lg md:text-xl leading-relaxed">
            Book rides faster, track drivers in real-time, and enjoy
            hassle-free payments — all from one powerful app.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 justify-center md:justify-start">
            <button className="flex items-center justify-center px-6 py-3 bg-linear-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-lg hover:from-amber-500 hover:to-amber-600 transition shadow-md">
              <Download className="mr-2 w-5 h-5" />
              Download Now
            </button>
            <button className="mt-3 sm:mt-0 flex items-center justify-center px-6 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition">
              <Smartphone className="mr-2 w-5 h-5" />
              Get the App
            </button>
          </div>

          <div className="mt-6 flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition">
            <span className="font-medium text-lg">Learn more about features</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
            alt="RideNow App on Phone"
            className="w-[80%] md:w-[70%] drop-shadow-2xl rounded-2xl hover:scale-[1.03] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
