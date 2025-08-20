import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingCart, Phone, User } from 'lucide-react';

interface BottomNavigationProps {
  cartItemCount: number;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ cartItemCount }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Нүүр', href: '/', icon: Home },
    { name: 'Бүтээгдэхүүн', href: '/products', icon: Package },
    { name: 'Сагс', href: '/cart', icon: ShoppingCart, badge: cartItemCount },
    { name: 'Холбоо', href: '/contact', icon: Phone },
    { name: 'Захиалга', href: '/orders', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 transition-colors ${
                isActive
                  ? 'text-construction-brown'
                  : 'text-gray-500 hover:text-construction-brown'
              }`}
            >
              <div className="relative">
                <Icon className="w-6 h-6" />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
