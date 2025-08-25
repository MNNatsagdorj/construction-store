import React, { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  TrendingUp,
  DollarSign,
  PackageCheck
} from 'lucide-react';
import { Product, Order, OrderStatus } from '../types';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'orders' | 'customers' | 'analytics' | 'settings'>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real app, this would come from API
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Цемент 50кг',
      description: 'Өндөр чанартай цемент',
      price: 25000,
      unit: 'bag',
      category: 'cement',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=150&h=150&fit=crop',
      specifications: ['50кг', 'M400', 'Хурдан хатдаг'],
      inStock: true
    },
    {
      id: '2',
      name: 'Тоосго',
      description: 'Улаан тоосго',
      price: 150,
      unit: 'piece',
      category: 'bricks',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=150&h=150&fit=crop',
      specifications: ['250x120x65мм', 'Улаан өнгө'],
      inStock: true
    }
  ];

  const mockOrders: Order[] = [
    {
      id: 'ORD001',
      items: [{ product: mockProducts[0], quantity: 2 }],
      totalAmount: 50000,
      deliveryAddress: 'Сүхбаатар дүүрэг, 1-р хороо',
      phone: '9999-9999',
      status: 'pending',
      createdAt: new Date(),
      deliveryOption: 'city',
      paymentMethod: 'cod'
    }
  ];

  const stats = {
    totalSales: 2500000,
    totalOrders: 45,
    totalProducts: 12,
    totalCustomers: 23,
    monthlyGrowth: 15.5
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Нийт борлуулалт</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalSales.toLocaleString()}₮</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+{stats.monthlyGrowth}%</span>
            <span className="text-gray-500 ml-1">сард</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Захиалгын тоо</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Энэ сард</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Бүтээгдэхүүн</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Идэвхтэй</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Хэрэглэгчид</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Бүртгэлтэй</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Сүүлийн захиалгууд</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {mockOrders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">#{order.id}</p>
                  <p className="text-sm text-gray-600">{order.phone}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{order.totalAmount.toLocaleString()}₮</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'shipped' ? 'bg-purple-100 text-purple-800' :
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status === 'pending' ? 'Хүлээгдэж буй' :
                     order.status === 'processing' ? 'Боловсруулж буй' :
                     order.status === 'shipped' ? 'Илгээгдсэн' :
                     order.status === 'delivered' ? 'Хүргэгдсэн' : 'Цуцлагдсан'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Бүтээгдэхүүнүүд</h2>
          <p className="text-gray-600">Бүтээгдэхүүний жагсаалт болон удирдлага</p>
        </div>
        <button className="bg-construction-brown text-white px-4 py-2 rounded-lg hover:bg-construction-sand transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Шинэ бүтээгдэхүүн
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Бүтээгдэхүүн хайх..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Шүүлт
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Экспорт
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Бүтээгдэхүүн
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Үнэ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Категори
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Үйлдэл
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-lg object-cover" src={product.image} alt={product.name} />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.price.toLocaleString()}₮
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'Байгаа' : 'Дууссан'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Захиалгууд</h2>
          <p className="text-gray-600">Захиалгын жагсаалт болон статус удирдлага</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Захиалга ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Хэрэглэгч
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Дүн
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Огноо
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Үйлдэл
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.phone}</div>
                    <div className="text-sm text-gray-500">{order.deliveryAddress}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.totalAmount.toLocaleString()}₮
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select 
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                        order.status === 'shipped' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                        order.status === 'delivered' ? 'bg-green-100 text-green-800 border-green-200' :
                        'bg-red-100 text-red-800 border-red-200'
                      }`}
                    >
                      <option value="pending">Хүлээгдэж буй</option>
                      <option value="processing">Боловсруулж буй</option>
                      <option value="shipped">Илгээгдсэн</option>
                      <option value="delivered">Хүргэгдсэн</option>
                      <option value="cancelled">Цуцлагдсан</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Аналитик</h2>
        <p className="text-gray-600">Борлуулалтын статистик болон тайлан</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Сарын борлуулалт</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Бүтээгдэхүүний борлуулалт</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <PackageCheck className="w-12 h-12 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Тохиргоо</h2>
        <p className="text-gray-600">Системийн тохиргоо болон хэрэглэгчийн мэдээлэл</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Хэрэглэгчийн мэдээлэл</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Нэр</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">И-мэйл</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Утас</label>
            <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <button className="bg-construction-brown text-white px-4 py-2 rounded-lg hover:bg-construction-sand transition-colors">
            Хадгалах
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Админ удирдлага</h1>
              <p className="text-gray-600">Construction Store</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-construction-brown rounded-full flex items-center justify-center text-white font-medium">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', label: 'Хяналтын самбар', icon: BarChart3 },
              { id: 'products', label: 'Бүтээгдэхүүнүүд', icon: Package },
              { id: 'orders', label: 'Захиалгууд', icon: ShoppingCart },
              { id: 'customers', label: 'Хэрэглэгчид', icon: Users },
              { id: 'analytics', label: 'Аналитик', icon: TrendingUp },
              { id: 'settings', label: 'Тохиргоо', icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-construction-brown text-construction-brown'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'products' && renderProducts()}
        {activeTab === 'orders' && renderOrders()}
        {activeTab === 'customers' && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Хэрэглэгчдийн жагсаалт</h3>
            <p className="text-gray-600">Удахгүй нэмэгдэх болно</p>
          </div>
        )}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  );
};

export default Admin;
