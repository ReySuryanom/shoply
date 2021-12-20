import Head from 'next/head';
import { Fragment } from 'react';
import { UpdateStock } from '../components/admin';
import { useProductContext } from '../context/product-context';
import { getData } from '../utils/helper';
import {
  Categories,
  Feedback,
  MainHeader,
  Partners,
  MainProduct,
  Services,
} from '../components/home';

export default function HomePage({ products }) {
  const { state } = useProductContext();
  const isAdmin = state?.user?.level === 'admin';

  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Shoply merupakan web e-commerce yang dibuat oleh Muhammad Raihan S dan Muhammad Rian. Kami berusaha mendesign dengan tema modern dan menggunakan framework Next agar pengguna dapat merasakan pengalaman yang baik.'
        />
      </Head>
      {isAdmin ? (
        <UpdateStock products={products} />
      ) : (
        <Fragment>
          <MainHeader />
          <main>
            <Categories />
            <MainProduct products={products} />
            <Services />
            <Partners />
            <Feedback />
          </main>
        </Fragment>
      )}
    </Fragment>
  );
}

export async function getStaticProps() {
  const urlParams = 'products';
  const products = await getData(urlParams);
  return { props: { products } };
}
