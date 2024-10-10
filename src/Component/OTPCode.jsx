import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
export const OTPCode = ({ setOtp }) => {
  const [errMess, setErrMess] = useState(false);
  const [sucMess, setSucMess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  let code = {
    activationCode: "",
  };
  const handleOtp = async (values) => {
    setIsLoading(true);
    const { data } = await axios.post(
      "https://abdo121212-fit-nutrition.onrender.com/auth/confirmEmail",
      values
    );
    if (data.success) {
      setSucMess("congratulation your account is active now");
      setTimeout(() => {
        setSucMess(false);
        navigate("/");
      }, 1000);
    } else {
      setErrMess("some thing want wrong")
    }
    setIsLoading(false);
  };
  const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: code,
      onSubmit: handleOtp,
      validationSchema: Yup.object({
        activationCode: Yup.string().max(4).min(4).required(),
      }),
    });

  console.log(values);
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0  bg-black/40 ">
        <section className="flex justify-center items-center h-[100vh] ">
          <div className="bg-white shadow-2xl rounded-xl w-[600px] h-[400px] z-50 relative">
            <div className="container p-16 mx-auto flex flex-col space-y-10">
              <h3 className="text-[#729900] text-center font-bold text-3xl">
                OTP Verification code
              </h3>
              <form onSubmit={handleSubmit}>
                {errMess ? (
                  <div className="bg-red-300  rounded-2xl mb-4 text-center mx-auto text-white  ">
                    {errMess}
                  </div>
                ) : (
                  ""
                )}

                {sucMess ? (
                  <div className="bg-green-300  rounded-2xl mb-4 text-center mx-auto text-white  ">
                    {sucMess}
                  </div>
                ) : (
                  ""
                )}
                <input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="activationCode"
                  value={values.activationCode}
                  type="text"
                  placeholder="Enter your Code ..."
                  className=" rounded-lg border-[2px] py-4 px-5 w-full border-[#729900]"
                />
                <div className="text-red-500 font-medium text-center pt-4">
                  {errors.activationCode &&
                    touched.activationCode &&
                    errors.activationCode}
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="border-[#729900] bg-[#729900] w-[70%] self-center mt-10 py-3 rounded-xl text-white text-3xl"
                  >
                    {isLoading ? (
                      <BeatLoader
                        size={15}
                        color={"white"}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Verify"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div
              onClick={() => {
                setOtp(false);
              }}
              className="absolute top-4 right-5   duration-700 px-[10px] py-[5px] cursor-pointer  rounded-[50%] border-red-500 text-red-500"
            >
              <AiOutlineCloseCircle size={40} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
