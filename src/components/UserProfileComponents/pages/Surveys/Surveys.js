import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";

import "./Surveys.css"
import SurveyBlockSmall from "../../../SurveyBlockSmall/SurveyBlockSmall";

const Surveys = () => {
    return(
        <ProfileLayout>
            <div className="surveysBodyWrapper">
                <div className="surveysBodyHeader">
                    <div>
                        <p style={{fontSize:"18px"}}>Опросы</p>
                        <p>Всего 12</p>
                    </div>
                    <button>Создать опрос</button>
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