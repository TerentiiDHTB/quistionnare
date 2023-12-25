import React, {useEffect, useState} from 'react';
import './Header.css';
import {Outlet, Link} from "react-router-dom";
import logo_img from '../../static/img/logo.svg'



import useToken from "../../data/useToken";
import $api from "../../api/api_settings";


const Header = () => {
    const [isScannerOpen, setScannerOpen] = useState(false);
    const [isDefListOpen, setOpenList] = useState(false)
    const [isAddDeviceOpen, setAddDeviceOpen] = useState(false)
    const [newDeviceId, setNewDeviceId] = useState()

    const {token, setToken} = useToken();
    // const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    const [showNavExternal3, setShowNavExternal3] = useState(false);

    const logout = () => {
        console.log("logout!")
        localStorage.clear();
        window.location.href = '/';
    }

    useEffect(() => {

    }, [])


    if (!token) { //Неавторизованный пользователь
        return (
            <div className="header">
                <Link to="/"><img src={logo_img} alt="logo"/></Link>
                <div className='LoginRegisterBlock'>
                    <div><Link to="/loginint" style={{color: '#000000'}}>Войти</Link></div>
                    <div><Link to="/register" style={{color: '#000000'}}>Зарегистрироваться</Link></div>
                </div>
                <Outlet/>
            </div>
        )
    } else { // Десктопная версия авторизованного пользователя
        return (
            <div className="header">
                <Link to="/"><img src={logo_img} alt="logo"/></Link>
                <div className="desktop_buttons">
                    <div>{localStorage.getItem("user_first_name")} {localStorage.getItem("user_second_name")}</div>
                    <div onClick={logout}>logout</div>
                </div>
            </div>
        )
    }
}

export default Header;