import { useState } from 'react';
import './requestCard.scss'; 
import { Request } from '@/shared/types/Request';
import handleRequests from '@/api/requests/handleRequests';

export interface RequestCardProps {
    width?: string;
    height?: string;
    showGraySquare?: boolean;
    status: ["REJECTED", "ACCEPTED", "PENDING"]
    isSelected?: boolean;
    request: Request;
}

export const RequestCard: React.FC<RequestCardProps> = ({ width, height, showGraySquare, status, isSelected, request }) => {

    const handleButtonClick = (type: string) => {
        handleRequests({ id: request.id, status: type });

    }

    return (
        <div className={`user-card${isSelected ? ' selected' : ''} ${status}`} style={{ width, height }}>
            <p className="user-name">{request.user.firstName} {request.user.lastName}</p>
            {showGraySquare &&
                <div className="gray-square">
                <div className="info-section">
                    <p className="header-text">Пропускаемые даты:</p>
                    <p className="dates-text">{request.startedSkipping} - {request.finishedSkipping}</p>
                    <p className="document-text">Посмотреть документ</p>
                    <p className="file-name">spravka.docx</p>
                </div>
                <div className="buttons-section">
                    <button className="button reject"
                        onClick={(event) => {
                            event.stopPropagation(); 
                            handleButtonClick("REJECTED");
                        }}
                    />
                    <button className="button accept" 
                        onClick={(event) => {
                            event.stopPropagation(); 
                            handleButtonClick("ACCEPTED");
                        }}
                    />
                </div>
            </div>
            }
        </div>
    );
};
