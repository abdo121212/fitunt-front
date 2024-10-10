

import React, { useContext, useState } from "react";
import imag1 from "../Images/Reset password-rafiki 1.svg";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { authUser } from "../Context/Auth";




export const ChangePass = () => {

    const { setToken } = useContext(authUser)


    const navigate = useNavigate()


    const { email } = useParams()


    const [errMsg, setErrMsg] = useState(null);

    const [sucssesMsg, setSucssesMsg] = useState(null);

    const [isLoading, setIsLoading] = useState(false);




    const handleLogin = async (values) => {
        setIsLoading(true);
        try {

            const { data } = await axios.patch(
                `https://abdo121212-fit-nutrition.onrender.com/auth/resstPassword/${email}`,
                values,

            );

            console.log(data);

            if (data.success) {
                setToken(null)
                setSucssesMsg(data.message);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setErrMsg(data.message)
            }
        } catch (err) {
            console.log("error", err);

            setTimeout(() => {

                setErrMsg(err.response.data.message);

            }, 2000);
        }




        setIsLoading(false);





    }


    let user = {
        password: "",
        confirmPassword: "",
    };

    const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
        useFormik({
            initialValues: user,
            onSubmit: handleLogin,
            validationSchema: Yup.object({
                password: Yup.string().required("Required"),
                confirmPassword: Yup.string().required()

            }),
        });
    return <>


        <section className="h-screen w-full p-10 mx-auto">

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
                                    name="password"
                                    value={values.password}
                                    type="password"
                                    placeholder="Enter your new Pass ..."
                                    className=" rounded-lg border-[2px] py-4 px-5 w-full  border-[#729900]"
                                />
                                <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3">
                                    new Password
                                </label>

                                {errors.password &&
                                    <div className="w-1/2  p-3 text-center mx-auto text-red-800 border bg-red-100 rounded-3xl text-xl ">
                                        {errors.password && touched.password && errors.password}</div>

                                }


                            </div>

                            <div className="relative ">
                                <input
                                    onBlur={handleBlur}
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    type="password"
                                    placeholder="Enter your password ..."
                                    className=" rounded-lg border-[2px] py-4 px-5 w-full border-[#729900]"
                                />
                                <label className="absolute top-[-12px] text-[#729900] bg-white px-2 left-3">
                                    password
                                </label>

                                {errors.confirmPassword &&
                                    <div className="w-1/2  p-3 text-center mx-auto text-red-800 border bg-red-100 rounded-3xl text-xl ">

                                        {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
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
                                    "Reset password"
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </section>


    </>
}