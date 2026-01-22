import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AnimatedLayout from "../components/AnimatedLayout";

const MenusPage = () => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await fetch("http://localhost:3000/menu");
        const data = await res.json();
        console.log(data);
        setMenu(data);
        setSelectedMenu(data);
      } catch (err) {
        console.log(err);
      }
    };
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        console.log(data);
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMenu();
    getCategories();
  }, []);

  useEffect(() => {
    const selectedMenu = [];
    menu.forEach((item) => {
      if (selectedCategory.id == item.categoryId) {
        selectedMenu.push(item);
      }
    });

    setSelectedMenu(selectedMenu);
  }, [selectedCategory]);

  return (
    <>
      <Hero>
        <div className="h-full w-full text-center mt-24">
          <h1 className="text-5xl font-dancing-script font-semibold">
            Explore Our Menu
          </h1>
          <p className="mt-2">Pure Veg • Pure Taste • Pure Trust</p>
        </div>
      </Hero>

      <section className="grid grid-cols-5">
        <aside className="shadow sticky top-0 h-screen">
          <h3 className="text-xl font-medium p-5">Categories</h3>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={`py-1 mb-1 px-5 cursor-pointer ${selectedCategory.id == category.id && "bg-yellow-700 text-white"}`}
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </aside>
        <section className="col-span-4 p-5">
          <h3 className="text-4xl font-bold mb-3 text-center font-dancing-script">
            All Menus
          </h3>
          <section className="grid grid-cols-3 gap-3">
            {selectedMenu.map((item) => (
              <AnimatedLayout>
                <figure key={item.id} className="shadow p-3 rounded">
                  <img
                    src={`${item.image}?w=400&h=400&fit=crop`}
                    className="w-full object-cover h-52"
                  />
                  <figcaption>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <p>{item.available ? "Available" : "Not Available"}</p>
                  </figcaption>
                </figure>
              </AnimatedLayout>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default MenusPage;
