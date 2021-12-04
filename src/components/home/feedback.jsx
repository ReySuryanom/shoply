import tw from 'twin.macro';
import Image from 'next/image'

function Feedback() {
  return (
    <FeedbackSection>
      <FeedbackHeading>Apa Kata Pelanggan Kami</FeedbackHeading>
      <FigureContainer>
        <Image
          src='/images/customer.webp'
          width={100}
          height={100}
          objectFit='cover'
          objectPosition='top'
          tw='rounded-full'
          priority
        />
        <FeedbackText>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consectetur, purus id tincidunt feugiat, metus orci sagittis elit,
          quis tempor orci elit id arcu. Proin egestas bibendum efficitur."
        </FeedbackText>
        <ClientName>Adriana Lopez</ClientName>
        <ClientStatus>Client</ClientStatus>
      </FigureContainer>
    </FeedbackSection>
  );
}

const FeedbackSection = tw.section`relative p-10 bg-white`;
const FeedbackHeading = tw.h2`text-4xl font-bold text-center mb-7 md:text-5xl`;
const FigureContainer = tw.figure`text-center`;
const FeedbackText = tw.figcaption`italic leading-5 md:text-lg md:px-12`;
const ClientName = tw.h3`text-lg font-bold md:text-xl md:mt-1`;
const ClientStatus = tw.p`text-base md:text-lg`;

export default Feedback;
