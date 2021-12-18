import {
  AiOutlineLoading3Quarters,
  AiOutlineLock,
  AiOutlineUser,
} from 'react-icons/ai';
import { useToasts } from 'react-toast-notifications';
import { InputForm } from '.';
import { Button } from '../ui';
import { useState } from 'react';
import { getUser } from '../../utils/helper';
import { useProductContext } from '../../context/product-context';
import { POST_LOGIN } from '../../reducers/actions';
import { messageNotifications } from '../../utils/constant';
import { useRouter } from 'next/router';

function LoginForm() {
  const router = useRouter();
  const { addToast } = useToasts();
  const { dispatch } = useProductContext();
  const [userInput, setUserInput] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { LOGIN_FAILED, LOGIN_SUCCESS } = messageNotifications;
  const { username, password } = userInput;
  const buttonStyle = `${
    isLoading && 'cursor-not-allowed'
  } text-xl w-full mt-12 mb-0.5 text-white rounded-full bg-dark lg:py-3.5 hover:shadow-md duration-300 ease-in-out`;

  const loginHandler = async () => {
    const user = await getUser('admin');
    if (user.email === username && user.password === password) {
      dispatch({
        type: POST_LOGIN,
        payload: {
          username: 'Admin',
          level: 'admin',
          token: user.token,
        },
      });
      addToast(LOGIN_SUCCESS.message('admin'), LOGIN_SUCCESS.status);
      router.replace('/');
    } else {
      userLogin();
    }
    setIsLoading(false);
  };

  const userLogin = async () => {
    const data = { username, password };
    const user = await getUser('user', 'post', data);

    if (user) {
      dispatch({
        type: POST_LOGIN,
        payload: {
          username,
          level: 'user',
          token: user.token,
        },
      });
      addToast(LOGIN_SUCCESS.message('user'), LOGIN_SUCCESS.status);
      router.replace('/');
    } else {
      addToast(LOGIN_FAILED.message, LOGIN_FAILED.status);
    }
  };

  const submitHandler = async () => {
    setIsLoading(true);
    if (username && password) {
      loginHandler();
    } else {
      addToast(LOGIN_FAILED.message, LOGIN_FAILED.status);
      setIsLoading(false);
    }
  };

  return (
    <form className='flex flex-col w-full text-dark md:px-28 lg:w-1/2 lg:px-10'>
      <h1 className='mb-5 text-4xl font-bold text-center md:text-5xl lg:text-6xl'>
        SHOPLY.
      </h1>
      <div className='space-y-12'>
        <InputForm callback={setUserInput} value={userInput} name='username'>
          <AiOutlineUser className='relative text-2xl left-3 top-2 lg:top-3' />
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
        className={buttonStyle}
        text='Login'
        eventHandler={submitHandler}
        disabled={isLoading}
      >
        <AiOutlineLoading3Quarters
          className={isLoading ? 'inline-block animate-spin' : 'hidden'}
        />
      </Button>
      <small className='text-center font-bold'>DEMO</small>
      <small className='text-center'>username: johnd</small>
      <small className='text-center'>password: m38rmF$</small>
    </form>
  );
}

export default LoginForm;
