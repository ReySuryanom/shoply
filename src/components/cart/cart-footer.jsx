import { Button } from '../ui';

function CartFooter() {
  return (
    <section className='p-5 bg-white shadow-md mt-9 md:mx-16 lg:mx-0 lg:w-4/12 lg:ml-auto'>
      <p className='flex justify-between'>
        <span className='w-1/3'>Subtotal</span>
        <span className='w-1/3 text-center'>:</span>
        <span className='w-1/3 text-right'>$90</span>
      </p>
      <p className='flex justify-between'>
        <span className='w-1/3'>Shipping Fee</span>
        <span className='w-1/3 text-center'>:</span>
        <span className='w-1/3 text-right'>$90</span>
      </p>
      <hr className='mt-1 mb-3 border border-black border-opacity-70' />
      <h3 className='flex justify-between text-lg font-bold'>
        <span className='w-1/3'>Total Order</span>
        <span className='w-1/3 text-center'>:</span>
        <span className='w-1/3 text-right'>$95</span>
      </h3>
      <div className='flex justify-end space-x-5 mt-7'>
        <Button
          className='px-5 border-2 border-dark hover:bg-dark hover:text-white duration-300 ease-in-out'
          text='Cancel'
        />
        <Button
          className='px-5 text-white bg-dark hover:shadow-md duration-300 ease-in-out'
          text='Checkout'
        />
      </div>
    </section>
  );
}

export default CartFooter;
