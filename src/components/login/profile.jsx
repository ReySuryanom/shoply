import { FaUserCircle } from 'react-icons/fa';
import { Button } from '../ui';
import MenuItem from './menu-item';

function Profile() {
  return (
    <div className='ml-0 md:ml-5 relative group'>
      <Button className='max-w-xs bg-dark rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
        <FaUserCircle className='h-10 w-10 rounded-full text-white' />
      </Button>
      <MenuItem />
    </div>
  );
}

export default Profile;
