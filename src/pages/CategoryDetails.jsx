import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryDetails = () => {
  const [menus, setMenus] = useState([]);

  let { name } = useParams();

  const splitData = name.split("-");

  const id = splitData[splitData.length - 1];

  console.log(id);

  let title = "";

  for (let i = 0; i <= splitData.length - 2; i++) {
    title = `${title}${i === 0 ? "" : " "}${splitData[i]}`;
  }

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch("http://localhost:3000/menu");

        const data = await res.json();

        console.log(data);

        const filteredData = [];

        data.forEach((menu) => {
          if (menu.categoryId == id) {
            filteredData.push(menu);
          }
        });
        setMenus(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenus();
  }, [name]);

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl py-5 capitalize">
        Our {title}
      </h1>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDetails;
