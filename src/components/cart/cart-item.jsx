import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import { trimmingText } from '../../utils/helper';
import { Button } from '../ui';

function CartItem({ title, price, image }) {
  return (
    <article className='flex w-full p-3 shadow-lg bg-dark'>
      <div className='w-5/12 bg-white md:w-2/12 lg:w-1/12'>
        <div className='relative bg-white aspect-h-4 aspect-w-4'>
          <Image
            alt={title}
            src={image}
            layout='fill'
            className='scale-90 md:scale-75'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='w-2/3 pl-3.5 relative flex flex-col text-white md:flex-row md:items-center md:justify-between md:w-10/12 md:px-4 lg:w-11/12'>
        <h3 className='w-11/12 overflow-hidden text-lg font-bold leading-none md:text-base md:w-4/12 overflow-ellipsis'>
          {trimmingText(title, 40)}
        </h3>
        <p className='text-xl md:text-lg md:w-1/5 md:text-center'>{price}$</p>
        <div className='flex mt-auto text-dark md:mt-0'>
          <Button className='text-3xl bg-white' text='-' />
          <input
            className='!max-w-[52px] text-xl font-bold text-center border-l-2 border-r-2 border-dark'
            value={0}
            type='number'
            readOnly
          />
          <Button className='text-3xl bg-white' text='+' />
        </div>
        <Button className='!min-h-[20px] rounded-full p-1.5 bg-white !min-w-[20px] absolute top-0 right-0 md:static'>
          <FaTrash className='text-dark' />
        </Button>
      </div>
    </article>
  );
}

export default CartItem;
