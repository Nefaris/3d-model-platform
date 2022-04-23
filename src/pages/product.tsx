import { NextPage } from 'next';
import Layout from '../components/Layout';

const Product: NextPage = () => {
  return (
    <Layout>
      <section className='pt-12 pb-24 bg-darkBlueGray-500 rounded-b-10xl overflow-hidden'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full lg:w-1/2 px-4 xl:pr-20'>
              <div className='lg:max-w-lg mb-6'>
                <span className='text-xs text-gray-400 tracking-wide'>APPLE #3299803</span>
                <h2 className='mt-6 mb-4 text-5xl md:text-7xl lg:text-9xl text-white font-heading font-semibold'>Apple iPhone 12 Pro (128GB) - Silver</h2>
                <p className='flex items-center mb-6'>
                  <span className='mr-2 text-sm text-blue-500 font-medium'>$</span>
                  <span className='text-3xl text-blue-500 font-medium'>44.90</span>
                </p>
                <p className='text-lg text-gray-100'>The nulla commodo, commodo eros a lor, tristique lectus. Lorem sad 128 GB silver.</p>
              </div>
              <div className='text-white'>
                <h4 className='mb-6 font-heading font-medium'>More information</h4>
                <button className='flex justify-between items-center w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 leading-7 rounded-2xl border-2 border-blueGray-900 hover:border-blueGray-800'>
                  <h3 className='text-lg font-heading font-medium'>Shipping &amp; returns</h3>
                  <span>
              <svg width={12} height={8} viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z' fill='#ffffff' />
              </svg>
            </span>
                </button>
                <button className='flex justify-between items-center w-full pl-6 lg:pl-12 pr-6 py-4 leading-7 rounded-2xl border-2 border-blueGray-900 hover:border-blueGray-800'>
                  <h3 className='text-lg font-heading font-medium'>Product details</h3>
                  <span>
              <svg width={12} height={8} viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z' fill='#ffffff' />
              </svg>
            </span>
                </button>
              </div>
            </div>
            <div className='w-full lg:w-1/2 px-4 xl:pl-20 mb-16 lg:mb-0 order-first lg:order-last'>
              <div className='relative md:w-2/3 lg:w-auto mx-auto mb-14'>
                <img className='px-4 md:px-0' src='uinel-assets/images/ecommerce-product-info/ph-photo1.png' alt='' />
                <button className='absolute top-1/2 left-0 -ml-1 md:-ml-10 text-white'>
                  <svg width={8} height={12} viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M7.21015 10.4594C7.59661 10.8128 7.59661 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.0966174 6.28579 -0.0966173 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880364 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='absolute top-1/2 right-0 -mr-1 md:-mr-10 text-white'>
                  <svg width={8} height={12} viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896662 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z' fill='currentColor' />
                  </svg>
                </button>
                <p className='hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 text-sm text-gray-300'>Roll over image to zoom in</p>
              </div>
              <div className='flex flex-wrap md:px-10 -mx-1'>
                <button className='w-1/2 md:w-1/4 px-1 mb-1 md:mb-0 rounded-4xl'>
                  <img className='w-full h-full' src='uinel-assets/images/ecommerce-product-info/product-ph1.png' alt='' />
                </button>
                <button className='w-1/2 md:w-1/4 px-1 mb-1 md:mb-0 border-2 border-blue-500 rounded-4xl'>
                  <img className='w-full h-full' src='uinel-assets/images/ecommerce-product-info/product-ph4.png' alt='' />
                </button>
                <button className='w-1/2 md:w-1/4 px-1 rounded-4xl'>
                  <img className='w-full h-full' src='uinel-assets/images/ecommerce-product-info/product-ph3.png' alt='' />
                </button>
                <button className='w-1/2 md:w-1/4 px-1 rounded-4xl'>
                  <img className='w-full h-full' src='uinel-assets/images/ecommerce-product-info/product-ph2.png' alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
