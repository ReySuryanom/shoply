import { RiComputerLine } from 'react-icons/ri';
import {
  GiTruck,
  GiRibbonMedal,
  GiAlliedStar,
  GiBigDiamondRing,
  GiLargeDress,
  GiClothes,
} from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const servicesList = [
  {
    text: 'Best Quality',
    Icon: <GiAlliedStar className='block w-full m-auto text-6xl md:text-7xl' />,
  },
  {
    text: 'Free Shipping',
    Icon: <GiTruck className='block w-full m-auto text-6xl md:text-7xl' />,
  },
  {
    text: 'Warranty',
    Icon: (
      <GiRibbonMedal className='block w-full m-auto text-6xl md:text-7xl' />
    ),
  },
];

export const iconlists = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/hacktiv8id/',
    icon: <FaFacebook />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/hacktiv8id/',
    icon: <FaInstagram />,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/hacktiv8id',
    icon: <FaTwitter />,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/c/hacktiv8',
    icon: <FaYoutube />,
  },
];

export const partnerLogos = [
  {
    name: 'Jp Morgan',
    src: '/images/jp-morgan.svg',
  },
  {
    name: 'Oysho',
    src: '/images/oysho.svg',
  },
  {
    name: 'Pull Bear',
    src: '/images/pull-bear.svg',
  },
  {
    name: 'Rosewood',
    src: '/images/rosewood.svg',
  },
];

export const categoriesList = [
  { id: 'jewelery', icon: <GiBigDiamondRing />, params: 'jewelery' },
  { id: 'electronics', icon: <RiComputerLine />, params: 'electronics' },
  { id: 'mens-clothing', icon: <GiClothes />, params: "men's clothing" },
  { id: 'womens-clothing', icon: <GiLargeDress />, params: "women's clothing" },
];

export const navbarLinks = [
  { text: 'Home', link: '/' },
  { text: 'Products', link: '/products' },
  { text: 'About', link: '/about' },
];
