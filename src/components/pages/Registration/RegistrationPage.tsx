import { useCallback, useEffect, useState } from 'react';
import './registrationPage.scss'

const RegistrationPage = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

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
                <button>Зарегистрироваться</button>
            </div>
        </main>
    )
}

export default RegistrationPage;