import api from "../instance";


const userLogout = async (token: string | null) => {
    try {
        const response = await api.post("/auth/logout", null, { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        });
        return response;
    } catch (error) {
        console.error("Ошибка логаута:", error);
        throw error;
    }
}

export default userLogout