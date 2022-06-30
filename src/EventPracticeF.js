import React, { useState } from 'react';

const EventPracticeF = () => {
    const [message, setMessage] = useState('');
    const onClickenter = () => console.log(this.value);
    const onChangevalue = (e) => setMessage(e.target.value);
    return (
        <div>
            <input type="text" name="message" placeholder='아무거나 입력하세요.' onChange={onChangevalue}></input>
            <button onClick={onClickenter}>확인</button>
        </div>
    );
};
export default EventPracticeF;