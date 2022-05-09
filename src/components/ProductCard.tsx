import Link from 'next/link';
import { Product } from '../types/global';
import { FC } from 'react';
import Dinero from 'dinero.js';

type Props = {
  product: Product;
};

const ProductCard: FC<Props> = ({ product }) => {
  const { id, name, price, previewImage } = product;

  return (
    <Link href={`/product/${id}`}>
      <a className="flex flex-col p-6 bg-white rounded-3xl hover:shadow-4xl transition-shadow">
        <p className="leading-8 font-heading font-medium text-center">{name}</p>
        <img className="h-48 object-cover mt-4 mx-auto" src={previewImage} alt="Unable to load photo" />

        <p className="text-xl text-blue-500 font-heading font-medium tracking-tighter mt-3">
          {Dinero({ amount: price }).toFormat()}
        </p>
      </a>
    </Link>
  );
};

export default ProductCard;
