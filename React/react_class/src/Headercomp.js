import React from "react";

class Headercomp extends React.Component {
    constructor(props) { // constructor는 쓰든 안쓰든 만들기
        super(props);

        this.state = {headertitle: "This is My Page of Header"};
    }
    // static은 Headercomp라는 인스턴스가 선언되기도 전에 메모리에 할당이 되버림. 
    // 그래서 인스턴스의 this를 못씀. static은 내부에서 값은 변경이 가능하고, 인스턴스에 들어있지만 글로벌하게 가능하다.
    // 클래스 내부에 있지만 클래스에게 관리만 받는다.
    static getDerivedStateFromProps(props, state) { // getDerivedStateFromProps는 super의 props를 받아다가 index.js에서 재정의 한다.
        // return {headertitle: props.newTitle}
        state.headertitle = props.newTitle;
        return (<h1>state.headertitle</h1>)
    }

    render() {
        return (<h1>{this.state.headertitle}</h1>)
    }
}


export default Headercomp;