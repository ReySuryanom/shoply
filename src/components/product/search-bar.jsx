import { Fragment } from 'react';
import { FaSearch } from 'react-icons/fa';
import tw from 'twin.macro';
import { Button } from '../ui';

function SearchBar() {
  const SearchbarContainer = tw.div`relative`;
  const SearchInput = tw.input`w-full px-12 py-1.5 text-lg bg-white rounded-full shadow-sm`;
  const MessageOutput = tw.p`my-2 ml-2 md:pl-2 md:ml-0 md:inline-block md:w-6/12`;
  return (
    <Fragment>
      <SearchbarContainer>
        <SearchInput type='text' />
        <Button tw='absolute left-4 top-3 min-h-[20px] min-w-[20px]'>
          <FaSearch tw='text-lg' />
        </Button>
      </SearchbarContainer>
      <MessageOutput>All Products</MessageOutput>
    </Fragment>
  );
}

export default SearchBar;
