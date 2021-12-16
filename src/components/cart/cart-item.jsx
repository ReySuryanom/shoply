import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaTrash } from 'react-icons/fa';
import { QuantityButton } from '.';
import { useProductContext } from '../../context/product-context';
import { REMOVE_CART } from '../../reducers/actions';
import { trimmingText } from '../../utils/helper';
import { Button } from '../ui';

function CartItem({ id, title, price, image, quantity }) {
  const router = useRouter();
  const { dispatch } = useProductContext();

  const removeItem = () => {
    dispatch({ type: REMOVE_CART, payload: id });
  };

  return (
    <article className='flex w-full p-3 shadow-lg bg-dark'>
      <div
        className='w-3/12 bg-white cursor-pointer md:w-2/12 lg:w-1/12'
        role='button'
        onClick={() => router.push(`/products/${id}`)}
      >
        <div className='relative bg-white aspect-h-4 aspect-w-4'>
          <Image
            alt={title}
            src={image}
            layout='fill'
            className='scale-90 md:scale-75'
            objectFit='contain'
            blurDataURL='https://via.placeholder.com/653x879.webp'
            placeholder='blur'
          />
        </div>
      </div>
      <div className='w-9/12 pl-3.5 relative flex flex-col text-white md:flex-row md:items-center md:justify-between md:w-10/12 md:px-4 lg:w-11/12'>
        <h3 className='w-11/12 overflow-hidden text-lg font-bold leading-none md:text-base md:w-4/12 overflow-ellipsis'>
          {trimmingText(title, 40)}
        </h3>
        <p className='text-xl md:text-lg md:w-1/5 md:text-center'>{price}$</p>
        <QuantityButton className='md:w-auto' value={quantity} dark />
        <Button
          className='!min-h-[35px] rounded-full p-1.5 bg-white !min-w-[35px] absolute top-0 right-0 md:static'
          eventHandler={removeItem}
        >
          <FaTrash className='text-dark' />
        </Button>
      </div>
    </article>
  );
}

export default CartItem;
