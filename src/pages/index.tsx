import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>3D Trading Platform</title>
      </Head>

      <Layout>
        <section>
          <div className='pt-12 pb-24 2xl:pb-44 bg-blueGray-100'>
            <div className='container px-4 mx-auto'>
              <div className='pb-9 text-center border-b border-black border-opacity-5'>
                <div className='relative'>
                  <h2 className='mb-5 md:mb-0 text-9xl xl:text-10xl leading-normal font-heading font-medium text-center'>New in</h2>
                  <span className='md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium'>449 products found</span>
                </div>
              </div>
              <div className='mb-16 flex flex-wrap py-5 border-b border-black border-opacity-10'>
                <div className='w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3'>
                  <a className='flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl' href='#'>
                    <span>Category</span>
                    <svg className='relative top-px ml-6' width={8} height={5} viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z' fill='currentColor' />
                    </svg>
                  </a>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3'>
                  <a className='flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl' href='#'>
                    <span>Size</span>
                    <svg className='relative top-px ml-6' width={8} height={5} viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z' fill='currentColor' />
                    </svg>
                  </a>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3'>
                  <a className='flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl' href='#'>
                    <span>Colors</span>
                    <svg className='relative top-px ml-6' width={8} height={5} viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z' fill='currentColor' />
                    </svg>
                  </a>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3'>
                  <a className='flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl' href='#'>
                    <span>Price</span>
                    <svg className='relative top-px ml-6' width={8} height={5} viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z' fill='currentColor' />
                    </svg>
                  </a>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3'>
                  <a className='flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl' href='#'>
                    <span>Brand</span>
                    <svg className='relative top-px ml-6' width={8} height={5} viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z' fill='currentColor' />
                    </svg>
                  </a>
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-20 md:mb-40'>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/iphone-12-pro.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Apple iPhone 12 Pro (128GB) Silver</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>544.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/headphones-sony.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Headphones SONY 1l X-O</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>44.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/macbook-pro-17.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>MacBook Pro 17’’</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>2090.59</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/smartwatch-green.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Smartwatch Uistore Homme Watch 19</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>120.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/macbook-pro-15.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>MacBook Pro 15’’ new</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>1780.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/smartwatch-yellow.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Xui Smartwatch YW</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>100.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/headphones-blacksaint.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Headphones Blacksaint 3</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>42.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/smartphone.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Wiko Y51 1GB/16GB 5.45’’ Syrena Lol</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>376.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24 xl:mb-0'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/xiaomi-camera.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Kamera Xiaomi Mi Home Security Camera 2K 360°</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>37.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24 lg:mb-0'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/smartwatch-green.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Smartwatch Uistore Homme Watch 19</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>120.90</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24 sm:mb-0'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover mx-auto' src='uinel-assets/images/ecommerce-product-list/xiaomi-camera2.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Kamera Xiaomi Mi Home Security Camera 2K Pro 360°</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>29.59</span>
                  </p>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3'>
                  <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl'>
                    <Link href='/product'>
                      <a className='block mx-auto max-w-max'>
                        <img className='h-40 object-cover' src='uinel-assets/images/ecommerce-product-list/smartwatch-blue.png' alt='' />
                      </a>
                    </Link>
                  </div>
                  <Link href='/product'>
                    <a href='#'>
                      <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Xui Smartwatch Pr</p>
                    </a>
                  </Link>
                  <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
                    <span className='text-base pr-2'>$</span>
                    <span>44.90</span>
                  </p>
                </div>
              </div>
              <div className='sm:mx-auto sm:w-96'><a className='block py-5 px-10 w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl' href='#'>More products</a></div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
