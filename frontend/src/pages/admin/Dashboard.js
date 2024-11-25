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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-8">
      <div className="max-w-7xl mx-auto relative">
        <Link
          to="/home"
          className="absolute top-0 left-0 bg-white/10 backdrop-blur-lg p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <span className="text-2xl">🏠</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 leading-normal">
            Bảng Điều Khiển
          </h1>
          <p className="text-gray-400 text-xl font-light">
            Chào mừng đến với hệ thống quản lý
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4 transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                </div>
                <p className="text-white/90 text-lg mb-8 flex-grow">
                  {item.description}
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-white font-medium text-lg group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                    Truy cập
                    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;