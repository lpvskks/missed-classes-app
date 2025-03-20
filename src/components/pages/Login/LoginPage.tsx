import { useCallback, useEffect, useState } from 'react';
import './loginPage.scss'
import { useLogin } from '@/hooks/auth/useLogin';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loading, error, success } = useLogin();
    
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); 

        if (!email || !password) {
            alert("Заполните все поля!");
            return;
        }

        try {
            await login(email, password); 
            navigate("/"); 
        } catch (err) {
            console.error("Ошибка входа:", err);
        }
    };

    const handleRegistration = () => {
        navigate("/registration");
    }

    return (
        <main>
            <div className='content'>
                <h2>Вход</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email"
                    />

                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Пароль"
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Вход..." : "Войти"}
                    </button>
                </form>

                <button className="reg" onClick={handleRegistration}>Регистрация</button>
                
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
        </main>
    )
}

export default LoginPage;