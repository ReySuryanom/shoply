import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { Button } from '../components/ui';

export default function LoginPage() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

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
            priority
          />
        </div>
        <form className='flex flex-col w-full text-dark md:px-28 lg:w-1/2 lg:px-10'>
          <h1 className='mb-5 text-4xl font-bold text-center md:text-5xl lg:text-6xl'>
            SHOPLY.
          </h1>
          <div className='space-y-12'>
            <div className='relative'>
              <input
                className='absolute w-full px-10 py-2.5 bg-[#F5F7FB] rounded-full lg:py-3.5'
                placeholder='Username'
                type='text'
              />
              <AiOutlineUser className='relative text-2xl left-3 top-2 lg:top-3' />
            </div>
            <div className='relative'>
              <input
                className='absolute w-full px-10 py-2.5 bg-[#F5F7FB] rounded-full lg:py-3.5'
                placeholder='Password'
                type='password'
              />
              <AiOutlineLock className='relative text-2xl left-3 top-2 lg:top-3' />
            </div>
          </div>
          <Button
            className='text-xl w-full mt-12 mb-0.5 text-white rounded-full bg-dark lg:py-3.5'
            text='Login'
            eventHandler={submitHandler}
          />
        </form>
      </main>
    </Fragment>
  );
}
