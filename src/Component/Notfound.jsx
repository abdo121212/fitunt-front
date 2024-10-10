import React from "react";
import img1 from "../Images/error.svg";

export const Notfound = () => {
  return (
    <div>
      <div className="container flex items-center h-screen justify-center gy-5 my-5 p-5">
        <img className="w-50" src={img1} alt="errorphoto" />
      </div>
    </div>
  );
};
