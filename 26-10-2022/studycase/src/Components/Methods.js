function show(className) {
    const lst = document.getElementsByClassName('Wrapper')[0].childNodes

    for (let i=0; i<lst.length; i++) {
        if (i != lst.length-1) {
            lst[i].setAttribute("style", "display: none")
        }
    }

    document.getElementsByClassName(className)[0].setAttribute("style", "display: block")
}

const Methods = () => {
    return (
        <div className="methods">
            <h1>Methods</h1>
            <div className="buttons">
                <button className="get" onClick={() => show("form-id")}>Get</button>
                <button className="post" onClick={() => show("form-parent")}>Post</button>
                {/* <button className="put" onClick={() => show("form-edit")}>Put</button> */}
                <button className="del" onClick={() => show("form-del")}>Delete</button>
            </div>
        </div>
    )
}

export default Methods