function MenuItem() {
  return (
    <div
      className='hidden origin-top-right absolute right-0 mt-2.5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none group-focus-within:block'
      role='menu'
      aria-orientation='vertical'
    >
      <a
        className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200'
        role='menuitem'
        tabIndex='-1'
      >
        Logout
      </a>
    </div>
  );
}

export default MenuItem;
