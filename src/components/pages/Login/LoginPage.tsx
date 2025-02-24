import { useCallback, useEffect, useState } from 'react';
import './loginPage.scss'

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main>
            <div className='content'>
                <h2>Вход</h2>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email"
                />

                <input 
                    type="text" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Пароль"
                />

                <button>Войти</button>
            </div>
        </main>
    )
}

export default LoginPage;