function getId(url) {
    fetch(`${url}/${document.getElementsByClassName("id")[2].value}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            document.getElementsByClassName("label-judul")[0].textContent = res.data.judul
            document.getElementsByClassName("label-penulis")[0].textContent = res.data.penulis
            document.getElementsByClassName("label-tahun")[0].textContent = res.data.tahun
            document.getElementsByClassName("label-gambar")[0].src = "https://book0101.herokuapp.com/" + res.data.gambar
    })
}

const FormID = (props) => {
    return (
        <div className="form-id">
            <h2>Form ID</h2>
            <input className="id" placeholder="ID"></input>
            <button onClick={() => getId(props.url)}>Kirim</button>
        </div>
    )
}

export default FormID