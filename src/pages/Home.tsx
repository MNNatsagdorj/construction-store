import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Truck, Shield, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-construction-brown to-construction-sand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Барилгын материалын <br />
                <span className="text-construction-beige">онлайн дэлгүүр</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Өндөр чанартай барилгын материалыг хурдан, найдвартай хүргэлтээр 
                таны хүссэн газарт хүргэж өгнө
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-construction-brown px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Захиалах
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+97699999999"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-construction-brown transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  9999-9999
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop"
                alt="Барилгын материал"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Бидний давуу талууд
            </h2>
            <p className="text-lg text-gray-600">
              Яагаад биднийг сонгох хэрэгтэй вэ?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-construction-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Хурдан хүргэлт
              </h3>
              <p className="text-gray-600">
                24 цагийн дотор хот дотор, 2-3 хоногт аймаг руу хүргэлт
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Өндөр чанар
              </h3>
              <p className="text-gray-600">
                Зөвхөн баталгаатай, чанартай бүтээгдэхүүн
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Хямд үнэ
              </h3>
              <p className="text-gray-600">
                Зах зээлийн хамгийн хямд үнээр санал болгоно
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 дэмжлэг
              </h3>
              <p className="text-gray-600">
                Таны асуулт, санал бодлыг хүлээн авна
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Бүтээгдэхүүний төрлүүд
            </h2>
            <p className="text-lg text-gray-600">
              Бүх төрлийн барилгын материал
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Гадна фасад', icon: '🏠', color: 'bg-blue-100' },
              { name: 'Дотор заслын', icon: '🏡', color: 'bg-green-100' },
              { name: 'Түргэн хатдаг', icon: '⚡', color: 'bg-yellow-100' },
              { name: 'Өнгөлгөө', icon: '🎨', color: 'bg-purple-100' },
              { name: 'Цемент', icon: '🧱', color: 'bg-gray-100' },
              { name: 'Тоосго', icon: '🧱', color: 'bg-red-100' },
            ].map((category) => (
              <Link
                key={category.name}
                to="/products"
                className={`${category.color} p-6 rounded-lg text-center hover:shadow-md transition-shadow`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-construction-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Асуулт байна уу?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Бидэнтэй холбогдоно уу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+97699999999"
              className="bg-white text-construction-brown px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Утас: 9999-9999
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-construction-brown transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Холбоо барих
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
