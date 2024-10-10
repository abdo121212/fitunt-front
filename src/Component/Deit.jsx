import React from "react";
import imag1 from "../Images/Frame 1939.svg";
import imag2 from "../Images/Frame 1949.svg";
import imag3 from "../Images/Frame 1941.svg";
import imag4 from "../Images/Frame 1950.svg";
import { Link } from "react-router-dom";

export const Deit = () => {
    return (
        <section className="w-full container px-10 mx-auto ">

            <h3 className="text-main font-medium text-3xl pt-28 text-center py-10">Choose your categroy</h3>


            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 px-5 pb-20" >
                <Link to={'/categorytitle'} className="bg-[#ffffff] shadow-sm shadow-black flex  justify-around items-center hover:scale-105 duration-500  rounded-lg group">
                    <img src={imag1} alt="Bullking" />

                    <h2 className="text-main text-3xl font-medium group-hover:text-black duration-500">Bulking</h2>
                </Link>

                <Link to={'/categorytitle'} className="bg-[#ffffff] shadow-sm shadow-black flex  justify-around items-center  rounded-lg group hover:scale-105   duration-500">
                    <img src={imag2} alt="Bullking" />

                    <h2 className="text-main text-3xl font-medium group-hover:text-black duration-500">Diet</h2>
                </Link>


                <Link to={'/categorytitle'} className="bg-[#ffffff] shadow-sm shadow-black flex  justify-around items-center  rounded-lg group hover:scale-105  duration-500">
                    <img src={imag3} alt="Bullking" />

                    <h2 className="text-main text-3xl font-medium group-hover:text-black duration-500">Build Muscle</h2>
                </Link>


                <Link to={'/categorytitle'} className="bg-[#ffffff] shadow-sm shadow-black flex  justify-around items-center  rounded-lg group hover:scale-105 duration-500">
                    <img src={imag4} alt="Bullking" />

                    <h2 className="text-main text-3xl font-medium group-hover:text-black duration-500">Burn fat</h2>
                </Link>

            </div>

        </section>
    );
};

