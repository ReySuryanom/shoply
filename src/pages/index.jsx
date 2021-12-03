import tw from 'twin.macro';
import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui';
import {
  Categories,
  Feedback,
  Partners,
  ProductList,
  Services,
} from '../components/home';

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
      </Head>
      <MainHeader>
        <MainHeading>Shoply.</MainHeading>
        <MainParagraf>
          Situs Jual Beli Online Terlengkap, Murah & Aman
        </MainParagraf>
        <Button
          className='w-full text-lg border-2 rounded-sm text-dark border-dark'
          text='Belanja Sekarang'
          eventHandler={() => router.push('/about')}
        />
      </MainHeader>
      <main>
        <Categories />
        <ProductList />
        <Partners />
        <Services/>
        <Feedback />
      </main>
    </Fragment>
  );
}

const MainHeader = tw.header`p-10 my-5 bg-white`;
const MainHeading = tw.h1`text-6xl font-bold leading-8 uppercase`;
const MainParagraf = tw.p`w-8/12 mt-2.5 mb-10 leading-normal text-gray-500`;
