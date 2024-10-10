import axios from "axios";
import React, { createContext, useState } from "react";

export const detalisUser = createContext();

export const UserProivder = ({ children }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setheight] = useState("");
  const [diseases, setDiseases] = useState("");
  const [perfectWeight, setperfectWeight] = useState("");
  const [image, setImage] = useState("");
  const [confirm, setConfirm] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  async function getDetailsUser() {
    const { data } = await axios.get(
      "https://abdo121212-fit-nutrition.onrender.com/auth",
      { headers: { token: localStorage.getItem("token") } }
    );


    setName(data.user.fullName)
    setWeight(data.user.weight);
    setheight(data.user.height);
    setDiseases(data.user.diseases);
    setperfectWeight(data.user.perfect_weight);
    setImage(data.user.profileImage.url);
    setConfirm(data.user.setConfirm);
    setGender(data.user.gender);
    setEmail(data.user.email);
  }
  return (
    <detalisUser.Provider
      value={{
        setWeight,
        setheight,
        diseases,
        getDetailsUser,
        name,
        setName,
        perfectWeight,
        image,
        setImage,
        weight,
        height,
        setPassword,
        confirm,
        setGender,
        gender
        , email,
        password
      }}
    >
      {children}
    </detalisUser.Provider>
  );
};
