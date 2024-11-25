import React, { useState } from 'react'

const Fill_Info = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    idNumber: '',
    passportNumber: '',
    issueDate: '',
    expiryDate: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-blue-800 animate-fade-in">
          Điền Thông Tin Gia Hạn Hộ Chiếu
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Họ và tên</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Ngày sinh</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Giới tính</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                >
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Số CMND/CCCD</label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Số hộ chiếu</label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Ngày cấp</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Ngày hết hạn</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              <div className="sm:col-span-2 group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Địa chỉ</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div className="sm:col-span-2 group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">Loại dịch vụ</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                >
                  <option value="">Chọn loại dịch vụ</option>
                  <option value="normal">Gia Hạn Hộ Chiếu Thông Thường (5-7 ngày)</option>
                  <option value="fast">Gia Hạn Hộ Chiếu Nhanh (2-3 ngày)</option>
                  <option value="express">Gia Hạn Hộ Chiếu Hỏa Tốc (1 ngày)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Gửi Thông Tin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Fill_Info