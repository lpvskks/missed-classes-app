
import { UserCard } from '@/components/UserCard/UserCard';
import './usersPage.scss';

const UsersPage = () => {
    return (
        <div className="users-page">
            <h1>Пользователи</h1>
            <UserCard width='1200px' height='70px' showRoleButton={true} /> 
        </div>
    );
};

export default UsersPage;
