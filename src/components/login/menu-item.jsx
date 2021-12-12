function MenuItem() {
  const menu = ['My Cart', 'Logout'];

  return (
    <div
      className='hidden origin-top-right absolute right-0 mt-2.5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none group-focus-within:block'
      role='menu'
      aria-orientation='vertical'
    >
      {menu.map((item) => (
        <a
          key={item}
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer'
          role='menuitem'
          tabIndex='-1'
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default MenuItem;
