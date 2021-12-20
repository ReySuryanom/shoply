import Image from 'next/image';
import { Button } from '../ui';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { trimmingText } from '../../utils/helper';
import { useState } from 'react';
import { useProductContext } from '../../context/product-context';
import { UPDATE_STOCK } from '../../reducers/actions';
import { useToasts } from 'react-toast-notifications';
import { messageNotifications } from '../../utils/constant';

function ItemList({ id, title, image, category }) {
  const { UPDATE_STOCK_SUCCESS } = messageNotifications;
  const { state, dispatch } = useProductContext();
  const { addToast } = useToasts();
  const stock = state.stock[id];
  const [total, setTotal] = useState(stock);

  const updateStock = () => {
    dispatch({ type: UPDATE_STOCK, payload: { total, id } });
    addToast(UPDATE_STOCK_SUCCESS.message, UPDATE_STOCK_SUCCESS.status);
  };

  return (
    <tr className='odd:bg-white'>
      <td className='w-2/6'>
        <div className='hidden relative w-1/3 h-20 md:inline-block bg-white align-middle scale-[0.8] lg:h-32'>
          <Image
            className='scale-90 w-20'
            src={image}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='text-left w-2/3 inline-block align-middle pl-2'>
          <h3 className='font-semibold'>{trimmingText(title)}</h3>
          <p className='capitalize'>{category}</p>
        </div>
      </td>
      <td className='w-1/6'>
        <input
          className='max-w-[30px] lg:max-w-[45px] text-center border-dark border md:p-1 lg:p-0'
          type='number'
          min={0}
          max={20}
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </td>
      <td className='w-1/6'>
        <Button eventHandler={updateStock}>
          <MdSystemUpdateAlt className='min-w-[25px] min-h-[25px]' />
        </Button>
      </td>
    </tr>
  );
}

export default ItemList;
