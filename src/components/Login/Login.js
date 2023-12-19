import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
import './login.css';
import useToken from "../../data/useToken";
// import Header from "../Header/Header";
// import logoUrl from "../../static/img/logo.svg";
import $api from '../../api/api_settings'
import login_img from '../../static/img/login_img.png'

const Login = () => {
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
                        <div><h1>Вход в аккаунт</h1></div>
                        {/*<div>Войдите с существующим аккаунтом</div>*/}
                        {/*<div>Или с помощью электронной почты</div>*/}
                        <form onSubmit={handleSubmit} className="login_form">
                            <div>
                                <label htmlFor='email_input' className='label_login'>Электронная почта</label>
                                <input id='email_input' className="login_inputs" type="text"
                                       placeholder="Введите адрес электронной почты"
                                       onChange={e => setLogin(e.target.value)}/>

                            </div>
                            <div>
                                <label htmlFor='email_input' className='label_login'>Пароль</label>
                                <input className="login_inputs" type="password" placeholder="Введите пароль"
                                       onChange={e => setPassword(e.target.value)}/>
                            </div>
                            {error ?
                                <div className="error_element">
                                    <div>{error}</div>
                                </div> : <div/>
                            }
                            <div className='password_params'>
                                <div>
                                    <input id="dont_logout" type="checkbox"/>
                                    <label htmlFor="dont_logout">Не выходить из аккаунта</label>
                                </div>
                                <div><a href='/forgot-password'>Забыли пароль?</a></div>
                            </div>
                            <div>
                                <button className="login_btn" type="submit">Войти</button>
                            </div>
                        </form>
                        <div className='register_login_block'>
                            <div>Нет аккаунта?</div>
                            <div><a href='/register'>Зарегистрироваться</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login