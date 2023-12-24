import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";

import "./Surveys.css"
import SurveyBlockSmall from "../../../SurveyBlockSmall/SurveyBlockSmall";
import {useNavigate} from "react-router-dom";

const Surveys = () => {
    const navigate = useNavigate();

    return(
        <ProfileLayout>
            <div className="surveysBodyWrapper">
                <div className="surveysBodyHeader">
                    <div>
                        <p style={{fontSize:"18px"}}>Опросы</p>
                        <p>Всего 12</p>
                    </div>
                    <button onClick={() => {navigate("/profile/surveys/create")}}>Создать опрос</button>
                </div>

                <div className="filterButtonSection">
                    <div>
                        <button className="filterButton">Все опросы</button>
                        <button className="filterButton">Активные</button>
                        <button className="filterButton">Завершенные</button>
                    </div>
                    <input placeholder="поиск" className="surveyFilterInput"/>
                </div>

                <div className="filteredSurveysList">
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                    <SurveyBlockSmall/>
                </div>

            </div>
        </ProfileLayout>
    )
}

export default Surveys