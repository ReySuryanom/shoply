import tw from 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { Button } from '../components/ui';

function LoginPage() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Head>
        <title>Login | Shoply.</title>
        <meta name='description' content='Login Page' />
      </Head>
      <MainContent>
        <ImageContainer>
          <Image src='/images/login.png' alt='Login' layout='fill' objectFit='contain' />
        </ImageContainer>
        <LoginForm>
          <MainHeading>SHOPLY.</MainHeading>
          <InputWrapper>
            <InputContainer>
              <InputComponent placeholder='Username' type='text' />
              <AiOutlineUser tw='relative text-2xl left-3 top-2 lg:top-3' />
            </InputContainer>
            <InputContainer>
              <InputComponent placeholder='Password' type='password' />
              <AiOutlineLock tw='relative text-2xl left-3 top-2 lg:top-3' />
            </InputContainer>
          </InputWrapper>
          <LoginButton text='Login' eventHandler={submitHandler} />
          <Text>lupa password?</Text>
        </LoginForm>
      </MainContent>
    </Fragment>
  );
}

const MainContent = tw.main`max-h-screen px-10 py-20 bg-white lg:flex items-center lg:px-32`;
const MainHeading = tw.h1`mb-5 text-4xl font-bold text-center md:text-5xl lg:text-6xl`;
const ImageContainer = tw.div`hidden relative h-96 w-1/2 lg:block`;
const LoginForm = tw.form`flex flex-col w-full text-dark md:px-28 lg:w-1/2 lg:px-10`;
const InputWrapper = tw.div`space-y-12`;
const InputContainer = tw.div`relative`;
const InputComponent = tw.input`absolute w-full px-10 py-2.5 bg-[#F5F7FB] rounded-full lg:py-3.5`;
const Text = tw.p`text-center`;
const LoginButton = tw(
  Button
)`text-xl w-full mt-12 mb-0.5 text-white rounded-full bg-dark lg:py-3.5`;

export default LoginPage;
