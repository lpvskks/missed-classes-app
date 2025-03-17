import { useState, useEffect } from "react";
import { User } from "@/shared/types/User";
import getUsers from "@/api/users/getUsers";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 

  const fetchUsers = async () => {
    setLoading(true); 
    setError(null); 

    try {
      const response = await getUsers(); 
      setUsers(response); 
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка при получении пользователей");
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, fetchUsers };
};
