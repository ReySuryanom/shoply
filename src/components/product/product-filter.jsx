import { useRouter } from 'next/router';
import { useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { categoriesList } from '../../utils/constant';
import { Button } from '../ui';

function ProductFilter() {
  const router = useRouter();
  const [filter, setFilter] = useState({ category: '', min: '', max: '' });
  // console.log(filter);

  const eventHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFilter((filter) => {
      return { ...filter, [key]: value };
    });
  };

  const applyButton = (event) => {
    event.preventDefault();
    let route = '/products';
    route += !!filter.category ? `?category=${filter.category}` : '';

    const symbol = route.includes('?category') ? '&' : '?';

    route += !!filter.min ? `${symbol}min=${filter.min}&max=${filter.max}` : '';

    router.push(route);
  };

  const clearButton = (event) => {
    event.preventDefault();
    setFilter(() => {
      return { category: '', min: '', max: '' };
    });
  };

  return (
    <aside className='md:rounded-lg md:sticky md:w-1/3 space-y-8 flex flex-col fixed top-0 left-0 z-10 w-full h-screen bg-white p-5 text-[#211F1C] lg:w-1/5 shadow-sm'>
      <Button className='absolute z-20 text-black top-5 right-5 md:hidden'>
        <RiCloseCircleFill className='min-h-[30px] min-w-[30px]' />
      </Button>
      <h2 className='!mt-0 text-3xl font-bold md:text-2xl'>Filter</h2>
      <section className='w-2/3 space-y-2.5 md:w-11/12'>
        <h3 className='text-xl font-medium text-black md:text-lg'>
          Product Category
        </h3>
        {categoriesList.map(({ id, params }) => (
          <div className='flex items-center justify-between' key={id}>
            <label className='text-gray-500 capitalize'>{params}</label>
            <input
              type='radio'
              name='category'
              id={id}
              checked={filter.category === params}
              value={params}
              onChange={eventHandler}
            />
          </div>
        ))}
      </section>
      <section className='w-full space-y-3'>
        <h3 className='text-xl font-medium text-black md:text-lg'>
          Price Range
        </h3>
        <div className='flex items-center w-full space-x-3'>
          <input
            className='w-full border-2 rounded-xl py-0.5 text-center text-[#211F1C]'
            onChange={eventHandler}
            type='number'
            name='min'
            min='1'
            value={filter.min}
            placeholder='Min'
          />
          <input
            className='w-full border-2 rounded-xl py-0.5 text-center text-[#211F1C]'
            onChange={eventHandler}
            min='1'
            type='number'
            name='max'
            value={filter.max}
            placeholder='Max'
          />
        </div>
        <div className='flex flex-col w-full space-y-4 text-lg font-semibold'>
          <Button
            className='w-full px-3 text-white rounded-xl bg-[#211F1C]'
            text='Apply'
            eventHandler={applyButton}
          />
          <Button
            className='w-full px-3 text-dark rounded-xl border-2 border-[#211F1C]'
            text='Clear'
            eventHandler={clearButton}
          />
        </div>
      </section>
    </aside>
  );
}

export default ProductFilter;
