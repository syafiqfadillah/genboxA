function post(url) {
    const newUrl = `${url}/post`

    const form = new FormData()
    form.append("judul", document.getElementsByClassName("judul-t")[0].value)
    form.append("penulis", document.getElementsByClassName("penulis-t")[0].value)
    form.append("tahun", document.getElementsByClassName("tahun-t")[0].value)
    form.append("gambar", document.getElementsByClassName("file-t")[0].files[0])

    const data = {
        method: "POST",
        body: form
    }

    fetch(newUrl, data)
}


const FormPost = (props) => {
    return (
        <div className="form-parent">
            <h2>Form</h2>
            <form className="form">
                <input className="judul-t" type="text" placeholder="Judul"></input>
                <input className="penulis-t" type="text" placeholder="Penulis"></input>
                <input className="tahun-t" type="text" placeholder="Tahun"></input>
                <input className="file-t" type="file" placeholder="File"></input>
                <button className="kirim" type="button" onClick={() => post(props.url)}>Kirim</button>
            </form>
        </div>
    )
}

export default FormPost