import { FaUserCircle } from 'react-icons/fa';
import { Button } from '../ui';
import MenuItem from './menu-item';

function Profile({ username }) {
  return (
    <div className='hidden relative group md:block'>
      <div className='flex items-center text-white'>
        <Button className='max-w-xs bg-dark rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
          <FaUserCircle className='h-10 w-10 rounded-full' />
        </Button>
        <p className='text-lg text-white ml-1.5 capitalize'>{username}</p>
      </div>
      <MenuItem />
    </div>
  );
}

export default Profile;
