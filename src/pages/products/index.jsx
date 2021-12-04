import Head from 'next/head';
import { Fragment } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
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
        <div className='md:space-x-4 md:flex'>
          <ProductFilter />
          <section className='md:w-2/3'>
            <SearchBar />
            <div className='flex items-center justify-between !mt-2 md:inline-block md:text-right md:w-6/12'>
              <Button className='min-w-[35px] min-h-[35px] md:hidden'>
                <GiSettingsKnobs className='min-w-[35px] min-h-[35px]' />
              </Button>
              <SortProduct />
            </div>
            <section className='mt-3 space-y-7 md:grid md:grid-cols-2 md:space-y-0 md:gap-2'>
              <CardItem />
              <CardItem />
              <CardItem />
            </section>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default ProductPage;
