import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Adminstorage = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      passportNo: 'B1234567', 
      documentType: 'Hộ chiếu',
      submissionDate: '2024-01-15',
      status: 'Đã lưu trữ',
      location: 'Kho A - Ngăn 1',
      notes: 'Hồ sơ đầy đủ',
      expiryDate: '2029-01-15',
      birthPlace: 'Hà Nội',
      gender: 'Nam',
      nationality: 'Việt Nam'
    },
    {
      id: 2,
      name: 'Trần Thị B', 
      passportNo: 'B7654321',
      documentType: 'Hộ chiếu',
      submissionDate: '2024-01-14',
      status: 'Đã lưu trữ', 
      location: 'Kho A - Ngăn 2',
      notes: 'Cần kiểm tra lại ảnh',
      expiryDate: '2029-01-14',
      birthPlace: 'TP.HCM',
      gender: 'Nữ',
      nationality: 'Việt Nam'
    },
    {
      id: 3,
      name: 'Lê Văn C',
      passportNo: 'B9876543',
      documentType: 'Hộ chiếu', 
      submissionDate: '2024-01-16',
      status: 'Chờ lưu trữ',
      location: 'Chưa phân kho',
      notes: 'Đang chờ xử lý',
      expiryDate: '2029-01-16', 
      birthPlace: 'Đà Nẵng',
      gender: 'Nam',
      nationality: 'Việt Nam'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedDocuments = documents
    .filter(doc => {
      const matchesSearch = Object.values(doc).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesFilter = filterStatus === 'all' || doc.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      const compareValue = sortDirection === 'asc' ? 1 : -1;
      return a[sortField] > b[sortField] ? compareValue : -compareValue;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4 sm:p-6 md:p-8">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <Link
            to="/admin"
            className="inline-flex items-center bg-white/90 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-xl sm:text-2xl mr-2">←</span>
            <span className="font-medium text-gray-700">Quay lại</span>
          </Link>
          
          <div className="text-left sm:text-right">
            <h2 className="text-sm text-blue-800 font-medium">Hệ thống quản lý</h2>
            <h3 className="text-gray-600">Phòng lưu trữ hộ chiếu</h3>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
            Quản Lý Kho Lưu Trữ
          </h1>
          <p className="text-gray-700 text-base sm:text-xl font-light">Hệ thống quản lý và theo dõi hồ sơ lưu trữ</p>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl sm:shadow-2xl border border-white/50">
          <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm hồ sơ..."
                  className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all pl-10 sm:pl-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-3 sm:left-4 top-2.5 sm:top-3.5 text-gray-400">🔍</span>
              </div>
            </div>
            
            <select 
              className="px-4 sm:px-5 py-2 sm:py-3 border border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-200 bg-white"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="Đã lưu trữ">Đã lưu trữ</option>
              <option value="Chờ lưu trữ">Chờ lưu trữ</option>
            </select>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <div className="min-w-full">
              {/* Desktop Table View */}
              <table className="hidden sm:table min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['Họ và tên', 'Số hộ chiếu', 'Loại tài liệu', 'Ngày nộp', 'Ngày hết hạn', 'Nơi sinh', 'Giới tính', 'Quốc tịch', 'Trạng thái', 'Vị trí lưu trữ', 'Ghi chú'].map((header, index) => (
                      <th 
                        key={index}
                        onClick={() => ['Họ và tên', 'Số hộ chiếu', 'Ngày nộp'].includes(header) ? handleSort(header === 'Họ và tên' ? 'name' : header === 'Số hộ chiếu' ? 'passportNo' : 'submissionDate') : null}
                        className={`px-4 py-3 text-left text-sm font-semibold text-gray-600 ${['Họ và tên', 'Số hộ chiếu', 'Ngày nộp'].includes(header) ? 'cursor-pointer hover:bg-gray-100' : ''}`}
                      >
                        {header}
                        {['Họ và tên', 'Số hộ chiếu', 'Ngày nộp'].includes(header) && sortField === (header === 'Họ và tên' ? 'name' : header === 'Số hộ chiếu' ? 'passportNo' : 'submissionDate') && 
                          <span className="ml-2">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                        }
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {filteredAndSortedDocuments.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">{doc.name}</td>
                      <td className="px-4 py-3">{doc.passportNo}</td>
                      <td className="px-4 py-3">{doc.documentType}</td>
                      <td className="px-4 py-3">{doc.submissionDate}</td>
                      <td className="px-4 py-3">{doc.expiryDate}</td>
                      <td className="px-4 py-3">{doc.birthPlace}</td>
                      <td className="px-4 py-3">{doc.gender}</td>
                      <td className="px-4 py-3">{doc.nationality}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          doc.status === 'Đã lưu trữ' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{doc.location}</td>
                      <td className="px-4 py-3">{doc.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Card View */}
              <div className="sm:hidden space-y-4">
                {filteredAndSortedDocuments.map((doc) => (
                  <div key={doc.id} className="bg-white p-4 rounded-lg shadow space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-lg">{doc.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'Đã lưu trữ' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Số hộ chiếu:</span> {doc.passportNo}</p>
                      <p><span className="font-medium">Loại tài liệu:</span> {doc.documentType}</p>
                      <p><span className="font-medium">Ngày nộp:</span> {doc.submissionDate}</p>
                      <p><span className="font-medium">Ngày hết hạn:</span> {doc.expiryDate}</p>
                      <p><span className="font-medium">Nơi sinh:</span> {doc.birthPlace}</p>
                      <p><span className="font-medium">Giới tính:</span> {doc.gender}</p>
                      <p><span className="font-medium">Quốc tịch:</span> {doc.nationality}</p>
                      <p><span className="font-medium">Vị trí lưu trữ:</span> {doc.location}</p>
                      <p><span className="font-medium">Ghi chú:</span> {doc.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminstorage;