import React, { useState } from "react";
import imag1 from "../Images/Mobile login-pana.svg";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link} from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { OTPCode } from "./OTPCode";

export const Register = () => {
  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [otp, setOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let user = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleRegistration = async (values) => {
    setIsLoading(true);
    const { data } = await axios.post(
      "https://abdo121212-fit-nutrition.onrender.com/auth/register",
      values
    );

    if (data.success) {
      setSucssesMsg(data.message);
      setOtp(true);
      setTimeout(() => {
      }, 1000);
    } else {
      setErrMsg(data.message);
      setTimeout(() => {
        setErrMsg(false);
      }, 1000);
    }
    setIsLoading(false);
  };

  const {
    values,
    handleBlur,
    isValid,
    dirty,
    handleChange,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: user,
    onSubmit: handleRegistration,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(30, "Must be 30 characters or less")
        .min(10, "Must be 10 characters or greater")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
  });

  return (
    <>
      <section className=" container mx-auto px-10 h-screen w-full select-none relative">
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

        <div className="w-full h-screen flex justify-center items-center mx-auto max-lg:flex-col gap-10 ">
          <img src={imag1} alt="register" className="w-[45%]" />
          <div className="w-1/2">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="w-full flex flex-col gap-y-10">
                <div className="relative ">
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="fullName"
                    value={values.fullName}
                    type="text"
                    placeholder="Enter your name ..."
                    className=" rounded-lg border-[2px] py-4 px-5 w-full border-[#729900]"
                  />
                  <label className="absolute top-[-12px] bg-white text-[#729900]  px-2 left-3">
                    Full Name
                  </label>

                  <div>
                    {errors.fullName && touched.fullName && errors.fullName}
                  </div>
                </div>
                <div className="relative ">
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                    type="email"
                    placeholder="Enter your email ..."
                    className=" rounded-lg border-[2px] py-4 px-5 w-full  border-[#729900]"
                  />
                  <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3">
                    email
                  </label>

                  <div>{errors.email && touched.email && errors.email}</div>
                </div>
                <div className="relative ">
                  <input
                    onBlur={handleBlur}
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    placeholder="Enter your password ..."
                    className=" rounded-lg border-[2px] py-4 px-5 w-full border-[#729900]"
                  />
                  <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3">
                    password
                  </label>

                  <div>
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <div className="relative ">
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirmPassword}
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter Confirm Password ..."
                    className=" rounded-lg border-[2px] py-4 px-5 w-full border-[#729900]"
                  />
                  <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3">
                    Confirm Password
                  </label>

                  <div>
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </div>
                </div>
                <button
                  disabled={isValid === false || dirty === false}
                  type="submit"
                  className="border-[#729900] bg-[#729900] w-[70%] self-center py-3 rounded-xl text-white text-3xl"
                >
                  {isLoading ? (
                    <BeatLoader
                      size={15}
                      color={"white"}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
              <div className="font-medium text-center pt-5">
                Already Have An Account ?
                <Link to={"/"} className=" text-[#729900] px-3 font-bold">
                  Login
                </Link>
              </div>
            </form>
            {otp ? <OTPCode setOtp={setOtp} /> : ""}
          </div>
        </div>
      </section>
    </>
  );
};
