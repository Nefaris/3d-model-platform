import type { NextPage, NextPageContext } from 'next';
import { useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import Layout from '../../components/Layout';
import { useAuth } from '../../providers/AuthProvider';
import { getTokenFromContext, getUserFromContext } from '../../utils/auth';
import Link from 'next/link';
import { Product, User } from '../../types/global';

export async function getServerSideProps(context: NextPageContext) {
  const user = await getUserFromContext(context);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const token = await getTokenFromContext(context);
  const userModelsRes = await fetch('https://trading-platform-3d.herokuapp.com/api/products/own-models/', {
    headers: { Authorization: `Bearer ${token}` },
  });

  const userModels = await userModelsRes.json();

  return { props: { user, userModels: userModels } };
}

type ChangePasswordFormInputs = {
  password: string;
};

const validationSchema: SchemaOf<ChangePasswordFormInputs> = object({
  password: string().required().min(8).max(32),
});

const Index: NextPage<{ user: User; userModels: Product[] }> = ({ user, userModels }) => {
  const { logout } = useAuth();

  const { register, handleSubmit, formState } = useForm<ChangePasswordFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      password: '',
    },
  });

  const submitHandler = async (formData: ChangePasswordFormInputs) => {
    console.log(formData);
  };

  return (
    <>
      <Layout type="dashboard">
        <section className="py-8 bg-white">
          <div className="container px-4 mx-auto">
            <div className="relative bg-gray-50 rounded-8xl">
              <img
                className="h-40 lg:h-auto w-full mb-8 object-cover rounded-t-5xl"
                src="uinel-assets/elements/dashboard-content/bg-linear.svg"
                alt=""
              />
              <div className="px-4 pb-12">
                <div className="relative -mt-24 px-4 md:px-9 pb-6 pt-16 mb-8 text-center bg-white rounded-5xl shadow-2xl">
                  <img
                    className="w-24 h-24 rounded-full border-8 border-white mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.username}.svg`}
                    alt=""
                  />
                  <h2 className="text-xl font-heading font-medium leading-10">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="mb-10 text-darkBlueGray-400 font-heading">{user.username}</p>
                  <div className="flex flex-wrap justify-center mb-10">
                    <img className="mr-3" src="uinel-assets/elements/dashboard-content/plane.svg" alt="" />
                    <p className="text-sm font-heading font-medium tracking-tighter">{user.email}</p>
                  </div>
                  <form onSubmit={handleSubmit(submitHandler)} className="w-full sm:mx-auto max-w-sm">
                    <input
                      {...register('password')}
                      disabled={formState.isSubmitting}
                      className={classNames(
                        'w-full text-center py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
                        formState.isSubmitting && 'disabled',
                      )}
                      type="password"
                      placeholder="New password"
                    />

                    <button
                      type="submit"
                      disabled={formState.isSubmitting}
                      className={classNames(
                        'mt-2 block py-5 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl',
                        formState.isSubmitting && 'disabled',
                      )}
                    >
                      Update password
                    </button>
                  </form>

                  <div className="w-full sm:mx-auto max-w-sm mt-10">
                    <button
                      onClick={logout}
                      className="mt-2 block py-5 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-blueGray-50">
          <div className="container px-4 mx-auto">
            <div className="pt-14 px-8 pb-12 bg-white rounded-5xl">
              <div className="flex flex-wrap mb-8 justify-between items-center">
                <div className="flex justify-between w-full mb-10 md:mb-0">
                  <h3 className="text-3xl font-heading font-medium leading-10">Moje modele</h3>
                  <Link href="/dashboard/add-model">
                    <a className="block py-2 px-7 text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                      Dodaj model
                    </a>
                  </Link>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="inline-block w-full min-w-max overflow-hidden">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="pb-2 text-sm text-body text-left text-opacity-40 font-heading font-semibold uppercase">
                          Product name
                        </th>
                        <th className="pb-2 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                          Ordered
                        </th>
                        <th className="pb-2 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                          Remaining
                        </th>
                        <th className="pb-2 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                          Status
                        </th>
                        <th className="pb-2 pr-10 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userModels.map((model: Product) => (
                        <tr key={model.id}>
                          <td className="py-1">
                            <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                              <div className="flex items-center">
                                <img
                                  className="mr-6 h-10 w-10 object-contain rounded"
                                  src={model.previewImage}
                                  alt=""
                                />
                                <div className="flex-shrink-0">
                                  <h4 className="font-heading font-medium leading-4">{model.name}</h4>
                                  <span className="text-sm text-darkBlueGray-400 leading-3">{model.description}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                              <span className="font-heading text-darkBlueGray-400">12</span>
                            </div>
                          </td>
                          <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                              <span className="font-heading text-darkBlueGray-400">500</span>
                            </div>
                          </td>
                          <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                              <span className="py-1 px-3 text-sm text-green-900 font-medium bg-green-200 rounded-full">
                                Paid
                              </span>
                            </div>
                          </td>
                          <td className="p-0">
                            <div className="flex items-center justify-end pr-6 h-20 text-right bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                              <div className="flex justify-end">
                                <a
                                  className="inline-flex w-8 h-8 mr-2 items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-2xl"
                                  href="#"
                                >
                                  <img src="uinel-assets/elements/dashboard-tables/button-icon3.svg" alt="" />
                                </a>
                                <a
                                  className="inline-flex w-8 h-8 mr-2 items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-2xl"
                                  href="#"
                                >
                                  <img src="uinel-assets/elements/dashboard-tables/button-icon1.svg" alt="" />
                                </a>
                                <a
                                  className="inline-flex w-8 h-8 items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-2xl"
                                  href="#"
                                >
                                  <img src="uinel-assets/elements/dashboard-tables/button-icon2.svg" alt="" />
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
