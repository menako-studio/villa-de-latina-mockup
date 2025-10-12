import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrainingList from '@/components/TrainingList';
// import { useTrainings } from '@/hooks/useTrainings';


export default function TrainingsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing'>('all');
  // Dummy data
  const allTrainings = [
    {
      id: '1',
      slug: 'digital-marketing-bootcamp',
      title: 'Digital Marketing Bootcamp',
      description: 'Pelatihan intensif digital marketing untuk UMKM dan pemula.',
      shortDescription: 'Bootcamp digital marketing untuk pemula dan UMKM.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
  status: 'upcoming' as const,
      startDate: new Date('2025-10-28T09:00:00'),
      endDate: new Date('2025-10-28T16:00:00'),
      location: 'Villa Kuningan',
      price: 0,
      maxParticipants: 30,
      currentParticipants: 12,
      category: 'Digital Marketing',
      instructor: 'Sari Wahyuni',
      instructorBio: 'Digital marketing expert with 10+ years experience.',
      requirements: ['Laptop', 'Akun Google'],
      benefits: ['Sertifikat', 'Materi digital'],
      schedule: [],
      createdAt: new Date('2025-09-01T10:00:00'),
      updatedAt: new Date('2025-09-10T10:00:00'),
      googleCalendarEventId: undefined,
    },
    {
      id: '2',
      slug: 'public-speaking-masterclass',
      title: 'Public Speaking Masterclass',
      description: 'Belajar public speaking dari praktisi berpengalaman.',
      shortDescription: 'Masterclass public speaking untuk semua kalangan.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop&crop=center',
  status: 'ongoing' as const,
      startDate: new Date('2025-10-27T14:00:00'),
      endDate: new Date('2025-10-27T17:00:00'),
      location: 'Online',
      price: 100000,
      maxParticipants: 50,
      currentParticipants: 40,
      category: 'Public Speaking',
      instructor: 'Ahmad Rizki',
      instructorBio: 'Trainer public speaking dan MC profesional.',
      requirements: ['Koneksi internet'],
      benefits: ['Sertifikat', 'Akses rekaman'],
      schedule: [],
      createdAt: new Date('2025-09-05T10:00:00'),
      updatedAt: new Date('2025-09-15T10:00:00'),
      googleCalendarEventId: undefined,
    },
    {
      id: '3',
      slug: 'financial-planning-workshop',
      title: 'Financial Planning Workshop',
      description: 'Atur keuangan pribadi dan bisnis dengan lebih baik.',
      shortDescription: 'Workshop perencanaan keuangan untuk semua.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
  status: 'upcoming' as const,
      startDate: new Date('2025-10-30T19:00:00'),
      endDate: new Date('2025-10-30T21:00:00'),
      location: 'Villa Kuningan',
      price: 50000,
      maxParticipants: 25,
      currentParticipants: 10,
      category: 'Finance',
      instructor: 'Fatimah',
      instructorBio: 'Konsultan keuangan bersertifikat.',
      requirements: ['Buku catatan'],
      benefits: ['Sertifikat', 'Template keuangan'],
      schedule: [],
      createdAt: new Date('2025-09-10T10:00:00'),
      updatedAt: new Date('2025-09-20T10:00:00'),
      googleCalendarEventId: undefined,
    },
    {
      id: '4',
      slug: 'womens-entrepreneur-network',
      title: "Women's Entrepreneur Network",
      description: 'Komunitas dan pelatihan untuk wirausaha perempuan.',
      shortDescription: 'Jaringan wirausaha perempuan Indonesia.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&crop=center',
  status: 'upcoming' as const,
      startDate: new Date('2025-10-31T18:00:00'),
      endDate: new Date('2025-10-31T20:00:00'),
      location: 'Online',
      price: 0,
      maxParticipants: 100,
      currentParticipants: 60,
      category: 'Entrepreneurship',
      instructor: 'Maya Sari',
      instructorBio: 'Founder komunitas wirausaha perempuan.',
      requirements: ['Motivasi tinggi'],
      benefits: ['Networking', 'Mentoring'],
      schedule: [],
      createdAt: new Date('2025-09-15T10:00:00'),
      updatedAt: new Date('2025-09-25T10:00:00'),
      googleCalendarEventId: undefined,
    },
  ];

  let trainings = allTrainings;
  if (filter === 'upcoming') trainings = allTrainings.filter(t => t.status === 'upcoming');
  if (filter === 'ongoing') trainings = allTrainings.filter(t => t.status === 'ongoing');
  const loading = false;
  const error = null;

  const filterOptions = [
    { value: 'all', label: 'Semua Pelatihan' },
    { value: 'upcoming', label: 'Akan Datang' },
    { value: 'ongoing', label: 'Sedang Berlangsung' },
  ];

  return (
    <>
      <Head>
        <title>Daftar Pelatihan - Villa Kuningan Training Center</title>
        <meta 
          name="description" 
          content="Lihat semua program pelatihan yang tersedia di Villa Kuningan Training Center. Pelatihan berkualitas dengan instruktur berpengalaman." 
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Program Pelatihan
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Temukan berbagai program pelatihan yang sesuai dengan kebutuhan Anda
              </p>
            </div>
          </div>
        </div>

        {/* Filters and Content */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value as any)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      filter === option.value
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8">
              <p className="text-red-800">Error: {error}</p>
            </div>
          )}

          {/* Training List */}
          <TrainingList 
            trainings={trainings} 
            loading={loading}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
  