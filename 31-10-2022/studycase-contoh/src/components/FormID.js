const FormID = (props) => {
    return (
        <form className="id">
            <input placeholder="ID"></input>
            <button type="button" onClick={(e) => props.getid(e)}>Ambil</button>
        </form>
    )
}

export default FormID