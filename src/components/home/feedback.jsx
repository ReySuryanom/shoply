import tw from 'twin.macro';
import Image from 'next/image';

function Feedback() {
  return (
    <FeedbackSection>
      <FeedbackHeading>Apa Kata Pelanggan Kami</FeedbackHeading>
      <FigureContainer>
        <ImageContainer>
          <Image
            src='/images/customer.webp'
            objectFit='cover'
            objectPosition='top'
            tw='rounded-full'
            layout='fill'
            priority
          />
        </ImageContainer>
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
const FeedbackHeading = tw.h2`text-4xl font-bold text-center mb-7 md:text-5xl lg:mb-10`;
const FigureContainer = tw.figure`text-center`;
const ImageContainer = tw.div`relative h-36 w-36 mx-auto my-5 md:w-40 md:h-40 lg:w-44 lg:h-44`;
const FeedbackText = tw.figcaption`italic leading-5 md:text-lg md:px-12 lg:text-xl lg:px-32`;
const ClientName = tw.h3`text-lg font-bold md:text-xl md:mt-1 lg:text-2xl`;
const ClientStatus = tw.p`text-base md:text-lg lg:text-xl`;

export default Feedback;
