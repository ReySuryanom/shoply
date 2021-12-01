import '../styles/globals.css';
import { Fragment } from 'react';
import { GlobalStyles } from 'twin.macro';
import { Footer, Navbar } from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
