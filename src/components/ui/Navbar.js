import Link from 'next/link';
import Button from './button';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';

function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-white'>
      <Link href='/'>
        <a className='text-2xl font-medium ml-7'>Shoply.</a>
      </Link>
      <ul className='hidden text-base md:flex md:items-center md:justify-between space-x-9'>
        <li className='font-bold'>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
      <div className='flex items-center justify-between min-h-full p-1.5 space-x-0 md:space-x-9 bg-dark md:bg-transparent'>
        <Button>
          <GiHamburgerMenu className='text-white ' />
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
