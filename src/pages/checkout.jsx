import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { CartBody, CartFooter, CartHeader } from '../components/cart';
import { Breadcrumb } from '../components/ui';
import { useProductContext } from '../context/product-context';

export default function CheckoutPage() {
  const { state } = useProductContext();

  const cartNotFound = (
    <p className='min-h-screen text-center text-lg'>
      You haven&apos;t selected an item. Go to{' '}
      <span className='underline font-semibold'>
        <Link href='/products'>Products</Link>
      </span>
    </p>
  );

  return (
    <Fragment>
      <Head>
        <title>Checkout | Shoply</title>
      </Head>
      <main className='p-10'>
        <Breadcrumb routes={['cart']} />
        {state.carts.length === 0 ? (
          cartNotFound
        ) : (
          <>
            <CartHeader />
            <CartBody carts={state.carts} />
            <CartFooter />
          </>
        )}
      </main>
    </Fragment>
  );
}
