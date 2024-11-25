import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Storage = () => {
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
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      passportNo: 'B1122334',
      documentType: 'Hộ chiếu',
      submissionDate: '2024-01-17',
      status: 'Đã lưu trữ',
      location: 'Kho B - Ngăn 1',
      notes: 'Hồ sơ đầy đủ',
      expiryDate: '2029-01-17',
      birthPlace: 'Hải Phòng',
      gender: 'Nữ', 
      nationality: 'Việt Nam'
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      passportNo: 'B5544332',
      documentType: 'Hộ chiếu',
      submissionDate: '2024-01-18',
      status: 'Chờ lưu trữ',
      location: 'Chưa phân kho',
      notes: 'Thiếu giấy tờ',
      expiryDate: '2029-01-18',
      birthPlace: 'Cần Thơ',
      gender: 'Nam',
      nationality: 'Việt Nam'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleUpdateLocation = (id, newLocation) => {
    setDocuments(documents.map(doc => 
      doc.id === id ? {...doc, location: newLocation, status: 'Đã lưu trữ'} : doc
    ));
  };

  const handleUpdateStatus = (id, newStatus) => {
    setDocuments(documents.map(doc =>
      doc.id === id ? {...doc, status: newStatus} : doc
    ));
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-8">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center bg-white/90 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-2xl mr-2">←</span>
            <span className="font-medium text-gray-700">Quay lại Dashboard</span>
          </Link>
          
          <div className="text-right">
            <h2 className="text-sm text-blue-800 font-medium">Hệ thống quản lý</h2>
            <h3 className="text-gray-600">Phòng lưu trữ hộ chiếu</h3>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 mb-4">
            Kho Lưu Trữ Hộ Chiếu
          </h1>
          <p className="text-gray-700 text-xl font-light">Hệ thống quản lý và theo dõi hồ sơ lưu trữ</p>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm hồ sơ..."
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all pl-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
              </div>
            </div>
            
            <select 
              className="px-5 py-3 border border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-200 bg-white"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="Đã lưu trữ">Đã lưu trữ</option>
              <option value="Chờ lưu trữ">Chờ lưu trữ</option>
            </select>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Họ và tên', 'Số hộ chiếu', 'Loại tài liệu', 'Ngày nộp', 'Ngày hết hạn', 'Nơi sinh', 'Giới tính', 'Quốc tịch', 'Trạng thái', 'Vị trí lưu trữ', 'Ghi chú', 'Thao tác'].map((header, index) => (
                    <th 
                      key={index}
                      onClick={() => ['Họ và tên', 'Số hộ chiếu', 'Ngày nộp'].includes(header) ? handleSort(header === 'Họ và tên' ? 'name' : header === 'Số hộ chiếu' ? 'passportNo' : 'submissionDate') : null}
                      className={`px-6 py-4 text-left text-sm font-semibold text-gray-600 ${['Họ và tên', 'Số hộ chiếu', 'Ngày nộp'].includes(header) ? 'cursor-pointer hover:bg-gray-100' : ''}`}
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
                  <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{doc.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.passportNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.documentType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.submissionDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.expiryDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.birthPlace}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.nationality}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${doc.status === 'Đã lưu trữ' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {doc.status === 'Chờ lưu trữ' ? (
                        <select 
                          className="w-full border rounded-lg px-3 py-1.5 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                          onChange={(e) => handleUpdateLocation(doc.id, e.target.value)}
                          value={doc.location}
                        >
                          <option value="Chưa phân kho">Chọn vị trí</option>
                          <option value="Kho A - Ngăn 1">Kho A - Ngăn 1</option>
                          <option value="Kho A - Ngăn 2">Kho A - Ngăn 2</option>
                          <option value="Kho B - Ngăn 1">Kho B - Ngăn 1</option>
                          <option value="Kho B - Ngăn 2">Kho B - Ngăn 2</option>
                        </select>
                      ) : (
                        <span className="text-gray-600">{doc.location}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.notes}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleUpdateStatus(doc.id, doc.status === 'Đã lưu trữ' ? 'Chờ lưu trữ' : 'Đã lưu trữ')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          doc.status === 'Đã lưu trữ' 
                            ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                            : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                        }`}
                      >
                        {doc.status === 'Đã lưu trữ' ? 'Hủy lưu trữ' : 'Xác nhận lưu trữ'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
