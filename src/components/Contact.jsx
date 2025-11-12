import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mt-5 mb-6">
          Get in <span className="text-amber-500">Touch</span> With Us
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions, feedback, or need help with your ride?  
          We're here for you — reach out anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* Left Side - Contact Info + Map */}
        <div className="space-y-6 text-left">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Mail className="text-amber-500" size={24} />
            </div>
            <div>
              <h4 className="font-semibold">Email Us</h4>
              <p className="text-gray-600">support@ridenow.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Phone className="text-amber-500" size={24} />
            </div>
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <MapPin className="text-amber-500" size={24} />
            </div>
            <div>
              <h4 className="font-semibold">Visit Us</h4>
              <p className="text-gray-600">123 RideNow Street, New Delhi, India</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              title="RideNow Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.798423099646!2d77.23100387515763!3d28.610705675682065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd25b084d6f3%3A0x91c86cf1cbb5f6e0!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1707824832843!5m2!1sen!2sin"
              width="100%"
              height="270"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-gray-50 rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-all"
          >
            Send Message
            <Send className="ml-2" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
