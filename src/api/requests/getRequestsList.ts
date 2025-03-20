import api from "../instance";
import { Request } from "@/shared/types/Request";

// RequestListDTO:
// type: object
// properties:
//   id:
//     type: integer
//     format: int64
//   startedSkipping:
//     type: string
//     format: date
//   finishedSkipping:
//     type: string
//     format: date
//   status:
//     type: string
//   userId:
//     type: integer
//     format: int64


const getRequestsList = async (): Promise<Request[]> => {
    const token = localStorage.getItem("token");
    try {
        const response = await api.get("/request/list", {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Ошибка получения списка заявок:", error);
        throw error;
    }
}

export default getRequestsList