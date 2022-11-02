function FormJual(props) {
    return (
        <form className="FormJual" onSubmit={props.method}>
            <label>Tanggal</label>
            <input onChange={e => props.tanggal(e.target.value)}></input>
            <label>Provider</label>
            <select>
                <option>Telkomsel</option>
                <option>Indosat</option>
                <option>Tri</option>
            </select>
            <label>Nominal</label>
            <select onChange={e => props.nominal(e.target.value)}>
                <option value="0">Pilih Nominal</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
                <option value="25000">25000</option>
                <option value="50000">50000</option>
                <option value="100000">100000</option>
            </select>
            <button type="submit">Simpan</button>
        </form>
    )
}

export default FormJual