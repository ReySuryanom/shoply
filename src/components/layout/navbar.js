import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import { Button } from '../ui';

function Navbar() {
  return (
    <nav className='flex items-center justify-between shadow-md bg-dark'>
      <Link href='/'>
        <a className='relative ml-5 scale-125 top-5'>
          <Image
            src='/images/logo-Rey.webp'
            alt='Shoply Icon'
            width={50}
            height={50}
          />
        </a>
      </Link>
      <ul className='hidden text-base md:flex md:items-center md:justify-between space-x-9'>
        <li>
          <Link href='/'>
            <a className='font-bold'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/products'>
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
      <div className='flex items-center justify-between min-h-full p-1.5 space-x-0 md:space-x-9 bg-dark md:bg-transparent'>
        <Button>
          <GiHamburgerMenu className='text-white' />
        </Button>
        <Button className='hidden md:block'>
          <GiShoppingCart className='w-6 h-6 ' />
        </Button>
        <Button
          className='hidden px-2 py-1 text-white md:block bg-dark'
          text='Login'
        />
      </div>
    </nav>
  );
}

export default Navbar;