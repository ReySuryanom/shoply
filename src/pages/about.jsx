import tw from 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { Breadcrumb } from '../components/ui';

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Us | Shoply.</title>
        <meta name='description' content='About Page' />
      </Head>
      <MainContent>
        <Breadcrumb />
        <ImageContainer>
          <Image
            src='/images/about.png'
            tw='rounded-md md:!object-cover md:object-top'
            layout='fill'
            objectFit='contain'
            priority
          />
        </ImageContainer>
        <AboutSection>
          <AboutContainer>
            <AboutHeading>Tentang Kami</AboutHeading>
          </AboutContainer>
          <AboutParagraf>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, laborum similique dicta aliquam libero, cumque iusto
            quod temporibus dolorum sequi nisi exercitationem nam adipisci
            maxime ducimus veniam molestiae delectus, reiciendis ratione fugit
            consectetur dolores! Blanditiis, exercitationem voluptatem, expedita
            velit veniam odio laudantium, non magnam est minima corporis magni
            enim assumenda.
          </AboutParagraf>
        </AboutSection>
      </MainContent>
    </Fragment>
  );
}

const MainContent = tw.main`p-10`;
const ImageContainer = tw.div`relative h-72 md:h-96`;
const AboutSection = tw.section`relative`;
const AboutContainer = tw.div`relative my-5`;
const AboutHeading = tw.h2`text-xl font-bold uppercase md:text-2xl after:left-0 after:border-dark after:border-solid after:-bottom-1 after:absolute after:border-b-4 after:w-1/6`;
const AboutParagraf = tw.h2`text-justify md:text-lg`;

export default AboutPage;
