import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Quick & Easy Booking",
      desc: "Book your ride instantly with just a few taps. No delays, no hassle — get a cab in seconds.",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Live Ride Tracking",
      desc: "Track your driver in real time and stay updated from pickup to drop-off — every step of the way.",
      img: "../../img/p8.jpg",
    },
    {
      title: "Safe & Verified Drivers",
      desc: "All our drivers are background-checked and trained to ensure your safety and comfort.",
      img: "../../img/p2.jpg",
    },
    {
      title: "Multiple Payment Options",
      desc: "Pay your way — cash, card, or digital wallet. RideNow makes payments smooth and secure.",
      img: "../../img/p1.jpg",
    },
  ];

  return (
    <section className="bg-linear-to-b from-white to-amber-50 py-20" id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Why Choose <span className="text-amber-500">RideNow?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Enjoy the best travel experience with safety, reliability, and
          comfort. Our features are built for modern city riders like you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300 border border-amber-100"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
