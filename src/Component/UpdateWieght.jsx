import { BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";
import { BeatLoader } from "react-spinners";

import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const UpdateWieght = () => {
  const navigate = useNavigate();
  let user = {
    weight: "",
  };

  const [errMsg, setErrMsg] = useState(null);

  const [sucssesMsg, setSucssesMsg] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: user,
      validationSchema: Yup.object({
        weight: Yup.number().required().max(300).min(50),
      }).required(),

      onSubmit: async (values) => {
        setIsLoading(true)
        const { data } = await axios.patch(
          "http://localhost:3000/change/weight",
          values,
          {
            headers: { token: localStorage.getItem("token") },
          }
        );



        if (data.success) {
          setSucssesMsg("Data saved successfully");
          setTimeout(() => {
            setErrMsg();
            navigate("/home");
          }, 2000);
        } else {
          setTimeout(() => {
            setErrMsg("Something want wrong");
          }, 1000);
        }

        setIsLoading(true)

      },
    });




  return (
    <section className="h-screen px-20">
      <form onSubmit={handleSubmit}>
        <div className="container px-20 mx-auto pt-[200px]">
          {errMsg ? (
            <div className="w-1/2  p-3 text-center mx-auto text-red-800 border bg-red-100 rounded-3xl text-2xl font-bold ">
              {errMsg}
            </div>
          ) : (
            ""
          )}

          {sucssesMsg ? (
            <div className="bg-green-300 w-1/2 p-3 text-center mx-auto text-white  rounded-3xl text-2xl font-bold ">
              {sucssesMsg}
            </div>
          ) : (
            ""
          )}
          <div className="relative  ">
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.weight}
              name="weight"
              type="number"
              placeholder="Enter your Weight ..."
              className=" rounded-lg border-[2px] py-4 px-5 w-full  border-[#729900]"
            />
            <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3">
              Enter your weight today
            </label>

            {errors.weight ? (
              <div className="bg-red-400 text-center mt-5 rounded-lg  text-red-900 font-medium py-2">
                {errors.weight && touched.weight && errors.weight}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between items-center py-9">
            <Link
              to={"/home"}
              className="border-[#729900] bg-[#729900] w-[10%] self-center py-3 rounded-xl text-white text-3xl text-center"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="border-[#729900] bg-[#729900] w-[10%] self-center py-3 rounded-xl text-white text-3xl"
            >
              {isLoading ? (
                <BeatLoader
                  size={15}
                  color={"white"}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Start"
              )}
            </button>
          </div>
        </div>
      </form>

      <div className=" px-20 mx-auto pt-10 flex justify-center items-center flex-col space-y-8">
        <h3 className="text-3xl font-medium">Normal Weight 55.5Kgm</h3>

        <h4 className="font-normal text-gray-600">
          Your normal weight ranges from 52 to 65 to monitor your eating and
          eating use the calorie guide window
        </h4>

        <Link to={'/categorytitle'}
          className="bg-main px-4 rounded-lg text-white font-medium py-3 text-xl flex items-center justify-center   "
        >
          Go For Calories
          <span>
            <BiRightArrowAlt size={25} className="mt-[3px]" />
          </span>
        </Link>
      </div>
    </section>
  );
};
