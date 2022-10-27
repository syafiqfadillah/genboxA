const Header = (props) => {
        if (props.check == "one") {
            return (
                <h1 className="Header">Hobi</h1>
            )
        } else {
            return (
                <h1 className="Header">Bukan Hobi</h1>
            )
        }
}

export default Header