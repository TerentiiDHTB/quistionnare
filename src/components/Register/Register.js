import React, {useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import './Register.css';
import useToken from "../../data/useToken";
import $api from '../../api/api_settings'
import login_img from '../../static/img/login_img.png'

const Register = () => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [city, setCity] = useState()
    const [name, setName] = useState()

    const {token, setToken} = useToken();
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();
        if (!name){
            setError("введите данные")
            return
        }
        let firstname = name.split(" ")[0]
        let surname = name.split(" ")[0]
        registerUser({
            login,
            password,
            firstname,
            surname,
            city,
            country: "Yekaterinburg",
            gender: "Мужчина"
        });
    }

    const registerUser = (credentials) => {
        console.log(credentials)
        $api.post('/auth/respondent-signup',
            {name:credentials.firstname, surname: credentials.surname,
                email:credentials.login, password:credentials.password, city:credentials.city,
                country: credentials.country, gender: credentials.gender},
            {headers:{'accept':'application/json', "Content-Type":"application/json"}})
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    setToken(res.data)
                    navigate("/profile/main")
                }
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.detail)
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
                                       value={name}
                                       onChange={e => setName(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor='email_input' className='label_login'>Электронная почта</label>
                                <input id='email_input' className="login_inputs" type="email"
                                       placeholder="Введите адрес электронной почты"
                                       value={login}
                                       onChange={e => setLogin(e.target.value)}/>
                            </div>
                            <div className={'passwords_block'}>
                                <div style={{"width" : "50%"}}>
                                    <label htmlFor='password_input' className='label_login'>Пароль</label>
                                    <input id='password_input' className="login_inputs" type="password"
                                           placeholder="Введите пароль"
                                           value={password}
                                           onChange={e => setPassword(e.target.value)}/>
                                </div>
                                <div style={{"width": "50%"}}>
                                    <label htmlFor='password_input' className='label_login'>Повторите пароль</label>
                                    <input id='password_input' className="login_inputs" type="password"
                                           placeholder="Повторите пароль ещё раз"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor='city_input' className='label_login'>Город проживания</label>
                                <input id='city_input' className="login_inputs" type="text" value={city}
                                       placeholder="Екатеринбург"
                                       onChange={e => setCity(e.target.value)}/>
                            </div>
                            {error &&
                                <div className="error_element">
                                    <div>{error}</div>
                                </div>
                            }
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