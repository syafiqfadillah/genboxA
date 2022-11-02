function FormTopUp(props) {
    return (
        <form className="FormTopUp" onSubmit={props.method}>
            <label>Tanggal</label>
            <input onChange={e => props.tanggal(e.target.value)}></input>
            <label>Nominal</label>
            <input onChange={e => props.nominal(e.target.value)}></input>
            <button type="submit">Simpan</button>
        </form>
    )
}

export default FormTopUp