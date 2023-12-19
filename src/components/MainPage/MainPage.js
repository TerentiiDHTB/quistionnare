import React from 'react';
import Header from "../Header/Header";
import MainPageSurveys from "../MainPageSurveys/MainPageSurveys";
import MainBanner from "../MainBanner/MainBanner";


const MainPage = () => {
    return (
        <div>
            <Header/>
            <MainBanner/>
            <MainPageSurveys/>
        </div>
    );
}

export default MainPage;