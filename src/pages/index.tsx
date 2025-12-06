import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrainingCard from '@/components/TrainingCard';
import { useTrainings } from '@/hooks/useTrainings';
import { 
  AcademicCapIcon,
  UserGroupIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  const { trainings, loading } = useTrainings('all');
  
  // Get featured trainings (first 6 for landing page)
  const featuredTrainings = trainings.slice(0, 6);

  return (
    <>
      <Head>
        <title>Villa Kuningan Training Center - Pusat Pelatihan Berkualitas di Kuningan</title>
        <meta 
          name="description" 
          content="Bergabunglah dengan komunitas pembelajar di Villa Kuningan Training Center. Pelatihan gratis berkualitas untuk UMKM, ojol, dan masyarakat umum di Kuningan, Jawa Barat." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section - Meetup Style */}
        <section className="bg-gradient-to-br from-red-50 via-pink-50 to-red-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-red-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-300 rounded-full opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              {/* Left content */}
              <div className="lg:col-span-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  The{' '}
                  <span className="text-red-600 relative">
                    people
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" fill="none">
                      <path d="M0 8C20 4 40 2 60 4C80 6 90 8 100 6" stroke="#dc2626" strokeWidth="2" fill="none"/>
                    </svg>
                  </span>{' '}
                  platform.
                </h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                  Where{' '}
                  <span className="text-red-600 relative">
                    interests
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" fill="none">
                      <path d="M0 6C25 3 50 2 75 4C85 5 95 7 100 5" stroke="#dc2626" strokeWidth="2" fill="none"/>
                    </svg>
                  </span>{' '}
                  become{' '}
                  <span className="text-red-600 relative">
                    friendships
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" fill="none">
                      <path d="M0 7C30 3 60 2 90 5C95 6 98 7 100 6" stroke="#dc2626" strokeWidth="2" fill="none"/>
                    </svg>
                  </span>.
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                  Bergabunglah dengan komunitas pembelajar di Villa Kuningan. Temukan pelatihan berkualitas, 
                  bertemu dengan orang-orang yang memiliki minat yang sama, dan kembangkan skill bersama.
                </p>
                
                <Link
                  href="/trainings"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Temukan pelatihan Anda
                </Link>
              </div>
              
              {/* Right illustrations */}
              <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Top left card */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=150&fit=crop&crop=center"
                      alt="Training session"
                      width={200}
                      height={150}
                      className="rounded-xl object-cover w-full"
                    />
                    <p className="text-sm font-semibold mt-2 text-gray-800">Digital Marketing Workshop</p>
                    <p className="text-xs text-gray-600">25 peserta</p>
                  </div>
                  
                  {/* Top right card */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                    <Image
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=150&fit=crop&crop=center"
                      alt="Business meeting"
                      width={200}
                      height={150}
                      className="rounded-xl object-cover w-full"
                    />
                    <p className="text-sm font-semibold mt-2 text-gray-800">Networking Event</p>
                    <p className="text-xs text-gray-600">50+ profesional</p>
                  </div>
                  
                  {/* Bottom left card */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=150&fit=crop&crop=center"
                      alt="Team collaboration"
                      width={200}
                      height={150}
                      className="rounded-xl object-cover w-full"
                    />
                    <p className="text-sm font-semibold mt-2 text-gray-800">Team Building</p>
                    <p className="text-xs text-gray-600">Weekend activity</p>
                  </div>
                  
                  {/* Bottom right card */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&h=150&fit=crop&crop=center"
                      alt="Learning session"
                      width={200}
                      height={150}
                      className="rounded-xl object-cover w-full"
                    />
                    <p className="text-sm font-semibold mt-2 text-gray-800">Skill Development</p>
                    <p className="text-xs text-gray-600">Setiap hari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section - Meetup Style */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Events near</h2>
                <Link
                  href="/trainings"
                  className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center"
                >
                  See all events
                  <ChevronDownIcon className="h-4 w-4 ml-1 transform -rotate-90" />
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-red-600">Kuningan, ID</span>
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-64"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {featuredTrainings.slice(0, 4).map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            )}

            {!loading && featuredTrainings.length === 0 && (
              <div className="text-center py-12">
                <AcademicCapIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Belum ada pelatihan tersedia</p>
                <p className="text-gray-400 mt-2">Pantau terus untuk update pelatihan terbaru</p>
              </div>
            )}

            {/* Second row */}
            {!loading && featuredTrainings.length > 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredTrainings.slice(4, 8).map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past Events Section - Villa De Latina */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Program Pelatihan Villa De Latina</h2>
                <p className="text-gray-600">Berkarya bersama masyarakat Kuningan, Ciamis, Banjar, dan Pangandaran</p>
              </div>
              <Link
                href="/trainings"
                className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center"
              >
                Lihat semua program
                <ChevronDownIcon className="h-4 w-4 ml-1 transform -rotate-90" />
              </Link>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTrainings.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            )}

            {!loading && featuredTrainings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Belum ada program pelatihan tersedia.</p>
              </div>
            )}
          </div>
        </section>

        {/* Explore Categories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore top categories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Travel and Outdoor",
                  icon: "🌟",
                  color: "from-green-100 to-green-200"
                },
                {
                  title: "Social Activities", 
                  icon: "👥",
                  color: "from-blue-100 to-blue-200"
                },
                {
                  title: "Hobbies and Passions",
                  icon: "🎨", 
                  color: "from-purple-100 to-purple-200"
                },
                {
                  title: "Sports and Fitness",
                  icon: "⚽",
                  color: "from-orange-100 to-orange-200"
                },
                {
                  title: "Health and Wellbeing",
                  icon: "💚",
                  color: "from-pink-100 to-pink-200"
                },
                {
                  title: "Technology",
                  icon: "💻",
                  color: "from-indigo-100 to-indigo-200"
                }
              ].map((category, index) => (
                <div key={index} className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer group`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {category.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Cities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular cities on Villa Kuningan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Millions of people use Villa Kuningan to find events and communities in these cities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  city: "Jakarta",
                  image: "https://images.unsplash.com/photo-1555899434-94d1933c07cd?w=200&h=150&fit=crop&crop=center"
                },
                {
                  city: "Bandung", 
                  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop&crop=center"
                },
                {
                  city: "Surabaya",
                  image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=150&fit=crop&crop=center"
                },
                {
                  city: "Yogyakarta",
                  image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=150&fit=crop&crop=center" 
                },
                {
                  city: "Kuningan",
                  image: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=200&h=150&fit=crop&crop=center"
                }
              ].map((location, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300">
                  <Image
                    src={location.image}
                    alt={location.city}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold text-lg">{location.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Villa Kuningan Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Villa Kuningan works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Discover events and groups
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  See who&apos;s hosting local events for all the things you love.
                  Join a group or start your own.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Find your people
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Events are happening on just about any topic you can think of, 
                  from online gaming and photography to yoga and hiking.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Start a group to host events
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create your own Villa Kuningan group, and draw from a community 
                  of millions to make connections over shared interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Friendships are made on Villa Kuningan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From career development to personal growth, see how Villa Kuningan helps people connect and grow together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "I Used Villa Kuningan to Make Friends at Business Events",
                  description: "Sari found her entrepreneurship community and built a successful UMKM network through Villa Kuningan business events.",
                  image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=200&fit=crop&crop=center",
                  author: "Sari's story"
                },
                {
                  title: "How Two Casual Connections Made Me Find my Dream Job",
                  description: "Ahmad discovered career opportunities and mentorship through Villa Kuningan networking events that changed his professional life.",
                  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&crop=center", 
                  author: "Ahmad's story"
                },
                {
                  title: "Do You Have the 'Right' Number of Friends?",
                  description: "Fatimah built lasting friendships and found her support system through Villa Kuningan community events.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=center",
                  author: "Fatimah's story"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {story.description}
                    </p>
                    <p className="text-red-600 font-medium text-sm">
                      {story.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Meetup Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-red-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-red-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              {/* Left illustrations */}
              <div className="lg:col-span-5 mb-12 lg:mb-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-2">
                      <Image
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=150&h=100&fit=crop&crop=center"
                        alt="Community"
                        width={150}
                        height={100}
                        className="rounded-xl object-cover w-full"
                      />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-1">
                      <Image
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=100&fit=crop&crop=center"
                        alt="Learning"
                        width={150}
                        height={100}
                        className="rounded-xl object-cover w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-1">
                      <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=100&fit=crop&crop=center"
                        alt="Collaboration"
                        width={150}
                        height={100}
                        className="rounded-xl object-cover w-full"
                      />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-2">
                      <Image
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=150&h=100&fit=crop&crop=center"
                        alt="Success"
                        width={150}
                        height={100}
                        className="rounded-xl object-cover w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Center content */}
              <div className="lg:col-span-7 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Join Villa Kuningan
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  People use Villa Kuningan to meet new people, learn new skills, find support, 
                  get out of their comfort zones, and pursue their passions, together. 
                  Membership is free.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Sign up for free
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}