import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";

import EditIcon from "../../../../static/icons/edit-icon.svg"

import "./CreateSurveys.css"

import {useEffect, useState} from "react";

import CreateQuestionSection from "../../components/CreateSurveySection/CreateQuestionSection";

const CreateSurvey = () => {
    const [surveyName, setSurveyName] = useState("Новый опрос")
    const [surveyInfo, setSurveyInfo] = useState([])

    const handleSurveyInfoAdding = () => {
        console.log(surveyInfo)
        setSurveyInfo([...surveyInfo, {question: `Вопрос${surveyInfo.length}`, answerType: "Одиночный выбор", answers: []}])
        console.log(surveyInfo)
    }

    return(
        <ProfileLayout>
            <div className="createSurveySectionWrapper">
                <div className="createSurveySectionHeader">
                    <input value={surveyName} onChange={event => {setSurveyName(event.target.value)}} className="newSurveyName"/>
                    <button className="renameSurveyButton"><img src={EditIcon} alt="editicon"/></button>

                    <div className="createSurveyHeaderButton">
                        <button>Отменить</button>
                        <button style={{backgroundColor:"#4080DF", color:"white"}}>Опубликовать</button>
                    </div>
                </div>

            <div className="tabsWrapper">
                <button className="tabButton">Конструктор вопросов</button>
                <button className="tabButton">Настройка опроса</button>
                <button className="tabButton">Статистика ответов</button>
            </div>

            <div className="questionsSection">
                {surveyInfo.map((item, idx) =>
                    idx != 0 && <CreateQuestionSection key={item.question} surveyInfo = {surveyInfo} idx = {idx} setSurveyInfo = {setSurveyInfo}/>
                )}
                <button onClick={() => {handleSurveyInfoAdding()}}>добавить вопрос</button>
            </div>

            </div>
        </ProfileLayout>
    )
}

export default CreateSurvey