import tw from 'twin.macro';
import { RiCloseCircleFill } from 'react-icons/ri';
import { categoriesList } from '../../utils/constant';
import { Button } from '../ui';

function ProductFilter() {
  return (
    <FilterWrapper>
      <CloseButton>
        <RiCloseCircleFill tw='min-h-[30px] min-w-[30px]' />
      </CloseButton>
      <FilterHeading>Filter</FilterHeading>
      <FilterSection>
        <CategoryHeading>Product Category</CategoryHeading>
        {categoriesList.map(({ id, params }) => (
          <CategoryContainer key={id}>
            <CategoryLabel>{params}</CategoryLabel>
            <input type='checkbox' name={id} id={id} />
          </CategoryContainer>
        ))}
      </FilterSection>
      <PriceRangeSection>
        <CategoryHeading>Price Range</CategoryHeading>
        <PriceContainer>
          <PriceInput type='number' placeholder='Min' />
          <PriceInput type='number' placeholder='Max' />
        </PriceContainer>
        <ButtonContainer>
          <ApplyButton text='Apply' />
          <ClearButton text='Clear' />
        </ButtonContainer>
      </PriceRangeSection>
    </FilterWrapper>
  );
}

const FilterWrapper = tw.aside`md:rounded-lg md:sticky md:w-1/3 space-y-8 flex flex-col fixed top-0 left-0 z-10 w-full h-screen bg-white p-5 text-[#211F1C] lg:w-1/5`;
const FilterHeading = tw.h2`!mt-0 text-3xl font-bold md:text-2xl`;
const FilterSection = tw.section`w-2/3 space-y-2.5 md:w-11/12`;
const CategoryHeading = tw.h3`text-xl font-medium text-black md:text-lg`;
const CategoryContainer = tw.div`flex items-center justify-between`;
const CategoryLabel = tw.label`text-gray-500 capitalize`;
const PriceRangeSection = tw.section`w-full space-y-3`;
const PriceContainer = tw.div`flex items-center w-full space-x-3`;
const PriceInput = tw.input`w-full border-2 rounded-xl py-0.5 text-center text-[#211F1C]`;
const ButtonContainer = tw.div`flex flex-col w-full space-y-4 text-lg font-semibold`;
const ApplyButton = tw(Button)`w-full px-3 text-white rounded-xl bg-[#211F1C]`;
const ClearButton = tw(
  Button
)`w-full px-3 text-dark rounded-xl border-2 border-[#211F1C]`;
const CloseButton = tw(
  Button
)`absolute z-20 text-black top-5 right-5 md:hidden`;

export default ProductFilter;
