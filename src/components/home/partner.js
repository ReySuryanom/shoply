import tw from 'twin.macro';
import Image from 'next/image';
import styled from '@emotion/styled';
import { partnerlogos } from '../../utils/constant';

function Partner() {
  return (
    <PartnerSection>
      <PartnerHeading>Partner Kami</PartnerHeading>
      <LogoContainer>
        {partnerlogos.map(({ src }, index) => (
          <PartnerLogo key={src} variant={index}>
            <Image src={src} layout='fill' objectFit='contain' />
          </PartnerLogo>
        ))}
      </LogoContainer>
    </PartnerSection>
  );
}

const PartnerSection = tw.section`p-10`;
const PartnerHeading = tw.h2`mb-10 text-4xl font-bold text-center`;
const LogoContainer = tw.div`grid grid-cols-2 gap-8`;
const PartnerLogo = styled.section(() => [
  tw`relative`,
  ({ variant }) => partnerlogos[variant].style,
]);

export default Partner;
