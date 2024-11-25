import React from 'react';
import { Link } from 'react-router-dom';

const Team2 = () => {
    const teamMembers = [
        {
            name: "Tào Việt Đức",
            mssv: "MSSV: 21110169",
            image: "/pngtree-cute-school-student-cartoon-charactor-png-image_12329100.png"
        },
        {
            name: "Trần Nguyễn Trí Đạt", 
            mssv: "MSSV: 21110162",
            image: "/pngtree-adorable-3d-cartoon-boy-with-playful-expression-png-image_16641677.png"
        },
        {
            name: "Phạm Tấn Huy",
            mssv: "MSSV: 21110190", 
            image: "/pngtree-d-cartoon-rendering-of-a-cute-young-boy-waving-his-hand-png-image_16641674.png"
        },
        {
            name: "Lê Nguyễn Trí Nhân",
            mssv: "MSSV: 21110841",
            image: "/pngtree-full-show-of-3d-cute-smiling-cartoon-boy-png-image_14441258.png"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-100">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm"></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-8 py-4 bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300 relative">
                        Đội Ngũ Phát Triển
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full"></span>
                    </h1>
                    <p className="text-gray-700 text-2xl max-w-4xl mx-auto leading-relaxed font-light">
                        Chúng tôi là những người đam mê công nghệ, cùng nhau xây dựng nên hệ thống 
                        <span className="font-semibold text-blue-800"> Gia Hạn Hộ Chiếu Online </span> 
                        hiện đại và tiện lợi
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group flex justify-center w-72">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-blue-300 w-full">
                                <div className="h-72 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent z-10" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-56 h-56 mx-auto mt-6 object-contain transform group-hover:scale-110 transition duration-500"
                                        onError={(e) => { e.target.src = "/default-avatar.jpg" }}
                                    />
                                </div>
                                <div className="p-8 bg-gradient-to-br from-white/90 to-blue-50/90 text-center">
                                    <h3 className="text-2xl font-bold text-blue-900 mb-3 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                                        {member.name}
                                    </h3>
                                    <p className="text-lg font-semibold text-blue-600 tracking-wide bg-blue-100/70 py-2 px-4 rounded-lg inline-block shadow-sm whitespace-nowrap">
                                        {member.mssv}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-16 mx-auto max-w-5xl border border-blue-100 hover:bg-white/90 transition-all duration-500">
                        <h2 className="text-4xl font-bold text-blue-900 mb-10 bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent py-2">
                            Về Dự Án Của Chúng Tôi
                        </h2>
                        <p className="text-gray-700 text-xl leading-relaxed mb-12">
                            Dự án <span className="font-semibold text-blue-800">Web Gia Hạn Hộ Chiếu Online</span> được phát triển với mục tiêu 
                            đơn giản hóa quy trình gia hạn hộ chiếu, giúp người dân tiết kiệm thời gian và chi phí.
                            Chúng tôi cam kết mang đến trải nghiệm người dùng tốt nhất với giao diện thân thiện
                            và quy trình xử lý nhanh chóng, an toàn.
                        </p>
                        <div className="flex justify-center gap-8">
                            <Link to="/home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3 transform hover:scale-105">
                                <span>Khám Phá Ngay</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team2;