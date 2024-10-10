import { BiBookmark } from "react-icons/bi";
import React, { useContext, useEffect, useState } from "react";
import imag2 from "../Images/Frame 1986.svg";
import imag3 from "../Images/Vector (2).svg";
import { articles } from "../Context/Articles";
import { Link } from "react-router-dom";

export const Articles = () => {
  const { getDataFood, allFood } = useContext(articles);
  const [searchQuery, setSearchQuery] = useState("");


  const filterFoods = allFood ? allFood.filter((food) =>
    food.name_en.toLowerCase().includes(searchQuery.toLowerCase())
  ) : allFood



  useEffect(() => {
    getDataFood();

  });




  return (
    <>
      <section className=" w-full container mx-auto px-10 space-y-7 flex  flex-col   ">
        <img src={imag2} alt="img" />

        <div className="px-[220px] ">
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
            placeholder="Search By Meal Name"
            type="text"
            className="border-[3px] rounded-lg w-full px-3 py-4   border-main"
          />
        </div>

        <div>
          {filterFoods ? (
            <>
              <div className=" grid grid-cols-2 gap-10 ">
                {filterFoods.map((food, index) => (
                  <div key={index}>
                    <div className=" bg-[#fffffd] flex px-2 py-3 rounded-lg shadow-sm shadow-black ">
                      <div className="w-1/2">
                        <img
                          src={food.image.url}
                          alt="food"
                          className="w-[400px] h-[300px] rounded-lg  "
                        />
                      </div>
                      <div className="flex space-y-5 flex-col w-1/2  px-5">
                        <h3 className="font-bold text-center text-main text-2xl capitalize ">
                          {food.name_en}
                        </h3>

                        <p>
                          Description :
                          <span className="text-gray-500 ">
                            <br />
                            {food.article_summary_en
                              .split(" ")
                              .slice(0, 20)
                              .join(" ")}
                          </span>{" "}
                        </p>

                        <div className="flex  space-x-4 justify-start items-center">
                          <h4 className="text-main text-2xl ">
                            {food.calories}
                          </h4>

                          <p className="text-main text-2xl">Calorise</p>

                          <img src={imag3} alt="" />
                        </div>

                        <div className="flex justify-between items-center pt-5">
                          <Link to={`/details/${food._id}`} className="duration-1000 hover:text-main font-medium"
                          >Read More</Link>

                          <BiBookmark size={30} className="text-main " />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div></div>
      </section>
    </>
  );
};
