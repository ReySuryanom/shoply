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
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <MainContent>
        <Breadcrumb />
        <header>
          <MainImageContainer>
            <Image
              src='/images/about.png'
              className='rounded-md'
              layout='fill'
              objectFit='contain'
            />
          </MainImageContainer>
          <ImageContainer>
            <Image
              src='/images/about.png'
              className='rounded-md'
              width={110}
              height={110}
              objectFit='contain'
            />
            <Image
              src='/images/about.png'
              className='rounded-md'
              objectFit='contain'
              width={110}
              height={110}
            />
            <Image
              src='/images/about.png'
              className='rounded-md'
              objectFit='contain'
              width={110}
              height={110}
            />
          </ImageContainer>
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
          <Button
            tw='w-full py-1 mt-3 text-xl text-white rounded-sm bg-dark'
            text='Masukan ke Keranjang'
          >
            <GiShoppingCart tw='!min-w-[30px]' />
          </Button>
        </DetailProductSection>
      </MainContent>
    </Fragment>
  );
}

const MainContent = tw.main`p-10`;
const MainImageContainer = tw.div`relative h-72`;
const ImageContainer = tw.div`relative flex justify-between w-full`;
const DetailProductSection = tw.section`py-5`;
const ProductName = tw.h2`text-2xl font-bold`;
const RatingWrapper = tw.span`inline-flex space-x-1.5 text-yellow-400`;
const TotalReview = tw.p`inline-block ml-3.5 text-base text-gray-500`;
const ProductDescription = tw.p`mt-3 mb-5 text-gray-500`;
const PriceText = tw.small`text-base`;
const ItemPrice = tw.h3`-mt-1.5 text-2xl font-bold lining-nums tabular-nums`;
const ToggleContainer = tw.div`flex w-1/2 my-3`;
const TotalItems = tw.input`w-1/3 text-xl font-bold text-center border-t-2 border-b-2 border-dark`;

export default DetailProductPage;
