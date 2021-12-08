import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='p-10 text-center text-white bg-dark lg:flex lg:justify-between lg:items-center'>
      <div className='lg:flex lg:flex-col lg:text-left'>
        <h2 className='text-lg font-bold'>Shoply.</h2>
        <p>Copyright &copy; {currentYear}. Created by our team.</p>
      </div>
      <div className='flex justify-center mt-5 space-x-5 text-5xl md:text-4xl lg:text-3xl'>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
    </footer>
  );
}

export default Footer;
