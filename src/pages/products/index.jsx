import Head from 'next/head';
import { Fragment } from 'react';
import { RiLayoutGridFill } from 'react-icons/ri';
import {
  ProductFilter,
  SearchBar,
  SortProduct,
} from '../../components/product';
import { Breadcrumb, Button, CardItem } from '../../components/ui';

function ProductPage() {
  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <main className='p-10'>
        <Breadcrumb />
        <ProductFilter />
        <SearchBar />
        <section className='flex items-center justify-between mt-5'>
          <Button className='min-w-[35px] min-h-[35px]'>
            <RiLayoutGridFill className='min-w-[35px] min-h-[35px]' />
          </Button>
          <SortProduct />
        </section>
        <section className='space-y-7 mt-7'>
          <CardItem />
          <CardItem />
          <CardItem />
        </section>
      </main>
    </Fragment>
  );
}

export default ProductPage;
