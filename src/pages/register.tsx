import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon, EyeSlashIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    newsletter: true
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap harus diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor HP harus diisi';
    } else if (!/^(\+62|62|0)[0-9]{8,13}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Format nomor HP tidak valid';
    }

    if (!formData.password) {
      newErrors.password = 'Password harus diisi';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password harus diisi';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Anda harus menyetujui syarat dan ketentuan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Register:', formData);
      // Handle registration logic here
    }
  };

  const passwordRequirements = [
    { text: 'Minimal 8 karakter', met: formData.password.length >= 8 },
    { text: 'Mengandung huruf besar', met: /[A-Z]/.test(formData.password) },
    { text: 'Mengandung angka', met: /[0-9]/.test(formData.password) }
  ];

  return (
    <>
      <Head>
        <title>Daftar - Villa Kuningan Training Center</title>
        <meta name="description" content="Daftar akun baru di Villa Kuningan Training Center untuk mengakses pelatihan gratis berkualitas." />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-gray-100 opacity-70"></div>
        </div>

        <div className="relative max-w-md mx-auto">
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
              Bergabung dengan Kami
            </h1>
            <p className="text-gray-600">
              Dapatkan akses ke semua pelatihan gratis berkualitas
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
            {/* Social Register */}
            <div className="mb-6">
              <button className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                <Image
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  width={18}
                  height={18}
                  className="mr-3"
                />
                Daftar dengan Google
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau daftar dengan email</span>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan nama lengkap Anda"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="contoh@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="08123456789"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-3 pr-10 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Buat password yang kuat"
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
                
                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center text-xs">
                        <CheckIcon 
                          className={`h-3 w-3 mr-2 ${
                            req.met ? 'text-green-500' : 'text-gray-300'
                          }`}
                        />
                        <span className={req.met ? 'text-green-600' : 'text-gray-500'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Konfirmasi Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-3 pr-10 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ketik ulang password Anda"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Agreement Checkbox */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                    <span className="text-red-500">*</span> Saya menyetujui{' '}
                    <Link href="/terms" className="text-red-600 hover:underline">
                      Syarat & Ketentuan
                    </Link>
                    {' '}dan{' '}
                    <Link href="/privacy" className="text-red-600 hover:underline">
                      Kebijakan Privasi
                    </Link>
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p className="text-sm text-red-600">{errors.agreeTerms}</p>
                )}

                <div className="flex items-start">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Saya ingin menerima informasi pelatihan terbaru via email
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Daftar Sekarang
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Sudah punya akun?{' '}
                  <Link href="/login" className="font-medium text-red-600 hover:text-red-500">
                    Masuk di sini
                  </Link>
                </p>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-4">
                  100% gratis • Tidak ada biaya tersembunyi • Bisa dibatalkan kapan saja
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

          {/* Benefits Section */}
          <div className="mt-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Keuntungan bergabung dengan kami
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                <div className="bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Pelatihan Gratis</h4>
                  <p className="text-sm text-gray-600">Akses ke semua program pelatihan tanpa biaya</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                <div className="bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Sertifikat</h4>
                  <p className="text-sm text-gray-600">Dapatkan sertifikat setelah menyelesaikan pelatihan</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                <div className="bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Komunitas</h4>
                  <p className="text-sm text-gray-600">Bergabung dengan komunitas pembelajar aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}