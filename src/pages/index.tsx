import axios from 'axios';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/global';

export async function getServerSideProps() {
  const res = await axios.get<Product[]>('https://trading-platform-3d.herokuapp.com/api/products?page=1');

  return {
    props: { initialProducts: res.data },
  };
}

const fetchProducts = async (page: number) => {
  const res = await axios.get(`https://trading-platform-3d.herokuapp.com/api/products?page=${page}`);
  return res.data;
};

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ initialProducts }) => {
  const [page, setPage] = useState(1);
  const products = useQuery(['products', { page: page }], () => fetchProducts(page), { initialData: initialProducts });

  return (
    <>
      <Layout>
        <section>
          <div className="pt-12 pb-24 2xl:pb-44 bg-blueGray-100">
            <div className="container px-4 mx-auto">
              <div className="pb-9 text-center border-b border-black border-opacity-5">
                <div className="relative">
                  <h2 className="mb-5 md:mb-0 text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">
                    New in
                  </h2>
                  <span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">
                    449 products found
                  </span>
                </div>
              </div>
              <div className="mb-16 flex flex-wrap py-5 border-b border-black border-opacity-10">
                <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Category</span>
                    <svg
                      className="relative top-px ml-6"
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
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Size</span>
                    <svg
                      className="relative top-px ml-6"
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
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Colors</span>
                    <svg
                      className="relative top-px ml-6"
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
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Price</span>
                    <svg
                      className="relative top-px ml-6"
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
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Brand</span>
                    <svg
                      className="relative top-px ml-6"
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
                </div>
              </div>
              {products.data && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 mb-20 md:mb-40">
                  {products.data.results.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
              <div className="sm:mx-auto sm:w-96">
                <a
                  className="block py-5 px-10 w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  href="#"
                >
                  More products
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
