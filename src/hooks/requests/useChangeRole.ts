import { useState } from "react";
import { UserRole } from "@/shared/types/User";
import { handleRoleChangeRequest } from "@/api/requests/handleRoleChangeRequest";

export const useChangeRole = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const changeRole = async (userId: number, newRole: UserRole) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await handleRoleChangeRequest({ userId, role: newRole });
      console.log(`Роль успешно изменена${userId}:`, response);
    } catch (err) {
      console.error(`Ошибка при изменении роли ${userId}:`, err);
    } finally {
      setLoading(false);
    }
  };
  

  return { changeRole, loading, error, success};
};

