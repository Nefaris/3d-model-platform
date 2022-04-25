import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <section className="py-9 bg-gray-50 overflow-hidden">
        <div className="relative container px-4 mx-auto">
          <img
            className="absolute left-24 -top-16 z-10"
            src="uinel-assets/images/http-codes/elipse-purple.svg"
            alt=""
          />
          <img className="absolute -left-16 -bottom-48" src="uinel-assets/images/http-codes/elipse-yellow.svg" alt="" />
          <div className="relative text-center py-12 md:py-24 px-4 2xl:pt-44 2xl:pb-64 bg-white rounded-7xl z-20">
            <div className="relative z-40">
              <span className="block mb-12 uppercase tracking-widest text-xs text-gray-300">WOOOOPS</span>
              <h2 className="max-w-5xl mb-12 mx-auto font-medium font-heading text-9xl md:text-10xl xl:text-11xl leading-tight">
                <p>Wooops.</p>
                <p>We can’t find that page</p>
              </h2>
              <p className="max-w-md mb-14 xl:mb-16 mx-auto font-heading font-medium text-2xl leading-10">
                or something has gone wrong
              </p>
              <Link href="/">
                <a className="inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                  Back home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
