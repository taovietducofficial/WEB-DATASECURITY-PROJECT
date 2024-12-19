import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Verification = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Nguyen Minh Tu',
      dob: 'N/A', // No dob data provided, you can leave it as N/A
      passportNo: 'P987654',
      submissionDate: '2024-01-15', // You can adjust dates as needed
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 2,
      name: 'Tran Thi Mai',
      dob: 'N/A',
      passportNo: 'P321456',
      submissionDate: '2024-01-14',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 3,
      name: 'Hoang Thanh Son',
      dob: 'N/A',
      passportNo: 'P654789',
      submissionDate: '2024-01-16',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 4,
      name: 'Nguyen Hoai Thu',
      dob: 'N/A',
      passportNo: 'P987321',
      submissionDate: '2024-01-16',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 5,
      name: 'Phan Duy Khanh',
      dob: 'N/A',
      passportNo: 'P741369',
      submissionDate: '2024-01-18',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 6,
      name: 'Tao Viet Dưc',
      dob: 'N/A',
      passportNo: 'P741370',
      submissionDate: '2024-01-19',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 7,
      name: 'Tao Viet Hoang',
      dob: 'N/A',
      passportNo: 'P741390',
      submissionDate: '2024-01-20',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 8,
      name: 'Nguyễn Văn E',
      dob: 'N/A',
      passportNo: 'P987999',
      submissionDate: '2024-01-22',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    },
    {
      id: 9,
      name: 'Thu Duc',
      dob: 'N/A',
      passportNo: 'P987800',
      submissionDate: '2024-01-23',
      status: 'pending',
      documents: ['ID Card', 'Passport', 'Photo']
    }
  ]);

  const handleVerify = (id, isApproved) => {
    setApplications(applications.map(app => {
      if (app.id === id) {
        return {
          ...app,
          status: isApproved ? 'approved' : 'rejected'
        };
      }
      return app;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/home"
          className="inline-flex items-center mb-6 sm:mb-8 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <span className="text-xl sm:text-2xl mr-2">⬅️</span>
          <span className="font-medium text-sm sm:text-base">Quay lại</span>
        </Link>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2 sm:mb-4 animate-fade-in">Xác Thực Hồ Sơ</h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl font-medium">Quản lý và xác thực hồ sơ gia hạn hộ chiếu</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {applications.map(app => (
            <div 
              key={app.id} 
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">{app.name}</h2>
                  <div className="space-y-3 sm:space-y-4 text-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Ngày sinh:</span>
                      <span className="bg-blue-50 px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto">{app.dob}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Số hộ chiếu:</span>
                      <span className="bg-blue-50 px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto">{app.passportNo}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Ngày nộp:</span>
                      <span className="bg-blue-50 px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto">{app.submissionDate}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-semibold w-full sm:w-32 mb-1 sm:mb-0">Trạng thái:</span>
                      <span className={`px-3 sm:px-4 py-2 rounded-lg font-medium w-full sm:w-auto text-center sm:text-left
                        ${app.status === 'approved' ? 'bg-green-100 text-green-800' : 
                          app.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {app.status === 'approved' ? 'Đã duyệt' : 
                         app.status === 'rejected' ? 'Từ chối' : 
                         'Chờ xử lý'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 lg:pt-0 lg:pl-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Tài liệu đính kèm:</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-700 mb-6 sm:mb-8">
                    {app.documents.map((doc, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-500 mr-3">📄</span>
                        <span className="font-medium">{doc}</span>
                      </li>
                    ))}
                  </ul>

                  {app.status === 'pending' && (
                    <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6">
                      <button
                        onClick={() => handleVerify(app.id, true)}
                        className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        ✓ Phê duyệt
                      </button>
                      <button
                        onClick={() => handleVerify(app.id, false)}
                        className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        ✕ Từ chối
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Verification;
