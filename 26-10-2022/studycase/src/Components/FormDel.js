function delId(url) {
    const newUrl = `${url}/${document.getElementsByClassName("id")[1].value}`

    const data = {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(newUrl, data).then(res => res.json())
}

const FormDel = (props) => {
    return (
        <div className="form-del">
            <h2>Form DELETE</h2>
            <input className="id" placeholder="ID"></input>
            <button onClick={() => delId(props.url)}>Kirim</button>
        </div>
    )
}

export default FormDel