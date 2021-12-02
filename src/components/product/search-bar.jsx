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
        <Button className='absolute left-4 top-1.5 min-h-[20px] min-w-[20px]'>
          <FaSearch className='min-h-[20px] min-w-[20px]' />
        </Button>
      </div>
      <p className='my-2 ml-2'>All Products</p>
    </Fragment>
  );
}

export default SearchBar;
