import tw from 'twin.macro';
import Benefits from './benefits';
import { servicesList } from '../../utils/constant';

function Services() {
  return (
    <ServiceSection>
      <ServiceHeading>Manfaat Menggunakan Layanan Kami</ServiceHeading>
      <BenefitWrapper>
        {servicesList.map((item) => (
          <Benefits {...item} key={item.text} />
        ))}
      </BenefitWrapper>
    </ServiceSection>
  );
}
const ServiceSection = tw.section`p-10 bg-white`;
const ServiceHeading = tw.h2`text-4xl font-bold text-center mb-7 md:text-5xl md:px-5`;
const BenefitWrapper = tw.div`grid divide-y-2 gap-y-10`;

export default Services;
