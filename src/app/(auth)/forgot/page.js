"use client"
import FormContainer from "@/components/FormContainer";
import React from "react";

const Forgotpage = () => {
  return (
    <FormContainer>
      <div className="flex flex-col pb-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-black font-bold">Forgot Password</h1>
          <input
            type="text"
            placeholder="Email"
            // onChange={(e) => setUserName(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
           <button
            // disabled={loading}
            className="text-xs px-4 py-2 w-full bg-blue-900 text-white rounded-md cursor-pointer disabled:cursor-default"
            // onClick={handelRegister}
          >
            Send Reset Token
          </button>

          <input
            type="text"
            placeholder="verify Code"
            // onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <input
            type="password"
            placeholder="New Password"
            // onChange={(e) => setPassWord(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            // onChange={(e) => setComfirmPassWord(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />          
          <button
            // disabled={loading}
            className="text-xs px-4 py-2 w-full bg-blue-900 text-white rounded-md cursor-pointer disabled:cursor-default"
            // onClick={handelRegister}
          >
            Submit
          </button>
        </div>
      </div>
    </FormContainer>
  );
};

export default Forgotpage;
