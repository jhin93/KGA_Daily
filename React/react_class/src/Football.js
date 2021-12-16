// function Football() {
//     const shoot = (arg) => {
//         alert(arg);
//     }

//     return (
//         <button onClick={() => shoot("The tremendous Goal Son!!!")}>Take the shot!</button>
//     );
// }

function Football () {
    const shoot = (a, e) => {
        alert(a + ", " + e.type);
    };

    return (
        // event는 트리거된 이벤트를 실제로 담아낸다. 그래서 얼럿에 onMouseover가 찍힘.
        <button type="button" onMouseOver={(event) => shoot("The tremendous Goal Son!!!", event)}>Take the shot !!</button>
    );
}

export default Football