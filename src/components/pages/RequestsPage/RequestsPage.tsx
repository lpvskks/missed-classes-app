import { RequestCard } from '@/components/RequestCard/RequestCard';
import './requestPage.scss'; 
import { useEffect, useState } from 'react';
import { getToken } from '@/utils/token';
import { useNavigate } from 'react-router-dom';
import { useRequestsList } from '@/hooks/useRequestsList';

const RequestPage = () => {
    const { fetchRequestsList, requests, loading, error } = useRequestsList();
    const navigate = useNavigate();

    const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

    const handleCardClick = (requestId: number) => {
        setSelectedRequestId(prev => (prev === requestId ? null : requestId));
        console.log(selectedRequestId)
    };

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login');
            return;
        }

        fetchRequestsList();
        if (!loading) {
            console.log(requests);
        }
    }, []);

    return (
        <div className="request-page">
            <h1>Заявки</h1>
            {(requests || []).map((request) => ( 
                <div key={request.id} className="user-card-container" onClick={() => handleCardClick(request.id)}>
                    <RequestCard
                    width='400px' 
                    height='90px'
                    showGraySquare={selectedRequestId === request.id}
                    status={request.status}
                    isSelected={selectedRequestId === request.id}
                    request={request}/>
                </div>
                ))
            }
      </div>
    );
};

export default RequestPage;
