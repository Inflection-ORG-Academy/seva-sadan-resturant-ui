import React from "react";
import Hero from "../components/Hero";
import AnimatedLayout from "../components/AnimatedLayout";

const ContactUsPage = () => {
  return (
    <>
      <Hero>
        <div className="h-full w-full text-center mt-24">
          <h1 className="text-5xl font-dancing-script font-semibold">
            Contact us
          </h1>
          <p className="mt-2">Have an Query</p>
        </div>
      </Hero>

      <div className="min-h-screen bg-gray-50">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <AnimatedLayout>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-900 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedLayout>
          {/* Contact Info + Map */}
          <div className="space-y-6">
            {/* Contact Info */}
            <AnimatedLayout>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>

                <p className="mb-2">
                  <strong>Address:</strong>
                  <br />
                  Inflection Org Pvt Ltd,
                  <br />
                  Khamaria, Bhadohi, UP
                </p>

                <p className="mb-2">
                  <strong>Phone:</strong>
                  <br />
                  +91 89009 00815
                </p>

                <p>
                  <strong>Email:</strong>
                  <br />
                  team@inflection.org.in
                </p>
              </div>
            </AnimatedLayout>
            {/* Google Map */}
            <AnimatedLayout>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.961152596097!2d82.51387687408167!3d25.238233377684526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe9de1bae336b%3A0xf903b167fbf71bf0!2sInflection%20ORG%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1769051319188!5m2!1sen!2sin"
                  className="w-full h-64 border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </AnimatedLayout>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
