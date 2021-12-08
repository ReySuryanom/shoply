import '../styles/globals.css';
import { ProductProvider } from '../context/product-context';
import { Footer, Navbar } from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ProductProvider>
  );
}

export default MyApp;
