import { useEffect, useState } from 'react';
import './usersPage.scss';
import { useUsers } from '@/hooks/users/useUsers';
import { getToken } from '@/utils/token';
import { useNavigate } from 'react-router-dom';
import { UserCard } from '@/components/UserCard/UserCard';
import { useChangeRole } from '@/hooks/requests/useChangeRole';
import { getUserRoleFromToken } from '@/utils/authUtils';  // Импортируем UserRole
import { UserRole } from '@/shared/types/User';

const UsersPage = () => {
    const [currentUserRole, setCurrentUserRole] = useState<UserRole | null>(null);  
    const { users, loading, error, fetchUsers } = useUsers();
    const { changeRole, loading: roleLoading, error: roleError, success: roleSuccess } = useChangeRole(); 
    const navigate = useNavigate();
    

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login');
            return;
        }
        const roleFromToken = getUserRoleFromToken(); 
        const role = Object.values(UserRole).includes(roleFromToken as UserRole) ? (roleFromToken as UserRole) : null;

        console.log('Текущая роль пользователя:', role);  
        setCurrentUserRole(role);  

        fetchUsers();
    }, []);

    return (
        <div className="users-page">
            <h1>Пользователи</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {roleLoading && <p>Изменение роли...</p>} 
            {roleError && <p style={{ color: 'red' }}>{roleError}</p>} 
            {roleSuccess && <p style={{ color: 'green' }}>{roleSuccess}</p>}  

            <div className="user-cards">
                {users ? (
                    users.map(user => (
                        <UserCard
                            key={user.id}
                            width="1200px"
                            height="70px"
                            showRoleButton={currentUserRole !== UserRole.TEACHER} 
                            user={user}
                            changeRole={changeRole}  
                            fetchUsers={fetchUsers}
                            currentUserRole={currentUserRole}  
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
