import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileNavRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(event.target) && !event.target.closest('button[data-mobile-menu]')) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close mobile menu on window resize (to desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-md border-b border-[#f5f5f7]/30">
            <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-3">
                    <img
                        src="ilmi.jpg"
                        alt="MAN 2 Logo"
                        className="h-10 w-10 rounded-md"
                    />
                    <Link 
                        to="/" 
                        className="font-medium md:text-lg sm:text-base"
                    >
                        Ikatan Alumni MAN 2 Sukabumi
                    </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        to="/"
                        className="text-blue-900 hover:text-blue-600 font-medium transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/organization"
                        className="text-blue-900 hover:text-blue-600 font-medium transition-colors duration-300"
                    >
                        Organisasi
                    </Link>
                    <Link
                        to="/organization?tab=members"
                        className="text-blue-900 hover:text-blue-600 font-medium transition-colors duration-300"
                    >
                        Anggota
                    </Link>
                    <Link
                        to="/organization?tab=programs"
                        className="text-blue-900 hover:text-blue-600 font-medium transition-colors duration-300"
                    >
                        Program Kerja
                    </Link>
                    <ContactForm />
                </nav>

                {/* Mobile Navigation Menu with smooth animation */}
                <div
                    ref={mobileNavRef}
                    className={`absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden transform transition-all duration-300 ease-in-out ${
                        mobileMenuOpen 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                >
                    <div className="flex flex-col p-4 space-y-3">
                        <Link
                            to="/"
                            className="text-blue-900 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/organization?tab=structure"
                            className="text-blue-900 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Organisasi
                        </Link>
                        <Link
                            to="/organization?tab=members"
                            className="text-blue-900 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Anggota
                        </Link>
                        <Link
                            to="/organization?tab=programs"
                            className="text-blue-900 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Program Kerja
                        </Link>
                        <div className="py-2">
                            <ContactForm
                                buttonVariant="default"
                                buttonClassName="w-full justify-center"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        data-mobile-menu
                        onClick={toggleMobileMenu}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle menu"
                        className="relative"
                    >
                        <div className="flex flex-col justify-center items-center w-6 h-6">
                            <span 
                                className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                                }`}
                            ></span>
                            <span 
                                className={`block w-5 h-0.5 bg-current my-1 transition-all duration-300 ${
                                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            ></span>
                            <span 
                                className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? "-rotate-45 -translate-y-2 translate-x-0" : ""
                                }`}
                            ></span>
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;