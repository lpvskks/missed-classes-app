import { UserCard } from '@/components/UserCard/UserCard';
import './requestPage.scss'; 
import { useRequestsList } from '@/hooks/useRequestsList';
import { useEffect, useState } from 'react';

const RequestPage = () => {
    const { fetchRequestsList, requests, loading, error } = useRequestsList();

    const [showGraySquare, setShowGraySquare] = useState(false);

    const handleCardClick = () => {
        setShowGraySquare((prev) => !prev);
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
                <div key={request.id} className="user-card-container" onClick={handleCardClick}>
                    <UserCard
                    width='400px' 
                    height='90px'
                    showRoleButton={false} 
                    showGraySquare={showGraySquare}
                    request={request}/>
                </div>
                ))
            }
      </div>
    );
};

export default RequestPage;
