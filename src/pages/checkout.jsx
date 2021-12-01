import Head from 'next/head';
import { Fragment } from 'react';
import CartItem from '../components/cart/cart-item';
import { Breadcrumb, Button } from '../components/ui';

function CheckoutPage() {
  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Created by Muhammad Raihan and Muhammad Rian'
        />
      </Head>
      <main className='p-10'>
        <Breadcrumb />
        <section className='space-y-9'>
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <section className='p-5 bg-white shadow-md mt-9'>
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
            <Button className='px-5 border-2 border-dark' text='Cancel' />
            <Button className='px-5 text-white bg-dark' text='Checkout' />
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default CheckoutPage;
