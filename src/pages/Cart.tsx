import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { products } from '../data/products';

const Cart: React.FC = () => {
  // Mock cart data - in real app this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: products[0],
      quantity: 2
    },
    {
      product: products[1],
      quantity: 1
    }
  ]);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }

    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

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

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal > 100000 ? 0 : 5000; // Free delivery over 100k
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Сагс хоосон байна
            </h2>
            <p className="text-gray-600 mb-8">
              Бүтээгдэхүүн нэмж эхлээрэй
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-construction-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-construction-brown/90 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Бүтээгдэхүүн үзэх
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Сагс
          </h1>
          <p className="text-gray-600">
            {cartItems.length} бүтээгдэхүүн
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Сонгосон бүтээгдэхүүнүүд
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-6">
                    <div className="flex items-center">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-20 h-20">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.product.description}
                        </p>
                        <div className="mt-2">
                          <span className="text-lg font-bold text-construction-brown">
                            {formatPrice(item.product.price)}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            {getUnitText(item.product.unit)}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="mt-4 text-right">
                      <span className="text-lg font-bold text-gray-900">
                        Нийт: {formatPrice(item.product.price * item.quantity)}₮
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Захиалгын дэлгэрэнгүй
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Нийт үнэ:</span>
                  <span className="font-medium">{formatPrice(subtotal)}₮</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Хүргэлт:</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? 'Үнэгүй' : `${formatPrice(deliveryFee)}₮`}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                    💡 100,000₮-с дээш үнэгүй хүргэлт
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Нийт дүн:</span>
                    <span className="text-2xl font-bold text-construction-brown">
                      {formatPrice(total)}₮
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-construction-brown text-white py-3 px-4 rounded-lg font-semibold hover:bg-construction-brown/90 transition-colors flex items-center justify-center"
              >
                Захиалга өгөх
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <div className="mt-4 text-center">
                <Link
                  to="/products"
                  className="text-construction-brown hover:text-construction-brown/80 text-sm"
                >
                  Бүтээгдэхүүн үргэлжлүүлэн үзэх
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
