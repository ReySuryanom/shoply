import tw from 'twin.macro';
import Image from 'next/image';
import { GiRoundStar } from 'react-icons/gi';

function CardItem() {
  return (
    <CardWrapper>
      <PaddingTop />
      <CardHeader>
        <Image
          alt='gambar'
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          layout='fill'
          objectFit='contain'
          priority
        />
      </CardHeader>
      <CardBody>
        <ItemName>Solid Gold Petite Micropave</ItemName>
        <RatingContainer>
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
        </RatingContainer>
        <TotalReviews>18 reviews</TotalReviews>
        <ItemPrice>168$</ItemPrice>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = tw.article`w-full overflow-hidden shadow-md rounded-xl`;
const CardHeader = tw.div`relative w-auto h-64 bg-white`;
const PaddingTop = tw.div`relative w-full pt-6 bg-white`;
const CardBody = tw.div`relative w-full text-center bg-white py-3.5 space-y-1.5`;
const ItemName = tw.h3`text-lg font-bold`;
const RatingContainer = tw.span`flex justify-center space-x-1.5 text-yellow-400`;
const TotalReviews = tw.p`text-gray-500 text-base`;
const ItemPrice = tw.h4`text-lg font-bold lining-nums tabular-nums`;

export default CardItem;
