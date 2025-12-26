import React from "react";
import { Link, NavLink, Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Menus";
import ContactUsPage from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import NotFoundPage from "./NotFound";
import OurStoryPage from "./pages/OurStory";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<ProductsPage />} />
        <Route path="/our_story" element={<OurStoryPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
