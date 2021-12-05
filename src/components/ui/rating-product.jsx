import tw from 'twin.macro';
import { GiRoundStar } from 'react-icons/gi';

function RatingProduct() {
  return (
    <RatingContainer>
      <RatingWrapper>
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
      </RatingWrapper>
      <TotalReview>18 reviews</TotalReview>
    </RatingContainer>
  );
}

const RatingContainer = tw.div`flex items-center`;
const RatingWrapper = tw.span`flex space-x-0.5 md:space-x-1.5 text-yellow-400`;
const TotalReview = tw.p`inline-block ml-1.5 md:ml-3.5 text-base text-gray-500`;

export default RatingProduct;
