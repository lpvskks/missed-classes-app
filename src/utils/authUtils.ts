import { getToken } from "./token";

export const getUserRoleFromToken = (): string | null => {
  const token = getToken();

  if (token) {
    try {
      const payload = token.split('.')[1];  
      const decoded = JSON.parse(atob(payload));  
      const userRole = decoded.roles[0]?.authority;  
      console.log('Роль пользователя:', userRole);  
      return userRole || null; 
    } catch (error) {
      console.error('Ошибка при декодировании токена', error);
      return null;  
    }
  }

  return null;  
};
