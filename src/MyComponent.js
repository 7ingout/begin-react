// const MyComponent = () => {
//     return <div>새로운 컴포넌트 생성</div>
// }

// function MyComponent() {
//     return <div>새로운 컴포넌트 생성</div>;
// }
// export default MyComponent;
import React from 'react';
import PropTypes from 'prop-types';
// rsc
const MyComponent = ({name, age, children}) => {
    // const {name, age, children} = props;
    return (
        <div>
            안녕하세요 제 이름은 {name}입니다.<br/>
            제 나이는 {age}입니다.<br/>
            {children}
        </div>
    );
};
// const MyComponent = (props) => {
//     const { name, age } = props;
//     return (
//         <div>
//             안녕하세요 제 이름은 {props.name}입니다.<br/>
//             제 나이는 {props.age}입니다.
//         </div>
//     );
// };

// props 기본값 설정
MyComponent.defaultProps = {
    name: "기본이름",
    age: 1,
};
MyComponent.prototypes = {
    name: PropTypes.string
}
// array: 배열
// bool: true 혹은 false
// func: 함수
// number: 숫자
// object: 객체
// string: 문자
// any: 아무 종류 
// http://github.com/facebook/prop-types
export default MyComponent;