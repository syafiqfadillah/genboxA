import {useEffect, useState} from "react";

import History from "./Components/History.js";
import FormTopUp from "./Components/FormTopUp.js";
import FormJual from "./Components/FormJual.js";

import './App.css';

function App() {
  const [getHistory, setGetHistory] = useState([])
  const [options, setOptions] = useState(true)
  const [saldo, setSaldo] = useState(0)
  const [nominal, setNominal] = useState(0)
  const [tanggal, setTanggal] = useState(0)
  const [show, setShow] = useState(false)
  const [showOptions, setShowOptions] = useState(null)

  // getSaldo
  useEffect(() => {
    fetch("http://localhost:8000/getSaldo")
    .then(res => res.json())
    .then(res => {
      setSaldo(parseInt(res.data[0].nominal))
    })
  })

  // getHistory
  useEffect(() => {
    fetch("http://localhost:8000/getHistory")
    .then(res => res.json())
    .then(res =>
      setGetHistory(res.data)
    )
  })

  function putJual() {
    let convert = saldo - parseInt(nominal)

    const data = new FormData()
    data.append("tanggal", tanggal)
    data.append("nominal", convert)

    fetch("http://localhost:8000/putSaldo", {
      method: "PUT",
      body: data
    })
      .then(res => res.json())
  }

  function putSaldo() {
    let convert = parseInt(nominal) + saldo

    const data = new FormData()
    data.append("tanggal", tanggal)
    data.append("nominal", convert)

    fetch("http://localhost:8000/putSaldo", {
      method: "PUT",
      body: data
    })
      .then(res => res.json())
  }

  function postHistory() {
    const data = new FormData()
    data.append("tanggal", tanggal)
    data.append("jenis", options)
    data.append("nominal", nominal)

    fetch("http://localhost:8000/postHistory", {
      method: "POST",
      body: data
    })
      .then(res => res.json())
  }

  function jualMethod(e) {
    e.preventDefault()

    if (saldo > parseInt(nominal)) {
      putJual()
      postHistory()
    }
    else {
      alert("Saldo Tidak Cukup!")
    }
  }

  function topUpMethod(e) {
    e.preventDefault()

    putSaldo()
    postHistory()
  }

  function changeState(state) {
    setShowOptions(state)
    state ? setOptions("Jual") : setOptions("Top-Up") 
  }

  return (
    <div className="App">
      <div className="Wrapper">
        <div className="Heading">
          <h1 className="Pulsa">Pulsa</h1>
          <h2 className="Saldo">Saldo : {saldo}</h2>
        </div>
        <div className="Inputs">
          <button className="button" onClick={() => setShow(true)}>Input</button>
          <button className="button" onClick={() => setShow(false)}>Riwayat</button>
        </div>
        {show ? 
          (<>
            <div className="Options">
              <button className="button" onClick={() => changeState(false)}>Top-Up</button>
              <button className="button" onClick={() => changeState(true)}>Jual</button>
            </div>
            <div>
              {showOptions ?
                (<div className="Row">
                  <FormJual method={jualMethod} tanggal={setTanggal} nominal={setNominal}/>
                </div>)
              :
                (<div className="Row">
                  <FormTopUp method={topUpMethod} tanggal={setTanggal} nominal={setNominal}/>
                </div>)
              }
            </div>
          </>)  
        : 
          (<div className="Row">
            <History datas={getHistory}/>
          </div>)}
      </div>
    </div>
  );
}

export default App;
