import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Monitoring = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: 'Nguyễn Văn A',
      role: 'Nhân viên xác thực',
      action: 'Xác thực hồ sơ',
      target: 'Hồ sơ #B1234567',
      timestamp: '2024-01-20 09:15:00',
      status: 'success',
      details: 'Đã xác thực thành công hồ sơ',
      ipAddress: '192.168.1.100'
    },
    {
      id: 2, 
      user: 'Trần Thị B',
      role: 'Nhân viên phê duyệt',
      action: 'Phê duyệt hồ sơ',
      target: 'Hồ sơ #B7654321',
      timestamp: '2024-01-20 10:30:00',
      status: 'success',
      details: 'Phê duyệt hồ sơ gia hạn',
      ipAddress: '192.168.1.101'
    },
    {
      id: 3,
      user: 'Lê Văn C',
      role: 'Nhân viên lưu trữ',
      action: 'Lưu trữ hồ sơ',
      target: 'Hồ sơ #B9876543',
      timestamp: '2024-01-20 11:45:00',
      status: 'pending',
      details: 'Đang trong quá trình lưu trữ',
      ipAddress: '192.168.1.102'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField, setSortField] = useState('timestamp');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = Object.values(activity).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesRole = filterRole === 'all' || activity.role === filterRole;
    const matchesStatus = filterStatus === 'all' || activity.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  }).sort((a, b) => {
    const compareValue = sortDirection === 'asc' ? 1 : -1;
    return a[sortField] > b[sortField] ? compareValue : -compareValue;
  });

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
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Giám Sát Hoạt Động</h1>
          <p className="text-gray-700 text-xl">Theo dõi hoạt động của nhân viên trong hệ thống</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="mb-6 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="px-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select 
              className="px-4 py-2 border rounded-lg"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="all">Tất cả vai trò</option>
              <option value="Nhân viên xác thực">Nhân viên xác thực</option>
              <option value="Nhân viên phê duyệt">Nhân viên phê duyệt</option>
              <option value="Nhân viên lưu trữ">Nhân viên lưu trữ</option>
            </select>

            <select
              className="px-4 py-2 border rounded-lg"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="success">Hoàn thành</option>
              <option value="pending">Đang xử lý</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b-2 border-blue-100">
                  <th onClick={() => handleSort('user')} className="px-6 py-4 text-left text-lg font-semibold text-gray-800 cursor-pointer hover:bg-blue-50">
                    Nhân viên {sortField === 'user' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('role')} className="px-6 py-4 text-left text-lg font-semibold text-gray-800 cursor-pointer hover:bg-blue-50">
                    Vai trò {sortField === 'role' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('action')} className="px-6 py-4 text-left text-lg font-semibold text-gray-800 cursor-pointer hover:bg-blue-50">
                    Hành động {sortField === 'action' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('target')} className="px-6 py-4 text-left text-lg font-semibold text-gray-800 cursor-pointer hover:bg-blue-50">
                    Đối tượng {sortField === 'target' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('timestamp')} className="px-6 py-4 text-left text-lg font-semibold text-gray-800 cursor-pointer hover:bg-blue-50">
                    Thời gian {sortField === 'timestamp' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('status')} className="px-6 py-4 text-left text-lg font-semibold text-gray-800 cursor-pointer hover:bg-blue-50">
                    Trạng thái {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800">Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.map((activity) => (
                  <tr 
                    key={activity.id}
                    className="border-b border-blue-50 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-gray-800">{activity.user}</td>
                    <td className="px-6 py-4 text-gray-800">{activity.role}</td>
                    <td className="px-6 py-4 text-gray-800">{activity.action}</td>
                    <td className="px-6 py-4 text-gray-800">{activity.target}</td>
                    <td className="px-6 py-4 text-gray-800">{activity.timestamp}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        activity.status === 'success' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {activity.status === 'success' ? 'Hoàn thành' : 'Đang xử lý'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">
                        <div>{activity.details}</div>
                        <div className="text-xs text-gray-500">IP: {activity.ipAddress}</div>
                      </div>
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

export default Monitoring;
