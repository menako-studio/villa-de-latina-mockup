import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  TagIcon,
  UserIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

// Mock blog data
const blogPosts = [
  {
    id: 'digital-marketing-untuk-umkm',
    title: 'Strategi Digital Marketing untuk UMKM di Era Modern',
    excerpt: 'Pelajari teknik-teknik digital marketing yang efektif untuk mengembangkan bisnis UMKM Anda dengan budget terbatas.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?digital-marketing,business',
    author: 'Sari Wahyuni',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    publishedAt: '2024-01-15',
    readTime: '8 min',
    category: 'Digital Marketing',
    tags: ['UMKM', 'Digital Marketing', 'Bisnis Online', 'Social Media'],
    featured: true
  },
  {
    id: 'manajemen-keuangan-pribadi',
    title: 'Tips Manajemen Keuangan Pribadi untuk Generasi Milenial',
    excerpt: 'Cara mudah mengatur keuangan pribadi, membuat budget, dan merencanakan investasi untuk masa depan yang lebih cerah.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?finance,money,planning',
    author: 'Ahmad Rizki',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    publishedAt: '2024-01-12',
    readTime: '12 min',
    category: 'Keuangan',
    tags: ['Keuangan Pribadi', 'Investasi', 'Budget', 'Milenial'],
    featured: false
  },
  {
    id: 'skill-komunikasi-efektif',
    title: 'Membangun Skill Komunikasi yang Efektif di Dunia Kerja',
    excerpt: 'Pelajari teknik komunikasi yang akan membantu Anda berinteraksi lebih baik dengan rekan kerja dan atasan.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?communication,meeting,teamwork',
    author: 'Dr. Maya Sari',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    publishedAt: '2024-01-10',
    readTime: '6 min',
    category: 'Soft Skills',
    tags: ['Komunikasi', 'Karier', 'Soft Skills', 'Leadership'],
    featured: false
  },
  {
    id: 'teknologi-ai-masa-depan',
    title: 'Bagaimana Teknologi AI Akan Mengubah Dunia Kerja',
    excerpt: 'Eksplorasi mendalam tentang dampak artificial intelligence terhadap berbagai industri dan cara mempersiapkan diri.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?artificial-intelligence,technology,future',
    author: 'Budi Santoso',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    publishedAt: '2024-01-08',
    readTime: '10 min',
    category: 'Teknologi',
    tags: ['AI', 'Teknologi', 'Future of Work', 'Innovation'],
    featured: true
  },
  {
    id: 'memulai-bisnis-online',
    title: 'Panduan Lengkap Memulai Bisnis Online dari Nol',
    excerpt: 'Langkah demi langkah membangun bisnis online yang profitable, dari ide hingga eksekusi dan marketing.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?online-business,ecommerce,startup',
    author: 'Ibu Fatimah',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    publishedAt: '2024-01-05',
    readTime: '15 min',
    category: 'Bisnis',
    tags: ['Bisnis Online', 'E-commerce', 'Startup', 'Entrepreneur'],
    featured: false
  },
  {
    id: 'public-speaking-confidence',
    title: 'Mengatasi Rasa Takut dan Membangun Kepercayaan Diri dalam Public Speaking',
    excerpt: 'Teknik praktis untuk mengatasi demam panggung dan menjadi pembicara yang percaya diri dan meyakinkan.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?public-speaking,presentation,confidence',
    author: 'Dr. Ahmad Suryadi',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    publishedAt: '2024-01-03',
    readTime: '9 min',
    category: 'Soft Skills',
    tags: ['Public Speaking', 'Confidence', 'Communication', 'Presentation'],
    featured: false
  }
];

const categories = ['Semua', 'Digital Marketing', 'Keuangan', 'Soft Skills', 'Teknologi', 'Bisnis'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <>
      <Head>
        <title>Blog - Villa Kuningan Training Center</title>
        <meta 
          name="description" 
          content="Temukan artikel, tips, dan insights terbaru seputar pelatihan, karier, dan pengembangan diri dari Villa Kuningan Training Center." 
        />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog & Insights
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Dapatkan tips, panduan, dan insights terbaru untuk mengembangkan 
              karier dan keterampilan Anda
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Artikel Pilihan</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <Link 
                    key={post.id} 
                    href={`/blog/${post.id}`}
                    className="group block"
                  >
                    <article className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                      index === 0 ? 'lg:row-span-2' : ''
                    }`}>
                      <div className="relative">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={index === 0 ? 600 : 400}
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Image
                                src={post.authorImage}
                                alt={post.author}
                                width={24}
                                height={24}
                                className="rounded-full mr-2"
                              />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <CalendarDaysIcon className="h-4 w-4 mr-1" />
                              {formatDate(post.publishedAt)}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter & All Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <div className="flex items-center">
                <FunnelIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.id}`}
                  className="group block"
                >
                  <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={240}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={20}
                            height={20}
                            className="rounded-full mr-2"
                          />
                          {post.author}
                        </div>
                        <div className="flex items-center space-x-3">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Tidak ada artikel ditemukan
                </h3>
                <p className="text-gray-600">
                  Coba ubah kata kunci pencarian atau filter kategori
                </p>
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Muat Lebih Banyak
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jangan Sampai Ketinggalan!
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Dapatkan artikel terbaru langsung ke email Anda
            </p>
            
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <button className="bg-white text-red-600 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}