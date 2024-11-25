import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Adminverification = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [documentType, setDocumentType] = useState('all')
    const [status, setStatus] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const initialData = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            type: 'CCCD',
            status: 'Chờ xác thực',
            submitDate: '2024-01-15'
        },
        {
            id: 2,
            name: 'Trần Thị B',
            type: 'Hộ chiếu',
            status: 'Đã xác thực',
            submitDate: '2024-01-14'
        },
        {
            id: 3,
            name: 'Lê Văn C',
            type: 'CCCD',
            status: 'Chờ xác thực',
            submitDate: '2024-01-13'
        },
        {
            id: 4,
            name: 'Phạm Thị D',
            type: 'Hộ chiếu',
            status: 'Đã xác thực',
            submitDate: '2024-01-12'
        },
        {
            id: 5,
            name: 'Hoàng Văn E',
            type: 'CCCD',
            status: 'Chờ xác thực',
            submitDate: '2024-01-11'
        }
    ]

    const [verificationData, setVerificationData] = useState(initialData)

    // Filter functions
    const filteredData = verificationData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toString().includes(searchTerm)
        const matchesType = documentType === 'all' || item.type === documentType
        const matchesStatus = status === 'all' || item.status === status
        return matchesSearch && matchesType && matchesStatus
    })

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = filteredData.slice(startIndex, endIndex)

    // Handle request verification
    const handleRequestVerification = (id) => {
        alert(`Đã gửi yêu cầu xác thực cho ID: ${id} đến bộ phận verification`)
    }

    // Handle detail view
    const handleViewDetail = (id) => {
        alert(`Xem chi tiết cho ID: ${id}`)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <Link
                    to="/admin"
                    className="inline-flex items-center mb-6 sm:mb-8 bg-white/30 backdrop-blur-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-indigo-600"
                >
                    <span className="text-lg sm:text-xl mr-2">←</span>
                    <span className="font-medium text-sm sm:text-base">Quay lại</span>
                </Link>

                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
                       Quản Lý Xác Thực
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium">
                        Hệ thống quản lý và xác thực thông tin người dùng
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-indigo-50">
                    <div className="p-4 sm:p-6 md:p-8 border-b border-indigo-100">
                        <div className="flex flex-col space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <select
                                    className="w-full rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-3 sm:px-4 py-2 transition-all duration-200 text-sm sm:text-base"
                                    value={documentType}
                                    onChange={(e) => setDocumentType(e.target.value)}
                                >
                                    <option value="all">🗂️ Tất cả loại giấy tờ</option>
                                    <option value="CCCD">📇 CCCD</option>
                                    <option value="Hộ chiếu">🛂 Hộ chiếu</option>
                                </select>
                                <select
                                    className="w-full rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-3 sm:px-4 py-2 transition-all duration-200 text-sm sm:text-base"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="all">📊 Tất cả trạng thái</option>
                                    <option value="Chờ xác thực">⏳ Chờ xác thực</option>
                                    <option value="Đã xác thực">✅ Đã xác thực</option>
                                </select>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm theo tên hoặc ID..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 pl-10 sm:pl-12 pr-4 py-2 transition-all duration-200 text-sm sm:text-base"
                                />
                                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-indigo-400">🔍</span>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-full divide-y divide-indigo-50">
                            {/* Mobile View */}
                            <div className="block sm:hidden">
                                {currentData.map((item) => (
                                    <div key={item.id} className="p-4 border-b border-indigo-50">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="font-medium text-indigo-600">#{item.id}</div>
                                                <div className="font-medium">{item.name}</div>
                                            </div>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                item.status === 'Đã xác thực' 
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-amber-100 text-amber-800'
                                            }`}>
                                                {item.status === 'Đã xác thực' ? '✅' : '⏳'} {item.status}
                                            </span>
                                        </div>
                                        <div className="space-y-2 mb-3">
                                            <div className="flex items-center">
                                                <span className="text-gray-600 text-sm mr-2">Loại:</span>
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                    {item.type === 'CCCD' ? '📇' : '🛂'} {item.type}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Ngày nộp: {item.submitDate}
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <button
                                                onClick={() => handleViewDetail(item.id)}
                                                className="w-full inline-flex justify-center items-center px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-200 text-sm"
                                            >
                                                <span className="mr-2">👁️</span>
                                                Chi tiết
                                            </button>
                                            <button
                                                onClick={() => item.status !== 'Đã xác thực' && handleRequestVerification(item.id)}
                                                className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-lg text-sm ${
                                                    item.status === 'Đã xác thực'
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                                } transition-colors duration-200`}
                                            >
                                                <span className="mr-2">📨</span>
                                                Yêu cầu xác thực
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop View */}
                            <table className="hidden sm:table min-w-full">
                                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <tr>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider">ID</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider">Họ và tên</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider">Loại giấy tờ</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider">Trạng thái</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider">Ngày nộp</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-indigo-50">
                                    {currentData.map((item) => (
                                        <tr key={item.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{item.id}</td>
                                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">{item.name}</td>
                                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                    {item.type === 'CCCD' ? '📇' : '🛂'} {item.type}
                                                </span>
                                            </td>
                                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    item.status === 'Đã xác thực'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-amber-100 text-amber-800'
                                                }`}>
                                                    {item.status === 'Đã xác thực' ? '✅' : '⏳'} {item.status}
                                                </span>
                                            </td>
                                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.submitDate}</td>
                                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                                                <div className="flex items-center space-x-2 sm:space-x-4">
                                                    <button
                                                        onClick={() => handleViewDetail(item.id)}
                                                        className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-200 text-sm"
                                                    >
                                                        <span className="mr-2">👁️</span>
                                                        Chi tiết
                                                    </button>
                                                    <button
                                                        onClick={() => item.status !== 'Đã xác thực' && handleRequestVerification(item.id)}
                                                        className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm ${
                                                            item.status === 'Đã xác thực'
                                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                                        } transition-colors duration-200`}
                                                    >
                                                        <span className="mr-2">📨</span>
                                                        Yêu cầu xác thực
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-t border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-xs sm:text-sm text-indigo-600 font-medium text-center sm:text-left">
                                Hiển thị {startIndex + 1}-{Math.min(endIndex, filteredData.length)} trong tổng số {filteredData.length} mục
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center text-sm ${
                                        currentPage === 1
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-indigo-600 hover:bg-indigo-50 border-2 border-indigo-200'
                                    } transition-colors duration-200`}
                                >
                                    <span className="mr-1">←</span> Trước
                                </button>
                                <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm">
                                    {currentPage}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center text-sm ${
                                        currentPage === totalPages
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-indigo-600 hover:bg-indigo-50 border-2 border-indigo-200'
                                    } transition-colors duration-200`}
                                >
                                    Sau <span className="ml-1">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminverification