import { RequestCard } from '@/components/RequestCard/RequestCard';
import './requestPage.scss'; 
import { useEffect, useState } from 'react';
import { getToken } from '@/utils/token';
import { useNavigate } from 'react-router-dom';
import { useRequestsList } from '@/hooks/useRequestsList';
import { exportRequestsToCSV } from '@/utils/exportRequestsToCSV';

const RequestPage = () => {
    const { fetchRequestsList, requests, loading, error } = useRequestsList();
    const navigate = useNavigate();

    const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

    const handleCardClick = (requestId: number) => {
        setSelectedRequestId(prev => (prev === requestId ? null : requestId));
    };

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login');
            return;
        }
        fetchRequestsList();
    }, []);

    

    return (
        <div className="request-page">
            <h1>Заявки</h1>
            
            <button onClick={() => exportRequestsToCSV(requests)} className="export-button">
            🫵 Экспорт принятых заявок (CSV)
            </button>

            {(requests || []).map((request) => ( 
                <div key={request.id} className="user-card-container" onClick={() => handleCardClick(request.id)}>
                    <RequestCard
                        width='400px' 
                        height='90px'
                        showGraySquare={selectedRequestId === request.id}
                        status={request.status}
                        isSelected={selectedRequestId === request.id}
                        request={request}
                    />
                </div>
            ))}
        </div>
    );
};

export default RequestPage;
