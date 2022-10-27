const Card = (props) => {
    return (
      <ul className="Nama">
        <li>{props.nama}</li>
        <li>{props.umur}</li>
      </ul>
    )
  }

export default Card