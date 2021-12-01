import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import { Button } from '../ui';

function CartItem() {
  return (
    <article className='flex w-full p-3 shadow-lg bg-dark'>
      <div className='w-5/12 bg-white'>
        <div className='relative bg-white aspect-h-5 aspect-w-5'>
          <Image
            alt='gambar'
            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            layout='fill'
            className='scale-90'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='w-2/3 pl-3.5 flex flex-col justify-between'>
        <div className='flex justify-between text-white'>
          <div>
            <h2 className='text-xl font-bold'>Logitech</h2>
            <p className='text-2xl'>$10</p>
          </div>
          <Button className='!min-h-[20px] !min-w-[20px] self-start'>
              <FaTrash className='!min-h-[20px] !min-w-[20px] text-red-500'/>
          </Button>
        </div>
        <div className='flex text-dark'>
          <Button className='text-3xl bg-white' text='-' />
          <input
            className='!max-w-[52px] text-xl font-bold text-center border-l-2 border-r-2 border-dark'
            value={0}
            type='number'
            readOnly
          />
          <Button className='text-3xl bg-white' text='+' />
        </div>
      </div>
    </article>
  );
}

export default CartItem;
