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
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <main className='p-10'>
        <Breadcrumb />
        <div className='relative h-72'>
          <Image
            src='/images/about.png'
            className='rounded-md'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <section className='relative'>
          <div className='relative my-5'>
            <h2 className='text-xl font-bold uppercase after:left-0 after:border-dark after:border-solid after:-bottom-1 after:absolute after:border-b-4 after:w-1/6 '>
              Tentang Kami
            </h2>
          </div>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, laborum similique dicta aliquam libero, cumque iusto
            quod temporibus dolorum sequi nisi exercitationem nam adipisci
            maxime ducimus veniam molestiae delectus, reiciendis ratione fugit
            consectetur dolores! Blanditiis, exercitationem voluptatem, expedita
            velit veniam odio laudantium, non magnam est minima corporis magni
            enim assumenda.
          </p>
        </section>
      </main>
    </Fragment>
  );
}

export default AboutPage;
