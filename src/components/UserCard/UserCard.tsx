import './UserCard.scss'; 
import { User, UserRole } from '@/shared/types/User';
import handleRequests from '@/api/requests/handleRequests';
import { Request } from '@/shared/types/Request';
import { useState } from 'react';

export interface UserCardProps {
    user: User; 
    width?: string;
    height?: string;
    showRoleButton?: boolean;
    isSelected?: boolean;
    request: Request;
}

const roles = Object.values<UserRole>(UserRole);

export const UserCard: React.FC<UserCardProps> = ({ user, width, height, showRoleButton, isSelected, request}) => {
    const [selectedRole, setSelectedRole] = useState<UserRole | null>(user.userRole);

    if (user.userRole === UserRole.ADMIN) {
        return null;
    }

    const handleButtonClick = (type: string) => {
        handleRequests({ id: request.id, status: type });
    }

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newRole = event.target.value as UserRole;
        setSelectedRole(newRole);
        handleRequests({ id: request.id, status: newRole });
    };

    return (
        <div className={`user-card${isSelected ? ' selected' : ''}`} style={{ width, height }}>
            <p className="user-name">{user.firstName} {user.lastName}</p>
            <p className="user-group">{user.studentGroup}</p>
            {showRoleButton && (
                <div className="dropdown">
                    <select
                        className="role-button"
                        value={selectedRole || ""}
                        onChange={handleRoleChange}
                        disabled={user.userRole === UserRole.ADMIN} 
                    >
                        <option disabled value="">Назначить роль</option>
                        {roles.filter(role => role !== UserRole.ADMIN).map(role => ( 
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};
