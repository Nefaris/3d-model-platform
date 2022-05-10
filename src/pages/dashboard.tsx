import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { useAuth } from '../providers/AuthProvider';

const Dashboard: NextPage = () => {
  const { user, logout } = useAuth();

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
                    src={`https://avatars.dicebear.com/api/adventurer-neutral/${user!.username}.svg`}
                    alt=""
                  />
                  <h2 className="text-xl font-heading font-medium leading-10">
                    {user!.firstName} {user!.lastName}
                  </h2>
                  <p className="mb-10 text-darkBlueGray-400 font-heading">{user!.username}</p>
                  <div className="flex flex-wrap justify-center mb-10">
                    <img className="mr-3" src="uinel-assets/elements/dashboard-content/plane.svg" alt="" />
                    <p className="text-sm font-heading font-medium tracking-tighter">{user!.email}</p>
                  </div>
                  <div className="w-full sm:mx-auto max-w-sm">
                    <input
                      className="w-full text-center py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      type="password"
                      placeholder="New password"
                    />

                    <button className="mt-2 block py-5 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                      Update password
                    </button>
                  </div>

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
                <div className="w-full md:w-auto mb-10 md:mb-0">
                  <h3 className="text-3xl font-heading font-medium leading-10">Sales Information</h3>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="inline-block w-full min-w-max overflow-hidden">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="pb-8 text-sm text-body text-left text-opacity-40 font-heading font-semibold uppercase">
                          Product name
                        </th>
                        <th className="pb-8 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                          Ordered
                        </th>
                        <th className="pb-8 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                          Remaining
                        </th>
                        <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                          Status
                        </th>
                        <th className="pb-8 pr-10 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                            <div className="flex items-center">
                              <img
                                className="mr-6 h-10"
                                src="uinel-assets/elements/dashboard-tables/placeholder-icon5.png"
                                alt=""
                              />
                              <div className="flex-shrink-0">
                                <h4 className="font-heading font-medium leading-4">Drawing course</h4>
                                <span className="text-sm text-darkBlueGray-400 leading-3">Graphi Design</span>
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
                      <tr>
                        <td className="p-0">
                          <div className="flex items-center pl-8 pr-4 h-20 bg-white rounded-tl-5xl rounded-bl-5xl">
                            <div className="flex items-center">
                              <img
                                className="mr-6 h-10"
                                src="uinel-assets/elements/dashboard-tables/placeholder-icon4.png"
                                alt=""
                              />
                              <div className="flex-shrink-0">
                                <h4 className="font-heading font-medium leading-4">New: Sketch &amp; Figma 2022</h4>
                                <span className="text-sm text-darkBlueGray-400 leading-3">UX/UI Design</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                            <span className="font-heading text-darkBlueGray-400">8</span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                            <span className="font-heading text-darkBlueGray-400">245</span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                            <span className="py-1 px-3 text-sm text-green-900 font-medium bg-green-200 rounded-full">
                              Paid
                            </span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-end pr-6 h-20 text-right bg-white rounded-tr-5xl rounded-br-5xl">
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
                      <tr>
                        <td className="p-0">
                          <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                            <div className="flex items-center">
                              <img
                                className="mr-6 h-10"
                                src="uinel-assets/elements/dashboard-tables/placeholder-icon3.png"
                                alt=""
                              />
                              <div className="flex-shrink-0">
                                <h4 className="font-heading font-medium leading-4">3D course</h4>
                                <span className="text-sm text-darkBlueGray-400 leading-3">Design</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                            <span className="font-heading text-darkBlueGray-400">8</span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                            <span className="font-heading text-darkBlueGray-400">375</span>
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
                      <tr>
                        <td className="p-0">
                          <div className="flex items-center pl-8 pr-4 h-20 bg-white rounded-tl-5xl rounded-bl-5xl">
                            <div className="flex items-center">
                              <img
                                className="mr-6 h-10"
                                src="uinel-assets/elements/dashboard-tables/placeholder-icon2.png"
                                alt=""
                              />
                              <div className="flex-shrink-0">
                                <h4 className="font-heading font-medium leading-4">Design classes 5</h4>
                                <span className="text-sm text-darkBlueGray-400 leading-3">Graphic Design</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                            <span className="font-heading text-darkBlueGray-400">14</span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                            <span className="font-heading text-darkBlueGray-400">443</span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                            <span className="py-1 px-3 text-sm text-green-900 font-medium bg-green-200 rounded-full">
                              Paid
                            </span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex items-center justify-end pr-6 h-20 text-right bg-white rounded-tr-5xl rounded-br-5xl">
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
                      <tr>
                        <td className="p-0">
                          <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                            <div className="flex items-center">
                              <img
                                className="mr-6 h-10"
                                src="uinel-assets/elements/dashboard-tables/placeholder-icon1.png"
                                alt=""
                              />
                              <div className="flex-shrink-0">
                                <h4 className="font-heading font-medium leading-4">New for mobile design</h4>
                                <span className="text-sm text-darkBlueGray-400 leading-3">Mobile Design</span>
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

export default Dashboard;
