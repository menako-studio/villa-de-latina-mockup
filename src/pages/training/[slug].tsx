import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CalendarDaysIcon, 
  MapPinIcon, 
  ClockIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
  ShareIcon,
  BookmarkIcon,
  HeartIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function TrainingDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Local dummy data - same as in trainings page
  const allTrainings = [
    {
      id: '1',
      slug: 'digital-marketing-bootcamp',
      title: 'Digital Marketing Bootcamp',
      description: 'Pelatihan intensif digital marketing untuk UMKM dan pemula. Dalam pelatihan ini Anda akan mempelajari strategi digital marketing yang efektif, mulai dari social media marketing, content marketing, email marketing, hingga Google Ads. Cocok untuk pemilik bisnis, marketer, atau siapa saja yang ingin meningkatkan skill digital marketing.',
      shortDescription: 'Bootcamp digital marketing untuk pemula dan UMKM.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center',
      status: 'upcoming' as 'upcoming' | 'ongoing' | 'completed' | 'cancelled',
      startDate: new Date('2025-10-28T09:00:00'),
      endDate: new Date('2025-10-28T16:00:00'),
      location: 'Villa Kuningan, Jakarta Selatan',
      price: 0,
      maxParticipants: 30,
      currentParticipants: 12,
      category: 'Digital Marketing',
      instructor: 'Sari Wahyuni',
      instructorBio: 'Digital marketing expert with 10+ years experience. Former marketing manager at several tech startups.',
      requirements: ['Laptop', 'Akun Google', 'Koneksi Internet'],
      benefits: ['Sertifikat pelatihan', 'Materi digital lengkap', 'Template campaign', 'Grup Telegram alumni'],
      schedule: [
        {
          day: 1,
          startTime: '09:00',
          endTime: '12:00',
          topic: 'Pengenalan Digital Marketing',
          description: 'Overview ecosystem digital marketing dan trend terkini'
        },
        {
          day: 1,
          startTime: '13:00',
          endTime: '16:00',
          topic: 'Social Media Marketing Strategy',
          description: 'Strategi konten dan advertising di platform sosial media'
        }
      ],
      createdAt: new Date('2025-09-01T10:00:00'),
      updatedAt: new Date('2025-09-10T10:00:00'),
      googleCalendarEventId: undefined,
    },
    {
      id: '2',
      slug: 'public-speaking-masterclass',
      title: 'Public Speaking Masterclass',
      description: 'Belajar public speaking dari praktisi berpengalaman. Kuasai seni berbicara di depan umum dengan percaya diri. Pelatihan ini akan membantu Anda mengatasi rasa gugup, menyusun materi presentasi yang menarik, dan teknik delivery yang efektif.',
      shortDescription: 'Masterclass public speaking untuk semua kalangan.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop&crop=center',
      status: 'ongoing' as 'upcoming' | 'ongoing' | 'completed' | 'cancelled',
      startDate: new Date('2025-10-27T14:00:00'),
      endDate: new Date('2025-10-27T17:00:00'),
      location: 'Online via Zoom',
      price: 100000,
      maxParticipants: 50,
      currentParticipants: 40,
      category: 'Public Speaking',
      instructor: 'Ahmad Rizki',
      instructorBio: 'Trainer public speaking dan MC profesional dengan pengalaman 15+ tahun.',
      requirements: ['Koneksi internet stabil', 'Kamera dan microphone'],
      benefits: ['Sertifikat digital', 'Akses rekaman selamanya', 'Template presentasi', 'Konsultasi 1-on-1'],
      schedule: [],
      createdAt: new Date('2025-09-05T10:00:00'),
      updatedAt: new Date('2025-09-15T10:00:00'),
      googleCalendarEventId: undefined,
    },
    {
      id: '3',
      slug: 'financial-planning-workshop',
      title: 'Financial Planning Workshop',
      description: 'Atur keuangan pribadi dan bisnis dengan lebih baik. Workshop praktis untuk merencanakan keuangan masa depan, investasi, dan pengelolaan cash flow bisnis.',
      shortDescription: 'Workshop perencanaan keuangan untuk semua.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center',
      status: 'upcoming' as 'upcoming' | 'ongoing' | 'completed' | 'cancelled',
      startDate: new Date('2025-10-30T19:00:00'),
      endDate: new Date('2025-10-30T21:00:00'),
      location: 'Villa Kuningan, Jakarta Selatan',
      price: 50000,
      maxParticipants: 25,
      currentParticipants: 10,
      category: 'Finance',
      instructor: 'Fatimah',
      instructorBio: 'Konsultan keuangan bersertifikat dengan 12+ tahun pengalaman.',
      requirements: ['Buku catatan', 'Kalkulator'],
      benefits: ['Sertifikat pelatihan', 'Template keuangan Excel', 'Konsultasi follow-up'],
      schedule: [],
      createdAt: new Date('2025-09-10T10:00:00'),
      updatedAt: new Date('2025-09-20T10:00:00'),
      googleCalendarEventId: undefined,
    },
    {
      id: '4',
      slug: 'womens-entrepreneur-network',
      title: "Women's Entrepreneur Network",
      description: 'Komunitas dan pelatihan untuk wirausaha perempuan. Bergabunglah dengan network entrepreneur wanita Indonesia dan dapatkan insight, mentoring, serta kolaborasi bisnis.',
      shortDescription: 'Jaringan wirausaha perempuan Indonesia.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop&crop=center',
      status: 'upcoming' as 'upcoming' | 'ongoing' | 'completed' | 'cancelled',
      startDate: new Date('2025-10-31T18:00:00'),
      endDate: new Date('2025-10-31T20:00:00'),
      location: 'Online via Zoom',
      price: 0,
      maxParticipants: 100,
      currentParticipants: 60,
      category: 'Entrepreneurship',
      instructor: 'Maya Sari',
      instructorBio: 'Founder komunitas wirausaha perempuan dengan 500+ member aktif.',
      requirements: ['Motivasi tinggi', 'Bisnis plan (optional)'],
      benefits: ['Akses grup WhatsApp eksklusif', 'Mentoring session', 'Networking opportunities'],
      schedule: [],
      createdAt: new Date('2025-09-15T10:00:00'),
      updatedAt: new Date('2025-09-25T10:00:00'),
      googleCalendarEventId: undefined,
    },
  ];

  const training = allTrainings.find(t => t.slug === slug);

  if (!training) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <p className="text-red-600 text-lg">Pelatihan tidak ditemukan</p>
            <Link href="/trainings" className="text-red-600 hover:underline mt-2 inline-block">
              ← Kembali ke daftar pelatihan
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const getStatusBadge = (status: string) => {
    const badges: { [key: string]: string } = {
      upcoming: 'bg-blue-100 text-blue-800',
      ongoing: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    
    const labels: { [key: string]: string } = {
      upcoming: 'Akan Datang',
      ongoing: 'Sedang Berlangsung',
      completed: 'Selesai',
      cancelled: 'Dibatalkan',
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badges[status] || badges.upcoming}`}>
        {labels[status] || status}
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>{training.title} - Villa Kuningan Training Center</title>
        <meta name="description" content={training.description} />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section - Meetup Style */}
        <div className="relative bg-white">
          <div className="relative h-[250px] lg:h-[350px] overflow-hidden">
            <Image
              src={training.image}
              alt={training.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Card - Meetup Style */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                {/* Event Header */}
                <div className="p-6 lg:p-8">
                  {/* Event Title */}
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {training.title}
                  </h1>

                  {/* Hosted by */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {training.instructor.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Hosted by <span className="font-semibold text-gray-900">{training.instructor}</span></p>
                      <p className="text-xs text-gray-500">Speaker, {training.category}</p>
                    </div>
                  </div>

                  {/* Event Info Cards */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Date & Time Card */}
                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CalendarDaysIcon className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          {format(training.startDate, 'EEEE, dd MMMM yyyy', { locale: id })}
                        </p>
                        <p className="text-sm text-gray-600">
                          {format(training.startDate, 'HH:mm')} to {format(training.endDate, 'HH:mm')} WIB
                        </p>
                        <button className="text-red-600 text-sm hover:underline mt-1 font-medium">
                          + Add to calendar
                        </button>
                      </div>
                    </div>

                    {/* Location Card */}
                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPinIcon className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">Online event</p>
                        <p className="text-sm text-gray-600 mb-1">{training.location}</p>
                        {training.location.toLowerCase().includes('villa kuningan') ? (
                          <button className="text-red-600 text-sm hover:underline font-medium">
                            View map
                          </button>
                        ) : (
                          <button className="text-red-600 text-sm hover:underline font-medium">
                            Link visible for attendees
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rating and Attendees */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        {/* Star Rating */}
                        <div className="flex items-center space-x-1 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">4.9 (9 reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        <span>{training.currentParticipants} attendees</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1">
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50">
                        <ShareIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50">
                        <BookmarkIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50">
                        <HeartIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Detail</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="whitespace-pre-line leading-relaxed text-base">
                    {training.description}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              {training.requirements && training.requirements.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Yang Perlu Dipersiapkan</h2>
                  <ul className="space-y-3">
                    {training.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {training.benefits && training.benefits.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Apa yang Akan Anda Dapatkan</h2>
                  <ul className="space-y-3">
                    {training.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Schedule */}
              {training.schedule && training.schedule.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Jadwal Pelatihan</h2>
                  <div className="space-y-4">
                    {training.schedule.map((item, index) => (
                      <div key={index} className="flex p-4 bg-gray-50 rounded-lg">
                        <div className="bg-red-600 text-white rounded-lg w-16 h-16 flex flex-col items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-xs font-medium">HARI</span>
                          <span className="text-lg font-bold">{item.day}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{item.topic}</h4>
                            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                              {item.startTime} - {item.endTime}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Attendees Section - Meetup Style */}
              <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Peserta ({training.currentParticipants})</h2>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Lihat semua
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: Math.min(training.currentParticipants || 0, 12) }).map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-semibold text-sm">
                          {String.fromCharCode(65 + (index % 26))}
                        </div>
                        {index < 3 && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <span className="text-xs text-gray-600 mt-1 text-center max-w-[50px] truncate">
                        User {index + 1}
                      </span>
                    </div>
                  ))}
                  
                  {(training.currentParticipants || 0) > 12 && (
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">
                        +{(training.currentParticipants || 0) - 12}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Photos Section - Meetup Style */}
              <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Foto (3)</h2>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Lihat foto grup
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&crop=center"
                      alt="Event photo 1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop&crop=center"
                      alt="Event photo 2"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&h=200&fit=crop&crop=center"
                      alt="Event photo 3"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Diselenggarakan oleh</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {training.instructor.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{training.instructor}</h3>
                    <p className="text-red-600 text-sm font-medium mb-2">Organisator</p>
                    {training.instructorBio && (
                      <p className="text-gray-600 text-sm leading-relaxed">{training.instructorBio}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Related Events - Members are also interested in */}
              <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Member juga tertarik dengan</h2>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Lihat semua
                  </button>
                </div>
                
                <div className="grid gap-4">
                  {/* Related Event 1 */}
                  <div className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=150&fit=crop&crop=center"
                        alt="Related event"
                        width={80}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Web Development Bootcamp Jakarta</h4>
                      <p className="text-xs text-gray-600 mb-2">Sabtu, 2 Nov • 09:00 WIB</p>
                      <p className="text-xs text-gray-500">25 peserta • Villa Kuningan</p>
                    </div>
                  </div>

                  {/* Related Event 2 */}
                  <div className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=150&fit=crop&crop=center"
                        alt="Related event"
                        width={80}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Leadership Skills Workshop</h4>
                      <p className="text-xs text-gray-600 mb-2">Minggu, 3 Nov • 14:00 WIB</p>
                      <p className="text-xs text-gray-500">18 peserta • Online</p>
                    </div>
                  </div>

                  {/* Related Event 3 */}
                  <div className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=150&fit=crop&crop=center"
                        alt="Related event"
                        width={80}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Investment Strategy Masterclass</h4>
                      <p className="text-xs text-gray-600 mb-2">Senin, 4 Nov • 19:00 WIB</p>
                      <p className="text-xs text-gray-500">32 peserta • Villa Kuningan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              {/* Registration Card - Meetup Style */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-8">
                {/* Price Header */}
                <div className="p-4 border-b border-gray-200">
                  {training.price === 0 ? (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">FREE</div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        Rp {training.price.toLocaleString('id-ID')}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  {/* CTA Button */}
                  <button
                    disabled={training.status === 'completed' || training.status === 'cancelled'}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 mb-4 ${
                      training.status === 'completed' || training.status === 'cancelled'
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700 text-white shadow hover:shadow-md'
                    }`}
                  >
                    {training.status === 'completed' ? 'Event ended' : 
                     training.status === 'cancelled' ? 'Event cancelled' : 
                     'Attend'}
                  </button>

                  {/* Attendee Progress */}
                  {training.maxParticipants && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>{training.currentParticipants || 0} going</span>
                        <span>{training.maxParticipants} spots</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${Math.min(((training.currentParticipants || 0) / training.maxParticipants) * 100, 100)}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 text-center mb-4">
                    Free and easy to cancel
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 text-sm border-t border-gray-200 pt-4">
                    <div className="flex items-center space-x-3">
                      <CalendarDaysIcon className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-900">
                          {format(training.startDate, 'MMM dd', { locale: id })}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {format(training.startDate, 'HH:mm')} - {format(training.endDate, 'HH:mm')} WIB
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900">
                          {training.location.toLowerCase().includes('online') ? 'Online event' : training.location}
                        </div>
                        <div className="text-gray-600 text-xs truncate">
                          {training.location.toLowerCase().includes('online') ? 'Link visible for attendees' : 'See location details'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <UserGroupIcon className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-900">{training.currentParticipants} attendees</div>
                        <div className="text-gray-600 text-xs">See who&apos;s going</div>
                      </div>
                    </div>
                  </div>

                  {/* Share Event */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <button className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-red-600 transition-colors text-sm">
                      <ShareIcon className="h-4 w-4" />
                      <span>Share event</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Report Event Button */}
              <div className="mt-4 text-center">
                <button className="text-red-600 hover:underline text-sm flex items-center justify-center mx-auto">
                  <span className="mr-1">🚩</span>
                  Report event
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}