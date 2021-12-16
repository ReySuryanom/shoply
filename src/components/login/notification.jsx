function Motification({ total }) {
  return (
    <span className='absolute text-sm tracking-[-.08em] tabular-nums rounded-full w-[20px] h-[20px] text-center bg-white text-dark font-bold top-0 -right-1 m-auto'>
      {total}
    </span>
  );
}

export default Motification;
