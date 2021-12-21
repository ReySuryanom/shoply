import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { LoginForm } from '../components/login';
import { useProductContext } from '../context/product-context';
import { messageNotifications } from '../utils/constant';

export default function LoginPage() {
  const { ALREADY_LOGIN } = messageNotifications;
  const { state } = useProductContext();
  const router = useRouter();
  const { addToast } = useToasts();

  useEffect(() => {
    if (state?.user?.token) {
      router.push('/');
      addToast(ALREADY_LOGIN.message, ALREADY_LOGIN.status);
    }
  }, [ALREADY_LOGIN, addToast, router, state?.user?.token]);

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
