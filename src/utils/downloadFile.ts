import api from '@/api/instance'; 
import { getToken } from '@/utils/token';

export const downloadFile = async (fileId: number, fileName: string) => {
    try {
        const token = getToken(); 

        const response = await api.get(`/request/files/${fileId}`, {
            responseType: 'blob', 
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Ошибка при скачивании файла:", error);
    }
};
