import tw from 'twin.macro';
import Image from 'next/image'
import { partnerlogos } from '../../utils/constant';

function Partner() {
  return (
    <PartnerSection>
      <PartnerHeading>Partner Kami</PartnerHeading>
      <LogoContainer>
        {partnerlogos.map(({ style, src }) => (
          <div key={src} className={`relative ${style}`}>
            <Image src={src} layout='fill' objectFit='contain' />
          </div>
        ))}
      </LogoContainer>
    </PartnerSection>
  );
}

const PartnerSection = tw.section`p-10`;
const PartnerHeading = tw.h2`mb-10 text-4xl font-bold text-center`;
const LogoContainer = tw.div`grid grid-cols-2 gap-8`;

export default Partner;
