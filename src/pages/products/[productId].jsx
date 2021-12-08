import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { Breadcrumb, Button, RatingProduct } from '../../components/ui';

function DetailProductPage({ product }) {
  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <main className='p-10'>
        <Breadcrumb routes={['products', 'test']} />
        <div className='relative lg:flex lg:space-x-7'>
          <header className='lg:w-2/5'>
            <div className='relative bg-white shadow h-72 md:h-96'>
              <Image
                src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                className='scale-75 rounded-md'
                alt='example'
                layout='fill'
                objectFit='contain'
                priority
              />
            </div>
            <div className='relative flex mt-4 space-x-4'>
              <div className='relative w-full h-24 bg-white shadow md:h-48'>
                <Image
                  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='example'
                  className='w-full scale-75 rounded-md'
                  objectFit='contain'
                  layout='fill'
                />
              </div>
              <div className='relative w-full h-24 bg-white shadow md:h-48'>
                <Image
                  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='example'
                  className='w-full scale-75 rounded-md'
                  objectFit='contain'
                  layout='fill'
                />
              </div>
              <div className='relative w-full h-24 bg-white shadow md:h-48'>
                <Image
                  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='example'
                  className='w-full scale-75 rounded-md'
                  objectFit='contain'
                  layout='fill'
                />
              </div>
            </div>
          </header>
          <section className='py-5 lg:w-3/5'>
            <h2 className='text-2xl font-bold md:text-3xl'>Razer Mouse X89</h2>
            <div className='divide-gray-500 space-x-3 md:space-x-4 flex divide-x mt-1.5'>
              <RatingProduct />
              <h3 className='pl-3 text-lg font-semibold md:pl-4 md:text-xl'>
                Woman&apos;s Clothes
              </h3>
            </div>
            <p className='mt-3 mb-5 text-gray-500 md:text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              neque dignissimos labore dolore quibusdam dicta laboriosam ex at
              exercitationem mollitia?
            </p>
            <small className='text-base md:text-lg'>Harga:</small>
            <h3 className='-mt-1.5 text-2xl font-bold lining-nums tabular-nums md:text-3xl lg:mt-auto'>
              75$
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

export default DetailProductPage;
