import { useState } from 'react';
import { Button } from '../ui';

function QuantityButton({ className, dark }) {
  const theme = dark ? 'text-dark bg-white' : 'text-white bg-dark';
  const border = dark ? 'border-l-2 border-r-2' : 'border-t-2 border-b-2';

  const [quantity, setQuantity] = useState(0);

  const quantityToggler = (event) => {
    const symbol = event.target.innerText;

    setQuantity((quantity) => {
      if (symbol.includes('+')) {
        return quantity + 1;
      } else if (quantity <= 1) {
        return quantity;
      } else {
        return quantity - 1;
      }
    });
  };

  return (
    <div className={`flex w-1/2 ${className}`}>
      <Button
        className={`!max-w-[52px] text-3xl ${theme}`}
        text='-'
        eventHandler={quantityToggler}
      />
      <input
        className={`!max-w-[52px] text-xl font-bold text-dark text-center self-stretch border-dark lg:pl-3 ${border}`}
        value={quantity}
        type='number'
        min={0}
        readOnly
      />
      <Button
        className={`!max-w-[52px] text-3xl ${theme}`}
        text='+'
        eventHandler={quantityToggler}
      />
    </div>
  );
}

export default QuantityButton;
