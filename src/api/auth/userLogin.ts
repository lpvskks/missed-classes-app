import api from "../instance";

interface LoginData {
    email: string;
    password: string;
}

interface LoginResponse {
    message: string;
    token: string;
}

const userLogin = async (data: LoginData): Promise<LoginResponse> => {
    try {
        const response = await api.post("/auth/login", data);
        return response.data.token;
   
    } catch (error) {
        console.error("Ошибка логина:", error);
        throw error;
    }
}

export default userLogin