import { RequestCard } from '@/components/RequestCard/RequestCard';
import './requestPage.scss'; 
import { useRequestsList } from '@/hooks/useRequestsList';
import { useEffect, useState } from 'react';

const RequestPage = () => {
    const { fetchRequestsList, requests, loading, error } = useRequestsList();

    const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

    const handleCardClick = (requestId: number) => {
        setSelectedRequestId(prev => (prev === requestId ? null : requestId));
        console.log(selectedRequestId)
    };

    useEffect(() => {
        fetchRequestsList();
        if (!loading) {
            console.log(requests);
        }
    }, []);

    return (
        <div className="request-page">
            <h1>Заявки</h1>
            {requests.map((request) => (
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
