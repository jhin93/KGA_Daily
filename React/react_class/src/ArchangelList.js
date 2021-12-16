function Gundam(props) {
    return <li>This is {props.model}</li>;
};


// function ArchangelList() {
//     const gundamList = [
//         "ZMGF-X10A Freedom Gundam", 
//         "ZMGF-X109A Justice Gundam", 
//         "Strike Gundam"
//     ]

//     return (
//         <>
//             <h1>Who lives in Archangel???</h1>
//             <ul>
//                 {/* map 메소드로 li를 찍어냄 */}
//                 {gundamList.map((robot) => <Gundam model={robot} />)}
//             </ul>
//         </>
//     );
// };

function Archangel() {
    const gundams = [
        {id: 1, model: "ZMGF-X10A Freedom Gundam"},
        {id: 2, model: "ZMGF-X109A Justice Gundam"},
        {id: 3, model: "Sword Strike Gundam"}
    ];

    return (
        <>
            <h1>Who lives in Archangel?</h1>
            <ul>
                {gundams.map((mobileSuite) => <Gundam key={mobileSuite.id} model={mobileSuite.model}/>)}
            </ul>
        </>
    )
}

export default Archangel;