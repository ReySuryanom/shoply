import { useRouter } from 'next/router';
import { useState } from 'react';

function SortProduct() {
  const router = useRouter();
  const [sort] = useState(router.query?.sort || 'asc');

  const isAlreadySort = (url) => {
    const regex = new RegExp('[?|&]sort=(asc|desc)', 'g');
    if (url.match('sort')) {
      return url.replace(regex, '');
    }
    return url;
  };

  const eventHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let symbol = '?';
    const currentUrl = isAlreadySort(router.asPath);
    console.log(currentUrl.includes('sort'));
    if (currentUrl.includes('?')) {
      symbol = '&';
    }

    console.log(currentUrl);

    router.push(`${currentUrl}${symbol}sort=${value}`);
  };

  return (
    <div className='flex items-center justify-end'>
      <small>Sort by Id</small>
      <select
        className='px-1.5 py-1 rounded-full border-dark border ml-2 text-center'
        onChange={eventHandler}
        defaultValue={sort}
      >
        <option value='asc'>ASC</option>
        <option value='desc'>DESC</option>
      </select>
    </div>
  );
}

export default SortProduct;
