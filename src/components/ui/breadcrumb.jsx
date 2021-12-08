function Breadcrumb() {
  const format = '\xa0\xa0/\xa0\xa0';

  return (
    <div className='px-2.5 py-3.5 bg-white mb-7 shadow-md rounded-md'>
      <p className='text-base md:text-lg'>
        Home{format}
        <span className='font-bold'>About</span>
      </p>
    </div>
  );
}

export default Breadcrumb;
