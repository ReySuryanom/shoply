import tw from 'twin.macro';
import Image from 'next/image';
import { GiRoundStar } from 'react-icons/gi';
import { trimmingText } from '../../utils/helper';
import { RatingProduct } from '.';

function CardItem({ id, title, image, rating: { rate, count }, price }) {
  return (
    <CardWrapper>
      <PaddingTop />
      <CardHeader>
        <Image
          src={image}
          alt={title}
          layout='fill'
          tw='md:scale-75'
          objectFit='contain'
          priority
        />
      </CardHeader>
      <CardBody>
        <ItemName>{trimmingText(title)}</ItemName>
        <RatingProduct rate={rate} />
        <TotalReviews>{count} reviews</TotalReviews>
        <ItemPrice>{price}$</ItemPrice>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = tw.article`w-full overflow-hidden shadow-md rounded-xl`;
const CardHeader = tw.div`relative w-[268.49px] h-64 bg-white`;
const PaddingTop = tw.div`relative w-full pt-6 bg-white md:hidden`;
const CardBody = tw.div`relative w-full text-center bg-white py-3.5 space-y-1.5 md:pt-0`;
const ItemName = tw.h3`text-lg font-bold lg:text-xl`;
const TotalReviews = tw.p`text-gray-500 text-base !mt-0`;
const ItemPrice = tw.h4`text-lg font-bold lining-nums tabular-nums`;

export default CardItem;
