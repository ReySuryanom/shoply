import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useProductContext } from '../../context/product-context';
import { CardItem } from '../ui';

function ProductList({ data }) {
  const { state } = useProductContext();

  if (state.products.length === 0)
    return <AiOutlineLoading3Quarters className='animate-spin text-9xl mx-auto mt-10' />;

  return (
    <section className='mt-3 space-y-7 md:grid md:grid-cols-2 md:space-y-0 md:gap-2 lg:grid-cols-4 lg:gap-4'>
      {state.products.map((item) => (
        <CardItem {...item} key={item.id} />
      ))}
    </section>
  );
}

export default ProductList;
