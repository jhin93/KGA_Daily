
function Car(props) {
    return <h1>This is my {props.color} car!!!</h1>
}

function Garage(){
    return (
        <>
            <h1>My Garage in the which car!!!</h1>
            <Car /> {/* 컴포넌트를 중첩 */}
        </>
    );
}

// export default Car;
export default Garage; // 컴포넌트를 중첩해서 exports.
