import Head from 'next/head';
import { Fragment } from 'react';
import { DetailProduct, ProductHeader } from '../../components/product';
import { Breadcrumb } from '../../components/ui';
import { getData } from '../../utils/helper';

export default function DetailProductPage({ product }) {
  const { title, description, category } = product;

  return (
    <Fragment>
      <Head>
        <title>{title} | Shoply.</title>
        <meta name='description' content={description} />
      </Head>
      <main className='p-10'>
        <Breadcrumb routes={['products', category]} />
        <div className='relative lg:flex lg:space-x-7'>
          <ProductHeader product={product} />
          <DetailProduct {...product} />
        </div>
      </main>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const products = await getData('products');

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { productId } }) {
  const product = await getData(`products/${productId}`);

  // Pass post data to the page via props
  return { props: { product } };
  // return { props: { product: [], context: params } };
}
