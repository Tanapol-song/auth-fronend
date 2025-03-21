import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useRegister = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async ({ email, username, password }) => {
    setLoading(true);
    setError(null);

    console.log(process.env.NEXT_PUBLIC_BACK_END_URL);
    try {
      const body = {
        "email": email,
        "username": username,
        "password": password,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/register`,
        body
      );
      if (res.status >= 200 && res.status < 300) {
        alert("สมัครสมาชิกสำเร็จ");
        router.push("/login");
      }
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };
  return {
    register,
    loading,
    error,
  };
};
