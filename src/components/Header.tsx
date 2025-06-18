import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link2, Menu, X, LogIn, Calculator, Shield } from 'lucide-react';

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <Link2 className="h-8 w-8 text-blue-600 mr-3" />
            <span className="text-2xl font-bold text-gray-900">HighDALink</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/why-choose-us" 
              className={`transition-colors ${isActive('/why-choose-us') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Why Choose Us
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/roi-calculator" 
              className={`transition-colors flex items-center ${isActive('/roi-calculator') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              <Calculator className="h-4 w-4 mr-1" />
              ROI Calculator
            </Link>
            <Link 
              to="/guarantee" 
              className={`transition-colors flex items-center ${isActive('/guarantee') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              <Shield className="h-4 w-4 mr-1" />
              Guarantee
            </Link>
            <Link 
              to="/login" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors border border-gray-300 px-4 py-2 rounded-lg hover:border-blue-600"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
            <Link 
              to="/get-started" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/why-choose-us" 
                className={`transition-colors ${isActive('/why-choose-us') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                Why Choose Us
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors ${isActive('/pricing') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link 
                to="/roi-calculator" 
                className={`transition-colors flex items-center ${isActive('/roi-calculator') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                <Calculator className="h-4 w-4 mr-1" />
                ROI Calculator
              </Link>
              <Link 
                to="/guarantee" 
                className={`transition-colors flex items-center ${isActive('/guarantee') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                <Shield className="h-4 w-4 mr-1" />
                Guarantee
              </Link>
              <Link 
                to="/login" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors border border-gray-300 px-4 py-2 rounded-lg hover:border-blue-600"
                onClick={closeMobileMenu}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
              <Link 
                to="/get-started" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;