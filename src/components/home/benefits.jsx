import tw from 'twin.macro';

function Benefits({ text, Icon }) {
  return (
    <BenefitContainer>
      {Icon}
      <BenefitHeading>{text}</BenefitHeading>
      <BenefitParagraf>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        consectetur, purus id
      </BenefitParagraf>
    </BenefitContainer>
  );
}

const BenefitContainer = tw.div`text-center md:px-24`;
const BenefitHeading = tw.h3`text-2xl font-medium md:text-3xl`;
const BenefitParagraf = tw.p`text-base md:text-lg`;

export default Benefits;
