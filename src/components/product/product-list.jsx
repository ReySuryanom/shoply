import { CardItem } from '../ui';

function ProductList({ data }) {
  return (
    <section className='mt-3 space-y-7 md:grid md:grid-cols-2 md:space-y-0 md:gap-2 lg:grid-cols-4 lg:gap-4'>
      {data.map((item) => (
        <CardItem {...item} key={item.id} />
      ))}
    </section>
  );
}

export default ProductList;
