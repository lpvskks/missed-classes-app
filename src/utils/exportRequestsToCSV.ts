import { Request } from "@/shared/types/Request";

export const exportRequestsToCSV = (requests: Request[]) => {
    if (!requests || requests.length === 0) {
        alert("Нет заявок для экспорта.");
        return;
    }

    const acceptedRequests = requests.filter(request => request.status === "ACCEPTED");

    if (acceptedRequests.length === 0) {
        alert("Нет принятых заявок для экспорта.");
        return;
    }

    const headers = ["ID", "Имя", "Фамилия", "Начало пропуска", "Конец пропуска", "Статус"];

    const csvRows = acceptedRequests.map(request => [
        request.id,
        `"${request.user.firstName}"`,  
        `"${request.user.lastName}"`,   
        request.startedSkipping,
        request.finishedSkipping,
        request.status
    ]);

    const csvContent = [
        headers.join(","), 
        ...csvRows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "accepted_requests.csv"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};
