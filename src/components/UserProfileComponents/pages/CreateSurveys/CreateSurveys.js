import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";

import EditIcon from "../../../../static/icons/edit-icon.svg"

import "./CreateSurveys.css"
import "./CreateQuestionSection.css"

import {useState} from "react";

import addQuestionImg from "../../../../static/icons/addSurveyQuestionImage.svg";
import deleteSurveyImg from "../../../../static/icons/deleteSurveyButton.svg";
import {v4 as uuidv4} from "uuid";
import $api from "../../../../api/api_settings";
import {useNavigate} from "react-router-dom";

const CreateSurvey = () => {
    const [surveyName, setSurveyName] = useState("Новый опрос")
    const [surveyInfo, setSurveyInfo] = useState({})
    const navigate = useNavigate()

    const handleSurveyInfoAdding = () => {
        setSurveyInfo(prevState => {
            const newQId = `question${Object.keys(surveyInfo).length}`
            return {...prevState, [newQId]:{question_text:"Новый вопрос", answers:[], question_type:"Одиночный выбор"}}
        })
    }

    const handleSurveyInfoMutation = (key, field, val) => {
        setSurveyInfo(prevState => {
            const survey = {...prevState}
            survey[key][field] = val
            return survey
        })
    }

    const handleSurveyAnswersMutation = (key, ansId, val) => {
        setSurveyInfo(prevState => {
            const survey = {...prevState}
            surveyInfo[key]["answers"][ansId] = val
            return survey
        })
    }

    const handleSurveyAnswerAppend = (key) => {
        const newEl = surveyInfo[key]["answers"].length
        setSurveyInfo(prevState => {
            const survey = {...prevState}
            survey[key]["answers"][newEl] = `Новый ответ${survey[key]["answers"].length}`
            return survey
        })
    }

    const handleSurveySubmitBtn = () => {
        console.log(surveyInfo)
        const questions = []
        for (const questId of Object.keys(surveyInfo)){
            questions.push(
                {
                    question_text: surveyInfo[questId]["question_text"],
                    question_number: surveyInfo[questId]["answers"].length,
                    question_type: surveyInfo[questId]["question_type"],
                    question_answers:{answers: surveyInfo[questId]["answers"]? surveyInfo[questId]["answers"]: []}
                })
        }
        console.log(questions)
        const data = {
            description:surveyName,
            start_date: "2023-12-25",
            end_date: "2023-12-25",
            questions: questions
        }
        console.log(data)
        $api.post("/survey/",
            {...data},
            {headers: {"accept": "application/json", "Content-Type": "application/json"}})
            .then(res => {console.log(res.status); navigate("/profile/main")})
            .catch(err => console.log(err))
    }

    return(
        <ProfileLayout>
            <div className="createSurveySectionWrapper">
                <div className="createSurveySectionHeader">
                    <input value={surveyName} onChange={event => {setSurveyName(event.target.value)}} className="newSurveyName"/>
                    <button className="renameSurveyButton"><img src={EditIcon} alt="editicon"/></button>
                    <div className="createSurveyHeaderButton">
                        <button>Отменить</button>
                        <button style={{backgroundColor:"#4080DF", color:"white"}} onClick={handleSurveySubmitBtn}>Опубликовать</button>
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
                                    <input
                                        value={surveyInfo[key].question_text}
                                        placeholder="Введите ваш вопрос"
                                        onChange={e => handleSurveyInfoMutation(key, "question_text", e.target.value)}
                                        className="questionText"
                                    />
                                    <button className="addQuestionImage"><img src={addQuestionImg} alt={"addQuestionImg"}/></button>
                                    <select
                                        name="question_type"
                                        value={surveyInfo[key].question_type}
                                        onChange={e => handleSurveyInfoMutation(key, "question_type", e.target.value)}
                                        className="answerType">
                                        <option value="Одиночный выбор">Один вариант</option>
                                        <option value="Ответ текстом">Ответ текстом</option>
                                    </select>
                                </div>

                                {
                                    surveyInfo[key].question_type === "Одиночный выбор" &&
                                    <div>
                                        {surveyInfo[key].answers.map((item, idx) =>
                                            <div key={uuidv4()} className="answerOption">
                                                <input key={uuidv4()} value={item} onChange={(e) => {handleSurveyAnswersMutation(key, idx, e.target.value)}} className="answerOptionText"/>
                                                <button className="deleteAnswerBtn">✕</button>
                                            </div>
                                        )}
                                        <button onClick={() => {handleSurveyAnswerAppend(key)}}>+ Добавить вариант</button>
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