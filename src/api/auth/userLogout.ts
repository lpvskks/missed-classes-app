import api from "../instance";

interface LogoutResponse {
    message: string;
}

const userLogout = async (): Promise<LogoutResponse> => {
    try {
        const response = await api.post("/auth/logout");
        return response.data;
    } catch (error) {
        console.error("Ошибка логаута:", error);
        throw error;
    }
}

export default userLogout