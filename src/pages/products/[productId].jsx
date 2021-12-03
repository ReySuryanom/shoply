import tw from 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { GiRoundStar, GiShoppingCart } from 'react-icons/gi';
import { Breadcrumb, Button } from '../../components/ui';

function DetailProductPage() {
  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <MainContent>
        <Breadcrumb />
        <header>
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
        </header>
        <DetailProductSection>
          <ProductName>Razer Mouse X89</ProductName>
          <RatingWrapper>
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
          </RatingWrapper>
          <TotalReview>18 reviews</TotalReview>
          <ProductDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius neque
            dignissimos labore dolore quibusdam dicta laboriosam ex at
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
      </MainContent>
    </Fragment>
  );
}

const MainContent = tw.main`p-10`;
const MainImageContainer = tw.div`relative h-72 shadow bg-white md:h-96`;
const ImageWrapper = tw.div`relative flex mt-4 space-x-4`;
const ImageContainer = tw.div`relative w-full h-24 md:h-48 bg-white shadow`;
const DetailProductSection = tw.section`py-5`;
const ProductName = tw.h2`text-2xl font-bold md:text-3xl`;
const RatingWrapper = tw.span`inline-flex space-x-1.5 text-yellow-400`;
const TotalReview = tw.p`inline-block ml-3.5 text-base text-gray-500`;
const ProductDescription = tw.p`mt-3 mb-5 text-gray-500 md:text-lg`;
const PriceText = tw.small`text-base md:text-lg`;
const ItemPrice = tw.h3`-mt-1.5 text-2xl font-bold lining-nums tabular-nums md:text-3xl`;
const ToggleContainer = tw.div`flex w-1/2 my-3 md:w-1/6`;
const TotalItems = tw.input`max-w-[2.75rem] text-xl font-bold text-center border-t-2 border-b-2 border-dark`;
const CartButton = tw(
  Button
)`w-full py-2.5 px-12 mt-3 text-xl text-white rounded-sm bg-dark flex items-center md:max-w-xs md:px-20`;

export default DetailProductPage;
