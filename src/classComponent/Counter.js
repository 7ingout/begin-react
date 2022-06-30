import { Component } from "react";

class Counter extends Component {
    // 컴포넌트 생성자 메서드
    // 클래스형 컴포넌트에서 constructor를 작성시 필수 super(props)
    // 리액트의 component 클래스가 지난 생성자 함수를 호출 !
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     }
    // }
    state = {
        number: 0,
        fixedNumber: 0,
    }
    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={ ()=> {
                    this.setState({number: number+1},()=>{
                        console.log('setState가 호출되었습니다.');
                    });
                }}>+1</button>
            </div>
        );
    }
}
export default Counter;