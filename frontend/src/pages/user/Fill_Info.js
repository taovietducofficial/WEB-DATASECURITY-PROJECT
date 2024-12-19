import React, { useState } from "react";
import { createResident } from "../../service/Resident/apiResidentCreate";

const Fill_Info = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    address: "",
    district: "",
    idCardNumber: "",
    phoneNumber: "",
    email: "",
    passportNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createResident(formData);

      if (response) {
        alert("Gửi thông tin thành công!");
        setFormData({
          fullName: "",
          gender: "",
          address: "",
          district: "",
          idCardNumber: "",
          phoneNumber: "",
          email: "",
          passportNumber: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Không thể kết nối với server. Vui lòng thử lại sau.");
    }
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
              {/* Họ và tên */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              {/* Giới tính */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Giới tính
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                >
                  <option value="">Chọn giới tính</option>
                  <option value="M">Nam</option>
                  <option value="F">Nữ</option>
                  <option value="O">Khác</option>
                </select>
              </div>

              {/* Địa chỉ */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              {/* Quận */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Quận
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              {/* Số CMND */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Số CMND/CCCD
                </label>
                <input
                  type="text"
                  name="idCardNumber"
                  value={formData.idCardNumber}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              {/* Số điện thoại */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>

              {/* Số hộ chiếu */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2">
                  Số hộ chiếu
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 group-hover:border-blue-300 transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none"
              >
                Gửi thông tin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fill_Info;
