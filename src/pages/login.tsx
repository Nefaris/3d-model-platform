import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormInputs = {
  email: string;
  password: string;
};

const validationSchema: SchemaOf<FormInputs> = object({
  email: string().required().email(),
  password: string().required().min(8).max(32),
});

const Login: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const loginMutation = useMutation(async (loginData: any) => {
    const res = await axios.post('https://trading-platform-3d.herokuapp.com/api/auth/token', loginData);
    return res.data;
  });

  const submitHandler = (formData: FormInputs) => {
    if (loginMutation.isLoading) return;
    loginMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('Successfully logged in!');
      },
      onError: () => {
        toast.error('Invalid credentials!');
      },
    });
  };

  return (
    <Layout>
      <section className="pb-24 xl:pb-32 overflow-hidden">
        <div className="relative pt-24 pb-64 lg:pb-80 bg-darkBlueGray-500 text-center rounded-b-10xl">
          <img
            className="absolute top-0 right-0 h-full -mr-64"
            src="/uinel-assets/images/sign-up/half-circle.svg"
            alt=""
          />
          <div className="container px-6 mx-auto">
            <span className="relative z-10 inline-block py-3 px-7 mb-8 text-lg font-medium font-heading leading-5 text-indigo-500 border border-indigo-500 rounded-6xl">
              Login to your account
            </span>
            <h2 className="mb-12 text-9xl md:text-10xl xl:text-11xl text-white leading-tight font-heading font-medium">
              Lorem ipsum
            </h2>
            <p className="text-xl text-gray-200">Sed porttitor turpis sit amet malesuada porta vivamus lobortis.</p>
          </div>
        </div>
        <div className="container px-6 mx-auto">
          <div className="relative max-w-4xl mx-auto">
            <img
              className="absolute top-0 left-0 max-w-xl -ml-12 -mt-8"
              src="/uinel-assets/images/sign-up/color-circles.png"
              alt=""
            />
            <div className="relative -mt-40 md:-mt-52 py-10 px-8 bg-white rounded-4xl shadow-lg">
              <div className="py-10 px-6 border-2 border-gray-50 rounded-4xl">
                <form
                  noValidate
                  onSubmit={handleSubmit(submitHandler)}
                  className={classNames(loginMutation.isLoading && 'disabled', 'max-w-md mx-auto')}
                >
                  <div className="mb-6">
                    <input
                      className="w-full py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      type="email"
                      placeholder="E-mail"
                      {...register('email')}
                    />
                    {formState.errors.email && (
                      <p className="text-sm text-red-500 ml-4">{formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <input
                      className="w-full py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      type="password"
                      placeholder="Password"
                      {...register('password')}
                    />
                    {formState.errors.password && (
                      <p className="text-sm text-red-500 ml-4">{formState.errors.password.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loginMutation.isLoading}
                    className="block py-5 px-10 mx-auto w-full md:max-w-max text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  >
                    Login
                  </button>
                </form>
              </div>

              <div className="mt-6 flex flex-col items-center space-y-2">
                <Link href="/register">
                  <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500">Don't have account?</a>
                </Link>

                <Link href="/register">
                  <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500">Forgot password?</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
