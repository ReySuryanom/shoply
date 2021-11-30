import tw from 'twin.macro';
import { Fragment } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Button, CardItem } from '../../components/ui';

function Product() {
  return (
    <Fragment>
      <ProductWrapper>
        <ProductHeading>Produk</ProductHeading>
        <CartList>
          <CardItem />
          <CardItem />
          <CardItem />
        </CartList>
      </ProductWrapper>
      <Button
        className='px-8 my-12 py-0.5 block mx-auto text-white rounded-sm bg-dark'
        text='Semua Produk'
      >
        <FiArrowRight className='!min-w-[1.5em]' />
      </Button>
    </Fragment>
  );
}
const ProductWrapper = tw.div`mx-10`;
const ProductHeading = tw.h2`my-5 text-4xl font-bold text-center`;
const CartList = tw.section`grid gap-y-5`;

export default Product;
