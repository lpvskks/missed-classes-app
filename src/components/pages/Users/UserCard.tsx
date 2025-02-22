import './UserCard.scss'; 

export const UserCard = () => {
    return (
        <div className="user-card">
            <p className="user-name">Имя пользователя</p>
            <div className="dropdown">
                <select className="role-button">
                    <option disabled selected>Назначить роль</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Moderator">Moderator</option>
                </select>
            </div>
        </div>
    );
};
