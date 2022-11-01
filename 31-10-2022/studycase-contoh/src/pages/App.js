import {useState, useEffect} from "react"
import {BrowserRouter as router, routes, route} from "react-router-dom"

import '../assets/css/App.css';

import FormID from "../components/FormID"
import Card from "../components/Card"
import InData from "../components/InData"

function App() {
  // get all
  const [datas, setDatas] = useState([])

  const [title, setTitle] = useState("Form Tambah")
  const [content, setContent] = useState({})

  const [editGambar, setEditGambar] = useState(null)
  const [editNama, setEditNama] = useState('')
  const [editAgama, setEditAgama] = useState('')
  const [editTl, setEditTl] = useState('')

  // data
  const [gambar, setGambar] = useState(null)
  const [nama, setNama] = useState('')
  const [agama, setAgama] = useState('')
  const [tl, setTl] = useState('')

  useEffect(() => {
    fetch('https://app-id1.herokuapp.com/id/get')
      .then(res => res.json())
      .then(res => setDatas(res.data))
  })

  const del = (e) => {
    console.log(e)
    fetch('https://app-id1.herokuapp.com/id/del/' + e, {
      method:"DELETE"
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  const posting = (e) => {
    let formDatas = new FormData()
    formDatas.append("gambar", gambar)
    formDatas.append("nama", nama)
    formDatas.append("agama", agama)
    formDatas.append("tanggalLahir", tl)

    e.preventDefault()
    fetch('https://app-id1.herokuapp.com/id/post', {
      method: "POST",
      body: formDatas
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  const editUp = (e) => {
    let formDatas = new FormData()
    formDatas.append("gambar", editGambar)
    formDatas.append("nama", editNama)
    formDatas.append("agama", editAgama)
    formDatas.append("tanggalLahir", editTl)

    setTitle("Form Update")
    e.preventDefault()
    fetch('https://app-id1.herokuapp.com/id/put/'+ content.id, {
      method: "PUT",
      body: formDatas 
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  const setEdit = () => {
    setTitle("Form Update")
    setEditGambar(content.gambar)
    setEditNama(content.nama)
    setEditAgama(content.agama)
    setEditTl(content.tl)
  }

  return (
    <router>
        <div className="Wrapper">
          <div className="Section">
            <div className="Row-Section">
              <div className="Section">
                <h1 style={{marginLeft:"20px"}}>{title}</h1>
                <InData 
                  editUp={editUp} 
                  title={title} 
                  set={setTitle} 
                  posting={posting} 
                  gambar={setGambar}
                  nama={setNama} 
                  agama={setAgama}
                  tl={setTl}
                  ugambar={setEditGambar}
                  vgambar={editGambar}
                  unama={setEditNama}
                  vnama={editNama}
                  uagama={setEditAgama}
                  vagama={editAgama}
                  utl={setEditTl}
                  vtl={editTl}
                />
              </div>    
            </div>
          </div>
          <br /><br />
          <div className="Section">
            <h1 style={{marginLeft:"20px"}}>Data Profile</h1>
            <div className="container">
              {datas.map((data,i) => 
                <Card 
                  setEdit={setEdit}
                  key={i} 
                  foto={data.gambar} 
                  nama={data.nama} 
                  agama={data.agama} 
                  tl={data.tanggalLahir} 
                  del={del} 
                  id={data._id} 
                  set={setContent}
                />
              )}
            </div>
          </div>
      </div>
    </router>
  );
}

export default App;