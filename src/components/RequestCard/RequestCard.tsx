import { useState } from 'react';
import './requestCard.scss'; 
import { Request } from '@/shared/types/Request';
import handleRequests from '@/api/requests/handleRequests';
import { downloadFile } from '@/utils/downloadFile'; 

export interface RequestCardProps {
    width?: string;
    height?: string;
    showGraySquare?: boolean;
    status: ["REJECTED", "ACCEPTED", "PENDING"];
    isSelected?: boolean;
    request: Request;
}

export const RequestCard: React.FC<RequestCardProps> = ({ width, height, showGraySquare, status, isSelected, request }) => {
    const handleButtonClick = (type: string) => {
        handleRequests({ id: request.id, status: type });
    };

    return (
        <div className={`user-card${isSelected ? ' selected' : ''} ${status}`} style={{ width, height }}>
            <p className="user-name">{request.user.firstName} {request.user.lastName}</p>
            {showGraySquare && (
                <div className="gray-square">
                    <div className="info-section">
                        <p className="header-text">Пропускаемые даты:</p>
                        <p className="dates-text">{request.startedSkipping} - {request.finishedSkipping}</p>
                        {request.files.length > 0 && (
                            <div className="document-section">
                                <p className="document-text">Посмотреть документ</p>
                                {request.files.map((file) => (
                                    <p 
                                        key={file.id} 
                                        className="file-name" 
                                        onClick={() => downloadFile(file.id, file.fileName)}
                                        style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                                    >
                                        {file.fileName}
                                    </p>
                                ))}
                            </div>
                        )}
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
            )}
        </div>
    );
};
