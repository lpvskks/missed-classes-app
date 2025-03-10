import { useState } from "react";
import userRegister from "@/api/auth/userRegister";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const register = async (
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) => {

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await userRegister({ firstName, lastName, email, password});
      setSuccess(response ? "success" : null);
      console.log(success)
      if (success == null) {
        console.log("что то не так!")
        setError("Неверно введен один из параметров")
      }
    } catch (err) {
      setError("Ошибка при регистрации");
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
};
