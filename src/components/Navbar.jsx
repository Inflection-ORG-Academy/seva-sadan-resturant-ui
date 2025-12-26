import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navlinks = [
    {
      path: "/our_story",
      name: "Our Story",
    },
    {
      path: "/menus",
      name: "Menus",
    },
    {
      path: "/contact_us",
      name: "Contact Us",
    },
  ];

  return (
    <header>
      <Link to="/" className="flex justify-center">
        <img src="/Pizza_Drying_logo.png" alt="Pizza Drying" className="h-24" />
      </Link>
      <nav className="bg-white h-10 flex justify-center items-center gap-2 px-5 border-b">
        {navlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-neutral-900"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
