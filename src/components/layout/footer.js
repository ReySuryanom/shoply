import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import tw from 'twin.macro';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterBrand>Shoply.</FooterBrand>
      <p>Copyright &copy; {currentYear}. Created by our team.</p>
      <LogoContainer>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </LogoContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = tw.footer`p-10 text-center text-white bg-dark`;
const FooterBrand = tw.h2`text-lg font-bold`;
const LogoContainer = tw.div`flex justify-center mt-5 space-x-5 text-5xl`;

export default Footer;
