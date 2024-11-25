import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    idNumber: '',
    occupation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-10 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-3">Đăng Ký Tài Khoản</h2>
          <p className="text-gray-600 text-lg">Chào mừng bạn đến với dịch vụ của chúng tôi</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="group">
              <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">
                Ngày sinh
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="example@email.com"
              />
            </div>

            <div className="group">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            <div className="group">
              <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                Giới tính
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              >
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>

            <div className="group">
              <label htmlFor="idNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Số CMND/CCCD
              </label>
              <input
                type="text"
                name="idNumber"
                id="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Nhập số CMND/CCCD"
              />
            </div>

            <div className="group">
              <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
                Nghề nghiệp
              </label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Nhập nghề nghiệp của bạn"
              />
            </div>

            <div className="group md:col-span-2">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                Địa chỉ
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Nhập địa chỉ của bạn"
              />
            </div>

            <div className="group">
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                Tỉnh/Thành phố
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Nhập tỉnh/thành phố"
              />
            </div>

            <div className="group">
              <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
                Quận/Huyện
              </label>
              <input
                type="text"
                name="district"
                id="district"
                value={formData.district}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Nhập quận/huyện"
              />
            </div>

            <div className="group">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>

            <div className="group">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
            >
              Đăng Ký Ngay
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Đã có tài khoản?{' '}
            <Link to="/login" className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;