import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
    // Handle login logic here
  };

  return (
    <>
      <Head>
        <title>Masuk - Villa Kuningan Training Center</title>
        <meta name="description" content="Masuk ke akun Villa Kuningan Training Center untuk mengakses pelatihan dan fitur eksklusif." />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-gray-100 opacity-70"></div>
        </div>

        <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-red-600 text-white p-2 rounded-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Villa Kuningan</h2>
                <p className="text-sm text-gray-600">Training Center</p>
              </div>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="text-gray-600">
              Masuk untuk melanjutkan perjalanan belajar Anda
            </p>
          </div>
        </div>

        <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
            {/* Social Login */}
            <div className="mb-6">
              <button className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                <Image
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  width={18}
                  height={18}
                  className="mr-3"
                />
                Masuk dengan Google
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau masuk dengan email</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                  placeholder="Masukkan email Anda"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                    placeholder="Masukkan password Anda"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                    Ingat saya
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-red-600 hover:text-red-500">
                    Lupa password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Masuk
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Belum punya akun?{' '}
                  <Link href="/register" className="font-medium text-red-600 hover:text-red-500">
                    Daftar sekarang
                  </Link>
                </p>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-4">
                  Dengan masuk, Anda menyetujui{' '}
                  <Link href="/terms" className="text-red-600 hover:underline">
                    Syarat & Ketentuan
                  </Link>
                  {' '}dan{' '}
                  <Link href="/privacy" className="text-red-600 hover:underline">
                    Kebijakan Privasi
                  </Link>
                </p>

                {/* Back to Home */}
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke beranda
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative mt-12 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Bergabung dengan ribuan peserta lainnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-red-600 mb-1">5000+</div>
                  <div className="text-sm text-gray-600">Peserta Aktif</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-red-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Program Pelatihan</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-red-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Gratis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}