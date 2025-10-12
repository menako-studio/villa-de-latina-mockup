import React from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Beranda', href: '/' },
      { name: 'Pelatihan', href: '/trainings' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tentang Kami', href: '/about' },
    ],
    support: [
      { name: 'Pusat Bantuan', href: '/help' },
      { name: 'Hubungi Kami', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Syarat & Ketentuan', href: '/terms' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.317C4.253 14.794 3.8 13.61 3.8 12.267c0-1.297.49-2.448 1.317-3.323.873-.827 2.057-1.28 3.4-1.28 1.297 0 2.448.49 3.323 1.317.827.873 1.28 2.057 1.28 3.4 0 1.297-.49 2.448-1.317 3.323-.873.827-2.057 1.28-3.4 1.28zm7.49-9.42c-.49 0-.883-.393-.883-.883s.393-.883.883-.883.883.393.883.883-.393.883-.883.883zm-3.132 6.628c-1.717 0-3.106-1.39-3.106-3.107s1.39-3.106 3.106-3.106 3.107 1.39 3.107 3.106-1.39 3.107-3.107 3.107z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">VK</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Villa Kuningan</div>
                <div className="text-sm text-gray-500">Training Center</div>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Pusat pelatihan terdepan di Kuningan, Jawa Barat. Kami menyediakan berbagai program 
              pelatihan berkualitas untuk meningkatkan kompetensi dan keterampilan masyarakat.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span>Jl. Villa Kuningan No. 123, Kuningan, Jawa Barat 45511</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span>info@villakuningan.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <PhoneIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span>+62 812-3456-7890</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-red-600 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">
              Bantuan
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-red-600 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © 2024 Villa Kuningan Training Center. All rights reserved.
              </p>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}