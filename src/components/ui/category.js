import {
  GiBigDiamondRing,
  GiElectric,
  GiLargeDress,
  GiLoincloth,
} from 'react-icons/gi';
import Button from './button';

function Category() {
  return (
    <section className='mx-10'>
      <h2 className='mb-2.5 text-4xl font-bold text-center'>Kategori</h2>
      <div className='flex justify-between overflow-hidden text-gray-400 bg-white rounded-lg shadow-md'>
        <Button className='bg-dark p-2.5 w-1/4 text-white'>
          <GiBigDiamondRing />
        </Button>
        <Button className='p-2.5 w-1/4 h-20'>
          <GiElectric />
        </Button>
        <Button className='p-2.5 w-1/4 h-20'>
          <GiLoincloth />
        </Button>
        <Button className='p-2.5 w-1/4 h-20 overflow-hidden'>
          <GiLargeDress />
        </Button>
      </div>
    </section>
  );
}

export default Category;
