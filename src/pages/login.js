import { Fragment } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import Head from 'next/head';
import { Button } from '../components/ui';

function LoginPage() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Head>
        <title>Login | Shoply.</title>
        <meta name='description' content='Login Page' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <main className='max-h-screen px-10 py-20 bg-white'>
        <h1 className='mb-5 text-4xl font-bold text-center'>SHOPLY.</h1>
        <form className='flex flex-col w-full text-dark'>
          <div className='space-y-12'>
            <div className='relative'>
              <input
                className='absolute w-full px-10 py-2 border rounded-full border-dark'
                type='text'
              />
              <AiOutlineUser className='relative text-2xl left-3 top-2' />
            </div>
            <div className='relative'>
              <input
                className='absolute w-full px-10 py-2 border rounded-full border-dark'
                type='password'
              />
              <AiOutlineLock className='relative text-2xl left-3 top-2' />
            </div>
          </div>
          <Button
            className='w-full mt-12 mb-0.5 text-white rounded-full bg-dark'
            text='Masuk'
            eventHandler={submitHandler}
          />
          <p className='text-center'>lupa password?</p>
        </form>
      </main>
    </Fragment>
  );
}

export default LoginPage;
