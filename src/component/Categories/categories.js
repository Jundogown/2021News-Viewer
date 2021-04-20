import React from "react";
import "./categories.css";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비지니스",
  },
  {
    name: "entertainment",
    text: "엔터테이먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "운동",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = () => {
  return (
    <div className="menuList">
      {categories.map((c) => {
        return (
          <NavLink
            key={c.name}
            className="menu"
            exact={c.name === "all"}
            to={c.name === "all" ? "/" : `/${c.name}`}
          >
            {c.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Categories;
