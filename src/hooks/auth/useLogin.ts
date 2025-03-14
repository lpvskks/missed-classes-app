import { useState } from "react";
import userLogin from "@/api/auth/userLogin";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const login = async (
        email: string,
        password: string
    ) => {
        
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
        const response = await userLogin({ email, password});
        if (response) {
            localStorage.removeItem("token")
            localStorage.setItem("token", response.toString());
        }
        setSuccess(response ? "success" : null);
        console.log(success)
    } catch (err) {
      setError("Ошибка при попытке логина");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, success };
};
