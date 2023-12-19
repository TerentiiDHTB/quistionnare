import {Link} from "react-router-dom";

import logoImg from "../../../../static/img/logo.svg"
import userImg from "../../../../static/img/userImg.png"
import notificationLogo from "../../../../static/icons/notification-icon.svg"

import "./styles.css"

const ProfileLayout = (props) => {
    return(
        <div className={"profileLayoutWrapper"}>
            <div className="linkSection">
                <img src={logoImg} alt="logoimg"/>
                <Link to={"/profile/main"} className="link">Главная</Link>
                <Link to={"/profile/wallet"} className="link">Кошелёк</Link>
                <Link to={"/profile"} className="link">Профиль</Link>
                <Link to={"/profile/surveys"} className="link sectionEnd">Опросы</Link>
                <Link to={"/profile/settings"} className="link sLinkColor">Настройки</Link>
                <Link to={"/profile/documentation"} className="link sLinkColor">Документация</Link>
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