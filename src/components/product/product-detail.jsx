import { useToasts } from 'react-toast-notifications';
import { GiShoppingCart } from 'react-icons/gi';
import { ADD_CART } from '../../reducers/actions';
import { QuantityButton } from '../cart';
import { Button, RatingProduct } from '../ui';
import { useProductContext } from '../../context/product-context';

function DetailProduct({
  id,
  title,
  image,
  category,
  rating,
  description,
  price,
}) {
  const { addToast } = useToasts();
  const { state, dispatch } = useProductContext();

  const addToCart = () => {
    const product = { id, title, price, image };
    const message = 'Item has been successfully added.';

    dispatch({ type: ADD_CART, payload: product });
    addToast(message, { appearance: 'success' });
  };

  return (
    <section className='py-5 lg:w-3/5'>
      <h2 className='text-2xl font-bold md:text-3xl'>{title}</h2>
      <div className='divide-gray-500 space-x-3 md:space-x-4 flex divide-x mt-1.5'>
        <RatingProduct rate={rating.rate} />
        <h3 className='pl-3 text-lg font-semibold capitalize md:pl-4 md:text-xl'>
          {category}
        </h3>
      </div>
      <p className='mt-3 mb-5 text-gray-500 md:text-lg'>{description}</p>
      <small className='text-base md:text-lg'>Harga:</small>
      <h3 className='-mt-1.5 text-2xl font-bold lining-nums tabular-nums md:text-3xl lg:mt-auto'>
        {price}$
      </h3>
      <div className='flex items-center w-full my-3'>
        <QuantityButton className='md:w-3/12 lg:w-3/12' />
        <p className='font-semibold underline'>
          Stock: {state.stock[id - 1]} left
        </p>
      </div>
      <Button
        className='w-full py-2.5 px-12 mt-3 text-xl text-white rounded-sm bg-dark flex items-center md:max-w-xs md:px-20'
        text='Add to Cart'
        eventHandler={addToCart}
      >
        <GiShoppingCart className='text-3xl' />
      </Button>
    </section>
  );
}

export default DetailProduct;
