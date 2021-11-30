import Image from 'next/image';
import { GiTruck, GiRibbonMedal, GiAlliedStar } from 'react-icons/gi';

export const serviceLists = [
  {
    text: 'Best Quality',
    Icon: <GiAlliedStar className='block m-auto text-6xl' />,
  },
  {
    text: 'Free Shipping',
    Icon: <GiTruck className='block m-auto text-6xl' />,
  },
  {
    text: 'Warranty',
    Icon: <GiRibbonMedal className='block m-auto text-6xl' />,
  },
];

export const partnerlogos = [
  {
    style: 'h-7',
    src: '/images/jp-morgan.png',
  },
  {
    style: 'h-6',
    src: '/images/oysho.png',
  },
  {
    style: 'h-5',
    src: '/images/pull-bear.png',
  },
  {
    style: 'h-8',
    src: '/images/rosewood.png',
  },
];
