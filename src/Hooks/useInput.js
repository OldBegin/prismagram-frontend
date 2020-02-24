// 컴퍼넌트의 이벤트핸들러 및 값을 리턴하는 커스텀 Hooks 를 모아놓은 디렉터리
// input 컴퍼넌트의 이벤트핸들러 onChangeHandler 와 변경되는 value를  타겟 컴퍼넌트에 전달
// onChangeHandler : 값의 변경이 있을때 발생하는 이벤트

import { useState } from 'react';

export default (defaultValue)=> {
    const [ value, setValue ] = useState(defaultValue);

    const onChangeHandler = (e) => {
        const { value } = e.target;  //이렇게 구조분해해서 사용해도 됨.
        setValue( value );
        console.log(value);
    };
    return { value, onChangeHandler };
};
