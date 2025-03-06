import api from "../instance";

interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface RegisterResponse {
    message: string;
}

const userRegister = async (data: RegisterData): Promise<RegisterResponse> => {
    try {
        const response = await api.post("/auth/register", data);
        return response.data;
      } catch (error) {
        console.error("Ошибка регистрации:", error);
        throw error;
      }
}

export default userRegister