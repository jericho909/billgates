import React, { useState } from "react";
import Card from "./components/Card";
import MoneyDisplay from "./components/MoneyDisplay";
import list from "./list";
import Footer from "./components/Footer";

function App() {
  const [amount, setAmount] = useState(100000000);

  const handleBuy = (price) => {
    setAmount(amount - price);
  };

  const handleSell = (price) => {
    setAmount(amount + price);
  };

  return (
    <div>
      <MoneyDisplay amount={amount} />
      <div className="container">
        {list.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            img={item.img}
            price={item.price}
            onBuy={() => handleBuy(item.price)}
            onSell={() => handleSell(item.price)}
            quantity={item.quantity}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
