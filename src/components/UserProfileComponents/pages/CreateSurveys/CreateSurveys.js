import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";

import EditIcon from "../../../../static/icons/edit-icon.svg"

import "./CreateSurveys.css"
import "./CreateQuestionSection.css"

import {useState} from "react";

import addQuestionImg from "../../../../static/icons/addSurveyQuestionImage.svg";
import deleteSurveyImg from "../../../../static/icons/deleteSurveyButton.svg";

const CreateSurvey = () => {
    const [surveyName, setSurveyName] = useState("Новый опрос")
    const [surveyInfo, setSurveyInfo] = useState({})

    const handleSurveyInfoAdding = () => {
        console.log(surveyInfo)
        setSurveyInfo(prevState => {
            const newQId = `question${Object.keys(surveyInfo).length}`
            console.log(newQId)
            return {...prevState, [newQId]:{question:"Новый вопрос", answers:[], answerType:"Одиночный выбор"}}
        })
        console.log(surveyInfo)
    }

    const handleSurveyInfoMutation = (key, field, val) => {
        setSurveyInfo(prevState => {
            const survey = {...prevState}
            survey[key][field] = val
            console.log(survey)
            return survey
        })
    }

    const handleSurveyAnswersMutation = (key, field, ansId, val) => {
        setSurveyInfo(prevState => {
            const survey = {...prevState}
            survey[key][field][ansId] = val
            return survey
        })
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
                {Object.keys(surveyInfo).map(key =>
                    <div key={key} className="createQuestionSectionWrapper">
                        <div className="questionSectionWrapper">
                            <div>
                                <div className="questionWrapper">
                                    <input value={surveyInfo[key].question} placeholder="Введите ваш вопрос" className="questionText"/>
                                    <button className="addQuestionImage"><img src={addQuestionImg} alt={"addQuestionImg"}/></button>
                                    <select
                                        name="answerType"
                                        value={surveyInfo[key].answerType}
                                        onChange={e => handleSurveyInfoMutation(key, "answerType", e.target.value)}
                                        className="answerType">
                                        <option value="Одиночный выбор">Один вариант</option>
                                        <option value="Ответ текстом">Ответ текстом</option>
                                    </select>
                                </div>

                                {
                                    surveyInfo[key].answerType === "Одиночный выбор" &&
                                    <div>
                                        {surveyInfo[key].answers.map((item, idx) =>
                                            <div key={item} className="answerOption">
                                                <input value={item} className="answerOptionText"/>
                                                <button className="deleteAnswerBtn">✕</button>
                                            </div>
                                        )}
                                        <button>+ Добавить вариант</button>
                                    </div>
                                }
                            </div>
                        </div>
                        <button className="deleteQuestionBtn">
                            <img src={deleteSurveyImg} alt={"deleteQuestionImg"} style={{height:"2.5vh"}}/>
                        </button>
                    </div>
                )}
                <button onClick={() => {handleSurveyInfoAdding()}}>добавить вопрос</button>
            </div>

            </div>
        </ProfileLayout>
    )
}

export default CreateSurvey