function Gundam(props) {
    return <li>This is {props.model}</li>;
};



function TabArchangelList() {
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
                {/* {gundams.map((mobileSuite) => <Gundam id={mobileSuite.id} model={mobileSuite.model}/>)} */}
                {/* {gundams.map((mobileSuite) => <Gundam model={mobileSuite.model}/>)} */}
            </ul>
        </>
    )
}

export default TabArchangelList;