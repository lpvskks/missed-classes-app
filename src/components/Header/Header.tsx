import React from 'react';
import './header.scss';

const Header: React.FC = () => {
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
                    <a href="/favorites" className='header'>
                        Заявки
                    </a>
                </nav>  
                <nav className="header_right">
                    <a href="/logout" className="header">
                        Выйти
                    </a>
                </nav>          
            </div>
        </header>
    );
}

export default Header;