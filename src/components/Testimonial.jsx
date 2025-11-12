import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Frequent Rider",
      feedback:
        "RideNow has made my daily commute effortless! The drivers are polite, cars are clean, and the app experience is seamless.",
      img: "../../img/p9.jpg",
    },
    {
      name: "Priya Patel",
      role: "Business Traveler",
      feedback:
        "I love how quick it is to book and track my rides. The live tracking and safety features give me full confidence every time.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Rohan Mehta",
      role: "Student",
      feedback:
        "Affordable and reliable — I’ve used RideNow for months and never faced a delay. It’s the best city taxi service out there!",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="bg-white py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          What Our <span className="text-amber-500">Riders Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Thousands of happy customers trust RideNow for their daily travel.
          Here’s what they have to say.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-linear-to-b from-amber-50 to-white rounded-2xl shadow-lg hover:shadow-xl border border-amber-100 transition transform hover:-translate-y-2 duration-300 p-8"
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-amber-400 shadow-md"
                />
                <p className="text-gray-700 italic text-base leading-relaxed">
                  “{t.feedback}”
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mt-4">
                    {t.name}
                  </h4>
                  <p className="text-amber-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
