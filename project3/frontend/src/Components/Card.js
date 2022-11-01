function Card(props) {
    return (
        <tr>
            <td>{props.tanggal}</td>
            <td>{props.jenis}</td>
            <td>{props.nominal}</td>
        </tr>
    )
}

export default Card