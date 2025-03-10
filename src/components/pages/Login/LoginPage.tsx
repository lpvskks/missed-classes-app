import { useCallback, useEffect, useState } from 'react';
import './loginPage.scss'
import { useLogin } from '@/hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loading, error, success } = useLogin();
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        login(email, password);
        navigate("/");
    };

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

                <button onClick={handleSubmit}>Войти</button>
                
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
        </main>
    )
}

export default LoginPage;