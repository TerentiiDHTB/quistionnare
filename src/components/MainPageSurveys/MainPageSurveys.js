import React, {useState} from 'react';
import './MainPageSurveys.css';


import useToken from "../../data/useToken";
import SurveyBlock from "../SurveyBlock/SurveyBlock";


const MainPageSurveys = () => {
    return (
        <div className='surveys_block'>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
                <SurveyBlock/>
        </div>
    );

}

export default MainPageSurveys;