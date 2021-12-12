import Head from 'next/head';
import { Fragment } from 'react';
import {
  Categories,
  Feedback,
  MainHeader,
  Partners,
  MainProduct,
  Services,
} from '../components/home';
import { getData } from '../utils/helper';

export default function HomePage({ products }) {
  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Shoply merupakan web e-commerce yang dibuat oleh Muhammad Raihan S dan Muhammad Rian. Kami berusaha mendesign dengan tema modern dan menggunakan framework Next agar pengguna dapat merasakan pengalaman yang baik.'
        />
      </Head>
      <MainHeader />
      <main>
        <Categories />
        <MainProduct products={products} />
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
