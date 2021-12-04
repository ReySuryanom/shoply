import Head from 'next/head';
import { Fragment } from 'react';
import tw from 'twin.macro';
import CartItem from '../components/cart/cart-item';
import { Breadcrumb, Button } from '../components/ui';

function CheckoutPage() {
  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Created by Muhammad Raihan and Muhammad Rian'
        />
      </Head>
      <MainContent>
        <Breadcrumb />
        <HeaderTitle>
          <h2 tw='w-9/12'>Product</h2>
          <h2 tw='w-1/3 pl-16'>Price</h2>
          <h2 tw='w-1/2 pl-8'>Quantity</h2>
        </HeaderTitle>
        <CartSection>
          <CartItem />
          <CartItem />
          <CartItem />
        </CartSection>
        <TotalSection>
          <DetailInfo>
            <span tw='w-1/3'>Subtotal</span>
            <span tw='w-1/3 text-center'>:</span>
            <span tw='w-1/3 text-right'>$90</span>
          </DetailInfo>
          <DetailInfo>
            <span tw='w-1/3'>Shipping Fee</span>
            <span tw='w-1/3 text-center'>:</span>
            <span tw='w-1/3 text-right'>$90</span>
          </DetailInfo>
          <BorderBottom />
          <DetailTotalOrder>
            <span tw='w-1/3'>Total Order</span>
            <span tw='w-1/3 text-center'>:</span>
            <span tw='w-1/3 text-right'>$95</span>
          </DetailTotalOrder>
          <ButtonContainer>
            <CancelButton text='Cancel' />
            <CheckoutButton text='Checkout' />
          </ButtonContainer>
        </TotalSection>
      </MainContent>
    </Fragment>
  );
}

const MainContent = tw.main`p-10`;
const HeaderTitle = tw.header`items-center hidden p-3 text-lg font-bold md:flex text-dark`;
const CartSection = tw.section`space-y-9`;
const TotalSection = tw.section`p-5 bg-white shadow-md mt-9`;
const DetailInfo = tw.p`flex justify-between`;
const ButtonContainer = tw.div`flex justify-end space-x-5 mt-7`;
const BorderBottom = tw.hr`mt-1 mb-3 border border-black border-opacity-70`;
const DetailTotalOrder = tw.h3`flex justify-between text-lg font-bold`;
const CancelButton = tw(Button)`px-5 border-2 border-dark`;
const CheckoutButton = tw(Button)`px-5 text-white bg-dark`;

export default CheckoutPage;
