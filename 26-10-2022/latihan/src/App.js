import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [nilai, setNilai] = useState(0)
  const [nama, setNama] = useState([])

  const tambah = () => {
    setNilai(nilai+1)
  }

  const kurang = () => {
    setNilai(nilai-1)
  }

  useEffect(() => {
    fetch("https://app-id1.herokuapp.com/id/get")
      .then(res => res.json())
      .then(res => {
        console.log(nama)
        // setNama(res.data[0].nama)
      })
  }, [setNama])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <div>
          <h1>{nama}</h1>
          <button onClick={kurang}>-</button><span> {nilai} </span><button onClick={tambah}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
