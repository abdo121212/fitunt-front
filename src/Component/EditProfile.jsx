
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";


export const EditProfile = () => {


    const navigate = useNavigate()

    const [errMsg, setErrMsg] = useState(null);

    const [sucssesMsg, setSucssesMsg] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (values) => {
        setIsLoading(true)

        try {
            const data = await axios.patch("https://abdo121212-fit-nutrition.onrender.com/change/user", values, {
                headers: { token: localStorage.getItem("token") }
            })


            console.log(data);



            if (data) {
                setSucssesMsg("data has been Saved");
                setTimeout(() => {
                    navigate("/profile")
                }, 1000);

            } else {
                setErrMsg("something went wrong")

                setTimeout(() => {
                    setErrMsg(null)

                }, 1000);
            }
        } catch (err) {
            console.log("error", err);

            setErrMsg(err.response.data.message);
        }


        setIsLoading(false)

    }

    let user = {
        fullName: "",
        weight: "",
        height: "",
        profileImage: ""
    };

    const { values, handleBlur, handleChange,  handleSubmit } =
        useFormik({
            initialValues: user,
            onSubmit: handleLogin,
            validationSchema: Yup.object({
                fullName: Yup.string(),
                weight: Yup.number(),
                height: Yup.number(),
                profileImage: Yup.string()
            }),
        });



    return <>


        <section className="h-screen w-full p-20 mx-auto container">



            {errMsg ? (
                <div className="w-1/2  p-3 text-center mx-auto text-red-800 border bg-red-100 rounded-3xl text-2xl font-bold ">
                    {errMsg}
                </div>
            ) : (
                ""
            )}
            {sucssesMsg ? (
                <div className="bg-green-300 w-1/2 p-3 text-center mx-auto text-green-700  rounded-3xl text-2xl font-bold ">
                    {sucssesMsg}
                </div>
            ) : (
                ""
            )}

            <form onSubmit={handleSubmit}>




                <div className="pt-20 max-lg:pt-10 flex  gap-7 md flex-col">

                    <div className="relative  w-full">
                        <input
                            onBlur={handleBlur}
                            value={values.fullName}
                            onChange={handleChange}
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="w-full border-[3px] rounded-lg py-4 px-3 border-main"
                        />
                        <label
                            htmlFor="fullName"
                            className="absolute top-[-16px] left-4  text-main text-xl px-2 rounded-lg bg-[#ffffff]"
                        >
                            change your name
                        </label>
                    </div>



                    <div className="relative  w-full">
                        <input
                            onBlur={handleBlur}
                            value={values.height}
                            onChange={handleChange}
                            type="text"
                            name="height"
                            id="height"
                            className="w-full border-[3px] rounded-lg py-4 px-3 border-main"
                        />
                        <label
                            htmlFor="height"
                            className="absolute top-[-16px] left-4  text-main text-xl px-2 rounded-lg bg-[#ffffff]"
                        >
                            change your height
                        </label>
                    </div>



                    <div className="relative  w-full">
                        <input
                            onBlur={handleBlur}
                            value={values.weight}
                            onChange={handleChange}
                            type="text"
                            name="weight"
                            id="weight"
                            className="w-full border-[3px] rounded-lg py-4 px-3 border-main"
                        />
                        <label
                            htmlFor="weight"
                            className="absolute top-[-16px] left-4  text-main text-xl px-2 rounded-lg bg-[#ffffff]"
                        >
                            change your weight
                        </label>
                    </div>


                    <div className="relative  w-full">
                        <input
                            value={values.profileImage}
                            onChange={handleChange}
                            type="file"
                            name="profileImage"
                            id="profileImage"
                            className="w-full border-[3px] rounded-lg py-4 px-3 border-main"
                        />
                        <label
                            htmlFor="profileImage"
                            className="absolute top-[-16px] left-4  text-main text-xl px-2 rounded-lg bg-[#ffffff]"
                        >
                            Change your Photo
                        </label>
                    </div>
                </div>
                <div className="flex  justify-center items-center my-10">
                    <button
                        type="submit"
                        className="border-[#729900] bg-[#729900] w-[50%] self-center py-3 rounded-xl text-white text-3xl max-md:text-sm"
                    >
                        {isLoading ? (
                            <BeatLoader
                                size={15}
                                color={"white"}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        ) : (
                            "Save Changes"
                        )}
                    </button>
                </div>

            </form>
        </section>


    </>
}