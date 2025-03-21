"use client";
import FormContainer from "@/components/FormContainer";
import { useRegister } from "@/hooks/auth/useRegister";
import Link from "next/link";
import React, { useState } from "react";

const Registerpage = () => {
  const { register, loading } = useRegister();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setComfirmPassWord] = useState("");
  const [email, setEmail] = useState("");

  const handelRegister = async () => {
    if (userName.trim() && passWord.trim() && email.trim()) {
    //   if (passWord === confirmPassWord) {
        await register({
            "email":email,
            "username":userName,
            "password":passWord,
        });
    //   }
    console.log("register");
    } else {
      alert("ข้อมูลของคุณไม่ครบถ้วน");
    }
  };

  console.log(email,userName,passWord);
  return (
    <FormContainer>
      <div className="flex flex-col pb-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-black font-bold">Register</h1>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassWord(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setComfirmPassWord(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <button
            disabled={loading}
            className="text-xs px-4 py-2 w-full bg-blue-900 text-white rounded-md cursor-pointer disabled:cursor-default"
            onClick={handelRegister}
          >
            Register
          </button>
        </div>
      </div>
    </FormContainer>
  );
};

export default Registerpage;
