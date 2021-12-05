import tw from 'twin.macro';
import { Fragment } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Button, CardItem } from '../ui';

function ProductList() {
  return (
    <Fragment>
      <ProductWrapper>
        <ProductHeading>Produk</ProductHeading>
        <CartList>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </CartList>
      </ProductWrapper>
      <ProductButton text='Semua Produk' to='products'>
        <FiArrowRight tw='text-2xl' />
      </ProductButton>
    </Fragment>
  );
}
const ProductWrapper = tw.div`mx-10`;
const ProductHeading = tw.h2`my-5 text-4xl font-bold text-center md:text-5xl`;
const CartList = tw.section`grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4`;
const ProductButton = tw(
  Button
)`px-8 my-12 py-0.5 block mx-auto text-white rounded-sm bg-dark flex items-center`;

export default ProductList;
