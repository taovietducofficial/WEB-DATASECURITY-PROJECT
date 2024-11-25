import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const menuItems = [
    {
      title: 'Xác thực',
      path: '/verification', 
      icon: '🔐',
      description: 'Quản lý và xác thực thông tin người dùng',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Xét duyệt',
      path: '/approval',
      icon: '✅', 
      description: 'Xét duyệt các yêu cầu và đơn từ',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Lưu trữ',
      path: '/storage',
      icon: '📁',
      description: 'Quản lý kho lưu trữ dữ liệu', 
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Giám sát',
      path: '/monitoring',
      icon: '📊',
      description: 'Theo dõi và giám sát hoạt động',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Quản lí',
      path: '/admin',
      icon: '⚙️',
      description: 'Quản lý hệ thống và phân quyền',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative">
        <Link
          to="/home"
          className="absolute top-0 left-0 bg-white/10 backdrop-blur-lg p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <span className="text-xl sm:text-2xl">🏠</span>
        </Link>

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-6 leading-normal">
            Bảng Điều Khiển
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light">
            Chào mừng đến với hệ thống quản lý
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl mr-3 sm:mr-4 transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{item.title}</h2>
                </div>
                <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 flex-grow">
                  {item.description}
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-white font-medium text-base sm:text-lg group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                    Truy cập
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;