import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useResetPassword = () => {
  const router = useRouter();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [error, setError] = useState(null);

  const resetPassword = async ({ otp, ref, newPassword }) => {
    setLoadingSubmit(true);
    setError(null);
    try {
      const body = {
        "otp": otp,
        "ref": ref,
        "password": newPassword,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/reset-password`,
        body
      );

      if (res.status >= 200 && res.status < 300) {
        alert("เปลี่ยนรหัสผ่านสำเร็จ");
        router.push("/login");
      }
    } catch (err) {
    } finally {
        setLoadingSubmit(false);
    }
  };
  return{
    resetPassword,
    loadingSubmit,
    error
  }
};
