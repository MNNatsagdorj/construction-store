import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, User, CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryOption: 'city' as 'city' | 'province',
    paymentMethod: 'cod' as 'online' | 'cod',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.paymentMethod === 'online') {
      setStep('payment');
    } else {
      setStep('confirmation');
    }
  };

  const handlePayment = () => {
    setStep('confirmation');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('mn-MN').format(price);
  };

  // Mock data
  const subtotal = 68000; // 2 * 25000 + 1 * 18000
  const deliveryFee = 5000;
  const total = subtotal + deliveryFee;

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Захиалга амжилттай!
            </h1>
            <p className="text-gray-600 mb-6">
              Захиалгын дугаар: <span className="font-semibold">#ORD-2024-001</span>
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Захиалгын мэдээлэл:</h3>
              <p><strong>Нэр:</strong> {formData.name}</p>
              <p><strong>Утас:</strong> {formData.phone}</p>
              <p><strong>Хаяг:</strong> {formData.address}</p>
              <p><strong>Хүргэлт:</strong> {formData.deliveryOption === 'city' ? 'Хот дотор' : 'Аймаг руу'}</p>
              <p><strong>Төлбөр:</strong> {formData.paymentMethod === 'online' ? 'Онлайн' : 'Хүргэх үед'}</p>
              <p><strong>Нийт дүн:</strong> {formatPrice(total)}₮</p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/orders')}
                className="w-full bg-construction-brown text-white py-3 px-4 rounded-lg font-semibold hover:bg-construction-brown/90 transition-colors"
              >
                Миний захиалга харах
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Нүүр хуудас руу буцах
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Төлбөр хийх
            </h1>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Төлбөрийн хэлбэр:</h3>
              <div className="space-y-3">
                <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center">
                    <CreditCard className="w-6 h-6 text-construction-brown mr-3" />
                    <div>
                      <h4 className="font-semibold">Онлайн төлбөр</h4>
                      <p className="text-sm text-gray-600">QPay, SocialPay, LendMN, банкны QR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Төлбөрийн дэлгэрэнгүй:</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Нийт үнэ:</span>
                  <span>{formatPrice(subtotal)}₮</span>
                </div>
                <div className="flex justify-between">
                  <span>Хүргэлт:</span>
                  <span>{formatPrice(deliveryFee)}₮</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Нийт дүн:</span>
                    <span className="text-construction-brown">{formatPrice(total)}₮</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handlePayment}
                className="w-full bg-construction-brown text-white py-3 px-4 rounded-lg font-semibold hover:bg-construction-brown/90 transition-colors"
              >
                Төлбөр хийх
              </button>
              <button
                onClick={() => setStep('details')}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Буцах
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Захиалга өгөх
          </h1>
          <p className="text-gray-600">
            Хүргэлтийн мэдээллээ оруулна уу
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Хувийн мэдээлэл
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Нэр *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Утас *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Хүргэлтийн мэдээлэл
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Хаяг *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                          placeholder="Дэлгэрэнгүй хаягаа бичнэ үү..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Хүргэлтийн төрөл
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="deliveryOption"
                              value="city"
                              checked={formData.deliveryOption === 'city'}
                              onChange={(e) => handleInputChange('deliveryOption', e.target.value)}
                              className="mr-2"
                            />
                            <span>Хот дотор (5,000₮)</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="deliveryOption"
                              value="province"
                              checked={formData.deliveryOption === 'province'}
                              onChange={(e) => handleInputChange('deliveryOption', e.target.value)}
                              className="mr-2"
                            />
                            <span>Аймаг руу (15,000₮)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Төлбөрийн хэлбэр
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">Хүргэх үед төлөх (COD)</div>
                          <div className="text-sm text-gray-600">Бараа хүлээн авсны дараа төлнө</div>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === 'online'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">Онлайн төлбөр</div>
                          <div className="text-sm text-gray-600">QPay, SocialPay, LendMN, банкны QR</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-construction-brown text-white py-3 px-4 rounded-lg font-semibold hover:bg-construction-brown/90 transition-colors"
                  >
                    Үргэлжлүүлэх
                  </button>
                </div>
              </form>
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
                  <span className="font-medium">{formatPrice(deliveryFee)}₮</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Нийт дүн:</span>
                    <span className="text-2xl font-bold text-construction-brown">
                      {formatPrice(total)}₮
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Сонгосон бүтээгдэхүүнүүд:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Гадна фасадны замаск x2</span>
                    <span>{formatPrice(50000)}₮</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Дотор заслын замаск x1</span>
                    <span>{formatPrice(18000)}₮</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
