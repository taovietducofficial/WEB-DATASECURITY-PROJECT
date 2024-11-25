import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Approval = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      dob: '01/01/1990',
      passportNo: 'B1234567',
      expiryDate: '2024-01-15',
      requestDate: '2024-01-10',
      status: 'pending',
      reason: 'Hết hạn',
      documents: ['CCCD', 'Hộ chiếu cũ', 'Ảnh 4x6']
    },
    {
      id: 2, 
      name: 'Trần Thị B',
      dob: '15/06/1985',
      passportNo: 'B7654321', 
      expiryDate: '2024-02-20',
      requestDate: '2024-01-12',
      status: 'pending',
      reason: 'Hỏng hộ chiếu',
      documents: ['CMND', 'Hộ chiếu cũ', 'Ảnh 4x6']
    },
    {
      id: 3,
      name: 'Lê Văn C',
      dob: '22/08/1995',
      passportNo: 'B9876543',
      expiryDate: '2024-03-10',
      requestDate: '2024-01-14',
      status: 'pending',
      reason: 'Hết hạn',
      documents: ['CCCD', 'Hộ chiếu cũ', 'Ảnh 4x6']
    }
  ]);

  const handleApproval = (id, isApproved) => {
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
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Xét Duyệt Gia Hạn</h1>
          <p className="text-gray-700 text-xl">Quản lý và xét duyệt yêu cầu gia hạn hộ chiếu</p>
        </div>

        <div className="space-y-6">
          {applications.map(app => (
            <div 
              key={app.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">{app.name}</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium w-40">Ngày sinh:</span>
                      <span>{app.dob}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Số hộ chiếu:</span>
                      <span>{app.passportNo}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Ngày hết hạn:</span>
                      <span>{app.expiryDate}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Ngày yêu cầu:</span>
                      <span>{app.requestDate}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Lý do:</span>
                      <span>{app.reason}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Trạng thái:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium
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

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Tài liệu đính kèm:</h3>
                  <ul className="space-y-2 mb-6">
                    {app.documents.map((doc, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-500 mr-2">📄</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>

                  {app.status === 'pending' && (
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleApproval(app.id, true)}
                        className="flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-300"
                      >
                        Phê duyệt
                      </button>
                      <button
                        onClick={() => handleApproval(app.id, false)}
                        className="flex-1 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-300"
                      >
                        Từ chối
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

export default Approval;
