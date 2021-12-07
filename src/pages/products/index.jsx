import tw from 'twin.macro';
import Head from 'next/head';
import { Fragment } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import {
  ProductFilter,
  SearchBar,
  SortProduct,
} from '../../components/product';
import { Breadcrumb, Button, CardItem } from '../../components/ui';
import { getData, hasObjectValue } from '../../utils/helper';

function ProductPage({ products, context }) {
  console.log(context);
  return (
    <Fragment>
      <Head>
        <title>Product | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <MainContent>
        <Breadcrumb />
        <ProductContainer>
          <ProductFilter />
          <ProductSection>
            <SearchBar />
            <ButtonContainer>
              <FilterToggle>
                <GiSettingsKnobs tw='min-w-[35px] min-h-[35px]' />
              </FilterToggle>
              <SortProduct />
            </ButtonContainer>
            <CartSection>
              {products.map((item) => (
                <CardItem {...item} key={item.id} />
              ))}
            </CartSection>
          </ProductSection>
        </ProductContainer>
      </MainContent>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  let urlParams = null;
  const { query } = context;

  if (hasObjectValue(query)) {
    const keys = Object.keys(query);
    const values = Object.values(query);

    urlParams = `products/${keys}/${values}`;
  } else {
    urlParams = 'products';
  }

  const products = await getData(urlParams);

  return {
    props: { products, context: query },
  };
}

const MainContent = tw.main`p-10`;
const ProductContainer = tw.div`md:space-x-4 md:flex`;
const ProductSection = tw.section`md:w-2/3 lg:w-4/5`;
const ButtonContainer = tw.div`flex items-center justify-between !mt-2 md:inline-block md:text-right md:w-6/12`;
const CartSection = tw.section`mt-3 space-y-7 md:grid md:grid-cols-2 md:space-y-0 md:gap-2 lg:grid-cols-4 lg:gap-4`;
const FilterToggle = tw(Button)`min-w-[35px] min-h-[35px] md:hidden`;

export default ProductPage;
