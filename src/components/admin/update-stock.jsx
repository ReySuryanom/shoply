import ItemList from './item-list';

function UpdateStock({ products }) {
  return (
    <section className='py-10 px-5'>
      <h1 className='p-5 text-3xl font-bold text-center'>Product</h1>
      <table className='w-full text-center'>
        <thead className='text-white bg-dark'>
          <tr>
            <th className='py-3'>Product</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ItemList {...product} key={product.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UpdateStock;
