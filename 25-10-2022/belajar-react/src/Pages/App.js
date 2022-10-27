// import logo from './logo.svg';
import '../Assets/css/App.css';
import '../Assets/css/Card.css';
import '../Assets/css/Header.css';

import Header from "../Components/Header"
import Card from "../Components/Card"

function App() {
  const data = [
    {
      nama: "Test", 
      umur: 200
    },
    {
      nama: "Test1",
      umur: 300
    }, 
    {
      nama: "Test2",
      umur: 400
    }
  ]

  return (
    <div className="App">
      <Header check="two" />
      {data.map((card, index) => 
        <Card key={index} nama={card.nama} umur={card.umur} />
      )}
    </div>
  );
}

export default App;
