import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Dịch Vụ Gia Hạn Hộ Chiếu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/fill-info" className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Gia Hạn Hộ Chiếu Thông Thường</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Thời gian xử lý: 5-7 ngày làm việc</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Phí dịch vụ: 200.000 VNĐ</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Hỗ trợ hoàn thiện hồ sơ</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Tư vấn miễn phí</span>
            </li>
          </ul>
        </Link>

        <Link to="/fill-info" className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Gia Hạn Hộ Chiếu Nhanh</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Thời gian xử lý: 2-3 ngày làm việc</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Phí dịch vụ: 400.000 VNĐ</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Hỗ trợ hoàn thiện hồ sơ</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Tư vấn miễn phí</span>
            </li>
          </ul>
        </Link>

        <Link to="/fill-info" className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Gia Hạn Hộ Chiếu Hỏa Tốc</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Thời gian xử lý: 1 ngày làm việc</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Phí dịch vụ: 800.000 VNĐ</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Hỗ trợ hoàn thiện hồ sơ</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Tư vấn miễn phí 24/7</span>
            </li>
          </ul>
        </Link>
      </div>

      <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">Quy Trình Thực Hiện</h2>
        <div className="space-y-6">
          <div className="flex items-center bg-blue-50 p-4 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6 text-lg font-bold">1</div>
            <p className="text-lg">Nộp hồ sơ và thanh toán phí dịch vụ</p>
          </div>
          <div className="flex items-center bg-blue-50 p-4 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6 text-lg font-bold">2</div>
            <p className="text-lg">Kiểm tra và xác nhận thông tin</p>
          </div>
          <div className="flex items-center bg-blue-50 p-4 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6 text-lg font-bold">3</div>
            <p className="text-lg">Tiến hành gia hạn hộ chiếu</p>
          </div>
          <div className="flex items-center bg-blue-50 p-4 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6 text-lg font-bold">4</div>
            <p className="text-lg">Nhận hộ chiếu đã gia hạn</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services