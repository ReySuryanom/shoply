import { Fragment } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button } from '../ui';

function SearchBar() {
  return (
    <Fragment>
      <div className='relative'>
        <input
          className='w-full px-12 py-1.5 text-lg bg-white rounded-full shadow-sm'
          type='text'
        />
        <Button className='absolute left-4 top-3 min-h-[20px] min-w-[20px]'>
          <FaSearch className='text-lg' />
        </Button>
      </div>
      <p className='my-2 ml-2 md:pl-2 md:ml-0 md:inline-block md:w-6/12'>All Products</p>
    </Fragment>
  );
}

export default SearchBar;
