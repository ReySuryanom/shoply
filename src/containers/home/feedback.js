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
          objectPosition='center'
          className='rounded-full'
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
const FeedbackHeading = tw.section`text-4xl font-bold text-center mb-7`;
const FigureContainer = tw.figure`text-center`;
const FeedbackText = tw.figure`italic leading-5`;
const ClientName = tw.h3`text-lg font-bold`;
const ClientStatus = tw.h3`text-base`;

export default Feedback;
