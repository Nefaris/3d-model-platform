import { FC } from 'react';
import { useAuth } from '../providers/AuthProvider';
import Link from 'next/link';

const Navbar: FC = () => {
  const auth = useAuth();

  return (
    <section className="text-gray-50 font-heading font-medium relative bg-indigo-700">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between py-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <button className="navbar-burger hidden lg:block focus:outline-none">
                <svg width={25} height={16} viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={25} height={2} fill="white" />
                  <rect y={14} width={25} height={2} fill="white" />
                </svg>
              </button>
              <div className="hidden lg:block w-px h-8 bg-white mx-8 md:ml-14 md:mr-12 bg-opacity-10" />
              <Link href="/">
                <a>
                  <img className="h-12" src="/uinel-assets/logos/uinel-gray-white.svg" alt="" />
                </a>
              </Link>
            </div>
            <div className="hidden xl:flex items-center">
              {auth.user ? (
                <Link href="/dashboard">
                  <a className="flex items-center text-white" href="#">
                    <span>{auth.user.username}</span>
                    <img
                      className="ml-4 rounded-full h-12 w-12 border-2 border-white"
                      src={`https://avatars.dicebear.com/api/adventurer-neutral/${auth.user.username}.svg`}
                      alt=""
                    />
                  </a>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <a className="uppercase text-white text-sm font-body font-bold border-2 border-white border-opacity-30 rounded-full py-3 px-5 tracking-wide hover:border-white">
                      <span className="block mt-px">Login</span>
                    </a>
                  </Link>

                  <div className="w-px h-8 bg-white mx-4 bg-opacity-20" />

                  <Link href="/register">
                    <a className="uppercase text-white text-sm font-body font-bold border-2 border-white border-opacity-30 rounded-full py-3 px-5 tracking-wide hover:border-white">
                      <span className="block mt-px">Create account</span>
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
          <button className="navbar-burger self-center xl:hidden focus:outline-none">
            <svg width={25} height={16} viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width={25} height={2} fill="currentColor" />
              <rect y={14} width={25} height={2} fill="currentColor" />
            </svg>
          </button>
        </nav>
        <div className="navbar-menu hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
          <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
            <div className="flex items-center pl-16 mb-8">
              <a className="text-2xl text-gray-800 font-bold" href="#">
                <img className="h-12" src="/uinel-assets/logos/uinel-gray-black.svg" alt="" />
              </a>
            </div>
            <div className="flex items-center mb-10 px-10">
              <a className="flex items-center ml-1" href="#">
                <img className="ml-6" src="/uinel-assets/elements/navigations/avatar-online.png" alt="" />
                <img className="ml-6" src="/uinel-assets/elements/navigations/arrow-down-gray.svg" alt="" />
              </a>
              <a className="text-gray-400 hover:text-gray-500 ml-auto" href="#">
                <svg width={20} height={23} viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 18.0121H19"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.87891 22H10.8789"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div>
              <ul>
                <li className="mb-1 px-10">
                  <a className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">
                    New tools
                  </a>
                </li>
                <li className="mb-1 px-10">
                  <a className="flex items-center pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">
                    <span>Products</span>
                    <svg
                      className="ml-4"
                      width={8}
                      height={5}
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="mb-1 px-10">
                  <a className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto px-10">
              <button className="py-3 px-5 mt-6 w-full font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
                <span className="block mt-px">New project</span>
              </button>
              <p className="mt-6 mb-4 text-center">
                <span className="text-sm text-darkBlueGray-400">2021 ?? Uinel. All rights reserved.</span>
              </p>
            </div>
          </nav>
          <button className="navbar-close absolute top-5 p-6 right-5">
            <div className="absolute top-3">
              <span className="absolute w-px h-6 bg-black transform -rotate-45" />
              <span className="absolute w-px h-6 bg-black transform rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
