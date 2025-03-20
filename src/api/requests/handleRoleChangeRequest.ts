import { getToken } from "@/utils/token";
import api from "../instance";

interface RoleChangeData {
  userId: number;
  role: string; 
}

export const handleRoleChangeRequest = async ({ userId, role }: RoleChangeData) => {
  try {
    const token = getToken();

    let endpoint = `/users/${userId}/grant-role`; 

    if (role === "DEANERY") {
      endpoint = `/users/${userId}/grant-dean-role`;  
    }
    const response = await api.put(
      endpoint, 
      null, 
      {
        params: { role }, 
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    console.log("Ответ сервера:", response);
    return response.data;
  } catch (error) {
    console.error("Ошибка при изменении роли:", error);
    throw error;
  }
};
