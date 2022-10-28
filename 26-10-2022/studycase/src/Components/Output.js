const Output = (props) => {
    return (
        <div>
            <h2>Output</h2>
            <form className="form-output">
                <label className="label-judul">{props.judul}</label>
                <label className="label-penulis"></label>
                <label className="label-tahun"></label>
                <img className="label-gambar"/>
            </form>
        </div>
    )
}

export default Output