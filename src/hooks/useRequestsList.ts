import { useState } from "react";
import getRequestsList from "@/api/requests/getRequestsList";
import { Request } from "@/shared/types/Request";

export const useRequestsList = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [requests, setRequests] = useState<Request[]>([]);

    const fetchRequestsList = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getRequestsList();
            setRequests(response);
            console.log(response)
        } catch (err) {
            setError("Ошибка при получении заявок");
        } finally {
            setLoading(false);
        }
    };

  return { fetchRequestsList, requests, loading, error };
};
