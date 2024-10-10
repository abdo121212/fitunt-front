import { logDOM } from "@testing-library/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export const Categorytitle = () => {


    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    const [errMsg, setErrMsg] = useState(null);

    const [sucssesMsg, setSucssesMsg] = useState(null);





    const { errors, values, handleBlur, handleSubmit, setFieldValue } = useFormik(
        {
            initialValues: {
                activityLevel: "",
                trainingPriority: "",
            },
            onSubmit: async (values) => {
                setIsLoading(true)


                const { data } = await axios.post("https://abdo121212-fit-nutrition.onrender.com/calories/Burn_rate", values, {
                    headers: { token: localStorage.getItem("token") }
                })

                console.log(data);

                if (data.sccess) {
                    setSucssesMsg("Data has Been Saved ")
                    setTimeout(() => {
                        navigate('/calulatecalories')
                    }, 1000);

                }
                else {
                    setErrMsg(data.message)
                }



                setIsLoading(false)


            }
        }
    )







    return (
        <section className="container px-10 mx-auto h-screen w-full">




            <h4 className="pt-28 text-center text-main text-4xl font-medium py-10">Category Title</h4>
            <div className="py-10">

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
            <form onSubmit={handleSubmit}>

                <div className="w-1/2 mx-auto ">
                    <select
                        required
                        onChange={(e) => {
                            setFieldValue("activityLevel", e.target.value)
                        }}
                        value={values.activityLevel}
                        onBlur={handleBlur}
                        className=" w-full px-3 py-4 rounded-lg border-[2px] text-main  text-xl font-medium  border-main" name="activity" id="activity">
                        <option value="">selet activity level</option>
                        <option value="low">Low</option>
                        <option value="middle">middle</option>
                        <option value="hight">Hight</option>
                    </select>
                </div>



                <div className="w-1/2 mx-auto pt-4 ">
                    <select
                        required
                        onChange={(e) => {
                            setFieldValue("trainingPriority", e.target.value)
                        }}
                        value={values.trainingPriority}
                        onBlur={handleBlur}
                        className=" w-full px-3 py-4 rounded-lg border-[2px] text-main  text-xl font-medium  border-main" name="activity" id="activity">
                        <option value="">select trining priority</option>
                        <option value="low">Low</option>
                        <option value="middle">middle</option>
                        <option value="hight">Hight</option>
                    </select>
                </div>







                <div className="flex justify-center items-center pt-10">
                    <button type="submit" className="bg-main px-4 py-3 rounded-lg w-1/4 text-2xl font-medium text-white " >
                        {isLoading ? <BeatLoader
                            size={15}
                            color={"white"}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> : "Start"}
                    </button>

                </div>


            </form>
        </section>
    );
};
