import React from "react";
import { Link, NavLink, Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Menus";
import ContactUsPage from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import NotFoundPage from "./NotFound";
import OurStoryPage from "./pages/OurStory";
import Hero from "./components/Hero";
import CategoryDetails from "./pages/CategoryDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<ProductsPage />} />
        <Route path="/our_story" element={<OurStoryPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/categories/:name" element={<CategoryDetails />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
