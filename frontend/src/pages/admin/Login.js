import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check login credentials
    const validUsers = [
      { username: 'XT_USER', password: '123', redirectTo: '/verification' },
      { username: 'XD_USER', password: '1234', redirectTo: '/approval' },
      { username: 'LT_USER', password: '12345', redirectTo: '/storage' },
      { username: 'GS_USER', password: '123456', redirectTo: '/dashboard' }
    ];
  
    const user = validUsers.find(
      (user) => user.username === formData.email && user.password === formData.password
    );
  
    if (user) {
      navigate(user.redirectTo); // Navigate based on the user's redirectTo value
    } else {
      alert('Invalid credentials'); // Show alert if credentials are incorrect
    }
  };
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-2 sm:mb-3">Đăng Nhập</h2>
          <p className="text-gray-600 text-base sm:text-lg">Chào mừng quay trở lại</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="group">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Username
            </label>
            <input
              type="text" // Thay đổi thành 'text' vì bạn đang dùng username
              name="email" // Bạn có thể giữ tên là 'email' hoặc đổi thành 'username'
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm sm:text-base"
              placeholder="Username"
            />

          </div>

          <div className="group">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm sm:text-base"
              placeholder="••••••••"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm sm:text-base gap-3 sm:gap-0">
            <label className="flex items-center cursor-pointer group">
              <input type="checkbox" className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-600 rounded border-2 border-gray-300" />
              <span className="ml-2 sm:ml-3 text-gray-600 group-hover:text-blue-600 transition-colors duration-200">Ghi nhớ đăng nhập</span>
            </label>
            <Link to="#" className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Quên mật khẩu?
            </Link>
          </div>

          <div className="pt-2 sm:pt-4">
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 px-4 sm:px-6 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
            >
              Đăng Nhập
            </button>
          </div>
        </form>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Bạn gặp vấn đề khi đăng nhập?{' '}
            <Link to="#" className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Liên hệ hỗ trợ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
