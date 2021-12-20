import Link from 'next/link';
import { useRouter } from 'next/router';
import { logout } from '../../utils/helper';

function NavbarLink({ text, link, callback, dispatch, didLogin, isProfile }) {
  const router = useRouter();
  const actions = text === 'Logout' ? () => logout(dispatch, router) : () => callback(false);
  const profileStyle = isProfile ? ' md:hidden' : ' ';
  const specialStyle = (!didLogin && isProfile ? 'hidden' : 'block') + profileStyle;
  const isCurrentPage = link === router.pathname;
  const defaultLink = 'after:border-0 md:after:border-b-2 md:p-0 text-white text-lg md:text-base lg:text-xl list';
  const listStyle = `${isCurrentPage && 'bg-[#302E2C] md:bg-transparent'}`;
  const defaultList = `${listStyle} ${specialStyle} relative cursor-default pr-3 py-1.5 md:p-0 rounded-lg mx-6 md:mx-0 md:rounded-none`;

  return (
    <li className={defaultList} key={text}>
      <Link href={link} passHref>
        <a
          className={`${isCurrentPage && 'list-style'} ${defaultLink} ${specialStyle}`}
          onClick={actions}
          role='button'
        >
          {text}
        </a>
      </Link>
    </li>
  );
}

export default NavbarLink;
