import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Verification = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A', 
      dob: '01/01/1990',
      passportNo: 'B1234567',
      submissionDate: '2024-01-15',
      status: 'pending',
      documents: ['CMND', 'Hộ chiếu cũ', 'Ảnh 4x6']
    },
    {
      id: 2,
      name: 'Trần Thị B',
      dob: '15/06/1985', 
      passportNo: 'B7654321',
      submissionDate: '2024-01-14',
      status: 'pending',
      documents: ['CCCD', 'Hộ chiếu cũ', 'Ảnh 4x6']
    },
    {
      id: 3,
      name: 'Lê Văn C',
      dob: '22/08/1995',
      passportNo: 'B9876543',
      submissionDate: '2024-01-16', 
      status: 'pending',
      documents: ['CCCD', 'Hộ chiếu cũ', 'Ảnh 4x6']
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      dob: '30/12/1992',
      passportNo: 'B2468135',
      submissionDate: '2024-01-16',
      status: 'pending', 
      documents: ['CMND', 'Hộ chiếu cũ', 'Ảnh 4x6']
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/dashboard"
          className="inline-flex items-center mb-8 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <span className="text-2xl mr-2">⬅️</span>
          <span className="font-medium">Quay lại</span>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4 animate-fade-in">Xác Thực Hồ Sơ</h1>
          <p className="text-gray-700 text-xl font-medium">Quản lý và xác thực hồ sơ gia hạn hộ chiếu</p>
        </div>

        <div className="space-y-8">
          {applications.map(app => (
            <div 
              key={app.id} 
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-r border-gray-200 pr-8">
                  <h2 className="text-3xl font-bold text-blue-800 mb-6">{app.name}</h2>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="font-semibold w-32">Ngày sinh:</span>
                      <span className="bg-blue-50 px-4 py-2 rounded-lg">{app.dob}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold w-32">Số hộ chiếu:</span>
                      <span className="bg-blue-50 px-4 py-2 rounded-lg">{app.passportNo}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold w-32">Ngày nộp:</span>
                      <span className="bg-blue-50 px-4 py-2 rounded-lg">{app.submissionDate}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold w-32">Trạng thái:</span>
                      <span className={`px-4 py-2 rounded-lg font-medium
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

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Tài liệu đính kèm:</h3>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    {app.documents.map((doc, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-500 mr-3">📄</span>
                        <span className="font-medium">{doc}</span>
                      </li>
                    ))}
                  </ul>

                  {app.status === 'pending' && (
                    <div className="flex space-x-6">
                      <button
                        onClick={() => handleVerify(app.id, true)}
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        ✓ Phê duyệt
                      </button>
                      <button
                        onClick={() => handleVerify(app.id, false)}
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
