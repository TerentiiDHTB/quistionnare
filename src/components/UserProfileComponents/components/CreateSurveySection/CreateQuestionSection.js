import "./CreateQuestionSection.css"

import addQuestionImg from "../../../../static/icons/addSurveyQuestionImage.svg"
import deleteSurveyImg from "../../../../static/icons/deleteSurveyButton.svg"

const CreateQuestionSection = (survey, idx, setSurveyInfo) => {
    const handleQuestionTextInput = (text, index) => {
        const newSurvey = [...survey]
        newSurvey[idx].answers[index] = text
        setSurveyInfo(newSurvey)
    }

    const handleQuestionDelete = (idx) => {
        const newSurvey = [...survey]
        survey[idx].answers.splice(idx, 1)
        setSurveyInfo(newSurvey)
    }

    const handleQuestionAppend = () => {
        const newSurvey = [...survey]
        survey[idx].answers.push("Введите ответ")
        setSurveyInfo(newSurvey)
    }

    return(
        <div className="createQuestionSectionWrapper">
            <div className="questionSectionWrapper">
                <div>
                    <div className="questionWrapper">
                        <input value={survey[idx]?.question} placeholder="Введите ваш вопрос" className="questionText"/>
                        <button className="addQuestionImage"><img src={addQuestionImg} alt={"addQuestionImg"}/></button>
                        <select name="answerType" value={survey[idx]?.answerType} onChange={e => {survey[idx].answerType = e.target.value}} className="answerType">
                            <option value="oneVar">Один вариант</option>
                            <option value="textAns">Ответ текстом</option>
                        </select>
                    </div>

                    {
                        survey[idx]?.answerType === "Одиночный выбор" &&
                        <div>
                            {survey[idx].answers.map((item, idx) =>
                                <div key={item} className="answerOption">
                                    <input value={item} onChange={event => handleQuestionTextInput(event.target.value, idx)} className="answerOptionText"/>
                                    <button onClick={() => {handleQuestionDelete(idx)}} className="deleteAnswerBtn">✕</button>
                                </div>
                            )}
                            <button onClick={() => {handleQuestionAppend()}}>+ Добавить вариант</button>
                        </div>
                    }
                </div>
            </div>
            <button className="deleteQuestionBtn">
                <img src={deleteSurveyImg} alt={"deleteQuestionImg"} style={{height:"2.5vh"}}/>
            </button>
        </div>
    )
}

export default CreateQuestionSection