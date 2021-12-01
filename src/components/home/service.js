import tw from 'twin.macro';
import { Benefit } from '.';
import { serviceLists } from '../../utils/constant';

function Service() {
  return (
    <ServiceSection>
      <ServiceHeading>Manfaat Menggunakan Layanan Kami</ServiceHeading>
      <BenefitWrapper>
        {serviceLists.map((item) => (
          <Benefit {...item} key={item.text} />
        ))}
      </BenefitWrapper>
    </ServiceSection>
  );
}
const ServiceSection = tw.section`p-10 bg-white`;
const ServiceHeading = tw.h2`text-4xl font-bold text-center mb-7`;
const BenefitWrapper = tw.div`grid divide-y-2 gap-y-10`;

export default Service;
