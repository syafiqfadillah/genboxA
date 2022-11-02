import Card from "./Card.js"

function History(props) {
    return (
        <table className="History">
            <thead>
                <tr>
                    <th>Tanggal</th>
                    <th>Jenis</th>
                    <th>Nominal</th>
                </tr>
            </thead>
            <tbody>
                {props.datas.map((element, i) => (
                    <Card key={i} tanggal={element.tanggal} jenis={element.jenis} nominal={element.nominal}/>
                ))}
            </tbody>
        </table>
    )
}

export default History