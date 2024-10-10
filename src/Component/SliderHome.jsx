import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const SliderHome = ({ allFood }) => {



  const slider = document.getElementById("slider");

  const left = () => {
    slider.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const right = () => {
    slider.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const article_summary = (str) => {
    return str.slice(0, 190);
  };



  return (
    <>
        <section className="py-10 container relative mx-auto">
          <h1 className="text-4xl pb-5  font-bold text-[#729900] text-center">
            Featured Articles
          </h1>

          <div>
            <AiOutlineArrowLeft
              onClick={left}
              size={30}
              className="absolute top-[50%] left-[-35px] cursor-pointer text-[#729900]"
            />
          </div>
          <div
            id="slider"
            className="flex whitespace-nowrap  gap-10 scroll-smooth overflow-x-auto scrolling"
          >
            {allFood.map((ele, index) => (
              <div
                key={index}
                className=" w-[400px] rounded-lg p-1 shadow-md flex flex-col space-y-2"
              >
                <img
                  className="w-[400px] h-[400px] rounded-lg"
                  src={ele.image.url}
                  alt=""
                />

                <h4 className="text-center font-bold text-xl">{ele.name_en}</h4>

                <p className="text-sm text-gray-400 w-[390px] whitespace-normal">
                  {article_summary(ele.article_summary_en)}
                </p>
                <div className="flex justify-between items-center pt-5">
                  <Link
                    to={`/details/${ele._id}`}
                    className="hover:text-[#729900] duration-500 select-none cursor-pointer "
                  >
                    Read More
                  </Link>

                  <BiBookmark size={30} className="text-[#729900]" />
                </div>
              </div>
            ))}
          </div>
          <div>
            <AiOutlineArrowRight
              onClick={right}
              size={30}
              className="absolute top-[50%] right-[-30px] cursor-pointer text-[#729900]"
            />
          </div>
        </section>
    </>
  );
};
