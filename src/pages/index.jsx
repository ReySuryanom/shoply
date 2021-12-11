import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui';
import {
  Categories,
  Feedback,
  Partners,
  ProductList,
  Services,
} from '../components/home';
import { getData } from '../utils/helper';

export default function HomePage({ products }) {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Shoply merupakan web e-commerce yang dibuat oleh Muhammad Raihan S dan Muhammad Rian. Kami berusaha mendesign dengan tema modern dan menggunakan framework Next agar pengguna dapat merasakan pengalaman yang baik.'
        />
      </Head>
      <header className='px-10 py-16 my-5 bg-white md:bg-hero md:bg-no-repeat md:bg-right-top lg:py-20'>
        <h1 className='text-6xl font-bold leading-8 uppercase md:text-8xl'>
          Shoply.
        </h1>
        <p className='w-8/12 mt-2.5 md:text-xl mb-10 leading-normal text-gray-500 lg:text-2xl'>
          Situs Jual Beli Online Terlengkap, Murah & Aman
        </p>
        <Button
          className='w-full text-lg border-2 rounded-sm text-dark border-dark md:w-1/4 lg:max-w-lg'
          to='products'
          text='Belanja Sekarang'
        />
      </header>
      <main>
        <Categories />
        <ProductList products={products} />
        <Services />
        <Partners />
        <Feedback />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const urlParams = 'products/category/jewelery?limit=4';
  const products = await getData(urlParams);
  return { props: { products } };
}
