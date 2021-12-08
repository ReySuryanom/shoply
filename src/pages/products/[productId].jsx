import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { Breadcrumb, Button, RatingProduct } from '../../components/ui';

export default function DetailProductPage({ product }) {
  const ProductImages = (className, priority = false) => (
    <div className={className}>
      <Image
        src={product.image}
        className='w-full scale-75 rounded-md'
        alt={product.title}
        layout='fill'
        objectFit='contain'
        priority={priority}
      />
    </div>
  );

  return (
    <Fragment>
      <Head>
        <title>{product.title} | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <main className='p-10'>
        <Breadcrumb routes={['products', product.title]} />
        <div className='relative lg:flex lg:space-x-7'>
          <header className='lg:w-2/5'>
            {ProductImages('relative bg-white shadow h-72 md:h-96', true)}
            <div className='relative flex mt-4 space-x-4'>
              {ProductImages('relative w-full h-24 bg-white shadow md:h-48')}
              {ProductImages('relative w-full h-24 bg-white shadow md:h-48')}
              {ProductImages('relative w-full h-24 bg-white shadow md:h-48')}
            </div>
          </header>
          <section className='py-5 lg:w-3/5'>
            <h2 className='text-2xl font-bold md:text-3xl'>{product.title}</h2>
            <div className='divide-gray-500 space-x-3 md:space-x-4 flex divide-x mt-1.5'>
              <RatingProduct rate={product.rating.rate} />
              <h3 className='pl-3 text-lg font-semibold capitalize md:pl-4 md:text-xl'>
                {product.category}
              </h3>
            </div>
            <p className='mt-3 mb-5 text-gray-500 md:text-lg'>
              {product.description}
            </p>
            <small className='text-base md:text-lg'>Harga:</small>
            <h3 className='-mt-1.5 text-2xl font-bold lining-nums tabular-nums md:text-3xl lg:mt-auto'>
              {product.price}$
            </h3>
            <div className='flex w-1/2 my-3 md:w-3/12 lg:w-3/12'>
              <Button className='w-1/3 text-3xl text-white bg-dark' text='-' />
              <input
                className='w-1/3 text-xl font-bold text-center border-t-2 border-b-2 border-dark lg:pl-3'
                value={0}
                type='number'
                readOnly
              />
              <Button className='w-1/3 text-3xl text-white bg-dark' text='+' />
            </div>
            <Button
              className='w-full py-2.5 px-12 mt-3 text-xl text-white rounded-sm bg-dark flex items-center md:max-w-xs md:px-20'
              text='Add to Cart'
            >
              <GiShoppingCart className='text-3xl' />
            </Button>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { productId } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await res.json();

  // Pass post data to the page via props
  return { props: { product } };
  // return { props: { product: [], context: params } };
}
