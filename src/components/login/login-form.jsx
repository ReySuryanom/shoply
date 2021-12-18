import { useToasts } from 'react-toast-notifications';
import { InputForm } from '.';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Button } from '../ui';
import { useState } from 'react';

function LoginForm() {
  const { addToast } = useToasts();
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const { email, password } = userInput;

  const submitHandler = () => {
    if (email && password) {
      alert('ff');
    } else {
      const message = 'Login Failed, please enter valid email and password.';
      addToast(message, { appearance: 'warning' });
    }
  };

  return (
    <form className='flex flex-col w-full text-dark md:px-28 lg:w-1/2 lg:px-10'>
      <h1 className='mb-5 text-4xl font-bold text-center md:text-5xl lg:text-6xl'>
        SHOPLY.
      </h1>
      <div className='space-y-12'>
        <InputForm callback={setUserInput} value={userInput} name='email'>
          <AiOutlineMail className='relative text-2xl left-3 top-2 lg:top-3' />
        </InputForm>
        <InputForm
          callback={setUserInput}
          value={userInput}
          name='password'
          type='password'
        >
          <AiOutlineLock className='relative text-2xl left-3 top-2 lg:top-3' />
        </InputForm>
      </div>
      <Button
        className='text-xl w-full mt-12 mb-0.5 text-white rounded-full bg-dark lg:py-3.5 hover:shadow-md duration-300 ease-in-out'
        text='Login'
        eventHandler={submitHandler}
      />
    </form>
  );
}

export default LoginForm;
