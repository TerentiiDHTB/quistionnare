import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
import './Register.css';
import useToken from "../../data/useToken";
import $api from '../../api/api_settings'
import login_img from '../../static/img/login_img.png'

const Register = () => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const {token, setToken} = useToken();
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        loginUser({
            login,
            password
        });
    }

    const loginUser = (credentials) => {
        $api.post('/auth/respondent-login', credentials)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    setToken(res.data)
                }
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error)
            })
    }

    if (token) {
        return (
            <Navigate to="/"/>
        )
    } else {
        return (
            <div>
                <div id='left'>
                    <div className='block'>
                        <img className='login_image' src={login_img} alt='Картинка'/>
                    </div>
                </div>
                <div id='right'>
                    <div className='block right_block'>
                        <div><h1>Регистрация</h1></div>
                        <form onSubmit={handleSubmit} className="login_form">
                            <div>
                                <label htmlFor='fullname_input' className='label_login'>Полное имя</label>
                                <input id='fullname_input' className="login_inputs" type="text"
                                       placeholder="Иванов Иван Иванович"
                                       onChange={e => setLogin(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor='email_input' className='label_login'>Электронная почта</label>
                                <input id='email_input' className="login_inputs" type="email"
                                       placeholder="Введите адрес электронной почты"
                                       onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className={'passwords_block'}>
                                <div style={{"width" : "50%"}}>
                                    <label htmlFor='password_input' className='label_login'>Пароль</label>
                                    <input id='password_input' className="login_inputs" type="password"
                                           placeholder="Введите пароль"
                                           onChange={e => setPassword(e.target.value)}/>
                                </div>
                                <div style={{"width": "50%"}}>
                                    <label htmlFor='password_input' className='label_login'>Повторите пароль</label>
                                    <input id='password_input' className="login_inputs" type="password"
                                           placeholder="Повторите пароль ещё раз"
                                           onChange={e => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor='city_input' className='label_login'>Город проживания</label>
                                <input id='city_input' className="login_inputs" type="text"
                                       placeholder="Екатеринбург"
                                       onChange={e => setLogin(e.target.value)}/>
                            </div>
                            <div>
                                <button className="login_btn" type="submit">Создать аккаунт</button>
                            </div>
                        </form>
                        <div className='register_login_block'>
                            <div>Уже есть аккаунт?</div>
                            <div><a href='/login'>Войти</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register