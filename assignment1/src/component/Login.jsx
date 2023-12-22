import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [inputDetail, setInputDetail] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    // console.log('>>>>>>>>>>>', e.target)
    const { name, value } = e.target;
    // console.log('>>>>>>>>>>> name', name ,"value",value)
    setInputDetail({ ...inputDetail, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("https://dummyjson.com/auth/login", {
        username: inputDetail.username,
        password: inputDetail.password,
        // username kminchelle
        // password 0lelplR
      });
      // console.log('>>>>>>>>>>>', resp.status)
      console.log(">>>>>>>>>>>", resp.data);
      if (resp.status === 200) {
        localStorage.setItem("userToken", resp.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.log(">>>>>>>>>>>", error.response);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div className="login flex justify-center pt-10 h-screen  w-full">
        <form className="bg-blue-100 p-9 rounded-md flex gap-3 flex-col h-60 shadow-md">
          <h1 className="text-center font-bold">Login to your account</h1>
          <input
            type="text"
            className="border-2 border-black rounded-md ps-3 w-[20rem] "
            id="username"
            name="username"
            value={inputDetail.username}
            onChange={onChangeHandler}
            placeholder="enter your username"
          />

          <input
            type="text"
            className="border-2 border-black ps-3 rounded-md "
            id="password"
            name="password"
            value={inputDetail.password}
            onChange={onChangeHandler}
            placeholder="enter your password"
          />
          <button
            className="bg-blue-700 text-white p-1 rounded-md "
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
