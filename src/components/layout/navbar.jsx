import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import { Button } from '../ui';
import { navbarLinks } from '../../utils/constant';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  const route = router.pathname;

  return (
    <nav className='flex items-center justify-between px-8 shadow-md bg-dark lg:py-5 lg:px-16'>
      <Link href='/' passHref>
        <a className='relative ml-5 scale-125 top-5 md:ml-0 lg:scale-[1.75] lg:top-8' role='button'>
          <Image
            src='/images/logo-Rey.webp'
            alt='Shoply Icon'
            width={50}
            height={50}
          />
        </a>
      </Link>
      <ul className='hidden text-base md:flex md:items-center md:space-x-9 lg:space-x-28'>
        {navbarLinks.map(({ text, link }) => {
          const defaultStyle = ' text-white cursor-pointer lg:text-xl list';
          const isCurrentPage = link === route && 'list-style';

          return (
            <li className='relative text-center cursor-default' key={text}>
              <Link href={link} passHref>
                <a className={isCurrentPage + defaultStyle}>{text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='flex items-center bg-dark'>
        <Button className='md:hidden'>
          <GiHamburgerMenu className='text-4xl text-white md:hidden' />
        </Button>
        <Button className='hidden md:block' to='checkout'>
          <GiShoppingCart className='hidden text-3xl text-white md:block' />
        </Button>
        <Button
          className='hidden py-0.5 font-semibold ml-8 text-dark min-h-[15px] min-w-[15px] md:block text-lg bg-white lg:py-1 px-6 lg:text-xl'
          text='Login'
          to='login'
        />
      </div>
    </nav>
  );
}

export default Navbar;
