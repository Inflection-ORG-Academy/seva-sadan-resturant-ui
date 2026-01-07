import React from "react";
import Team from "../components/Team";
import { useInView } from "../hooks/UseInView";
import AnimatedLayout from "../components/AnimatedLayout";

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedLayout direction="right">
            <h2 className="text-3xl font-semibold mb-6">Where It All Began</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What started as a small family kitchen with big dreams soon turned
              into a place where flavors speak louder than words. Our restaurant
              was born from a deep love for authentic vegetarian food and the
              joy of serving people.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every recipe carries a story, every spice holds a memory, and
              every meal is prepared with the same care we give to our own
              family.
            </p>
          </AnimatedLayout>
          <AnimatedLayout direction="left" className="relative">
            <img
              src="https://img.freepik.com/free-photo/we-serve-best-cakes_637285-7884.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Founders cooking"
              className="rounded-2xl shadow-lg"
            />
          </AnimatedLayout>
        </section>

        {/* Divider */}
        <div className="my-20 h-px bg-gray-700" />

        {/* Philosophy Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedLayout
            direction="right"
            className="order-2 md:order-1 relative"
          >
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/64/06/23/caption.jpg?w=900&h=500&s=1"
              alt="Fresh ingredients"
              className="rounded-2xl shadow-lg"
            />
          </AnimatedLayout>
          <AnimatedLayout direction="left" className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-6">Our Philosophy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe great food begins with honest ingredients. Fresh
              vegetables, traditional spices, and time-tested cooking methods
              are at the heart of everything we serve.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No shortcuts. No compromises. Just pure taste and soulful cooking.
            </p>
          </AnimatedLayout>
        </section>

        {/* Values Section */}
        <AnimatedLayout>
          <section className="mt-24">
            <h2 className="text-3xl font-semibold text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authentic Taste",
                  desc: "Recipes rooted in tradition, served with consistency and love.",
                },
                {
                  title: "Pure Vegetarian",
                  desc: "100% vegetarian food prepared with utmost care and hygiene.",
                },
                {
                  title: "Warm Hospitality",
                  desc: "Every guest is treated like family, always.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1a1a] rounded-2xl p-6 text-center hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedLayout>
        {/* Closing Section */}

        <Team />
      </main>
    </div>
  );
};

export default OurStoryPage;
