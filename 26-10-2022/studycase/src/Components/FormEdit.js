function edit(url) {
    const newUrl = `${url}/${document.getElementsByClassName("id")[0].value}`

    const form = new FormData()
    form.append("judul", document.getElementsByClassName("judul")[0].value)
    form.append("penulis", document.getElementsByClassName("penulis")[0].value)
    form.append("tahun", document.getElementsByClassName("tahun")[0].value)
    form.append("gambar", document.getElementsByClassName("file")[0].files[0])

    const data = {
        method: "PUT",
        body: form
    }

    fetch(newUrl, data)
}


const FormEdit = (props) => {
    return (
        <div className="form-edit">
            <h2>Edit</h2>
            <form className="form">
                <input className="id" type="text" placeholder="ID"></input>
                <input className="judul" type="text" placeholder="Judul"></input>
                <input className="penulis" type="text" placeholder="Penulis"></input>
                <input className="tahun" type="text" placeholder="Tahun"></input>
                <input className="file" type="file" placeholder="File"></input>
                <button className="kirim" type="button" onClick={() => {edit(props.url)}}>Ubah</button>
            </form>
        </div>
    )
}

export default FormEdit