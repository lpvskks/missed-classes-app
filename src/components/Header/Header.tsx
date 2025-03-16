import React from 'react';
import { useLogout } from '@/hooks/auth/useLogout';
import './header.scss';

const Header: React.FC = () => {

    const { logout } = useLogout();

    return (
        <header className="header_navigation">
            <div className='header_navigation_content'>
            <img src='src/assets/Logo.svg' className='header_logo' alt='Logo' />
            <nav className="header_links">
                    <a href="/users" className="header">
                        Пользователи
                    </a>
                    <a href="/" className='header'>
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