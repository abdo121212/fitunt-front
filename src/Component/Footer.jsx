import React from "react";
import imag1 from "../Images/Main logo 1.svg";
import imag2 from "../Images/iconfacebook.svg";
import imag3 from "../Images/twitter.svg";
import imag4 from "../Images/instagram.svg";
import imag5 from "../Images/linkedin.svg";
import imag6 from "../Images/Qr Code.svg";
import imag7 from "../Images/AppStore.svg";
import imag8 from "../Images/GooglePlay.svg";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white w-full   static top-[100%]">
        <div className="container mx-auto p-10 px-36">
          <div className="flex flex-row max-md:flex-col items-start  max-md:gap-5  gap-10 w-full ">
            <div className="flex flex-col justify-start items-start  space-y-10 w-1/4">
              <div className="flex justify-end items-end">
                <img src={imag1} alt="logo" />
              </div>
              <h4 className="font-bold text-2xl">Follow us</h4>
              <div className="flex space-x-5">
                <div>
                  <img src={imag2} alt="facebook" />
                </div>
                <div>
                  <img src={imag3} alt="twitter" />
                </div>
                <div>
                  <img src={imag4} alt="instagram" />
                </div>
                <div>
                  <img src={imag5} alt="Linkedin" />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col space-y-6 w-1/4">
              <h1 className="text-3xl font-bold">Support</h1>
              <div className="flex flex-col justify-start items-start space-y-7 ">
                <div >Contant Us</div>
                <div >About</div>
                <div >Priavcy Police</div>
                <div >Trems Of Service</div>
              </div>
            </div>
            <div className="w-1/4">
              <h1 className="text-3xl  font-bold  text-center ">Useful link</h1>
              <div className="flex gap-5 pt-[16px] ">
                <div className="w-1/2">
                  <div className="flex flex-col  space-y-4 ">
                    <div >Home</div>
                    <div >Calories</div>
                    <div >Profile</div>
                    <div >Category</div>
                    <div >Articles</div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col  space-y-4 ">
                    <div >Drinking water</div>
                    <div >Weight</div>
                    <div >Food Of Day</div>
                    <div >AI Fintun</div>
                    <div >Login / Register</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col space-y-6">
              <h1 className="font-bold text-3xl">Download App</h1>
              <p className="text-gray-500">Save $3 with App New User Only</p>

              <div className="flex justify-center items-center">
                <div>
                  <img src={imag6} alt="" />
                </div>

                <div>
                  <img src={imag7} alt="" />{" "}
                  <div>
                    <img src={imag8} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
