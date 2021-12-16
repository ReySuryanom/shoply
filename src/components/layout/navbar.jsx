import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import { Button } from '../ui';
import { navbarLinks } from '../../utils/constant';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Profile from '../login/profile';
import { useProductContext } from '../../context/product-context';
import { Notification } from '../login';
import { totalCarts } from '../../utils/helper';

function Navbar() {
  const { state } = useProductContext();
  console.log(state);
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const route = router.pathname;
  const isNavbarOpen = navbar
    ? 'flex flex-col absolute right-0 space-y-2 py-2 top-14 bg-dark w-full md:w-auto !text-right'
    : 'hidden md:flex';

  const navbarTogglers = () => {
    setNavbar((navbar) => !navbar);
  };

  return (
    <nav className='relative flex items-center justify-between px-8 shadow-md bg-dark md:py-0 lg:py-5 lg:px-16'>
      <Link href='/' passHref>
        <a
          className='relative ml-5 scale-125 top-5 md:ml-0 lg:scale-[1.75] lg:top-8 z-20'
          role='button'
        >
          <Image
            src='/images/logo-Rey.webp'
            alt='Shoply Icon'
            width={50}
            height={50}
          />
        </a>
      </Link>
      <ul
        className={`${isNavbarOpen} z-10 text-center md:static md:flex-row md:items-center md:space-y-0 md:space-x-9 lg:space-x-28`}
      >
        {navbarLinks.map(({ text, link }) => {
          const defaultStyle =
            'after:border-0 md:after:border-b-2 md:p-0 text-white text-lg md:text-base lg:text-xl list';
          const isCurrentPage = link === route;
          const listStyle = `${
            isCurrentPage && 'bg-[#302E2C] md:bg-transparent'
          } relative cursor-default pr-3 py-1.5 md:p-0 rounded-lg mx-6 md:mx-0 md:rounded-none`;

          return (
            <li className={listStyle} key={text}>
              <Link href={link} passHref>
                <a
                  className={`${isCurrentPage && 'list-style'} ${defaultStyle}`}
                  onClick={() => setNavbar(false)}
                  role='button'
                >
                  {text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='flex items-center bg-dark'>
        <Button className='md:hidden' eventHandler={navbarTogglers}>
          <GiHamburgerMenu className='text-4xl text-white md:hidden' />
        </Button>
        <Button className='hidden md:block relative' to='checkout'>
          <Notification total={totalCarts(state.carts)}/>
          <GiShoppingCart className='hidden text-4xl text-white md:block' />
        </Button>
        <Button
          className='hidden py-0.5 font-semibold ml-8 text-dark min-h-[15px] min-w-[15px] text-lg bg-white lg:py-1 px-6 lg:text-xl'
          text='Login'
          to='login'
        />
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
