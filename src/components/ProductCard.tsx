import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('mn-MN').format(price);
  };

  const getUnitText = (unit: string) => {
    switch (unit) {
      case 'kg':
        return '₮/кг';
      case 'bag':
        return '₮/уут';
      case 'piece':
        return '₮/ширхэг';
      default:
        return '₮';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x300?text=Зураг+байхгүй';
          }}
        />
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Дууссан
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Specifications */}
        <div className="mb-3">
          {product.specifications.slice(0, 2).map((spec, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-construction-brown">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              {getUnitText(product.unit)}
            </span>
          </div>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.8</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${
            product.inStock
              ? 'bg-construction-brown text-white hover:bg-construction-brown/90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Сагсанд нэмэх' : 'Дууссан'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
