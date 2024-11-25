import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Adminapproval = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/admin"
          className="inline-flex items-center mb-6 sm:mb-8 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <span className="text-xl sm:text-2xl mr-2">⬅️</span>
          <span className="font-medium text-sm sm:text-base">Quay lại</span>
        </Link>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2 sm:mb-4">Quản Lý Xét Duyệt</h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">Quản lý và xét duyệt yêu cầu gia hạn hộ chiếu</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {applications.map(app => (
            <div 
              key={app.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">{app.name}</h2>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium sm:w-40 text-sm sm:text-base">Ngày sinh:</span>
                      <span className="text-sm sm:text-base">{app.dob}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium sm:w-40 text-sm sm:text-base">Số hộ chiếu:</span>
                      <span className="text-sm sm:text-base">{app.passportNo}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium sm:w-40 text-sm sm:text-base">Ngày hết hạn:</span>
                      <span className="text-sm sm:text-base">{app.expiryDate}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium sm:w-40 text-sm sm:text-base">Ngày yêu cầu:</span>
                      <span className="text-sm sm:text-base">{app.requestDate}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium sm:w-40 text-sm sm:text-base">Lý do:</span>
                      <span className="text-sm sm:text-base">{app.reason}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium sm:w-40 text-sm sm:text-base">Trạng thái:</span>
                      <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adminapproval;