const Card = (props) => {
    return (
        <div className="Card">
            <div className="Content">
                <h3 className="Header">{props.product}</h3>
                <p className="Price">{props.price}</p>
                <button className="Buy">Beli</button>
            </div>
        </div>
    )
}


export default Card