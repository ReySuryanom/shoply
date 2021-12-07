import '../styles/globals.css';
import { GlobalStyles } from 'twin.macro';
import { ProductProvider } from '../context/product-context';
import { Footer, Navbar } from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ProductProvider>
  );
}

export default MyApp;
