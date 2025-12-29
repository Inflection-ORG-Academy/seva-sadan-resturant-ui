import React, { useState } from "react";
import CategorySlider from "../components/CategorySlider";

const HomePage = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Veg Pizza",
      img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
    },
    {
      id: 2,
      name: "Special Pizza",
      img: "https://vegplatter.in/files/public/images/partner/catalog/125/Italiano%20Special%20Pizza.jpg",
    },
    {
      id: 3,
      name: "Burger",
      img: "https://www.lurch.de/media/b5/4c/70/1693989554/burger-classic-cheese-rezept.jpg?ts=1753774543",
    },
    {
      id: 4,
      name: "Wraps & Rolls",
      img: "https://images.slurrp.com/prodrich_article/ic6wtpdqx7.webp?impolicy=slurrp-20210601&width=880&height=500",
    },
    {
      id: 5,
      name: "Fries & Sides",
      img: "https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg",
    },
    {
      id: 6,
      name: "Snacks",
      img: "https://static.toiimg.com/photo/59217136.cms",
    },
    {
      id: 7,
      name: "Pasta",
      img: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
    },
    {
      id: 8,
      name: "Beverages",
      img: "https://vaya.in/careers/wp-content/uploads/2019/03/5-protein-drinks-and-beverages-to-have-post-work-out.jpg",
    },
    {
      id: 9,
      name: "Desserts",
      img: "https://img.taste.com.au/8U4aRnuZ/taste/2016/11/gulab-jamun-80285-1.jpeg",
    },
  ]);

  return (
    <div>
      <section className="max-w-7xl container mx-auto px-5">
        <h3 className="text-xl font-semibold py-2">Categories</h3>
        <CategorySlider categories={categories} />
      </section>
    </div>
  );
};

export default HomePage;
