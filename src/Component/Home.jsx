import React, { useContext, useEffect, useState } from "react";
import imag1 from "../Images/Frame 1973.svg";
import imag2 from "../Images/Frame 1851.svg";
import imag3 from "../Images/cup-paper 1.svg";
import { SliderHome } from "./SliderHome";
import { Link } from "react-router-dom";
import { detalisUser } from "../Context/User";
import { articles } from "../Context/Articles";

export const Home = () => {
  const { weight, getDetailsUser } = useContext(detalisUser);
  const { getDataFood, allFood } = useContext(articles);


  const [water, setWater] = useState(0);

  const checkWaterMinus = () => {
    if (water === 0) {
      return "opacity-60 cursor-not-allowed";
    } else {
      return "opacity-100 cursor-pointer";
    }
  };

  const checkWaterPlus = () => {
    if (water === 2) {
      return "opacity-60 cursor-not-allowed";
    } else {
      return "opacity-100 cursor-pointer";
    }
  };
  useEffect(() => {
    getDetailsUser();
    getDataFood();
  });

  return (
    <>
      <section className=" container px-10 mx-auto">
        <div className="flex py-32 justify-center gap-9 max-md:flex-col items-center max-md:flex-col ">
          <div className="w-1/2">
            <img src={imag1} alt="pic" />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center space-y-10">
            <h1 className="text-[#729900] text-5xl font-bold">
              If you want to live healthy , integrated life , train fitnut
            </h1>
            <p className="text-gray-600">
              Our app provides personalized fitness and nutrition plans to help
              you achieve your goals. Our app provides personalized fitness and
              nutrition plans to help you achieve your goals
            </p>
          </div>
        </div>

        <div className="container px-5 mx-auto">
          <div className="flex justify-center items-center gap-10 flex-row-reverse max-md:flex-col ">
            <div className="w-1/2 cursor-pointer ">
              <Link to={"/UpdateWieght"}>
                <h1 className="text-[#729900] text-4xl font-bold py-2 text-center  max-md:text-lg ">
                  Weight
                </h1>
                <div className=" flex space-x-4 px-5 py-10 justify-center items-center border-white border-[2px] shadow-lg ">
                  <div className="flex justify-center items-center flex-col space-y-4 ">
                    <h3 className="font-bold text-xl text-gray-500  max-md:text-lg  ">
                      {weight} KGM
                    </h3>
                    <p className="capitalize text-lg text-[#729900]  max-md:text-lg ">
                      Update your weight from here
                    </p>
                  </div>
                  <img src={imag2} alt="weight" className="max-md:w-1/2" />
                </div>
              </Link>
            </div>
            <div className="w-1/2 ">
              <h1 className="text-[#729900] text-4xl font-bold py-2 text-center  max-md:text-lg ">
                Water Consumption
              </h1>
              <div className="flex space-x-4 px-5 relative border-white border-[2px]   py-[91px] shadow-lg ">
                <div className="flex justify-center items-center flex-row-reverse space-y-4 ">
                  <h3 className="font-bold text-xl absolute top-4 right-3 text-[#729900]  max-md:text-lg  ">
                    {water.toFixed(2)}/2 liter
                  </h3>
                  <p className="text-xl absolute top-8  text-center left-0 right-0 text-[#729900]  max-md:text-lg ">
                    Each addition is 100 ml
                  </p>
                </div>
                <div className="flex justify-center items-center w-full space-x-9">
                  <div
                    onClick={() => {
                      setWater(Math.min(water + 0.1, 2));
                    }}
                    className={`font-bold text-5xl text-[#729900]  select-none ${checkWaterPlus()}`}
                  >
                    +
                  </div>
                  <img src={imag3} alt="water" className=" max-md:w-1/2" />
                  <div
                    onClick={() => {
                      setWater(Math.max(water - 0.1, 0));
                    }}
                    className={`font-bold text-5xl  text-[#729900] select-none ${checkWaterMinus()}`}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {allFood && (
          <div>
            <SliderHome allFood={allFood} />

            <Link to={"/articles"}>
              <button className="my-10 mx-auto flex py-3 px-4 rounded-lg text-white bg-main font-medium text-xl ">
                See More Articles
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};
