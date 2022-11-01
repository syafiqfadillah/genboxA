const Form = (props) => {
    return (
        <form className="app" onSubmit={props.posting}>
            <label>Foto : </label><br/>
            <input type="file" onChange={(e) => props.gambar(e.target.files[0])} required/><br/>
            <label>Nama : </label><br/>
            <input type="text" placeholder="nama..." value={props.vnama} onInput={(e) => props.nama(e.target.value)} required/><br/>
            <label>Agama : </label><br/>
            <input type="text" placeholder="agama..." value={props.vagama} onInput={(e) => props.agama(e.target.value)} required/><br/>
            <label>TTL : </label><br/>
            <input type="text" placeholder="tanggal lahir..." value={props.vtl} onChange={(e) => props.tl(e.target.value)} required/><br/><br />
            <button type="submit">Kirim</button>
        </form>
    )
}

export default Form