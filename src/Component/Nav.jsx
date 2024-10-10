import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import React, { useContext } from "react";
import imag1 from "../Images/Main logo 1.svg";
import { Link, useNavigate } from "react-router-dom";
import { authUser } from "./../Context/Auth";

export const Nav = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(authUser);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };


  const handleToggle = () => {

    const icon = document.getElementById("dorpIcon")
    const lis = document.getElementById("dropdown")

    icon.onclick = () => {
      lis.classList.toggle("hidden")
    }





  }



  return (
    <div className="w-full h-18 bg-white  absolute top-0">
      <div className="container px-20">
        <div className="flex justify-between items-center">
          <Link to={"home"}>
            <img className="pt-4" src={imag1} alt="icon of website" />
          </Link>
          {token && (
            <>
              <div className="flex space-x-7 max-lg:hidden ">
                <Link className="duration-700 hover:text-[#729900]" to={"/home"}>
                  Home
                </Link>
                <Link className="duration-700 hover:text-[#729900]" to={"/articles"}>
                  Articles
                </Link>
                <Link className="duration-700 hover:text-[#729900]" to={"diet"}>
                  Diet
                </Link>
                <Link className="duration-700 hover:text-[#729900]" to={"categorytitle"}>
                  Calories
                </Link>

                <Link className="duration-700 hover:text-[#729900]" to={"/profile"}>
                  Profile
                </Link>
                <div>
                  <AiOutlineLogout
                    size={30}
                    className="text-main cursor-pointer"
                    onClick={handleLogOut}
                  />
                </div>
              </div>


              <div className="relative hidden max-lg:flex ">

                <div
                  id="dorpIcon"
                  onClick={handleToggle}
                  className="hidden max-lg:flex  cursor-pointer">
                  <AiOutlineMenu size={30} className="text-main" />
                </div>

                <div
                  id="dropdown"
                  className="bg-white rounded-lg absolute  w-[100px] top-[30px] left-[-40px] hidden z-[1000]">
                  <ul
                    id="ul"
                    className="flex flex-col justify-center 
                  items-center">
                    <Link className="duration-700 hover:text-[#729900] px-3 border border-black w-full text-center rounded-lg py-2" to={"/home"}>
                      Home
                    </Link>
                    <Link className="duration-700 hover:text-[#729900] px-3 border border-black w-full text-center rounded-lg py-2" to={"/articles"}>
                      Articles
                    </Link>
                    <Link className="duration-700 hover:text-[#729900] px-3 border border-black w-full text-center rounded-lg py-2" to={"diet"}>
                      Diet
                    </Link>
                    <Link className="duration-700 hover:text-[#729900] px-3 border border-black w-full text-center rounded-lg py-2" to={"categorytitle"}>
                      Calories
                    </Link>

                    <Link className="duration-700 hover:text-[#729900] px-3 border border-black w-full text-center rounded-lg py-2" to={"/profile"}>
                      Profile
                    </Link>

                    <div
                      onClick={() => {
                        handleLogOut()
                      }}

                      className="duration-700 hover:text-red-500 px-3 border select-none border-black w-full text-center rounded-lg py-2" >
                      LogOut
                    </div>

                  </ul>




                </div>
              </div>



            </>
          )}
        </div>
      </div>
    </div>
  );
};
