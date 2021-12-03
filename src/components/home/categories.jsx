import tw from 'twin.macro';
import { Button } from '../ui';
import { categoriesList } from '../../utils/constant';

const PATH = 'products?category=';

function Categories() {
  return (
    <CategoriesSection>
      <CategoryHeading>Kategori</CategoryHeading>
      <CategoryContainer>
        {categoriesList.map(({ icon, params }) => (
          <CategoryItem key={params} to={PATH + params}>
            {icon} <CategoryName>{params}</CategoryName>
          </CategoryItem>
        ))}
      </CategoryContainer>
    </CategoriesSection>
  );
}

const CategoriesSection = tw.section`mx-10`;
const CategoryHeading = tw.h2`mb-5 text-4xl md:text-5xl font-bold text-center`;
const CategoryContainer = tw.div`flex justify-between overflow-hidden text-gray-400 bg-white rounded-lg shadow-md`;
const CategoryName = tw.span`hidden md:block md:text-lg`;
const CategoryItem = tw(
  Button
)`bg-dark p-2.5 w-1/4 text-white text-6xl md:flex md:capitalize md:flex-col md:items-center`;

export default Categories;
