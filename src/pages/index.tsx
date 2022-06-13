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
