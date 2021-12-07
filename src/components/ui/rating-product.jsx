import tw from 'twin.macro';
import { createRatingStars } from '../../utils/helper';

function RatingProduct({ rate }) {
  return (
    <RatingContainer>
      <RatingWrapper>{createRatingStars(rate)}</RatingWrapper>
      <TotalReview>{rate}</TotalReview>
    </RatingContainer>
  );
}

const RatingContainer = tw.div`flex justify-center items-center`;
const RatingWrapper = tw.span`flex space-x-0.5 md:space-x-1.5 `;
const TotalReview = tw.p`inline-block ml-1.5 md:ml-3.5 text-base text-gray-500`;

export default RatingProduct;
