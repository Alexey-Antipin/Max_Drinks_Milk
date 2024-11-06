import React, { useState } from 'react';
import "./index.scss";

const ClickNewPage = (setTurnOff) => {
    setTurnOff(0)
}

const ClickСounting = ({ age, setNum }) => {
    if (age === "0") {
        setNum("Дурка выехала")
        return
    };

    if (age === "") {
        setNum("Дурачок?")
        return
    };

    let res = 1 / age;
    res = res.toFixed(3).toString() + "%";
    setNum(res);
}

const PageTwo = ({ setTurnOff }) => {
    const [age, setAge] = useState("");
    const [num, setNum] = useState("");

    return (
        <div className='Block'>
            <div>Расчёт получение вероятности пиздюлей</div>
            <input className='Block_Input_Style' value={age} onChange={({ target: { value } }) => setAge(prev => /\d+/.test(Number(value)) ? value : prev)} placeholder='Число' />
            <button className='Block_Btn' onClick={() => ClickСounting({ age, setNum })}>Считать</button>

            <div className='Block_Response'>
                <div>Вероятность получить пиздюлей равна:</div>
                <div className='Block_Response_Num'>{num}</div>
            </div>

            <button className='Block_Btn' onClick={() => ClickNewPage(setTurnOff)}>Назад</button>
        </div>
    );
};

export default PageTwo;