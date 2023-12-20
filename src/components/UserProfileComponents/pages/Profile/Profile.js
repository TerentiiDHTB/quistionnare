import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";

import "./styles.css"

import userImg from "../../../../static/img/userImg.png"
import ProfileInfoBlock from "../../components/ProfileInfoBlock/ProfileInfoBlock";
import SurveyBlockSmall from "../../../SurveyBlockSmall/SurveyBlockSmall";

const Profile = () => {
    return(
        <ProfileLayout>
            <div className={"profileUserInfo"}>
                <div className={"userInfo"}>
                    <img src={userImg} alt={"userImg"}/>
                    <div className={"userName"}>
                        <p>babyjohn babyfohn babyfohn</p>
                        <p>Не верифицирован</p>
                    </div>
                    <button>Редактировать профиль</button>
                </div>
                <div className={"infoSectionWrapper"}>
                        <ProfileInfoBlock blockName={"Баланс"} blockInfo={"300 шекелей"}/>
                        <ProfileInfoBlock blockName={"Текущие опросы"} blockInfo={"180 шекелей"}/>
                        <div className={"longInfoBlock grid-template"}>
                            <p>simplepochta@pochta.ru</p>
                            <p>Екатеринбург</p>
                            <p>+7 (912) 345-67-89</p>
                            <p>Интернет технологии</p>
                        </div>
                        <ProfileInfoBlock blockName={"Всего опросов"} blockInfo={"12"}/>
                        <ProfileInfoBlock blockName={"Завершено опросов"} blockInfo={"56%"}/>
                        <div className={"longInfoBlock"}>
                            <span>Заполнение профиля 40%</span>
                            <progress value={0.4}>50%</progress>
                            <span>Заполненный профиль привлекает больше респондентов</span>
                        </div>
                </div>
            </div>

            <div className={"userSurveysBlock"}>
                <div className="userSurveysBlockHeader">
                    <div className="surveysInfoBlock">
                        <p>Опросы</p>
                        <p>Всего 12</p>
                    </div>
                    <div>
                        <button>Перейти ко всем опросам</button>
                        <button>Создать опрос</button>
                    </div>
                </div>
                <div className="surveysList">
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Profile