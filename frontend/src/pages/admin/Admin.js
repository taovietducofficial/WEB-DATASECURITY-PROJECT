import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <Link 
            to="/dashboard"
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Quay lại
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6 sm:mb-8 text-center animate-fade-in">
          Quản Lý Hệ Thống
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Link to="/admin/verification" className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600">Xác thực</h2>
              <p className="text-sm sm:text-base text-gray-600">Xác thực thông tin và tài liệu của người dùng</p>
            </div>
          </Link>

          <Link to="/admin/approval" className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600">Xét duyệt</h2>
              <p className="text-sm sm:text-base text-gray-600">Xem xét và phê duyệt các yêu cầu gia hạn hộ chiếu</p>
            </div>
          </Link>

          <Link to="/admin/storage" className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600">Lưu trữ</h2>
              <p className="text-sm sm:text-base text-gray-600">Quản lý vị trí lưu trữ hồ sơ và tài liệu</p>
            </div>
          </Link>

          <Link to="/admin/monitoring" className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600">Giám sát</h2>
              <p className="text-sm sm:text-base text-gray-600">Theo dõi các hoạt động và lịch sử thao tác trong hệ thống</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
