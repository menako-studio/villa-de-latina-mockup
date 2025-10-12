import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page - Villa Kuningan Training Center</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  Villa Kuningan Training Center
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              🎉 Next.js & Tailwind CSS Berhasil Disetup!
            </h1>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Konfigurasi yang Sudah Berhasil:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">✅ PostCSS Fixed</h3>
                  <p className="text-green-600 text-sm">
                    Konfigurasi PostCSS sudah diperbaiki dengan format yang benar
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">✅ Tailwind CSS</h3>
                  <p className="text-green-600 text-sm">
                    Tailwind CSS sudah aktif dengan custom color palette
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">✅ Next.js 14</h3>
                  <p className="text-green-600 text-sm">
                    Next.js development server berjalan dengan baik
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">✅ TypeScript</h3>
                  <p className="text-green-600 text-sm">
                    TypeScript configuration ready untuk development
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">✅ .gitignore</h3>
                  <p className="text-green-600 text-sm">
                    Best practice .gitignore untuk Next.js project
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-medium text-yellow-800 mb-2">⚠️ Firebase</h3>
                  <p className="text-yellow-600 text-sm">
                    Perlu setup environment variables untuk Firebase
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Langkah Selanjutnya:
              </h2>
              <ol className="text-left text-blue-800 space-y-2">
                <li>1. Setup Firebase project di console.firebase.google.com</li>
                <li>2. Copy Firebase config ke file .env.local</li>
                <li>3. Setup Google Calendar API credentials</li>
                <li>4. Test halaman utama dan CMS admin</li>
                <li>5. Deploy ke Firebase Hosting</li>
              </ol>
            </div>

            <div className="mt-8 space-x-4">
              <Link
                href="/"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Lihat Homepage
              </Link>
              <Link
                href="/cms"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Test CMS Admin
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}