import { useEffect } from 'react';
import { CALCULATE_CART } from '../../reducers/actions';

function Motification({ total, dispatch }) {
  useEffect(() => {
    dispatch({ type: CALCULATE_CART });
  }, [total]);

  return (
    <span className='absolute text-sm tracking-[-.08em] tabular-nums rounded-full w-[20px] h-[20px] text-center bg-white text-dark font-bold top-0 -right-1 m-auto'>
      {total}
    </span>
  );
}

export default Motification;
