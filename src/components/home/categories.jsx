import tw from 'twin.macro';
import { GiBigDiamondRing, GiLargeDress, GiClothes } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';
import { Button } from '../ui';

function Categories() {
  return (
    <CategorySection>
      <CategoryHeading>Kategori</CategoryHeading>
      <CategoryContainer>
        <Button tw='bg-dark p-2.5 w-1/4 text-white'>
          <GiBigDiamondRing />
        </Button>
        <Button tw='p-2.5 w-1/4 h-20'>
          <RiComputerLine />
        </Button>
        <Button tw='p-2.5 w-1/4 h-20'>
          <GiClothes />
        </Button>
        <Button tw='p-2.5 w-1/4 h-20'>
          <GiLargeDress />
        </Button>
      </CategoryContainer>
    </CategorySection>
  );
}

const CategorySection = tw.section`mx-10`;
const CategoryHeading = tw.h2`mb-2.5 text-4xl font-bold text-center`;
const CategoryContainer = tw.div`flex justify-between overflow-hidden text-gray-400 bg-white rounded-lg shadow-md`;

export default Categories;
