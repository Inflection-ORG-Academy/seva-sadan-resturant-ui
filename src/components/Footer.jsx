import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300">
      <section className="max-w-6xl mx-auto px-4 ">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-white mb-4 font-dancing-script font-semibold">
              Shree Seva Sadan
            </h3>
            <p className="text-sm leading-relaxed">
              A pure vegetarian restaurant serving authentic taste, warm
              hospitality, and memorable dining experiences for every family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">Our Story</li>
              <li className="hover:text-white transition">Menu</li>
              <li className="hover:text-white transition">Gallery</li>
              <li className="hover:text-white transition">Contact Us</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Opening Hours
            </h4>
            <ul className="text-sm space-y-2">
              <li>Monday – Friday: 11:00 AM – 10:30 PM</li>
              <li>Saturday: 11:00 AM – 11:00 PM</li>
              <li>Sunday: 11:00 AM – 11:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Main Road, Your City, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@shreesevasadan.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Shree Seva Sadan Restaurant. All rights
            reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <span
                key={idx}
                className="p-2 rounded-full bg-[#1a1a1a] hover:bg-white hover:text-black transition cursor-pointer"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
