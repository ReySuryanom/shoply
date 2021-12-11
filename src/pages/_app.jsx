import '../styles/globals.css';
import NProgress from 'nprogress';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ProductProvider } from '../context/product-context';
import { Footer, Navbar } from '../components/layout';
import { useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000} placement='bottom-right'>
      <ProductProvider>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ProductProvider>
    </ToastProvider>
  );
}

export default MyApp;
