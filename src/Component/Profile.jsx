import { GiLevelEndFlag } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaWeight } from "react-icons/fa";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { FaTransgender } from "react-icons/fa";
import { TbRelationOneToMany } from "react-icons/tb";
import { BsFillPersonVcardFill } from "react-icons/bs";
import React, { useContext, useEffect } from "react";
import imag1 from "../Images/flat-lay-salad-juice-bottle 2.svg";
import { detalisUser } from "../Context/User";
import { Link } from "react-router-dom";

export const Profile = () => {

  const {
    getDetailsUser,
    name,
    image,
    weight,
    height,
    email,
    gender,
    finalAge
  } = useContext(detalisUser)


  console.log(finalAge);






  console.log(email);





  useEffect(() => {
    getDetailsUser()

  })



  return (

    <section className="h-[170vh] container px-10 mx-auto pt-20 w-full">

      <img src={imag1} alt="profile-image" className="absolute z-0" />


      <div className=" flex justify-evenly items-center  w-full  relative top-[200px] ">

        <div className="w-[300px] h-[850px] bg-[#fff] shadow-xl   rounded-lg">


          <div className=" pt-10 ">
            <div>
              <img src={image} alt="imge" className="w-[400px] h-[200px] object-scale-down rounded-[50%]" />

              <h3 className="text-main text-2xl text-center pt-2 ">{name}</h3>



              <div className="flex px-3 py-3 flex-col gap-y-4">


                <div className="shadow-xl shadow-black/5 rounded-lg py-3 px-2 bg-slate-50  flex justify-between items-center  w-full">

                  <div className="flex justify-start items-center space-x-2  ">
                    <BsFillPersonVcardFill className="text-main" size={20} />

                    <span className="">Name</span>


                  </div>


                  <h3 className="text-main">{name}</h3>
                </div>



                <div className="shadow-xl shadow-black/5 rounded-lg py-3 px-2 bg-slate-50  flex justify-between items-center  w-full">

                  <div className="flex justify-start items-center space-x-2  ">
                    <TbRelationOneToMany className="text-main" size={20} />


                    <span className="">age</span>


                  </div>


                  <h3 className="text-main">22</h3>
                </div>



                <div className="shadow-xl shadow-black/5 rounded-lg py-3 px-2 bg-slate-50  flex justify-between items-center  w-full">

                  <div className="flex justify-start items-center space-x-2  ">
                    <FaTransgender className="text-main" size={20} />
                    <span className="">Gender</span>


                  </div>


                  <h3 className="text-main">{gender}</h3>
                </div>






                <div className="shadow-xl shadow-black/5 rounded-lg py-3 px-2 bg-slate-50  flex justify-between items-center  w-full">

                  <div className="flex justify-start items-center space-x-2  ">
                    <AiOutlineColumnHeight className="text-main" size={20} />
                    <span className="">Height</span>


                  </div>


                  <h3 className="text-main">{height}</h3>
                </div>




                <div className="shadow-xl shadow-black/5 rounded-lg py-3 px-2 bg-slate-50  flex justify-between items-center  w-full">

                  <div className="flex justify-start items-center space-x-2  ">
                    <FaWeight className="text-main" size={20} />
                    <span className="">weight</span>


                  </div>


                  <h3 className="text-main">{weight}</h3>
                </div>





                <div className="shadow-xl shadow-black/5 rounded-lg py-3 px-2 bg-slate-50  flex justify-between items-center  w-full">

                  <div className="flex justify-start items-center space-x-2  ">
                    <h3 >Change Password</h3>


                  </div>

                  <Link to={`/changePass/${email}`} className="cursor-pointer select-none text-main">Change</Link>

                </div>







              </div>

            </div>







          </div>



          <div className="flex justify-center items-center py-5">

            <Link to={'/editProfile'} className="bg-main text-center  py-3 px-5 rounded-lg text-white text-xl font-medium ">Edit Prifile</Link>

          </div>


        </div>


        <div className="w-[800px] bg-white shadow-md   mt-[180px] h-[700px]">


          <div className="p-10">
            <h3 className="text-main text-3xl font-medium">
              My goals
            </h3>



            <div className="py-4 flex  gap-10">
              <div className="w-[200px] h-[140px] shadow-md shadow-black/10 rounded-md ">



                <div className="flex justify-center items-center w-full h-full flex-col">

                  <div className="flex justify-center items-center ">
                    <MdOutlineWaterDrop size={30} />
                    <h3 className="text-main text-2xl ">Water</h3>
                  </div>


                  <h3 className="text-3xl font-medium">2L</h3>

                </div>
              </div>
              <div className="w-[200px] h-[140px] shadow-md shadow-black/10 rounded-md ">



                <div className="flex justify-center items-center w-full h-full flex-col space-y-3">

                  <div className="flex justify-center items-center space-x-2">
                    <FiTarget size={30}  />
                    <h3 className="text-main text-2xl ">Target</h3>
                  </div>


                  <h3 className="text-3xl font-medium">63 KM</h3>

                </div>





              </div>




              <div className="w-[200px] h-[140px] shadow-md shadow-black/10 rounded-md ">



                <div className="flex justify-center items-center w-full h-full flex-col space-y-3">

                  <div className="flex justify-center items-center space-x-2">
                    <GiLevelEndFlag size={30} />
                    <h3 className="text-main text-2xl ">Level</h3>
                  </div>


                  <h3 className="text-3xl font-medium">Beginner</h3>

                </div>





              </div>

            </div>

            <div className="py-5">

              <h3 className="text-main text-4xl font-medium">
                Notifications
              </h3>




              <div className="flex flex-col space-y-4">


                <div className="container mx-auto">
                  <div className="flex justify-between shadow-sm rounded-3xl my-3 py-2 px-4">
                    <div className="flex items-center">
                      <p className="text-base">Workout Reminder</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-10 h-5 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out appearance-none checked:bg-blue-500 relative"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>



                <div className="container mx-auto">
                  <div className="flex justify-between shadow-sm rounded-3xl my-3 py-2 px-4">
                    <div className="flex items-center">
                      <p className="text-base">Water Reminder</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-10 h-5 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out appearance-none checked:bg-blue-500 relative"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>





                <div className="container mx-auto">
                  <div className="flex justify-between shadow-sm rounded-3xl my-3 py-2 px-4">
                    <div className="flex items-center">
                      <p className="text-base">Catogery Reminder</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-10 h-5 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out appearance-none checked:bg-blue-500 relative"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>





                <div className="container mx-auto">
                  <div className="flex justify-between shadow-sm rounded-3xl my-3 py-2 px-4">
                    <div className="flex items-center">
                      <p className="text-base">Catogery Reminder</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-10 h-5 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out appearance-none checked:bg-blue-500 relative"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>





                <div className="container mx-auto">
                  <div className="flex justify-between shadow-sm rounded-3xl my-3 py-2 px-4">
                    <div className="flex items-center">
                      <p className="text-base">Catogery Reminder</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-10 h-5 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out appearance-none checked:bg-blue-500 relative"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>




              </div>
            </div>

          </div>


        </div>


      </div>





    </section>
  );
};
