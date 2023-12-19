import React from 'react';
import './MainBanner.css';
import main_page_banner from '../../static/img/main_page_banner_person.png'


const MainBanner = () => {
    return (
        <div className={'main_banner'}>
            <div className={'left_main_banner_block'}>
                <div><h1 className={'main_title'}>Зарабатывай<br/>на своем опыте</h1></div>
                <div className={'main_banner_text'}>
                    <div>Проходи опросы</div>
                    <div>Делись своим опытом</div>
                    <div>Зарабатывай</div>
                </div>
            </div>
            <div className={'right_main_banner_block'}>
                <img src={main_page_banner} alt={'main page banner'}/>
            </div>
        </div>
    )

}

export default MainBanner