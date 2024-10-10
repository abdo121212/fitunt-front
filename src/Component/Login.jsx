import React, { useContext,  useState } from "react";
import imag1 from "../Images/Login-pana 1.svg";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { authUser } from "./../Context/Auth";

export const Login = () => {
  const { setToken } = useContext(authUser);





  const navigate = useNavigate();

  let user = {
    email: "",
    password: "",
  };

  const [errMsg, setErrMsg] = useState(null);

  const [sucssesMsg, setSucssesMsg] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `https://abdo121212-fit-nutrition.onrender.com/auth/login`,
        values,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setSucssesMsg(data.message);
        setTimeout(() => {
          setSucssesMsg(false);
        }, 1000);
        navigate("/nextInfo");
      } else {
        setErrMsg(data.message);
        setTimeout(() => {
          setErrMsg(false);
        }, 1000);
      }
    } catch (err) {
      setErrMsg(err.response.data.message);
      setTimeout(() => {
        setErrMsg(false);
      }, 1000);
    }

    setIsLoading(false);
  };

  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      initialValues: user,
      onSubmit: handleLogin,
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      }),
    });



  return (
    <>
      <section className=" container mx-auto px-10 h-screen w-full select-none">
        <div className=" relative top-[100px] text-center w-full">
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
        </div>
        <div className="w-full h-screen flex justify-center max-lg:flex-col items-center gap-10 ">
          <img src={imag1} alt="register" className="w-[45%]" />
          <div className="w-1/2">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="w-full flex flex-col gap-y-10">
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
                  <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3 rounded-lg">
                    email
                  </label>
                  {errors.email &&

                    <div className="w-1/2  p-3 text-center mx-auto text-red-800 border bg-red-100 rounded-3xl text-2xl font-bold ">{errors.email && touched.email && errors.email}</div>
                  }
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
                  <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3 rounded-lg">
                    password
                  </label>

                  {errors.password &&

                    <div>
                      <div className="w-1/2  p-3 text-center mx-auto text-red-800 border bg-red-100 rounded-3xl text-2xl font-bold ">{errors.password && touched.password && errors.password}</div>

                    </div>
                  }

                </div>

                <button
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
                <Link
                  to={"/register"}
                  className=" text-[#729900] px-3 font-bold"
                >
                  Sign UP
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
