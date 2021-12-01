import tw from 'twin.macro';
import Head from 'next/head';
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
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <MainContent>
        <MainHeading>SHOPLY.</MainHeading>
        <LoginForm>
          <InputWrapper>
            <InputContainer>
              <InputComponent placeholder='Username' type='text' />
              <AiOutlineUser tw='relative text-2xl left-3 top-2' />
            </InputContainer>
            <InputContainer>
              <InputComponent placeholder='Password' type='password' />
              <AiOutlineLock tw='relative text-2xl left-3 top-2' />
            </InputContainer>
          </InputWrapper>
          <Button
            tw='text-xl w-full mt-12 mb-0.5 text-white rounded-full bg-dark'
            text='Masuk'
            eventHandler={submitHandler}
          />
          <Text>lupa password?</Text>
        </LoginForm>
      </MainContent>
    </Fragment>
  );
}

const MainContent = tw.main`max-h-screen px-10 py-20 bg-white`;
const MainHeading = tw.h1`mb-5 text-4xl font-bold text-center`;
const LoginForm = tw.form`flex flex-col w-full text-dark`;
const InputWrapper = tw.div`space-y-12`;
const InputContainer = tw.div`relative`;
const InputComponent = tw.input`absolute w-full px-10 py-2.5 bg-[#F5F7FB] rounded-full`;
const Text = tw.p`text-center`;

export default LoginPage;
