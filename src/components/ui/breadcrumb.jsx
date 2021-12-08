import { Fragment } from 'react';
import Link from 'next/link';

function Breadcrumb({ routes = [] }) {
  const format = '\xa0\xa0/\xa0\xa0';

  const previousPage = (route, index = -1) => (
    <Fragment>
      <li className='capitalize hover:underline' key={index}>
        <Link href={`/${route === 'home' ? '' : route}`}>
          <a role='button'>{route}</a>
        </Link>
      </li>
      {format}
    </Fragment>
  );

  const routelinks = routes.map((route, index) => {
    if (routes.length - 1 === index) {
      return (
        <li className='font-bold capitalize' key={index}>
          {route}
        </li>
      );
    }
    return previousPage(route, index);
  });

  return (
    <div className='px-2.5 py-3.5 bg-white mb-7 shadow-md rounded-md'>
      <ul className='flex items-center text-base md:text-lg'>
        {previousPage('home')}
        {routelinks}
      </ul>
    </div>
  );
}

export default Breadcrumb;
