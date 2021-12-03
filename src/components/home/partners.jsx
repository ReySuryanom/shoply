import tw from 'twin.macro';
import Image from 'next/image';
import styled from '@emotion/styled';
import { partnerLogos } from '../../utils/constant';

function Partners() {
  return (
    <PartnerSection>
      <PartnerHeading>Partner Kami</PartnerHeading>
      <LogoContainer>
        {partnerLogos.map(({ src }, index) => (
          <PartnerLogo key={src} variant={index}>
            <Image src={src} layout='fill' objectFit='contain' />
          </PartnerLogo>
        ))}
      </LogoContainer>
    </PartnerSection>
  );
}

const PartnerSection = tw.section`p-10`;
const PartnerHeading = tw.h2`mb-10 text-4xl font-bold text-center md:text-5xl`;
const LogoContainer = tw.div`grid gap-8 grid-cols-2 md:grid-cols-4`;
const PartnerLogo = styled.section(() => [
  tw`relative`,
  ({ variant }) => partnerLogos[variant].style,
]);

export default Partners;
