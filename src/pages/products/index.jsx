import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import { Breadcrumb, Button, CardItem } from '../../components/ui';
import { formatUrl, getData } from '../../utils/helper';
import { useProductContext } from '../../context/product-context';
import {
  ProductFilter,
  SearchBar,
  SortProduct,
} from '../../components/product';

export default function ProductPage({ products }) {
  const { state } = useProductContext();
  const [data, setData] = useState(products);

  useEffect(() => {
    const filterredProeducts = products.filter((item) => {
      const regex = new RegExp(state.query, 'gi');
      return item.title.match(regex);
    });
    setData(filterredProeducts);
  }, [state.query, products]);

  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <main className='p-10'>
        <Breadcrumb routes={['products']} />
        <div className='md:space-x-4 md:flex'>
          <ProductFilter />
          <section className='md:w-2/3 lg:w-4/5'>
            <SearchBar />
            <div className='flex items-center justify-between !mt-2 md:inline-block md:text-right md:w-6/12'>
              <Button className='min-w-[35px] min-h-[35px] md:hidden'>
                <GiSettingsKnobs className='min-w-[35px] min-h-[35px]' />
              </Button>
              <SortProduct />
            </div>
            <section className='mt-3 space-y-7 md:grid md:grid-cols-2 md:space-y-0 md:gap-2 lg:grid-cols-4 lg:gap-4'>
              {data.map((item) => (
                <CardItem {...item} key={item.id} />
              ))}
            </section>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  let urlParams = formatUrl(query);

  const products = await getData(urlParams);

  return {
    props: { products, context: { query } },
  };
}
