import api from "../instance";
import { Request } from "@/shared/types/Request";

interface RequestPatchData {
    id: number;
    status: string;
}

const handleRequests = async ({ id, status }: RequestPatchData) => {
    const token = localStorage.getItem("token");
    
    try {
        const response = await api.patch(
            `/request/${id}/status`,
            status,
            {
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            }
        );
        console.log(response);
        return response;
    } catch (error) {
        console.error("Ошибка изменения статуса заявки:", error);
        throw error;
    }
}

export default handleRequests