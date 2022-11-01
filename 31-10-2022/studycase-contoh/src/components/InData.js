import Form from "./Form.js"

const InData = (props) => {
    if(props.title === "Form Tambah") {
        return (
            <Form 
                posting={props.posting} 
                gambar={props.gambar} 
                nama={props.nama} 
                agama={props.agama} 
                tl={props.tl}/>
        )
    }else if(props.title === "Form Update"){
        return (
            <Form 
                posting={props.editUp} 
                gambar={props.ugambar} 
                nama={props.unama} 
                agama={props.uagama} 
                tl={props.utl} 
                vnama={props.vnama} 
                vagama={props.vagama}
                vtl={props.vtl}/>
        )
    }
}

export default InData;