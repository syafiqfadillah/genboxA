function TopUp(props) {
    return (
        <form className="Form" id="first">
            <label>Tanggal</label>
            <input />
            <label>Nominal</label>
            <input type="text" onChange={(e) => props.nominal(e.target.value)}/>
            <button type="button">Simpan</button>
        </form>
    )
}

export default TopUp