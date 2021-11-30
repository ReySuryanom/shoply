import tw from 'twin.macro';

function Benefit({ text, Icon }) {
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

const BenefitContainer = tw.div`text-center`;
const BenefitHeading = tw.h3`text-2xl font-medium`;
const BenefitParagraf = tw.p`text-base`;

export default Benefit;
