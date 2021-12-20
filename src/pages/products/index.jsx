import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/ui';
import { formatUrl, getData } from '../../utils/helper';
import { useProductContext } from '../../context/product-context';
import { FILTER_PRODUCTS, GET_PRODUCTS } from '../../reducers/actions';
import {
  ProductFilter,
  ProductList,
  ProductNavigation,
  SearchProduct,
} from '../../components/product';

export default function ProductPage({ products }) {
  const { state, dispatch } = useProductContext();
  const [filterToggler, setFilterToggler] = useState(false);

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS, payload: products });
    dispatch({ type: FILTER_PRODUCTS, payload: state.query });
  }, [dispatch, state.query, products]);

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
            <SearchProduct totalProduct={state.products.length} />
            <ProductNavigation eventHandler={() => setFilterToggler(true)} />
            <ProductList />
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
    props: { products },
  };
}
