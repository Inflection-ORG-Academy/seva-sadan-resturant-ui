import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Menus";
import ContactUsPage from "./pages/ContactUs";
import NotFoundPage from "./NotFound";
import OurStoryPage from "./pages/OurStory";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";
import LoginPage from "./pages/Login";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <main className="bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<ProductsPage />} />
        <Route path="/our_story" element={<OurStoryPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <button
        className={`fixed ${
          isScrolled ? "z-10" : "-z-10"
        } right-5 bottom-5 bg-white h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
        onClick={scrollToTop}
      >
        <ArrowUp />
      </button>
    </main>
  );
};

export default App;
