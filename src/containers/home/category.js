import tw from 'twin.macro';
import { GiBigDiamondRing, GiLargeDress, GiClothes } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';
import { Button } from '../../components/ui';

function Category() {
  return (
    <CategorySection>
      <CategoryHeading>Kategori</CategoryHeading>
      <CategoryContainer>
        <Button className='bg-dark p-2.5 w-1/4 text-white'>
          <GiBigDiamondRing />
        </Button>
        <Button className='p-2.5 w-1/4 h-20'>
          <RiComputerLine />
        </Button>
        <Button className='p-2.5 w-1/4 h-20'>
          <GiClothes />
        </Button>
        <Button className='p-2.5 w-1/4 h-20 overflow-hidden'>
          <GiLargeDress />
        </Button>
      </CategoryContainer>
    </CategorySection>
  );
}

const CategorySection = tw.div`mx-10`;
const CategoryHeading = tw.div`mb-2.5 text-4xl font-bold text-center`;
const CategoryContainer = tw.div`flex justify-between overflow-hidden text-gray-400 bg-white rounded-lg shadow-md`;

export default Category;
