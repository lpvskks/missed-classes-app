import { useNavigate } from "react-router-dom"
import userLogout from "@/api/auth/userLogout";

export const useLogout = () => {

    const logout = async () => {

        try {
            const response = await userLogout();
            console.log("Попытка логина прошла успешно")
        } catch (err) {
            console.log("Ошибка при попытке логина");
        }

        localStorage.removeItem("token");
        const navigate = useNavigate();
        navigate("/login");
    };
  
    return { logout };
};