"use client";
import FormContainer from "@/components/FormContainer";
import { useResetPassword } from "@/hooks/auth/useResetPassword";
import { userSendOTP } from "@/hooks/auth/useSendOTP";
import React, { useState } from "react";

const Forgotpage = () => {
  const { sendOtp, loading, refNo } = userSendOTP();
  const { resetPassword, loadingSubmit } = useResetPassword();
  const [email, setEmail] = useState("");
  const [verifyCode, setverifyCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelSubmit = async () => {
    if (verifyCode.trim() && newPassword.trim() && confirmPassword.trim()) {
      if (newPassword === confirmPassword) {
        await resetPassword({
          "otp": verifyCode,
          "ref": refNo,
          "newPassword": newPassword,
        });
      } else {
        alert("ข้อมูลของคุณไม่ครบถ้วน");
      }
    }
  };

  const handelSendOtp = async () => {
    if (email.trim()) {
      await sendOtp({
        email: email,
      });
    } else {
      alert("ข้อมูลของคุณไม่ครบถ้วน");
    }
  };

  return (
    <FormContainer>
      <div className="flex flex-col pb-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-black font-bold">Forgot Password</h1>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <button
            disabled={loading}
            className="text-xs px-4 py-2 w-full bg-blue-900 text-white rounded-md cursor-pointer disabled:cursor-default"
            onClick={handelSendOtp}
          >
            Send Reset Token
          </button>

          <input
            type="text"
            placeholder="verify Code"
            onChange={(e) => setverifyCode(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-2 rounded-lg w-full text-xs text-gray-500"
          />
          <button
            disabled={loadingSubmit}
            className="text-xs px-4 py-2 w-full bg-blue-900 text-white rounded-md cursor-pointer disabled:cursor-default"
            onClick={handelSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </FormContainer>
  );
};

export default Forgotpage;
