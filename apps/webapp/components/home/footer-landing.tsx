import React from 'react';
import Link from 'next/link';

const FooterLanding = () => {
  return (
    <footer role="contentinfo" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <img 
                src="./logo.png" 
                alt="Soroswap Template Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Soroswap Template
              </h3>
              <p className="text-sm text-gray-600">
                Powered by Scaffold Rust
              </p>
            </div>
          </div>

          {/* Right: Navigation and Version */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6">
              <Link 
                href="https://github.com/ScaffoldRust/SoroSwap-Integration?tab=readme-ov-file#" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="View Documentation"
              >
                Documentation
              </Link>
              <Link 
                href="https://github.com/ScaffoldRust/SoroSwap-Integration.git" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="View GitHub Repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link 
                href="/support" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="Get Support"
              >
                Support
              </Link>
            </nav>

            {/* Version Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 bg-white">
              <span className="text-xs font-medium text-gray-600">v1.0.0</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Bottom Row */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © 2024 Scaffold Rust. Built with{' '}
            <span className="text-red-500" aria-label="love">❤️</span>{' '}
            for the Stellar ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLanding;