import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import { Button } from '../ui';
import { navbarLinks } from '../../utils/constant';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  const route = router.pathname;
  console.log(route);

  return (
    <NavbarWrapper>
      <Link href='/' passHref>
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
        {navbarLinks.map(({ text, link }) => {
          const defaultStyle = ' list';
          const isCurrentPage = link === route && 'list-style';

          return (
            <Page key={text}>
              <Link href={link} passHref>
                <ListItem className={isCurrentPage + defaultStyle}>
                  {text}
                </ListItem>
              </Link>
            </Page>
          );
        })}
      </ListContainer>
      <ButtonContainer>
        <Button tw='md:hidden'>
          <GiHamburgerMenu tw='text-white md:hidden text-4xl' />
        </Button>
        <Button tw='hidden md:block' to='checkout'>
          <GiShoppingCart tw='hidden md:block text-white text-3xl' />
        </Button>
        <LoginButton text='Login' to='login' />
      </ButtonContainer>
    </NavbarWrapper>
  );
}

const NavbarWrapper = tw.nav`flex items-center justify-between shadow-md bg-dark px-8 lg:py-5 lg:px-16`;
const NavbarBrand = tw.a`relative ml-5 scale-125 top-5 md:ml-0 lg:scale-[1.75] lg:top-8`;
const ListContainer = tw.ul`hidden text-base md:flex md:items-center md:space-x-9 lg:space-x-28`;
const Page = tw.li`cursor-default relative text-center`;
const ListItem = tw.a`text-white cursor-pointer lg:text-xl`;
const ButtonContainer = tw.div`flex items-center bg-dark`;
const LoginButton = tw(
  Button
)`hidden px-5 py-0.5 font-semibold ml-8 text-dark min-h-[15px] min-w-[15px] md:block text-lg bg-white lg:py-1 px-6 lg:text-xl`;

export default Navbar;
