import { useRouter } from 'next/router';
import { useState } from 'react';
import { hasObjectValue } from '../../utils/helper';

function SortProduct() {
  const router = useRouter();
  const [sort] = useState(router.query?.sort || 'asc');

  const eventHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const currentUrl = router.pathname;
    const { query } = router;

    if (hasObjectValue(query)) {
      const keys = Object.keys(query).filter((params) => params !== 'sort');
      const values = Object.values(query).filter(
        (params) => params !== 'asc' && params !== 'desc'
      );
      const currentParams = `?${keys}=${values}`;
      const url = `${currentUrl}${currentParams}&sort=${value}`;

      router.push(url.replace('=&', ''));
    } else {
      const url = `${currentUrl}?sort=${value}`;

      router.push(url.replace('=&', ''));
    }
  };

  return (
    <div className='flex items-center justify-end'>
      <small>Sort by Name</small>
      <select
        className='px-1.5 py-1 rounded-full border-dark border ml-2'
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
