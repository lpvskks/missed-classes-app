import { User, UserRole } from '@/shared/types/User';
import './UserCard.scss';
import { useEffect, useState } from 'react';

export interface UserCardProps {
    user: User;
    width?: string;
    height?: string;
    showRoleButton?: boolean;
    isSelected?: boolean;
    changeRole: (userId: number, newRole: UserRole) => void;
    currentUserRole: UserRole; 
    fetchUsers: () => void; 
}

const roles = Object.values<UserRole>(UserRole);

const roleTranslations: Record<UserRole, string> = {
    [UserRole.DEANERY]: "Декан",
    [UserRole.TEACHER]: "Преподаватель",
    [UserRole.STUDENT]: "Студент",
    [UserRole.USER]: "Пользователь",
    [UserRole.ADMIN]: "Администратор"
};

export const UserCard: React.FC<UserCardProps> = ({ user, width, height, showRoleButton, isSelected, changeRole, fetchUsers, currentUserRole }) => {
    const [selectedRole, setSelectedRole] = useState<string>("");

    useEffect(() => {
        setSelectedRole(""); 
    }, [user.userRole]);

    const handleRoleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newRole = event.target.value as UserRole;
        setSelectedRole(newRole);  
        await changeRole(user.id, newRole); 
        fetchUsers();
    };

    if (user.userRole === UserRole.ADMIN) {
        return null;  
    }

    let filteredRoles = roles.filter(role => role !== UserRole.ADMIN && role !== UserRole.USER);

    if (currentUserRole === UserRole.DEANERY) {
        console.log("Текущая роль:", currentUserRole);
        console.log("До фильтрации роли:", filteredRoles);
        filteredRoles = filteredRoles.filter(role => role !== UserRole.DEANERY);
        console.log("После фильтрации роли:", filteredRoles);
    }

    return (
        <div className={`user-card${isSelected ? ' selected' : ''}`} style={{ width, height }}>

            <p className="user-name">{user.firstName} {user.lastName}</p>
            <p className="user-group">{user.studentGroup}</p>
            <p className="user-role">{roleTranslations[user.userRole]}</p>

            {showRoleButton && currentUserRole !== UserRole.TEACHER && (
                <div className="dropdown">
                    <select
                        className="role-button"
                        value={selectedRole || ""}  
                        onChange={handleRoleChange}
                        disabled={user.userRole === UserRole.ADMIN} 
                    >
                        <option disabled value="">Изменить роль</option>
                        {filteredRoles.map(role => (
                            <option key={role} value={role}>{roleTranslations[role]}</option> 
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};
