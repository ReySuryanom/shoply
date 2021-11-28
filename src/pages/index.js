import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/ui/button';
import Footer from '../components/ui/footer';
import Category from '../components/ui/category';

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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='p-10 my-5 bg-white'>
        <h1 className='text-lg font-bold leading-8'>Fantech <span className='block text-4xl'>X9 THOR</span></h1>
        <p className='w-8/12 my-2.5 leading-normal text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore,
          provident minus
        </p>
        <Button className='w-full text-lg border-2 text-dark border-dark' text='Shop Now' eventHandler={() => router.push('/product')} />
      </header>
      <main>
        <Category/>
      </main>
      <Footer />
    </Fragment>
  );
}
