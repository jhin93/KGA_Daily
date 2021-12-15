import React from "react";

class Headercomp extends React.Component {
    constructor(props) { // constructor는 쓰든 안쓰든 만들기
        super(props);

        this.state = {headertitle: "This is My Page of Header"};
    }
    // getDerivedStateFromProps 는 클래스로부터 props와 state를 받아오는 메소드이다.
    // static은 Headercomp라는 인스턴스가 선언되기도 전에 메모리에 할당이 되버림. 
    // 그래서 인스턴스의 this를 못씀. static은 내부에서 값은 변경이 가능하고, 인스턴스에 들어있지만 글로벌하게 가능하다.
    // 클래스 내부에 있지만 클래스에게 관리만 받는다.
    static getDerivedStateFromProps(props, state) { // getDerivedStateFromProps는 super의 props를 받아다가 index.js에서 재정의 한다.
        // state.headertitle = props.newTitle;
        // return (<h1>state.headertitle</h1>)
    }

    changeHeaderTitle = () => {
        this.setState({headertitle: "changeHeaderTitle Title!!!"});
    }

    // static으로 위처럼 정적으로 선언이 되어있으면 이미 메모리에 할당이 된것이기에, componentDidMount로 변경이 안된다.
    // componentDidMount() { // 리액트 dom에 요소들이 렌더링되고 난 후 실행이 되는 메소드이다.
    //     setTimeout(() => {
    //         this.setState({headertitle : "componentDidMount title!!!"}) // setState 메소드로 3초 후 헤더를 변경
    //     }, 3000)
    // }

    render() {
        return (
            <div>
                <h1>{this.state.headertitle}</h1>
                <button type="button" onClick={this.changeHeaderTitle}>Change Title</button>
            </div>
        )
    }
}


export default Headercomp;