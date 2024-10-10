import { BiFemale, BiMale } from "react-icons/bi";
import React, {  useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NextInof = () => {
  const navigate = useNavigate();
  const initValues = {
    gender: "",
    height: "",
    weight: "",
    birthdays: "",
    diseases: "",
  };

  const [isDiseases, setIsDiseases] = useState(null);
  const [errMsg, setErrMsg] = useState(false);
  const [sucssesMsg, setSucssesMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const schema = Yup.object({
    height: Yup.number().required(),
    weight: Yup.number().required().min(50),
    gender: Yup.string().required(),
    birthdays: Yup.string().required(),
    diseases: Yup.number(),
  });


  const handleStart = async (values) => {
    setIsLoading(true);

    console.log(values);

    try {
      const { data } = await axios.post(
        `https://abdo121212-fit-nutrition.onrender.com/auth/nextInfo`,
        values,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );

      if (data.success) {
        setSucssesMsg("Data set Successflly");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        setTimeout(() => {
          setErrMsg(data.message);
        }, 1000);
      }
    } catch (err) {
      setTimeout(() => {
        setErrMsg(err.response.data.message);
      }, 1000);
      setErrMsg(false)
    }
    setIsLoading(false);
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initValues,
    validationSchema: schema,
    onSubmit: handleStart,
  });

  const radioDiseases = (e) => {
    if (e.target.value === "yes") {
      setIsDiseases(false);
    } else {
      setIsDiseases(true);
      setFieldValue("diseases", "");
    }
  };
  console.log(values);

  return (
    <section className="container h-screen w-full p-24 mx-auto">






      {
        errMsg ? (
          <div className="w-1/2  p-3 text-center mx-auto text-red-800 border bg-red-100 rounded-3xl text-2xl font-bold " >
            {errMsg}
          </div>
        ) : (
          ""
        )
      }
      {
        sucssesMsg ? (
          <div className="bg-green-300 w-1/2 p-3 text-center mx-auto text-white  rounded-3xl text-2xl font-bold ">
            {sucssesMsg}
          </div>
        ) : (
          ""
        )
      }
      <h3 className="text-main text-3xl font-medium">Enter Your Gender</h3>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="flex">
          <div className="flex justify-start items-start gap-10 w-full pt-5 ">
            <div className="w-1/2">
              <input
                onChange={() => {
                  setFieldValue("gender", "male");
                }}
                onBlur={handleBlur}
                value="male"
                type="radio"
                name="gender"
                className="input-radio"
                id="radio1"
                checked={values.gender === "male"}
              />
              <label
                htmlFor="radio1"
                className="flex border-[3px] border-main h-16 justify-center items-center rounded-md"
              >
                <h3 className="text-main text-3xl">Male</h3>
                <BiMale className="text-main" size={40} />
              </label>
            </div>

            <div className="w-1/2">
              <input
                onChange={(e) => {
                  setFieldValue("gender", "female");
                }}
                onBlur={handleBlur}
                value="female"
                type="radio"
                name="gender"
                className="input-radio"
                id="radio2"
                checked={values.gender === "female"}
              />
              <label
                htmlFor="radio2"
                className="flex border-[3px] border-main h-16 justify-center items-center rounded-md"
              >
                <h3 className="text-main text-3xl">Female</h3>
                <BiFemale className="text-main" size={40} />
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start gap-10 w-full">
          <div className="relative  w-full">
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.height}
              type="number"
              name="height"
              id="height"
              className="w-full border-[3px] rounded-lg py-4 px-3 border-main"
              placeholder="Enter Your Height"
            />

            <label
              htmlFor="height"
              className="absolute top-[-16px] left-4  text-main text-xl px-2 rounded-lg bg-white"
            >
              Enter Your Height
            </label>
          </div>
          <div className="relative  w-full">
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.weight}
              type="number"
              name="weight"
              id="weight"
              className="w-full border-[3px] rounded-lg py-4 px-3 border-main"
              placeholder="
              Enter Your Weight
              "
            />
            <label
              htmlFor="height"
              className="absolute top-[-16px] left-4  text-main text-xl px-2 rounded-lg bg-white"
            >
              Enter Your Weight
            </label>
          </div>
        </div>

        <div className="relative  w-full">
          <input
            onBlur={handleBlur}
            value={values.birthdays}
            onChange={handleChange}
            type="date"
            name="birthdays"
            id="birthday"
            className="w-full border-[3px] rounded-lg py-4 px-3 border-main"
          />
          <label
            htmlFor="birthday"
            className="absolute top-[-16px] left-4  text-main text-xl px-2 rounded-lg bg-[#ffffff]"
          >
            Enter Your Birth Date
          </label>
        </div>




        <div className="space-y-7">
          <h4 className="text-main text-3xl font-medium  ">
            Do You Suffer form any diseases ?{" "}
          </h4>

          <input
            type="radio"
            name="isDiseases"
            id="yes"
            value={"yes"}
            onChange={radioDiseases}
          />
          <label htmlFor="yes" className="text-2xl font-medium p-2">
            Yes
          </label>

          <input
            type="radio"
            name="isDiseases"
            id="no"
            value={"no"}
            className="ml-3"
            onChange={radioDiseases}
          />

          <label htmlFor="no" className="text-2xl font-medium p-2">
            No
          </label>

          <div>
            <div className="relative w-full">
              <select
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.diseases}
                disabled={isDiseases}
                name="diseases"
                id="diseases"
                className="w-full  px-2 border-main border-[3px] rounded-lg py-3  text-center text-main text-xl"
              >
                <option value=""></option>
                <option value="Sugar">Sugar</option>
                <option value="Heart">Heart</option>
                <option value="pressure">pressure</option>
              </select>
              <label
                htmlFor="diseases"
                className="absolute top-[-12px] left-4 text-lg px-2  bg-white text-main"
              >
                Select The Diseases your suffer form
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="border-[#729900] bg-[#729900] w-[50%] self-center py-3 rounded-xl  text-white text-3xl"
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
      </form>
    </section >
  );
};
