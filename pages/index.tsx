import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import authenticate, {
  LoginWithEmailPayload,
  LoginWithEmailResponsePayload,
} from '../modules/auth';
import { useAuthState } from '../state/useAuthState';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setToken } = useAuthState();
  const router = useRouter();

  const login = useMutation(
    (body: LoginWithEmailPayload) => authenticate({ url: '/login', body }),
    {
      onSuccess: (result: LoginWithEmailResponsePayload) => {
        if (result) {
          setToken(result?.data.accessToken as string);
          router.push('/dashboard/store/');
        }
      },
      onError: (e: any) => {
        toast({
          title: 'Error Occurred',
          description: e.message.replace('[GraphQL]', ''),
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    }
  );

  const toast = useToast();

  const onSubmit = async (data: any) => {
    login.mutate({ ...data });
  };

  return (
    <div className="bg-white h-screen">
      <div className="py-6">
        <div className="bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl flex align-center justify-center">
          <div className="w-full p-8 lg:w-1/2">
            <div className="relative text-center my-10">
              {/* <Image
                src="/images/Anim.gif"
                alt="Logo"
                width="400"
                height="100"
                className="mx-auto"
              /> */}

              <div className="font-bold text-6.6xl text-black">
                Inventory Scale
              </div>
            </div>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                  <span className="font-bold text-base ml-1 italic text-red-400">
                    *
                  </span>
                </label>
                <input
                  className="duration-300 rounded-md border border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  type="email"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                <span className=" text-red-500 text-xs italic w-full">
                  {errors.email?.type === 'pattern' && 'Email field is invalid'}
                  {errors.email?.type === 'required' && 'Email is required'}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                    <span className="font-bold text-base ml-1 italic text-red-400">
                      *
                    </span>
                  </label>
                </div>
                <input
                  className="duration-300 rounded-md border border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  type="password"
                  {...register('password', { required: true })}
                />
                <span className=" text-red-500 text-xs italic w-full">
                  {errors.password?.type === 'required' &&
                    'Password is required'}
                </span>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={login.isLoading}
                  className="py-3 px-3 mt-5 md:mt-5 bg-primary w-full hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg disabled:cursor-not-allowed disabled:bg-slate-500"
                >
                  {login.isLoading ? 'Loading..' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
