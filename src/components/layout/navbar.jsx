import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import { Button } from '../ui';
import { navbarLinks } from '../../utils/constant';

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
        {navbarLinks.map(({ text, link }) => (
          <li key={text}>
            <Link href={link}>
              <ListItem>{text}</ListItem>
            </Link>
          </li>
        ))}
      </ListContainer>
      <ButtonContainer>
        <Button tw='md:hidden'>
          <GiHamburgerMenu tw='text-white md:hidden text-4xl' />
        </Button>
        <Button tw='hidden md:block'>
          <GiShoppingCart tw='hidden md:block text-white text-3xl' />
        </Button>
        <LoginButton text='Login' to='login' />
      </ButtonContainer>
    </NavbarWrapper>
  );
}

const NavbarWrapper = tw.nav`flex items-center justify-between shadow-md bg-dark px-8`;
const NavbarBrand = tw.a`relative ml-5 scale-125 top-5 md:ml-0`;
const ListContainer = tw.ul`hidden text-base md:flex md:items-center space-x-9`;
const ListItem = tw.a`font-bold text-white`;
const ButtonContainer = tw.div`flex items-center bg-dark`;
const LoginButton = tw(
  Button
)`hidden px-5 py-0.5 font-semibold ml-8 text-dark min-h-[15px] min-w-[15px] md:block text-lg bg-white`;

export default Navbar;
