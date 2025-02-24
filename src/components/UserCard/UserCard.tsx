import './UserCard.scss'; 

export interface UserCardProps {
    width?: string;
    height?: string;
    showRoleButton?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({ width, height, showRoleButton }) => {
    return (
        <div className="user-card" style={{ width, height }}>
            <p className="user-name">Имя пользователя</p>
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
        </div>
    );
};
