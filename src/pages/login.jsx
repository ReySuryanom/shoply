import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { LoginForm } from '../components/login';

export default function LoginPage() {
  return (
    <Fragment>
      <Head>
        <title>Login | Shoply.</title>
      </Head>
      <main className='items-center max-h-screen px-10 py-20 bg-white lg:flex lg:px-32'>
        <div className='relative hidden w-1/2 h-96 lg:block'>
          <Image
            src='/images/login.png'
            alt='Login'
            layout='fill'
            objectFit='contain'
            blurDataURL='https://via.placeholder.com/653x879.webp'
            priority
          />
        </div>
        <LoginForm />
      </main>
    </Fragment>
  );
}
