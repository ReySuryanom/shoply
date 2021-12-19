import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { CartBody, CartFooter, CartHeader } from '../components/cart';
import { Breadcrumb, Modal } from '../components/ui';
import { useProductContext } from '../context/product-context';

export default function CheckoutPage() {
  const { state } = useProductContext();
  const router = useRouter();

  useEffect(() => {
    if (!state?.user?.token) router.push('/login');
  }, [router, state?.user?.token]);

  const cartNotFound = (
    <p className='min-h-screen text-lg text-center'>
      You haven&apos;t selected an item. Go to{' '}
      <span className='font-semibold underline'>
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
        <Modal />
      </main>
    </Fragment>
  );
}
