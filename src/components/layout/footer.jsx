import { iconlists } from '../../utils/constant';
import { Button } from '../ui';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='p-10 flex flex-col text-center text-white bg-dark lg:justify-between lg:items-center lg:flex-row'>
      <div className='lg:flex lg:flex-col lg:text-left'>
        <h2 className='text-lg font-bold'>Shoply.</h2>
        <p>Copyright &copy; {currentYear}. Created by our team.</p>
      </div>
      <div className='flex items-center justify-center mt-5 space-x-2 text-4xl md:text-3xl lg:mt-0'>
        {iconlists.map(({ icon, link, name }) => (
          <Button
            className='transition-colors duration-300 ease-in-out rounded-full hover:text-gray-300 focus:text-gray-300 focus:ring-4 focus:ring-yellow-400 focus:outline-none'
            eventHandler={() => window.open(link, '_blank')}
            key={link}
            ariaLabel={name}
          >
            {icon}
          </Button>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
