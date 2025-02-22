import { UserCard } from './UserCard';
import './usersPage.scss';

export const UsersPage = () => {
    return (
        <div className="users-page">
            <h1>Пользователи</h1>
            <UserCard /> 
        </div>
    );
};
