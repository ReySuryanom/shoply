import { Fragment } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Button } from '../ui';

function ProductFilter() {
  return (
    <Fragment>
      <aside className='md:hidden space-y-8 flex flex-col fixed top-0 left-0 z-10 w-full h-screen bg-white p-7 text-[#211F1C]'>
        <Button className='absolute z-20 text-black top-5 right-5'>
          <RiCloseCircleFill className='min-h-[30px] min-w-[30px]' />
        </Button>
        <h2 className='!mt-0 text-3xl font-bold'>Filter</h2>
        <section className='w-2/3 space-y-2.5'>
          <h3 className='text-xl font-medium text-black'>Product Category</h3>
          <div className='flex items-center justify-between'>
            <p className='text-gray-500'>Electronic</p>
            <input type='checkbox' name='' />
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-gray-500'>Electronic</p>
            <input type='checkbox' name='' />
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-gray-500'>Electronic</p>
            <input type='checkbox' name='' />
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-gray-500'>Electronic</p>
            <input type='checkbox' name='' />
          </div>
        </section>
        <section className='w-2/3 space-y-3'>
          <h3 className='text-xl font-medium text-black'>Price Range</h3>
          <div className='flex items-center w-full space-x-3'>
            <input
              className='w-full border-2 rounded-xl py-0.5 text-center text-[#211F1C]'
              type='number'
              placeholder='Min'
            />
            <input
              className='w-full border-2 rounded-xl py-0.5 text-center text-[#211F1C]'
              type='number'
              placeholder='Max'
            />
          </div>
          <Button
            className='w-full px-3 text-white rounded-xl bg-[#211F1C]'
            text='Set Price'
          />
        </section>
        <div className='flex w-full space-x-5 text-lg font-semibold'>
          <Button
            className='w-full px-3 text-dark rounded-xl border-2 border-[#211F1C]'
            text='Clear Filter'
          />
          <Button
            className='w-full px-3 text-white rounded-xl bg-[#211F1C]'
            text='Apply'
          />
        </div>
      </aside>
    </Fragment>
  );
}

export default ProductFilter;
