function Gundam(props) {
    return <h2>This is {props.model}</h2>
}

// function Gundam(props) {
//     return <h2>This is {props.gundamName.model}</h2>
// }

function ArchangelClass() {
    return (
        <>
            <h1>Which gundam is Archangel?</h1>
            <Gundam model="ZGMF-X10A" />
        </>
    )
}

// function ArchangelClass() {
//     const gundamInfo = {
//         camp: "Earth",
//         model: "X10A",
//         engine: "Atomic",
//         year: "Cosmic 70",
//         pilot: "Kira Yamato"
//     }

//     return (
//         <>
//             <h1>Which gundam is Archangel?</h1>
//             <Gundam gundamName={gundamInfo} />
//         </>
//     )
// }

export default ArchangelClass;