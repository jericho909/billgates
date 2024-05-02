import React, { useState } from 'react';
import Button from './Button';

export default function Card(props) {
  const [quantity, setQuantity] = useState(0);

  const handleBuy = () => {
    setQuantity(quantity + 1);
    props.onBuy();
  };

  const handleSell = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      props.onSell();
    }
  };

  return (
    <div className='card'>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <div className='btns-container'>
        <Button name={"Sell"} handleClick={handleSell} disabled={quantity === 0} />
        <div className='amount-display'>{quantity}</div>
        <Button name={"Buy"} handleClick={handleBuy} />
      </div>
    </div>
  );
}
