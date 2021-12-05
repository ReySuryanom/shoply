import tw from 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { Breadcrumb, Button, RatingProduct } from '../../components/ui';

function DetailProductPage() {
  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <MainContent>
        <Breadcrumb />
        <DetailProductWrapper>
          <ProductImage>
            <MainImageContainer>
              <Image
                src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                className='scale-75 rounded-md'
                layout='fill'
                objectFit='contain'
                priority
              />
            </MainImageContainer>
            <ImageWrapper>
              <ImageContainer>
                <Image
                  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  className='w-full scale-75 rounded-md'
                  objectFit='contain'
                  layout='fill'
                />
              </ImageContainer>
              <ImageContainer>
                <Image
                  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  className='w-full scale-75 rounded-md'
                  objectFit='contain'
                  layout='fill'
                />
              </ImageContainer>
              <ImageContainer>
                <Image
                  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  className='w-full scale-75 rounded-md'
                  objectFit='contain'
                  layout='fill'
                />
              </ImageContainer>
            </ImageWrapper>
          </ProductImage>
          <DetailProductSection>
            <ProductName>Razer Mouse X89</ProductName>
            <HeaderContainer>
              <RatingProduct />
              <ProductCategory>Woman's Clothes</ProductCategory>
            </HeaderContainer>
            <ProductDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              neque dignissimos labore dolore quibusdam dicta laboriosam ex at
              exercitationem mollitia?
            </ProductDescription>
            <PriceText>Harga:</PriceText>
            <ItemPrice>75$</ItemPrice>
            <ToggleContainer>
              <Button tw='w-1/3 text-3xl text-white bg-dark' text='-' />
              <TotalItems value={0} type='number' readOnly />
              <Button tw='w-1/3 text-3xl text-white bg-dark' text='+' />
            </ToggleContainer>
            <CartButton text='Add to Cart'>
              <GiShoppingCart tw='text-3xl' />
            </CartButton>
          </DetailProductSection>
        </DetailProductWrapper>
      </MainContent>
    </Fragment>
  );
}

const MainContent = tw.main`p-10`;
const MainImageContainer = tw.div`relative h-72 shadow bg-white md:h-96`;
const ImageWrapper = tw.div`relative flex mt-4 space-x-4`;
const ImageContainer = tw.div`relative w-full h-24 md:h-48 bg-white shadow`;
const ProductImage = tw.header`lg:w-2/5`;
const DetailProductWrapper = tw.div`lg:flex relative lg:space-x-7`;
const DetailProductSection = tw.section`py-5 lg:w-3/5 `;
const HeaderContainer = tw.div`divide-gray-500 space-x-3 md:space-x-4 flex divide-x mt-1.5`;
const ProductName = tw.h2`text-2xl font-bold md:text-3xl`;
const ProductCategory = tw.h3`text-lg font-semibold pl-3 md:pl-4 md:text-xl`;
const ProductDescription = tw.p`mt-3 mb-5 text-gray-500 md:text-lg`;
const PriceText = tw.small`text-base md:text-lg `;
const ItemPrice = tw.h3`-mt-1.5 text-2xl font-bold lining-nums tabular-nums md:text-3xl lg:mt-auto`;
const ToggleContainer = tw.div`flex w-1/2 my-3 md:w-3/12 lg:w-3/12`;
const TotalItems = tw.input`w-1/3 text-xl font-bold text-center border-t-2 border-b-2 border-dark lg:pl-3`;
const CartButton = tw(
  Button
)`w-full py-2.5 px-12 mt-3 text-xl text-white rounded-sm bg-dark flex items-center md:max-w-xs md:px-20`;

export default DetailProductPage;
