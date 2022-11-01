function Functionality() {
    const buttons = document.querySelectorAll("input[name='choice'")

    if (buttons[0].checked) {
        document.getElementById("first").style.display = "flex"
        document.getElementById("second").style.display = "none"
    }
    else {
        document.getElementById("first").style.display = "none"
        document.getElementById("second").style.display = "flex"
    }
}

function Choices() {
    return (
        <form className="Choices">
            <input type="radio" name="choice" value="Top Up" onClick={Functionality} />
            <label>Top Up</label>
            <input type="radio" name="choice" value="Jual" onClick={Functionality} />
            <label>Jual</label>
        </form>
    )
}

export default Choices