import axios from "axios";
import React, { createContext, useState } from "react";

export const articles = createContext();

export const ArticlesProider = ({ children }) => {
  const [allFood, setAllFood] = useState();

  const getDataFood = async () => {
    const { data } = await axios.get(
      "https://abdo121212-fit-nutrition.onrender.com/food/allFood",
      { headers: { token: localStorage.getItem("token") } }
    );
    setAllFood(data.food);
  };

  return (
    <articles.Provider value={{ allFood, getDataFood }}>
      {children}
    </articles.Provider>
  );
};
