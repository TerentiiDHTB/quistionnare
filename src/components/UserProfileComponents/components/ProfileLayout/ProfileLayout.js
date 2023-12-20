import {Link, useLocation} from "react-router-dom";

import logoImg from "../../../../static/img/logo.svg"
import userImg from "../../../../static/img/userImg.png"
import notificationLogo from "../../../../static/icons/notification-icon.svg"

import "./styles.css"

const ProfileLayout = (props) => {
    const currentWindow = useLocation().pathname
    console.log(currentWindow)

    return(
        <div className={"profileLayoutWrapper"}>
            <div className="linkSection">
                <img src={logoImg} alt="logoimg"/>
                <Link to={"/profile/main"} className={`link ${currentWindow === "/profile/main" && "activeLink"}`}>Главная</Link>
                <Link to={"/profile/wallet"} className={`link ${currentWindow === "/profile/wallet" && "activeLink"}`}>Кошелёк</Link>
                <Link to={"/profile/info"} className={`link ${currentWindow ==="/profile/info" && "activeLink"}`}>Профиль</Link>
                <Link to={"/profile/surveys"} className={`link sectionEnd ${currentWindow ==="/profile/surveys" && "activeLink"}`}>Опросы</Link>
                <Link to={"/profile/settings"} className={`link sLinkColor ${currentWindow ==="/profile/settings" && "activeLink"}`}>Настройки</Link>
                <Link to={"/profile/documentation"} className={`link sLinkColor ${currentWindow ==="/profile/documentation" && "activeLink"}`}>Документация</Link>
            </div>
            <div className="pageBodyWrapper">
                <div className={"profileHeader"}>
                    <button><img src={notificationLogo} alt="notificationImg" style={{width:"37px"}}/></button>
                    <img src={userImg} alt="userImg"/>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default ProfileLayout