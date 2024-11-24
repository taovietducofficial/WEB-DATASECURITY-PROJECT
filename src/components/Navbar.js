import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-6">
                        <Link to="/" className="transform hover:scale-105 transition duration-300">
                            <img src="/images.png" alt="Logo" className="h-12 w-12 rounded-full" />
                        </Link>
                        <span className="text-white text-2xl font-bold tracking-wider">Gia Hạn Hộ Chiếu Online</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/home" className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Trang Chủ
                        </Link>
                        <Link to="/services" className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/services') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Dịch Vụ
                        </Link>
                        <Link to="/process" className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/process') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Quy Trình
                        </Link>
                        <Link to="/contact" className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/contact') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Liên Hệ
                        </Link>
                    </div>

                    {/* Login/Register Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/login') ? 'bg-blue-700 text-blue-200' : 'hover:text-blue-200 hover:bg-blue-700'}`}>
                            Đăng Nhập
                        </Link>
                        <Link to="/register" className={`bg-white text-blue-600 px-6 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md ${isActive('/register') ? 'bg-blue-100' : 'hover:bg-blue-100'}`}>
                            Đăng Ký
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="mobile-menu-button p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition-all duration-300 transform hover:scale-110"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 rounded-lg mt-2 shadow-xl">
                        <Link to="/" className={`text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${isActive('/') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}>
                            Trang Chủ
                        </Link>
                        <Link to="/services" className={`text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${isActive('/services') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}>
                            Dịch Vụ
                        </Link>
                        <Link to="/process" className={`text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${isActive('/process') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}>
                            Quy Trình
                        </Link>
                        <Link to="/contact" className={`text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${isActive('/contact') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}>
                            Liên Hệ
                        </Link>
                        <Link to="/login" className={`text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${isActive('/login') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}>
                            Đăng Nhập
                        </Link>
                        <Link to="/register" className={`text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${isActive('/register') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}>
                            Đăng Ký
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
