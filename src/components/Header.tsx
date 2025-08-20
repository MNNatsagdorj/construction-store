import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Нүүр', href: '/' },
    { name: 'Бүтээгдэхүүн', href: '/products' },
    { name: 'Захиалах', href: '/checkout' },
    { name: 'Холбоо барих', href: '/contact' },
    { name: 'Миний захиалга', href: '/orders' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-construction-brown rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Б</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Барилгын Дэлгүүр</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-construction-brown bg-construction-beige'
                    : 'text-gray-700 hover:text-construction-brown hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+97699999999"
              className="flex items-center text-gray-700 hover:text-construction-brown transition-colors"
            >
              <Phone className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">8820-4057</span>
            </a>
            <Link
              to="/cart"
              className="relative flex items-center text-gray-700 hover:text-construction-brown transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-construction-brown transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-construction-brown bg-construction-beige'
                      : 'text-gray-700 hover:text-construction-brown hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+97699999999"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-construction-brown transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="text-base font-medium">8820-4057</span>
                </a>
                <Link
                  to="/cart"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-construction-brown transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  <span className="text-base font-medium">Сагс</span>
                  {cartItemCount > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
