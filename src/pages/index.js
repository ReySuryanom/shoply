import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { FiArrowRight } from 'react-icons/fi';
import { GiTruck, GiRibbonMedal, GiAlliedStar } from 'react-icons/gi';
import { Button, Category, CardItem } from '../components/ui';

export default function HomePage() {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Created by Muhammad Raihan and Muhammad Rian'
        />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <header className='p-10 my-5 bg-white'>
        <h1 className='text-6xl font-bold leading-8 uppercase'>Shoply.</h1>
        <p className='w-8/12 mt-2.5 mb-10 leading-normal text-gray-500'>
          Situs Jual Beli Online Terlengkap, Murah & Aman
        </p>
        <Button
          className='w-full text-lg border-2 rounded-sm text-dark border-dark'
          text='Belanja Sekarang'
          eventHandler={() => router.push('/product')}
        />
      </header>
      <main>
        <Category />
        <div className='mx-10'>
          <h2 className='my-5 text-4xl font-bold text-center'>Produk</h2>
          <section className='grid gap-y-5'>
            <CardItem />
            <CardItem />
            <CardItem />
          </section>
        </div>
        <Button
          className='px-8 my-12 py-0.5 block mx-auto text-white rounded-sm bg-dark'
          text='Semua Produk'
        >
          <FiArrowRight className='!min-w-[1.5em]' />
        </Button>
        <section className='p-10 bg-white'>
          <h2 className='text-4xl font-bold text-center mb-7 '>
            Manfaat Menggunakan Layanan Kami
          </h2>
          <div className='grid divide-y-2 gap-y-10'>
            <div className='text-center'>
              <GiAlliedStar className='block m-auto text-6xl' />
              <h3 className='text-2xl font-medium'>Best Quality</h3>
              <p className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                consectetur, purus id
              </p>
            </div>
            <div className='text-center'>
              <GiTruck className='block m-auto text-6xl' />
              <h3 className='text-2xl font-medium'>Free Shipping</h3>
              <p className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                consectetur, purus id
              </p>
            </div>
            <div className='text-center'>
              <GiRibbonMedal className='block m-auto text-6xl' />
              <h3 className='text-2xl font-medium'>Warranty</h3>
              <p className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                consectetur, purus id
              </p>
            </div>
          </div>
        </section>
        <section className='relative p-10'>
          <h2 className='text-4xl font-bold text-center mb-7'>
            Apa Kata Pelanggan Kami
          </h2>
          <figure className='text-center'>
            <Image
              src='/images/customer.webp'
              width={100}
              height={100}
              objectFit='cover'
              objectPosition='center'
              className='rounded-full'
            />
            <figcaption className='italic leading-5'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consectetur, purus id tincidunt feugiat, metus orci sagittis elit,
              quis tempor orci elit id arcu. Proin egestas bibendum efficitur."
            </figcaption>
            <h3 className='text-lg font-bold'>Adriana Lopez</h3>
            <p className='text-base'>Client</p>
          </figure>
        </section>
      </main>
    </Fragment>
  );
}
