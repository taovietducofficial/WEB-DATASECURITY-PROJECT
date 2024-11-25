import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Giả lập gửi API
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Tin nhắn đã được gửi thành công!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800 animate-fade-in">Liên Hệ Với Chúng Tôi</h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Thông tin liên hệ */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 backdrop-blur-sm bg-white/90">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <i className="fas fa-address-card mr-2"></i>
              Thông Tin Liên Hệ
            </h2>
            <div className="space-y-6">
              <div className="flex items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-blue-600 mr-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700 text-lg">123 Đường ABC, Quận XYZ, TP.HCM</p>
              </div>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-blue-600 mr-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700 text-lg">0123.456.789</p>
              </div>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700 text-lg">info@giahanhochieu.com</p>
              </div>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 text-lg">Thời gian làm việc: 8:00 - 17:30 (Thứ 2 - Thứ 7)</p>
              </div>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-blue-600 mr-4 animate-ping" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 text-lg">Hotline hỗ trợ 24/7: 1900.xxxx</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 transform hover:scale-125 transition-all">
                <i className="fab fa-facebook-square text-3xl"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transform hover:scale-125 transition-all">
                <i className="fab fa-twitter-square text-3xl"></i>
              </a>
              <a href="#" className="text-red-600 hover:text-red-800 transform hover:scale-125 transition-all">
                <i className="fab fa-youtube-square text-3xl"></i>
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transform hover:scale-125 transition-all">
                <i className="fab fa-instagram-square text-3xl"></i>
              </a>
            </div>
          </div>

          {/* Form liên hệ */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 backdrop-blur-sm bg-white/90">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <i className="fas fa-paper-plane mr-2"></i>
              Gửi Tin Nhắn
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  <i className="fas fa-user mr-2"></i>Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  <i className="fas fa-envelope mr-2"></i>Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  <i className="fas fa-phone mr-2"></i>Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                  <i className="fas fa-tag mr-2"></i>Chủ đề
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="service">Tư vấn dịch vụ</option>
                  <option value="price">Báo giá</option>
                  <option value="support">Hỗ trợ kỹ thuật</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  <i className="fas fa-comment mr-2"></i>Nội dung
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  placeholder="Nhập nội dung tin nhắn"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-4 rounded-lg transition duration-300 font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Đang gửi...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Gửi Tin Nhắn</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact