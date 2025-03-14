import { useState } from 'react';
import './UserCard.scss'; 
import { Request } from '@/shared/types/Request';
import handleRequests from '@/api/requests/handleRequests';

export interface UserCardProps {
    width?: string;
    height?: string;
    showRoleButton?: boolean;
    showGraySquare?: boolean;
    isSelected?: boolean;
    request: Request;
}

export const UserCard: React.FC<UserCardProps> = ({ width, height, showRoleButton, showGraySquare, isSelected, request }) => {

    const handleButtonClick = (type: string) => {
        handleRequests({ id: request.id, status: type });

    }

    return (
        <div className={`user-card${isSelected ? ' selected' : ''}`} style={{ width, height }}>
            <p className="user-name">Айди юзера {request.userId}</p>
            {/* TODO: тут должно быть имя! но бэки чето попутали */}
            {showRoleButton && ( 
                <div className="dropdown">
                    <select className="role-button">
                        <option disabled selected>Назначить роль</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Moderator">Moderator</option>
                    </select>
                </div>
            )}
            {showGraySquare &&
                <div className="gray-square">
                <div className="info-section">
                    <p className="header-text">Пропускаемые даты:</p>
                    <p className="dates-text">{request.startedSkipping} - {request.finishedSkipping}</p>
                    <p className="document-text">Посмотреть документ</p>
                    <p className="file-name">spravka.docx</p>
                </div>
                <div className="buttons-section">
                    <button className="button reject" onClick={() => handleButtonClick("REJECTED")}/>
                    <button className="button accept" onClick={() => handleButtonClick("ACCEPTED")}/>
                </div>
            </div>
            }
        </div>
    );
};
