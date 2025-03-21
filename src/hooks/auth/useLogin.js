import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ username, password }) => {
    setLoading(true);
    setError(null);
    try {
      const body = {
        "username": username,
        "password": password,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/login`,
        body
      );
      if (res.status >= 200 && res.status < 300) {
        alert("เข้าสู้ระบบสำเร็จ");
        // router.push("/");
      }
    } catch (error) {
      setError(error);
      alert(error?.response.data.message)
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    login,
    loading,
    error,
  };
};
