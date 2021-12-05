import tw from 'twin.macro';
import { RiComputerLine } from 'react-icons/ri';
import {
  GiTruck,
  GiRibbonMedal,
  GiAlliedStar,
  GiBigDiamondRing,
  GiLargeDress,
  GiClothes,
} from 'react-icons/gi';

export const servicesList = [
  {
    text: 'Best Quality',
    Icon: <GiAlliedStar tw='block m-auto text-6xl md:text-7xl' />,
  },
  {
    text: 'Free Shipping',
    Icon: <GiTruck tw='block m-auto text-6xl md:text-7xl' />,
  },
  {
    text: 'Warranty',
    Icon: <GiRibbonMedal tw='block m-auto text-6xl md:text-7xl' />,
  },
];

export const partnerLogos = [
  {
    style: tw`h-7`,
    src: '/images/jp-morgan.png',
  },
  {
    style: tw`h-6`,
    src: '/images/oysho.png',
  },
  {
    style: tw`h-5`,
    src: '/images/pull-bear.png',
  },
  {
    style: tw`h-8`,
    src: '/images/rosewood.png',
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
