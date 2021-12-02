import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import { Button } from '../ui';

function Navbar() {
  return (
    <NavbarWrapper>
      <Link href='/'>
        <NavbarBrand>
          <Image
            src='/images/logo-Rey.webp'
            alt='Shoply Icon'
            width={50}
            height={50}
          />
        </NavbarBrand>
      </Link>
      <ListContainer>
        <li>
          <Link href='/'>
            <ListItem>Home</ListItem>
          </Link>
        </li>
        <li>
          <Link href='/products'>
            <ListItem>Products</ListItem>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <ListItem>About</ListItem>
          </Link>
        </li>
      </ListContainer>
      <ButtonContainer>
        <Button>
          <GiHamburgerMenu tw='text-white' />
        </Button>
        <Button tw='hidden md:block'>
          <GiShoppingCart tw='w-6 h-6 ' />
        </Button>
        <Button
          tw='hidden px-2 py-1 text-white md:block bg-dark'
          text='Login'
        />
      </ButtonContainer>
    </NavbarWrapper>
  );
}

const NavbarWrapper = tw.nav`flex items-center justify-between shadow-md bg-dark`;
const NavbarBrand = tw.a`relative ml-5 scale-125 top-5`;
const ListContainer = tw.ul`hidden text-base md:flex md:items-center md:justify-between space-x-9`;
const ListItem = tw.a`font-bold`;
const ButtonContainer = tw.div`flex items-center justify-between min-h-full p-1.5 space-x-0 md:space-x-9 bg-dark md:bg-transparent`;

export default Navbar;
