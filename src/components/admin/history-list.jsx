import { ItemName } from '.';

function HistoryList({ title, image, category, price, quantity }) {
  const income = parseFloat(price * quantity).toFixed();

  return (
    <tr className='odd:bg-white'>
      <ItemName title={title} image={image} category={category} />
      <td className='w-1/6'>{price}$</td>
      <td className='w-1/6'>{quantity}</td>
      <td className='w-1/6'>{income}$</td>
    </tr>
  );
}

export default HistoryList;
