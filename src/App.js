import React, { useReducer, useContext } from 'react';
import { MyContext } from './component/MyContext';
import Counter2  from './Counter2';

function App() {
  const newtext = "안녕하세요";
  // const name = "리액트";
  return (
    // JSX에서 자바스크립트 표현식을 사용하려면 {}로 감싼다.
    // if문 대신 조건부연산자 - 삼항연산자를 사용 
    <MyContext.Provider value={newtext}>
    <div className='react'>
      <Counter2 />
      {/* <MyComponent name='green' age ='20'><h2>h2입니다.</h2></MyComponent> */}
    
      {/* <MyComponentClass name="classGreen" age={30}>
        <h3>children</h3>
      </MyComponentClass>
      <MyComponentClass></MyComponentClass> */}

      {/* <MyComponent name='Green' age='30'/><h3>여러분</h3><MyComponent/>
      <MyComponent name='Blue' age={50}/><h3>새과목</h3><MyComponent/>
      <MyComponent/><h3>하하하</h3><MyComponent/> */}

      {/* <h1>{name == '리액트' ? (<span>리액트입니다.</span>) : (<span>리액트가 아닙니다.</span>) } 안녕!</h1> */}
      {/* <h2>하이하이</h2>
      <input type="text"></input> */}
    </div>
    </MyContext.Provider>
  );
  // return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}

export default App;
