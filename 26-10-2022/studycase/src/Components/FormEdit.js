const FormEdit = () => {
    return (
        <div className="form-edit">
            <h2>Edit</h2>
            <form className="form">
                <input className="id" type="text" placeholder="ID"></input>
                <input className="judul" type="text" placeholder="Judul"></input>
                <input className="penulis" type="text" placeholder="Penulis"></input>
                <input className="tahun" type="text" placeholder="Tahun"></input>
                <input className="file" type="file" placeholder="File"></input>
                <button className="kirim">Ubah</button>
            </form>
        </div>
    )
}

export default FormEdit