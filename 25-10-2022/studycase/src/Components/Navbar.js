import logo from "../Assets/Images/Vector.png"

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="ShopName">myShop</div>
            <div><img src={logo} /></div>
        </div>
    )
}

export default Navbar