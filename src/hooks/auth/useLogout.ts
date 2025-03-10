import { useNavigate } from "react-router-dom"
import userLogout from "@/api/auth/userLogout";

export const useLogout = () => {
    const navigate = useNavigate();
    const logout = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const response = await userLogout(token);
                localStorage.removeItem("token");
                navigate("/login");
                console.log("Попытка логаута прошла успешно")
            }
        } catch (err) {
            console.log("Ошибка при попытке логаута");
        }
    };
  
    return { logout };
};