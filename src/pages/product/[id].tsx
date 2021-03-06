import { NextPage, NextPageContext } from 'next';
import Dinero from 'dinero.js';
import { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { Product, User } from '../../types/global';
import { getUserFromContext } from '../../utils/auth';
import Link from 'next/link';

export async function getServerSideProps(context: NextPageContext) {
  const user = await getUserFromContext(context);
  const { id } = context.query;

  const res = await fetch(`https://trading-platform-3d.herokuapp.com/api/products/${id}/`);
  const product: Product = await res.json();

  return {
    props: { product, user },
  };
}

const Product: NextPage<{ product: Product; user: User }> = ({ product, user }) => {
  const [previewImage, setPreviewImage] = useState(product.images[0]);

  const handleCheckout = async () => {
    const { id } = product;
    const res = await axios.post(`https://trading-platform-3d.herokuapp.com/api/products/create-checkout/${id}/`);
    window.location.href = res.data;
  };

  return (
    <Layout>
      <section className="pt-12 pb-24 bg-darkBlueGray-500 rounded-b-10xl overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 xl:pr-20">
              <div className="lg:max-w-lg">
                <span className="text-xs text-gray-400 tracking-wide">#{product.id}</span>
                <h2 className="mt-6 mb-4 text-5xl md:text-7xl lg:text-9xl text-white font-heading font-semibold">
                  {product.name}
                </h2>
                <p className="flex items-center text-3xl text-blue-500 font-medium mb-6">
                  {Dinero({ amount: product.price }).toFormat()}
                </p>
                <p className="text-lg text-gray-100">{product.description}</p>

                {user ? (
                  <button
                    type="button"
                    className="mt-10 max-w-xs py-5 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    onClick={handleCheckout}
                  >
                    Buy model
                  </button>
                ) : (
                  <Link href="/login">
                    <a className="block mt-10 max-w-xs py-5 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                      Login to buy model
                    </a>
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 xl:pl-20 mb-16 lg:mb-0 order-first lg:order-last">
              <div className="relative md:w-2/3 lg:w-auto mx-auto mb-8">
                <img className="px-4 md:px-0 rounded" src={previewImage} alt="" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {product.images.map((src: string) => (
                  <button
                    key={src}
                    type="button"
                    className="block rounded overflow-hidden"
                    onClick={() => setPreviewImage(src)}
                  >
                    <img className="w-full h-full" src={src} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
