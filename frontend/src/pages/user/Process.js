import React from 'react'

const Process = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Quy Trình Gia Hạn Hộ Chiếu</h1>

        {/* Banner giới thiệu */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Dịch Vụ Gia Hạn Hộ Chiếu Chuyên Nghiệp</h2>
          <p className="text-lg">Chúng tôi cam kết mang đến dịch vụ gia hạn hộ chiếu nhanh chóng, thuận tiện với quy trình đơn giản, minh bạch. Đội ngũ nhân viên chuyên nghiệp luôn sẵn sàng hỗ trợ quý khách 24/7.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Bước 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">1</div>
                <h2 className="text-2xl font-bold text-blue-800">Chuẩn Bị Hồ Sơ</h2>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 mb-4">Để đảm bảo quá trình gia hạn diễn ra thuận lợi, quý khách vui lòng chuẩn bị đầy đủ các giấy tờ sau:</p>
                <ul className="list-disc space-y-2 text-gray-700">
                  <li>Hộ chiếu gốc cần gia hạn (còn nguyên vẹn, không rách nát)</li>
                  <li>CMND/CCCD (bản sao có công chứng không quá 6 tháng)</li>
                  <li>02 ảnh 4x6 nền trắng (chụp không quá 6 tháng)</li>
                  <li>Tờ khai theo mẫu (được cung cấp tại văn phòng hoặc download từ website)</li>
                  <li>Các giấy tờ bổ sung khác (nếu có) như: giấy khai sinh, hộ khẩu, etc.</li>
                </ul>
              </div>
            </div>

            {/* Bước 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">2</div>
                <h2 className="text-2xl font-bold text-blue-800">Nộp Hồ Sơ</h2>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 mb-4">Quý khách có thể lựa chọn một trong các hình thức sau:</p>
                <ul className="list-disc space-y-2 text-gray-700">
                  <li>Nộp trực tiếp tại văn phòng (Địa chỉ: 123 ABC, Quận XYZ, TP.HCM)</li>
                  <li>Gửi hồ sơ qua đường bưu điện (đảm bảo an toàn và bảo mật)</li>
                  <li>Đăng ký online và được nhân viên đến tận nơi nhận hồ sơ (áp dụng trong bán kính 10km)</li>
                  <li>Đặt lịch hẹn trước để được ưu tiên xử lý</li>
                </ul>
                <div className="bg-yellow-50 p-4 mt-4 rounded-lg">
                  <p className="text-yellow-800 font-semibold">Lưu ý: Tất cả hồ sơ sẽ được kiểm tra kỹ lưỡng trước khi tiếp nhận</p>
                </div>
              </div>
            </div>

            {/* Bước 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">3</div>
                <h2 className="text-2xl font-bold text-blue-800">Thanh Toán</h2>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 mb-4">Chúng tôi cung cấp nhiều phương thức thanh toán linh hoạt:</p>
                <ul className="list-disc space-y-2 text-gray-700">
                  <li>Thanh toán trực tiếp bằng tiền mặt tại văn phòng</li>
                  <li>Chuyển khoản ngân hàng (Vietcombank, BIDV, Agribank, Techcombank)</li>
                  <li>Ví điện tử (Momo, VNPay, ZaloPay)</li>
                  <li>Thanh toán qua thẻ tín dụng/ghi nợ quốc tế</li>
                  <li>Trả góp 0% lãi suất qua thẻ tín dụng</li>
                </ul>
                <div className="bg-green-50 p-4 mt-4 rounded-lg">
                  <p className="text-green-800">Xuất hóa đơn VAT theo yêu cầu</p>
                </div>
              </div>
            </div>

            {/* Bước 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">4</div>
                <h2 className="text-2xl font-bold text-blue-800">Theo Dõi Tiến Độ</h2>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 mb-4">Chúng tôi cung cấp nhiều kênh theo dõi tiến độ xử lý hồ sơ:</p>
                <ul className="list-disc space-y-2 text-gray-700">
                  <li>Tra cứu trực tuyến qua mã số hồ sơ trên website</li>
                  <li>Nhận thông báo tự động qua SMS</li>
                  <li>Cập nhật tiến độ qua email</li>
                  <li>Tổng đài hỗ trợ 24/7</li>
                  <li>Ứng dụng di động theo dõi tiến độ</li>
                </ul>
                <div className="bg-blue-50 p-4 mt-4 rounded-lg">
                  <p className="text-blue-800">Cập nhật tiến độ realtime, minh bạch</p>
                </div>
              </div>
            </div>

            {/* Bước 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">5</div>
                <h2 className="text-2xl font-bold text-blue-800">Nhận Hộ Chiếu</h2>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 mb-4">Đa dạng phương thức nhận hộ chiếu đã gia hạn:</p>
                <ul className="list-disc space-y-2 text-gray-700">
                  <li>Nhận trực tiếp tại văn phòng (có SMS thông báo khi hồ sơ hoàn tất)</li>
                  <li>Nhận qua đường bưu điện (có bảo hiểm và tracking)</li>
                  <li>Được giao tận nơi (trong khu vực nội thành)</li>
                  <li>Có thể ủy quyền cho người khác nhận thay (cần giấy ủy quyền)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            {/* Thông tin bổ sung */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Lưu ý quan trọng:</h3>
              <ul className="list-disc space-y-2 text-gray-700 ml-6">
                <li>Thời gian xử lý: 3-5 ngày làm việc (gói thường), 1-2 ngày làm việc (gói nhanh)</li>
                <li>Vui lòng chuẩn bị đầy đủ giấy tờ để tránh chậm trễ</li>
                <li>Kiểm tra kỹ thông tin trước khi nộp hồ sơ</li>
                <li>Mọi thắc mắc xin liên hệ hotline: 1900 xxxx (24/7)</li>
              </ul>
            </div>

            {/* Cam kết dịch vụ */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Cam kết dịch vụ:</h3>
              <ul className="list-disc space-y-2 text-gray-700 ml-6">
                <li>Bảo mật thông tin khách hàng tuyệt đối</li>
                <li>Quy trình xử lý nhanh chóng, chuyên nghiệp</li>
                <li>Chi phí minh bạch, không phát sinh</li>
                <li>Hoàn tiền 100% nếu không hài lòng</li>
                <li>Hỗ trợ tư vấn miễn phí 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process