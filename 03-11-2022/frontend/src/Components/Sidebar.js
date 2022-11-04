import {NavLink} from "react-router-dom"

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Side-Layer-1">
                <h1 className="Admin">ADMIN</h1>
                <div className="Navigation">
                    <NavLink to="/TopUp" activeclassname="active" className="Hover">Top-Up</NavLink>
                    <NavLink to="/Jual" activeclassname="active" className="Hover">Kirim Pulsa</NavLink>
                    <NavLink to="/Riwayat" activeclassname="active" className="Hover">Riwayat</NavLink>
                </div>
            </div>
            <div className="Side-Layer-2">
                <button className="LogOut">LOG OUT</button>
            </div>
        </div>
    )
}

export default Sidebar