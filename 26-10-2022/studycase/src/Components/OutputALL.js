import {useState, useEffect} from 'react';

function Card(props) {
    return (
        <div className="Card">
            <div className="Contents">
                <ul>
                    <li>{props.judul}</li>
                    <li>{props.penulis}</li>
                    <li>{props.tahun}</li>
                </ul>
                <img src={"https://book0101.herokuapp.com/" + props.url} />
            </div>
            <div className="Buttons">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

const OutputALL = (props) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(props.url)
            .then(res => res.json())
            .then(res => {
                setData(res.data)
            })
    }, [setData])
    
    return (
        <div className="OutputALL">
            <h2>Output</h2>
            <div className="Result">
                {   
                    data.map((data, i) => (
                        <Card judul={data.judul} penulis={data.penulis} tahun={data.tahun} url={data.gambar}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OutputALL;