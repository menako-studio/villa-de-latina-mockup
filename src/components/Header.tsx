import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Pelatihan', href: '/trainings' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tentang Kami', href: '/about' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">VK</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900">Villa Kuningan</div>
                <div className="text-xs text-gray-500">Training Center</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  router.pathname === item.href
                    ? 'text-red-600 border-b-2 border-red-600 pb-4'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-red-600 text-sm font-medium transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Daftar
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    router.pathname === item.href
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}