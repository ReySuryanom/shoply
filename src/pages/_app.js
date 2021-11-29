import '../styles/globals.css';
import { Fragment } from 'react';
import { Footer, Navbar } from '../components/ui';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
