import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    alert('Таны мессеж илгээгдлээ! Бид удахгүй холбогдоно.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Холбоо барих
          </h1>
          <p className="text-gray-600">
            Асуулт, санал бодлоо илгээнэ үү
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Холбоо барих мэдээлэл
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-construction-brown" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Утас</h3>
                    <p className="text-sm text-gray-600">9999-9999</p>
                    <p className="text-sm text-gray-600">8888-8888</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-construction-brown" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">И-мэйл</h3>
                    <p className="text-sm text-gray-600">info@construction.mn</p>
                    <p className="text-sm text-gray-600">sales@construction.mn</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-construction-brown" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Хаяг</h3>
                    <p className="text-sm text-gray-600">
                      СБД, 1-р хороо, 15-р хороолол<br />
                      Барилгын материалын төв, 1-р давхар
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-construction-brown" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Ажиллах цаг</h3>
                    <p className="text-sm text-gray-600">Даваа - Баасан: 09:00 - 18:00</p>
                    <p className="text-sm text-gray-600">Бямба: 09:00 - 16:00</p>
                    <p className="text-sm text-gray-600">Ням: Амарна</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Сошиал медиа
              </h2>
              
              <div className="space-y-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">f</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Facebook</h3>
                    <p className="text-sm text-gray-600">Бидэнтэй холбогдоно уу</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">📷</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Instagram</h3>
                    <p className="text-sm text-gray-600">Бүтээгдэхүүнүүдээ харах</p>
                  </div>
                </a>

                <a
                  href="https://messenger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Messenger</h3>
                    <p className="text-sm text-gray-600">Шууд чат</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Байршил
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Газрын зураг энд харагдана</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Мессеж илгээх
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    Утас
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  И-мэйл *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Гарчиг *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Мессеж *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                  placeholder="Таны асуулт эсвэл санал бодлоо бичнэ үү..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-construction-brown text-white py-3 px-4 rounded-lg font-semibold hover:bg-construction-brown/90 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Илгээх
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Түгээмэл асуултууд
            </h2>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Хүргэлт хэдэн хоногт хүрнэ вэ?
                </h3>
                <p className="text-gray-600">
                  Хот дотор 24 цагийн дотор, аймаг руу 2-3 хоногт хүргэлт хийнэ.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Хүргэлтийн төлбөр хэд вэ?
                </h3>
                <p className="text-gray-600">
                  Хот дотор 5,000₮, аймаг руу 15,000₮. 100,000₮-с дээш үнэгүй хүргэлт.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Төлбөрийн хэлбэрүүд юу вэ?
                </h3>
                <p className="text-gray-600">
                  Онлайн төлбөр (QPay, SocialPay, LendMN, банкны QR) болон хүргэх үед төлөх (COD).
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Бараа буцаах боломжтой юу?
                </h3>
                <p className="text-gray-600">
                  Тийм, 7 хоногийн дотор гэмтэлтэй барааг буцааж болно.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Хамгийн бага захиалгын хэмжээ хэд вэ?
                </h3>
                <p className="text-gray-600">
                  Хамгийн бага захиалгын хэмжээ байхгүй, хүссэн хэмжээгээр захиалж болно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
