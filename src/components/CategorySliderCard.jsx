import React from "react";
import { Link } from "react-router";

const CategorySliderCard = ({ category }) => {
  return (
    <Link
      to={`/categories/${category.name.toLowerCase().replaceAll(" ", "-")}-${
        category.id
      }`}
    >
      <figure className="relative rounded-xl overflow-hidden">
        <img src={category.img} alt="" className="h-56 w-full object-cover" />
        <figcaption className="absolute inset-0 bg-linear-to-t from-black to-transparent flex items-end text-neutral-100">
          <h3 className="px-5 py-2 font-medium text-base md:text-lg">
            {category.name}
          </h3>
        </figcaption>
      </figure>
    </Link>
  );
};

export default CategorySliderCard;
