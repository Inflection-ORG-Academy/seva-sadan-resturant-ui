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
      name: "Menu",
    },
    {
      path: "/contact_us",
      name: "Contact Us",
    },
  ];

  return (
    <header>
      <Link to="/" className="flex justify-center">
        <img
          src="/Pizza_Drying_logo_transparent.png"
          alt="Pizza Drying"
          className="h-24"
        />
      </Link>
      <nav className="flex justify-center items-center gap-2 px-5">
        {navlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
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
