import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Order, OrderStatus } from '../types';

const Orders: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | 'all'>('all');

  // Mock orders data
  const orders: Order[] = [
    {
      id: 'ORD-2024-001',
      items: [
        { product: { id: '1', name: 'Гадна фасадны замаск', price: 25000, unit: 'kg', category: 'exterior-facade', description: '', image: '', specifications: [], inStock: true }, quantity: 2 },
        { product: { id: '2', name: 'Дотор заслын замаск', price: 18000, unit: 'kg', category: 'interior-finishing', description: '', image: '', specifications: [], inStock: true }, quantity: 1 }
      ],
      totalAmount: 73000,
      deliveryAddress: 'СБД, 1-р хороо, 15-р хороолол, 45-р байр',
      phone: '9999-9999',
      status: 'processing',
      createdAt: new Date('2024-01-15'),
      deliveryOption: 'city',
      paymentMethod: 'cod'
    },
    {
      id: 'ORD-2024-002',
      items: [
        { product: { id: '3', name: 'Түргэн хатдаг цемент', price: 35000, unit: 'bag', category: 'quick-drying', description: '', image: '', specifications: [], inStock: true }, quantity: 3 }
      ],
      totalAmount: 110000,
      deliveryAddress: 'Хан-Уул дүүрэг, 2-р хороо, 23-р хороолол, 12-р байр',
      phone: '8888-8888',
      status: 'shipped',
      createdAt: new Date('2024-01-14'),
      deliveryOption: 'city',
      paymentMethod: 'online'
    },
    {
      id: 'ORD-2024-003',
      items: [
        { product: { id: '4', name: 'Өнгөлгөөний будаг', price: 45000, unit: 'kg', category: 'paint-coating', description: '', image: '', specifications: [], inStock: true }, quantity: 2 }
      ],
      totalAmount: 95000,
      deliveryAddress: 'Баянзүрх дүүрэг, 3-р хороо, 8-р хороолол, 67-р байр',
      phone: '7777-7777',
      status: 'delivered',
      createdAt: new Date('2024-01-10'),
      deliveryOption: 'city',
      paymentMethod: 'cod'
    }
  ];

  const filteredOrders = selectedStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedStatus);

  const getStatusInfo = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return { text: 'Хүлээгдэж байна', icon: Clock, color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
      case 'processing':
        return { text: 'Бэлтгэгдэж байна', icon: Package, color: 'text-blue-600', bgColor: 'bg-blue-100' };
      case 'shipped':
        return { text: 'Хүргэлтэнд гарсан', icon: Truck, color: 'text-purple-600', bgColor: 'bg-purple-100' };
      case 'delivered':
        return { text: 'Хүргэгдсэн', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' };
      case 'cancelled':
        return { text: 'Цуцлагдсан', icon: XCircle, color: 'text-red-600', bgColor: 'bg-red-100' };
      default:
        return { text: 'Тодорхойгүй', icon: Clock, color: 'text-gray-600', bgColor: 'bg-gray-100' };
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('mn-MN').format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('mn-MN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Миний захиалга
          </h1>
          <p className="text-gray-600">
            Захиалгын төлөв, мэдээллийг харах
          </p>
        </div>

        {/* Status Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedStatus === 'all'
                  ? 'bg-construction-brown text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Бүгд
            </button>
            {(['pending', 'processing', 'shipped', 'delivered', 'cancelled'] as OrderStatus[]).map((status) => {
              const statusInfo = getStatusInfo(status);
              const Icon = statusInfo.icon;
              return (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                    selectedStatus === status
                      ? 'bg-construction-brown text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {statusInfo.text}
                </button>
              );
            })}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <div className="space-y-6">
            {filteredOrders.map((order) => {
              const statusInfo = getStatusInfo(order.status);
              const StatusIcon = statusInfo.icon;
              
              return (
                <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Order Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Захиалга #{order.id}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {formatDate(order.createdAt)}
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bgColor} ${statusInfo.color}`}>
                          <StatusIcon className="w-4 h-4 mr-1" />
                          {statusInfo.text}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="flex-shrink-0 w-16 h-16">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <h4 className="font-medium text-gray-900">
                              {item.product.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              Тоо хэмжээ: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold text-gray-900">
                              {formatPrice(item.product.price * item.quantity)}₮
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Details */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Хүргэлтийн мэдээлэл:</h4>
                          <p className="text-sm text-gray-600">{order.deliveryAddress}</p>
                          <p className="text-sm text-gray-600">Утас: {order.phone}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Төлбөрийн мэдээлэл:</h4>
                          <p className="text-sm text-gray-600">
                            Хүргэлт: {order.deliveryOption === 'city' ? 'Хот дотор' : 'Аймаг руу'}
                          </p>
                          <p className="text-sm text-gray-600">
                            Төлбөр: {order.paymentMethod === 'online' ? 'Онлайн' : 'Хүргэх үед'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">
                          Нийт дүн:
                        </span>
                        <span className="text-2xl font-bold text-construction-brown">
                          {formatPrice(order.totalAmount)}₮
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Захиалга олдсонгүй
            </h3>
            <p className="text-gray-600">
              {selectedStatus === 'all' 
                ? 'Та одоогоор захиалга өгөөгүй байна'
                : 'Энэ төрлийн захиалга байхгүй байна'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
