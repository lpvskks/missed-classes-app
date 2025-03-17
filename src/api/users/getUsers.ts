import { getToken } from "@/utils/token";
import api from "../instance";
import { User } from "@/shared/types/User";

export interface GetUsersResponse {
  data: User[];
}

export const getUsers = async (): Promise<GetUsersResponse> => {
  try {
      const token = getToken(); 

      if (!token) {
          throw new Error("Токен не найден");
      }

      const response = await api.get<GetUsersResponse>("/users", {
          headers: {
              Authorization: `Bearer ${token}`, 
          },
      });

      return response.data;
  } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
      throw error; 
  }
};

export default getUsers;
