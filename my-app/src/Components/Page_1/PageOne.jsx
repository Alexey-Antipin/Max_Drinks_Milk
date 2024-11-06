import React from 'react';
import gachi from '../../image/gachi.jpg';
import "./index.scss";

const ClickNewPage = (setTurnOff) => {
    setTurnOff(1)
}

const PageOne = ({ setTurnOff }) => {
    return (
        <div className='Block'>
            <div className='Block_Banner'><div className='Block_Banner_Text'>Этот пидор не дал мне фоток, сучка</div></div>

            <div className='Block_Spam'>
                Здесь может быть Ваша реклама
            </div>

            <img className='Block_Picture' src={gachi} alt='gachi' />

            <button className='Block_Btn' onClick={() => ClickNewPage(setTurnOff)}>Войти</button>
        </div>
    );
};

export default PageOne