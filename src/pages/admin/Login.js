import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10 transform hover:scale-[1.02] transition-all duration-300">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-800 mb-3">
            Đăng Nhập
          </h2>
          <p className="text-gray-600">Vui lòng đăng nhập để tiếp tục</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">
              Tên đăng nhập
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                required
                placeholder="Nhập tên đăng nhập"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 text-gray-400">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                required
                placeholder="Nhập mật khẩu"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-600">Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Đăng Nhập
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Bạn gặp vấn đề khi đăng nhập?</p>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Liên hệ hỗ trợ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
