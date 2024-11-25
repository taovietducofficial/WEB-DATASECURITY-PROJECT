import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-blue-800">Dịch Vụ Gia Hạn Hộ Chiếu</h1>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/fill-info" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 transform hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600">Gia Hạn Hộ Chiếu Thông Thường</h2>
            <ul className="list-none space-y-3 sm:space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Thời gian xử lý: 5-7 ngày làm việc</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Phí dịch vụ: 200.000 VNĐ</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Hỗ trợ hoàn thiện hồ sơ</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Tư vấn miễn phí</span>
              </li>
            </ul>
          </Link>

          <Link to="/fill-info" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 transform hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600">Gia Hạn Hộ Chiếu Nhanh</h2>
            <ul className="list-none space-y-3 sm:space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Thời gian xử lý: 2-3 ngày làm việc</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Phí dịch vụ: 400.000 VNĐ</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Hỗ trợ hoàn thiện hồ sơ</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Tư vấn miễn phí</span>
              </li>
            </ul>
          </Link>

          <Link to="/fill-info" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 transform hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600">Gia Hạn Hộ Chiếu Hỏa Tốc</h2>
            <ul className="list-none space-y-3 sm:space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Thời gian xử lý: 1 ngày làm việc</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Phí dịch vụ: 800.000 VNĐ</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Hỗ trợ hoàn thiện hồ sơ</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm sm:text-base">Tư vấn miễn phí 24/7</span>
              </li>
            </ul>
          </Link>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-800 text-center">Quy Trình Thực Hiện</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center bg-blue-50 p-3 sm:p-4 rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-4 sm:mr-6 text-base sm:text-lg font-bold">1</div>
              <p className="text-sm sm:text-lg">Nộp hồ sơ và thanh toán phí dịch vụ</p>
            </div>
            <div className="flex items-center bg-blue-50 p-3 sm:p-4 rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-4 sm:mr-6 text-base sm:text-lg font-bold">2</div>
              <p className="text-sm sm:text-lg">Kiểm tra và xác nhận thông tin</p>
            </div>
            <div className="flex items-center bg-blue-50 p-3 sm:p-4 rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-4 sm:mr-6 text-base sm:text-lg font-bold">3</div>
              <p className="text-sm sm:text-lg">Tiến hành gia hạn hộ chiếu</p>
            </div>
            <div className="flex items-center bg-blue-50 p-3 sm:p-4 rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-4 sm:mr-6 text-base sm:text-lg font-bold">4</div>
              <p className="text-sm sm:text-lg">Nhận hộ chiếu đã gia hạn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services