import isaac from "../Assets/Images/isaac.jpg";

import "../Assets/CSS/App.css"
import "../Assets/CSS/Navbar.css"
import "../Assets/CSS/Card.css"
import "../Assets/CSS/Footer.css"

import Navbar from "../Components/Navbar.js"
import Card from "../Components/Card.js"
import Footer from "../Components/Footer.js"

function App() {
  const data = [
    {
      product: "Product",
      price: "IDR 300.000"
    },
    {
      product: "Product",
      price: "IDR 300.000"
    },
    {
      product: "Product",
      price: "IDR 300.000"
    }, 
    {
      product: "Product",
      price: "IDR 300.000"
    }
  ]

  return (
    <div>
        <Navbar />
        <div className="Wrapper">
            <img src={isaac}></img>
            <h3 className="Product">Product</h3>
            <div className="Cards">
                {data.map((card, index) => 
                    <Card key={index} product={card.product} price={card.price} />
                )}
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
