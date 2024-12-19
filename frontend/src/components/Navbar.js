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
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 md:space-x-6">
                        <Link to="/" className="transform hover:scale-105 transition duration-300">
                            <img src="/images.png" alt="Logo" className="h-8 w-8 md:h-12 md:w-12 rounded-full" />
                        </Link>
                        <span className="text-white text-sm md:text-2xl font-bold tracking-wider">Gia Hạn Hộ Chiếu Online</span>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden lg:flex space-x-4 md:space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/home" className={`text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Trang Chủ
                        </Link>
                        <Link to="/services" className={`text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/services') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Dịch Vụ
                        </Link>
                        <Link to="/process" className={`text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/process') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Quy Trình
                        </Link>
                        <Link to="/contact" className={`text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/contact') ? 'bg-blue-700 text-blue-200' : 'hover:text-yellow-200 hover:bg-blue-900'}`}>
                            Liên Hệ
                        </Link>
                    </div>

                    {/* Login/Register Buttons - Desktop */}
                    <div className="hidden lg:flex items-center space-x-2 md:space-x-4">
                        <Link to="/login" className={`text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${isActive('/login') ? 'bg-blue-700 text-blue-200' : 'hover:text-blue-200 hover:bg-blue-700'}`}>
                            Đăng Nhập
                        </Link>
                        {/* <Link to="/signup" className={`bg-white text-blue-600 px-4 py-1 md:px-6 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md ${isActive('/register') ? 'bg-blue-100' : 'hover:bg-blue-100'}`}>
                            Đăng Ký
                        </Link> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="mobile-menu-button p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition-all duration-300 transform hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed inset-0 z-50 bg-blue-900 bg-opacity-95 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col h-full">
                        <div className="flex justify-end p-4">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white p-2 hover:bg-blue-800 rounded-full"
                                aria-label="Close menu"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
                            <Link to="/" onClick={toggleMobileMenu} className={`text-white w-full text-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
                                Trang Chủ
                            </Link>
                            <Link to="/services" onClick={toggleMobileMenu} className={`text-white w-full text-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${isActive('/services') ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
                                Dịch Vụ
                            </Link>
                            <Link to="/process" onClick={toggleMobileMenu} className={`text-white w-full text-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${isActive('/process') ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
                                Quy Trình
                            </Link>
                            <Link to="/contact" onClick={toggleMobileMenu} className={`text-white w-full text-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${isActive('/contact') ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
                                Liên Hệ
                            </Link>
                            <div className="w-full border-t border-blue-700 my-4"></div>
                            <Link to="/login" onClick={toggleMobileMenu} className={`text-white w-full text-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${isActive('/login') ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
                                Đăng Nhập
                            </Link>
                            {/* <Link to="/signup" onClick={toggleMobileMenu} className="bg-white w-full text-center text-blue-600 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-blue-100">
                                Đăng Ký
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
