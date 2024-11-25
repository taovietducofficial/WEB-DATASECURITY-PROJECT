import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Thông tin liên hệ */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Liên Hệ</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center justify-center sm:justify-start text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="flex-1">123 Đường ABC, Quận XYZ, TP.HCM</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(84) 123-456-789</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hotro@giahanhochieu.vn</span>
              </li>
            </ul>
          </div>

          {/* Links hữu ích */}
          <div className="text-center mt-8 sm:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Liên Kết</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-200 transition duration-300">Trang Chủ</a></li>
              <li><a href="#" className="hover:text-blue-200 transition duration-300">Dịch Vụ</a></li>
              <li><a href="#" className="hover:text-blue-200 transition duration-300">Hướng Dẫn</a></li>
              <li><a href="#" className="hover:text-blue-200 transition duration-300">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Giờ làm việc */}
          <div className="text-center lg:text-right mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Giờ Làm Việc</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center justify-center lg:justify-end text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Thứ 2 - Thứ 6: 8:00 - 17:00</span>
              </li>
              <li className="flex items-center justify-center lg:justify-end text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Thứ 7: 8:00 - 12:00</span>
              </li>
              <li className="flex items-center justify-center lg:justify-end text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Chủ nhật: Nghỉ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-blue-100 text-sm sm:text-base">&copy; 2024 Dịch Vụ Gia Hạn Hộ Chiếu. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer