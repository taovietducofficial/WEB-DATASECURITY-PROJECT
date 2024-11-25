import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Adminmonitoring = () => {
  const [activities] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      action: 'Xác thực hồ sơ',
      status: 'Hoàn thành',
      timestamp: '2024-01-15 09:30',
      details: 'Xác thực hồ sơ B1234567'
    },
    {
      id: 2,
      name: 'Trần Thị B', 
      action: 'Lưu trữ hồ sơ',
      status: 'Đang xử lý',
      timestamp: '2024-01-15 10:15',
      details: 'Lưu trữ hồ sơ B7654321'
    },
    {
      id: 3,
      name: 'Lê Văn C',
      action: 'Xét duyệt gia hạn',
      status: 'Hoàn thành',
      timestamp: '2024-01-15 11:00', 
      details: 'Duyệt gia hạn hồ sơ B9876543'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/admin"
          className="inline-flex items-center mb-6 sm:mb-8 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <span className="text-xl sm:text-2xl mr-2">⬅️</span>
          <span className="text-sm sm:text-base font-medium">Quay lại</span>
        </Link>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2 sm:mb-4">Giám Sát Hoạt Động</h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">Theo dõi các hoạt động trong hệ thống</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {activities.map(activity => (
            <div 
              key={activity.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 sm:mb-4">{activity.name}</h2>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium sm:w-40 mb-1 sm:mb-0">Hành động:</span>
                    <span>{activity.action}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium sm:w-40 mb-1 sm:mb-0">Trạng thái:</span>
                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      activity.status === 'Hoàn thành' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium sm:w-40 mb-1 sm:mb-0">Thời gian:</span>
                    <span className="text-sm sm:text-base">{activity.timestamp}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium sm:w-40 mb-1 sm:mb-0">Chi tiết:</span>
                    <span className="text-sm sm:text-base">{activity.details}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adminmonitoring;