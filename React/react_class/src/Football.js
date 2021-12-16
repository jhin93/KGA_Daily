function Football() {
    const shoot = (arg) => {
        alert(arg);
    }

    return (
        <button onClick={() => shoot("The tremendous Goal Son!!!")}>Take the shot!</button>
    );
}

export default Football