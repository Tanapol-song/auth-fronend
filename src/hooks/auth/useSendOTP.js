import axios from "axios";
import { useState } from "react";

export const userSendOTP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refNo,setRefNo] = useState("");
  const sendOtp = async ({ email }) => {
    setLoading(true);
    setError(null);
    try {
        const body = {
            "email":email
        }

        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/send-otp`,
            body
          );
        if(res.status >=200 && res.status < 300){
            alert(`ส่ง OTP ไปยัง ${res.data.data.user} รหัสอ้างอิง ${res.data.data.refno}`);
            setRefNo(`${res.data.data.refno}`);
            console.log(res);
        }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return{
    sendOtp,
    loading,
    error,
    refNo,
  };
};
