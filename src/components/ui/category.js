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
      <h2 className='text-9xl'>Category</h2>
      <div className='flex justify-between text-gray-400 bg-white'>
        <Button className='bg-dark p-2.5 w-1/4 text-white'>
          <GiBigDiamondRing />
        </Button>
        <Button className='p-2.5 w-1/4 h-20'>
          <GiElectric />
        </Button>
        <Button className='p-2.5 w-1/4 h-20'>
          <GiLoincloth />
        </Button>
        <Button className='p-2.5 w-1/4 h-20'>
          <GiLargeDress />
        </Button>
      </div>
    </section>
  );
}

export default Category;
