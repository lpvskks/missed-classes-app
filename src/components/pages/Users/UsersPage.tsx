import { useEffect } from 'react';
import { UserCard } from '@/components/UserCard/UserCard';
import './usersPage.scss';
import { useUsers } from '@/hooks/users/useUsers';
import { getToken } from '@/utils/token';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
    const { users, loading, error, fetchUsers } = useUsers();
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login');
            return;
        }

        fetchUsers();
    }, []);

    return (
        <div className="users-page">
            <h1>Пользователи</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="user-cards">
                {users ? (
                    users.map(user => (
                        <UserCard
                            key={user.id}
                            width="1200px"
                            height="70px"
                            showRoleButton={true}
                            user={user} 
                       />
                    ))
                ) : (
                    <p>Пользователи не найдены.</p>
                )}
            </div>
        </div>
    );
};

export default UsersPage;
