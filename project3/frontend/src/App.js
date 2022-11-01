import { useEffect, useState } from 'react';

import Choices from "./Components/Choices.js";
import TopUp from "./Components/TopUp.js";
import Jual from "./Components/Jual.js";
import History from "./Components/History.js";

import './App.css';

function App() {
  // get all riwayat
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/get")
      .then(res => res.json())
      .then(res => {
        setDatas(res.data)
      })
  }, [setDatas])

  // get saldo
  const [saldo, setSaldo] = useState(0)

  useEffect(() => {
    fetch("http://localhost:8000/getSaldo")
      .then(res => res.json())
      .then(res => {
        setSaldo(parseInt(res.data[0].nominal))
      })
  }, [setSaldo])

  // put saldo
  const [psaldo, setPsaldo] = useState(0)

  const data = new FormData()
  data.append("nominal", saldo + parseInt(psaldo))

  console.log(saldo, parseInt(psaldo))

  fetch("http://localhost:8000/putSaldo/1", {
    method: "PUT",
    body: data
  })
    .then(res => res.json())

  function Show() {
    document.getElementsByClassName("Sections")[0].style.display = "flex"
    document.getElementsByClassName("Sections")[1].style.display = "none"
  }

  function Show1() {
    document.getElementsByClassName("Sections")[0].style.display = "none"
    document.getElementsByClassName("Sections")[1].style.display = "flex"
  }

  return (
    <div className="App">
      <h1>Pulsa</h1>
      <h2>{saldo}</h2>
      <div className='Buttons'>
        <button onClick={Show}>Input</button>
        <button onClick={Show1}>Riwayat</button>
      </div>
      <div className='Sections'>
        <Choices />
        <div className='Forms'>
          <TopUp nominal={setPsaldo} />
          <Jual />
        </div>
      </div>
      <div className='Sections'>
        <History datas={datas}/>
      </div>
    </div>
  );
}

export default App;
