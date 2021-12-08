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
      <main className='p-10'>
        <Breadcrumb />
        <div className='relative w-full lg:flex space-x-7'>
          <div className='relative w-2/5 h-72 md:h-96'>
            <Image
              className='rounded-md md:!object-cover md:object-top'
              src='/images/about.png'
              alt='Author'
              layout='fill'
              objectFit='contain'
              priority
            />
          </div>
          <section className='relative w-3/5'>
            <div className='relative my-5 lg:mt-0'>
              <h2 className='text-xl font-bold uppercase md:text-2xl after:left-0 after:border-dark after:border-solid after:-bottom-1 after:absolute after:border-b-4 after:w-1/6'>
                Tentang Kami
              </h2>
            </div>
            <p className='text-justify md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, laborum similique dicta aliquam libero, cumque iusto
              quod temporibus dolorum sequi nisi exercitationem nam adipisci
              maxime ducimus veniam molestiae delectus, reiciendis ratione fugit
              consectetur dolores! Blanditiis, exercitationem voluptatem,
              expedita velit veniam odio laudantium, non magnam est minima
              corporis magni enim assumenda.
            </p>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default AboutPage;
