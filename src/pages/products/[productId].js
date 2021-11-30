import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { GiRoundStar, GiShoppingCart } from 'react-icons/gi';
import { Breadcrumb, Button } from '../../components/ui';

function DetailProduct() {
  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
        <meta name='description' content='Login Page' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <main className='p-10'>
        <Breadcrumb />
        <header>
          <div className='relative h-72'>
            <Image
              src='/images/about.png'
              className='rounded-md'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='relative flex justify-between w-full'>
            <Image
              src='/images/about.png'
              className='rounded-md'
              width={110}
              height={110}
              objectFit='contain'
            />
            <Image
              src='/images/about.png'
              className='rounded-md'
              objectFit='contain'
              width={110}
              height={110}
            />
            <Image
              src='/images/about.png'
              className='rounded-md'
              objectFit='contain'
              width={110}
              height={110}
            />
          </div>
        </header>
        <section className='py-5'>
          <h2 className='text-2xl font-bold'>Razer Mouse X89</h2>
          <span className='inline-flex space-x-1.5 text-yellow-400'>
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
          </span>
          <p className='inline-block ml-3.5 text-base text-gray-500'>
            18 reviews
          </p>
          <p className='mt-3 mb-5 text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius neque
            dignissimos labore dolore quibusdam dicta laboriosam ex at
            exercitationem mollitia?
          </p>
          <small className='text-base'>Harga:</small>
          <h3 className='-mt-1.5 text-2xl font-bold lining-nums tabular-nums'>
            75$
          </h3>
          <div className='flex w-1/2 my-3'>
            <Button className='w-1/3 text-3xl text-white bg-dark' text='-' />
            <input
              className='w-1/3 text-xl font-bold text-center border-t-2 border-b-2 border-dark'
              value={0}
              type='number'
              readOnly
            />
            <Button className='w-1/3 text-3xl text-white bg-dark' text='+' />
          </div>
          <Button className='w-full py-1 mt-3 text-xl text-white rounded-sm bg-dark' text='Masukan ke Keranjang'>
            <GiShoppingCart className='!min-w-[30px]' />
          </Button>
        </section>
      </main>
    </Fragment>
  );
}

export default DetailProduct;
