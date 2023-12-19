import React from 'react';
import './SurveyBlockSmall.css';
import survey_image from '../../static/img/survey_image.png'
import survey_status_active from '../../static/icons/active_survey_icon.png'
import survey_price_active from '../../static/icons/activ_survey_icon_price.png'


import useToken from "../../data/useToken";


const SurveyBlockSmall = () => {
    const {token, setToken} = useToken();
    // const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    return (
        <div className='survey_block'>
            <div className='main_survey_info'>
                <div><img className={'survey_image'} src={survey_image} alt={'Обложка опроса'}/></div>
                <div className={'survey_base_info'}>
                    <div className={'survey_base_info_block survey_base_info_color_active survey_info_with_icon'}><img
                        src={survey_status_active} alt={'status_icon'}/>Активный
                    </div>
                    <div className={'survey_base_info_block survey_base_info_color_active survey_info_with_icon'}><img
                        src={survey_price_active} alt={'status_icon'}/>19Р
                    </div>
                    <div className={'survey_base_info_block survey_second_info_color'}>
                        <div>Вопросов</div>
                        <div>12</div>
                    </div>
                    <div className={'survey_base_info_block survey_second_info_color'}>
                        <div>Ответили</div>
                        <div>70/100</div>
                    </div>
                </div>
            </div>
            <div className='card_title'><h3>Ваша обувь</h3></div>
            <div className={'public_date'}>Опубликован: 12 декабря</div>
        </div>
    );

}

export default SurveyBlockSmall;