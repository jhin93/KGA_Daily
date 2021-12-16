function Fate(props){
    const characters = props.characters;
    // if문을 사용하지 않고 조건부 렌더링을 다음과 같이 실행 가능
    return (
        <>
            <h1>Fate Characters!!!</h1>
            {
                characters.length > 0 &&
                <h2>
                    {characters.length} characters in Fate Stay Night Animation
                </h2>
            }
        </>
    );
}

export default Fate;