import tw from 'twin.macro';
import { GiTruck, GiRibbonMedal, GiAlliedStar } from 'react-icons/gi';

export const serviceLists = [
  {
    text: 'Best Quality',
    Icon: <GiAlliedStar tw='block m-auto text-6xl' />,
  },
  {
    text: 'Free Shipping',
    Icon: <GiTruck tw='block m-auto text-6xl' />,
  },
  {
    text: 'Warranty',
    Icon: <GiRibbonMedal tw='block m-auto text-6xl' />,
  },
];

export const partnerlogos = [
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
