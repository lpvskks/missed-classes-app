import { useCallback, useEffect, useState } from 'react';
import { useRegister } from "@/hooks/auth/useRegister"
import './registrationPage.scss'

const RegistrationPage = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const { register, loading, error, success } = useRegister();

    const handleSubmit = () => {
        if (password == passwordConfirm) {
            register(name, surname, email, password);
        }
        // TODO: здесь надо прописать ошибку, если пароли не совпадают
    };

    return (
        <main>
            <div className='content'>
                <h2>Регистрация</h2>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Email'
                />
                <input 
                    type="text" 
                    value={surname} 
                    onChange={(e) => setSurname(e.target.value)} 
                    placeholder='Фамилия'
                />
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Имя'
                />
                <input 
                    type="text" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Пароль'
                />
                <input 
                    type="text" 
                    value={passwordConfirm} 
                    onChange={(e) => setPasswordConfirm(e.target.value)} 
                    placeholder='Подтвердите пароль'
                />
                <button onClick={handleSubmit}>Зарегистрироваться</button>
                
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
        </main>
    )
}

export default RegistrationPage;