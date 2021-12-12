import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/ui';
import { formatUrl, getData } from '../../utils/helper';
import { useProductContext } from '../../context/product-context';
import {
  ProductFilter,
  ProductList,
  ProductNavigation,
  SearchProduct,
} from '../../components/product';

export default function ProductPage({ products, context }) {
  const { state } = useProductContext();
  const [filterToggler, setFilterToggler] = useState(false);
  const [data, setData] = useState(products);

  useEffect(() => {
    const filterredProducts = products.filter((item) => {
      const regex = new RegExp(state.query, 'gi');
      return item.title.match(regex);
    });
    setData(filterredProducts);
  }, [state.query, products]);

  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
      </Head>
      <main className='p-10'>
        <Breadcrumb routes={['products']} />
        <div className='md:space-x-4 md:flex'>
          <ProductFilter
            filterToggler={setFilterToggler}
            filterSection={filterToggler}
          />
          <section className='md:w-2/3 lg:w-4/5'>
            <SearchProduct />
            <ProductNavigation eventHandler={() => setFilterToggler(true)} />
            <ProductList data={data} />
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  let urlParams = formatUrl(query);

  let products = await getData(urlParams);

  if (query?.max && query?.min) {
    products = products.filter(
      (item) => item.price > query.min && item.price < query.max
    );
  }

  return {
    props: { products, context: { query, urlParams } },
  };
}
