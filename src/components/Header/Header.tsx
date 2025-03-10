import React from 'react';
import { useLogout } from '@/hooks/auth/useLogout';
import './header.scss';

const Header: React.FC = () => {

    const { logout } = useLogout();

    return (
        <header className="header_navigation">
            <div className='header_navigation_content'>
                <a className="site-name" href="/">
                    Лого
                </a>
                <nav className="header_left">
                    <a href="/users" className="header">
                        Пользователи
                    </a>
                    <a href="/requests" className='header'>
                        Заявки
                    </a>
                </nav>  
                <nav className="header_right">
                    <a onClick={logout} className="header">
                        Выйти
                    </a>
                </nav>          
            </div>
        </header>
    );
}

export default Header;