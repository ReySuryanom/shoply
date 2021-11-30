import Image from 'next/image';
import { GiRoundStar } from 'react-icons/gi';

function CardItem() {
  return (
    <article className='w-full overflow-hidden shadow-md rounded-xl'>
      <div className='relative w-full pt-6 bg-white' />
      <div className='relative w-auto h-64 bg-white'>
        <Image
          alt='gambar'
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          layout='fill'
          objectFit='contain'
          priority
        />
      </div>
      <div className='relative w-full text-center bg-white py-3.5 space-y-1.5'>
        <h3 className='text-lg font-bold'>Solid Gold Petite Micropave</h3>
        <span className='flex justify-center space-x-1.5 text-yellow-400'>
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
        </span>
        <p className='text-gray-500 text-md'>18 reviews</p>
        <h4 className='text-lg font-bold lining-nums tabular-nums'>168$</h4>
      </div>
    </article>
  );
}

export default CardItem;
