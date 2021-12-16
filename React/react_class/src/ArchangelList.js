function Gundam(props) {
    return <li>This is {props.model}</li>;
};


function ArchangelList() {
    const gundamList = [
        "ZMGF-X10A Freedom Gundam", 
        "ZMGF-X109A Justice Gundam", 
        "Strike Gundam"
    ]

    return (
        <>
            <h1>Who lives in Archangel???</h1>
            <ul>
                {/* map 메소드로 li를 찍어냄 */}
                {gundamList.map((robot) => <Gundam model={robot} />)}
            </ul>
        </>
    );
};

export default ArchangelList;