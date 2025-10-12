import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function About() {
  return (
    <>
      <Head>
        <title>Tentang Kami - Villa Kuningan Training Center</title>
        <meta 
          name="description" 
          content="Villa Kuningan Training Center adalah pusat pelatihan terdepan di Kuningan, Jawa Barat yang menyediakan berbagai program pelatihan berkualitas." 
        />
      </Head>

      <Header />


      <main className="bg-[#fafbfc]">
        {/* Hero Section - Meetup Style */}
        <section className="relative pt-16 pb-12 sm:pb-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex-1 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Villa Kuningan creates possibilities to find and build local communities
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Temukan teman baru, pelajari hal baru, dapatkan dukungan, dan kembangkan minat Anda bersama komunitas Villa Kuningan.
              </p>
              <button className="bg-gray-900 text-white rounded-full px-7 py-3 font-semibold text-lg shadow hover:bg-gray-800 transition mb-4">
                Join Villa Kuningan
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop&crop=center"
                  alt="Women programmers"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-80"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-2xl shadow p-4 flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">215 groups near you</div>
                    <div className="font-semibold text-gray-900">Women programmers</div>
                    <div className="text-xs text-gray-500">Over 25,000 women gather in Meetup groups worldwide to support one another in software development.</div>
                  </div>
                  <button className="bg-[#6f4ef6] text-white rounded-full px-5 py-2 font-semibold text-sm shadow hover:bg-[#5a3fd2] transition">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you can do Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What you can do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
                <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400" alt="Explore your city" width={120} height={80} className="rounded-xl mb-4 object-cover" />
                <h3 className="font-bold text-lg mb-2">Explore your city</h3>
                <p className="text-gray-600 mb-4">Visit a museum, try new food, or find fun things to do with a group, right in your area.</p>
                <button className="bg-gray-900 text-white rounded-full px-5 py-2 font-semibold text-sm shadow hover:bg-gray-800 transition">Search social groups</button>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
                <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400" alt="Build your career" width={120} height={80} className="rounded-xl mb-4 object-cover" />
                <h3 className="font-bold text-lg mb-2">Build your career</h3>
                <p className="text-gray-600 mb-4">Build a prototype, network, listen to a class, learn a new skill, or speak to mentors, all in your area.</p>
                <button className="bg-gray-900 text-white rounded-full px-5 py-2 font-semibold text-sm shadow hover:bg-gray-800 transition">Search career groups</button>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
                <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400" alt="Get creative" width={120} height={80} className="rounded-xl mb-4 object-cover" />
                <h3 className="font-bold text-lg mb-2">Get creative</h3>
                <p className="text-gray-600 mb-4">Create a podcast, write a screenplay, workshop an idea, or simply connect and get feedback on your work.</p>
                <button className="bg-gray-900 text-white rounded-full px-5 py-2 font-semibold text-sm shadow hover:bg-gray-800 transition">Search creativity groups</button>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-gray-900 text-white rounded-full px-7 py-3 font-semibold text-lg shadow hover:bg-gray-800 transition">See more topics</button>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How it works</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop&crop=center"
                  alt="How it works"
                  width={600}
                  height={400}
                  className="object-cover w-full h-72"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-2xl shadow p-4 flex items-center">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Meet people in your area who share your passion</div>
                  </div>
                  <button className="bg-gray-900 text-white rounded-full px-5 py-2 font-semibold text-sm shadow hover:bg-gray-800 transition ml-4">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Want to do more Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Want to do more of what you <span className="inline-block align-middle">❤️</span> love?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="bg-[#6f4ef6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">🔍</span>
                  <span className="font-semibold text-gray-900">Discover groups</span>
                </div>
                <p className="text-gray-600 mb-2">Lihat berbagai komunitas lokal yang bisa kamu ikuti.</p>
                <button className="text-[#6f4ef6] font-semibold hover:underline">Join Meetup</button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="bg-[#6f4ef6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">🤝</span>
                  <span className="font-semibold text-gray-900">Find your people</span>
                </div>
                <p className="text-gray-600 mb-2">Temukan teman dengan minat yang sama dan nikmati pengalaman baru.</p>
                <button className="text-[#6f4ef6] font-semibold hover:underline">Explore groups</button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="bg-[#6f4ef6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">🚀</span>
                  <span className="font-semibold text-gray-900">Start a group</span>
                </div>
                <p className="text-gray-600 mb-2">Buat komunitas baru dan mulai membangun relasi di sekitarmu.</p>
                <button className="text-[#6f4ef6] font-semibold hover:underline">Start a group</button>
              </div>
            </div>
            <div className="text-center text-green-600 font-semibold mt-4">meetup = community</div>
          </div>
        </section>

        {/* Social Icons Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Follow</h2>
            <div className="flex justify-center gap-6">
              <a href="#" className="bg-white rounded-xl shadow p-4 flex items-center justify-center text-gray-700 hover:text-[#1877f2] transition text-3xl">
                <i className="fab fa-facebook-f">&#xf09a;</i>
              </a>
              <a href="#" className="bg-white rounded-xl shadow p-4 flex items-center justify-center text-gray-700 hover:text-[#1da1f2] transition text-3xl">
                <i className="fab fa-x-twitter">&#xf099;</i>
              </a>
              <a href="#" className="bg-white rounded-xl shadow p-4 flex items-center justify-center text-gray-700 hover:text-[#ff0000] transition text-3xl">
                <i className="fab fa-youtube">&#xf167;</i>
              </a>
              <a href="#" className="bg-white rounded-xl shadow p-4 flex items-center justify-center text-gray-700 hover:text-[#e1306c] transition text-3xl">
                <i className="fab fa-instagram">&#xf16d;</i>
              </a>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cerita Kami
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Villa Kuningan Training Center didirikan pada tahun 2020 dengan misi untuk 
                    memberikan akses pendidikan dan pelatihan berkualitas kepada masyarakat 
                    Kuningan dan sekitarnya.
                  </p>
                  <p className="mb-4">
                    Berawal dari keprihatinan akan kurangnya fasilitas pelatihan yang memadai 
                    di daerah, kami berkomitmen untuk menyediakan program-program pelatihan 
                    yang relevan dengan kebutuhan zaman dan dapat diakses oleh semua kalangan.
                  </p>
                  <p>
                    Hingga saat ini, lebih dari <strong>5.000 peserta</strong> telah mengikuti 
                    berbagai program pelatihan kami, mulai dari pelatihan digital marketing, 
                    manajemen keuangan, hingga pengembangan soft skills.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://source.unsplash.com/600x400/?meeting-room,training,workshop,seminar"
                  alt="Ruang Pelatihan Villa Kuningan"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visi & Misi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center mb-6">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <AcademicCapIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  Menjadi pusat pelatihan terdepan di Jawa Barat yang menghasilkan 
                  sumber daya manusia yang kompeten, mandiri, dan siap bersaing 
                  di era digital.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center mb-6">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Menyelenggarakan pelatihan berkualitas dan terjangkau</li>
                  <li>• Mengembangkan kurikulum yang relevan dengan kebutuhan industri</li>
                  <li>• Memberdayakan masyarakat melalui pendidikan dan pelatihan</li>
                  <li>• Membangun kemitraan strategis dengan berbagai pihak</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tim Kami
              </h2>
              <p className="text-xl text-gray-600">
                Didukung oleh tim profesional yang berpengalaman
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Ahmad Suryadi",
                  role: "Direktur",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
                  bio: "Pengalaman 15 tahun di bidang pendidikan dan pelatihan"
                },
                {
                  name: "Siti Nurhaliza, M.Pd",
                  role: "Manager Program",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
                  bio: "Spesialis pengembangan kurikulum dan metode pembelajaran"
                },
                {
                  name: "Budi Santoso, S.Kom",
                  role: "Koordinator IT",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
                  bio: "Expert dalam teknologi informasi dan digital marketing"
                },
                {
                  name: "Maya Sari, S.E",
                  role: "Koordinator Keuangan",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
                  bio: "Berpengalaman dalam manajemen keuangan dan akuntansi"
                }
              ].map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={240}
                      height={240}
                      className="rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-red-200">Peserta Pelatihan</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-red-200">Program Pelatihan</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-red-200">Instruktur</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-red-200">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lokasi & Kontak
              </h2>
              <p className="text-xl text-gray-600">
                Mudah dijangkau di pusat Kuningan
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Google Maps akan dimuat di sini</p>
                  {/* Replace with actual Google Maps embed */}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Informasi Kontak
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPinIcon className="h-6 w-6 text-red-600 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900">Alamat</p>
                        <p className="text-gray-600">Jl. Villa Kuningan No. 123, Kuningan, Jawa Barat 45511</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <PhoneIcon className="h-6 w-6 text-red-600 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900">Telepon</p>
                        <p className="text-gray-600">+62 232 1234567</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <EnvelopeIcon className="h-6 w-6 text-red-600 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">info@villakuningan.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <ClockIcon className="h-6 w-6 text-red-600 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900">Jam Operasional</p>
                        <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00</p>
                        <p className="text-gray-600">Sabtu: 08:00 - 12:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-red-600 text-white rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Siap bergabung?
                  </h3>
                  <p className="mb-4 text-red-100">
                    Hubungi kami untuk informasi lebih lanjut
                  </p>
                  <a
                    href="tel:+622321234567"
                    className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                  >
                    Hubungi Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}