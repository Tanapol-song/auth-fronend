"use client";
import FormContainer from "@/components/FormContainer";
import { useLogin } from "@/hooks/auth/useLogin";
import Link from "next/link";
import React, { useState } from "react";

const Loginpage = () => {
  const { login, loading } = useLogin();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const handelLogin = async () => {
    if (userName.trim() && passWord.trim()) {
      await login({
        username: userName,
        password: passWord,
      });
    }else{
        alert("ข้อมูลของคุณไม่ครบถ้วน")
    }
  };
  return (
    <FormContainer>
      <div className="flex flex-col pb-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-black font-bold">Login</h1>
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
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <h1 className="text-md text-black font-bold">Remember Me</h1>
          </div>
          <button
            disabled={loading}
            className="text-xs px-4 py-2 w-full bg-blue-900 text-white rounded-md cursor-pointer disabled:cursor-default"
            onClick={handelLogin}
          >
            Login
          </button>
          <Link href="/forgot" rel="noopener noreferrer">
            <p className="text-xs text-blue-900 pt-2 underline">
              Forgotten password?
            </p>
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};

export default Loginpage;
