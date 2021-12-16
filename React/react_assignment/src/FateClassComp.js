import React from "react";

// function Fate(props){
//     const characters = props.characters;
//     // if문을 사용하지 않고 조건부 렌더링을 다음과 같이 실행 가능
//     return (
//         <>
//             <h1>Fate Characters!!!</h1>
//             {
//                 characters.length > 0 &&
//                 <h2>
//                     {characters.length} characters in Fate Stay Night Animation
//                 </h2>
//             }
//         </>
//     );
// }


class FateClassComp extends React.Component {
    constructor(props) {
        super(props)
        this.characters = props.characters
    }

    render() {
        return(
            // return 할 때 2개 이상의 요소는 항상 div로 한번 더 감싸줘야 한다.
            <div>
                <h1>Fate Characters!!!</h1>
                {
                    this.characters.length > 0 &&
                    <h2>
                     {this.characters.length} characters in Fate Stay Night Animation
                    </h2>
                }
            </div>
        )
    }
}

export default FateClassComp;