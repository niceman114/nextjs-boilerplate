import Image from 'next/image';
import { Product } from '../types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
          className="p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black line-clamp-1 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">${product.price}</span>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm text-gray-600">{product.rating.rate}</span>
            <span className="text-sm text-gray-400 ml-1">({product.rating.count})</span>
          </div>
        </div>
        <div className="mt-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
} 