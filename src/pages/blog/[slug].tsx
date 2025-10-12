import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  UserIcon,
  ShareIcon,
  BookmarkIcon,
  HeartIcon,
  TagIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

// Mock blog data (same as blog/index.tsx)
const blogPosts = [
  {
    id: 'digital-marketing-untuk-umkm',
    title: 'Strategi Digital Marketing untuk UMKM di Era Modern',
    excerpt: 'Pelajari teknik-teknik digital marketing yang efektif untuk mengembangkan bisnis UMKM Anda dengan budget terbatas.',
    content: `
# Pengenalan Digital Marketing untuk UMKM

Digital marketing telah menjadi kunci utama kesuksesan bisnis di era modern ini. Bagi pelaku UMKM (Usaha Mikro, Kecil, dan Menengah), memahami dan menerapkan strategi digital marketing yang tepat dapat menjadi game changer untuk perkembangan bisnis.

## Mengapa Digital Marketing Penting untuk UMKM?

Dalam era digital saat ini, konsumen menghabiskan sebagian besar waktu mereka di dunia online. Mereka mencari informasi produk, membandingkan harga, membaca review, hingga melakukan pembelian melalui platform digital. 

### Keuntungan Digital Marketing:

- **Cost-effective**: Biaya promosi yang lebih murah dibanding media tradisional
- **Targeting yang presisi**: Dapat menargetkan audience spesifik
- **Measurable**: ROI dapat diukur dengan akurat
- **Reach yang luas**: Dapat menjangkau pasar yang lebih luas
- **Real-time engagement**: Interaksi langsung dengan pelanggan

## Strategi Digital Marketing untuk UMKM

### 1. Social Media Marketing

Platform media sosial seperti Instagram, Facebook, TikTok, dan Twitter menjadi channel utama untuk membangun brand awareness dan engagement dengan pelanggan.

**Tips untuk Social Media Marketing:**
- Posting konten secara konsisten
- Gunakan hashtag yang relevan
- Berinteraksi dengan followers
- Manfaatkan fitur Stories dan Reels
- Kolaborasi dengan micro-influencer

### 2. Search Engine Optimization (SEO)

SEO membantu website atau toko online Anda muncul di halaman pertama hasil pencarian Google. Ini sangat penting untuk meningkatkan organic traffic.

**Komponen SEO yang perlu diperhatikan:**
- Keyword research yang tepat
- Optimasi on-page content
- Local SEO untuk bisnis lokal
- Link building berkualitas
- User experience yang baik

### 3. Content Marketing

Konten yang berkualitas dapat membangun trust dan otoritas brand Anda di mata konsumen.

**Jenis konten yang efektif:**
- Blog posts edukatif
- Video tutorial produk
- Customer testimonials
- Behind-the-scenes content
- User-generated content

### 4. Email Marketing

Email marketing masih menjadi salah satu channel dengan ROI tertinggi dalam digital marketing.

**Best practices email marketing:**
- Segmentasi audience yang tepat
- Personalisasi pesan
- Subject line yang menarik
- Call-to-action yang jelas
- Mobile-friendly design

## Implementasi Praktis

### Langkah 1: Audit Digital Presence Saat Ini
Sebelum memulai strategi baru, lakukan audit terhadap digital presence yang sudah ada. Evaluasi website, media sosial, dan online presence lainnya.

### Langkah 2: Tentukan Target Audience
Buat buyer persona yang detail. Siapa target market Anda? Apa kebutuhan, pain point, dan behavior mereka?

### Langkah 3: Pilih Channel yang Tepat
Tidak semua platform cocok untuk setiap bisnis. Pilih channel yang paling relevan dengan target audience Anda.

### Langkah 4: Buat Content Calendar
Rencanakan konten untuk 1-3 bulan ke depan. Pastikan konten varied dan engaging.

### Langkah 5: Monitor dan Analisis
Gunakan tools analytics untuk mengukur performa campaign. Google Analytics, Facebook Insights, dan Instagram Analytics adalah beberapa tools gratis yang bisa digunakan.

## Tools Gratis untuk UMKM

Berikut beberapa tools gratis yang dapat membantu implementasi digital marketing:

### Social Media Management:
- **Buffer**: Untuk scheduling posts
- **Canva**: Untuk membuat desain grafis
- **Later**: Visual content calendar

### SEO & Analytics:
- **Google Analytics**: Website analytics
- **Google Search Console**: Monitor website performance
- **Ubersuggest**: Keyword research

### Email Marketing:
- **Mailchimp**: Email marketing platform
- **ConvertKit**: Email automation

## Kesalahan yang Harus Dihindari

### 1. Tidak Konsisten
Konsistensi adalah kunci dalam digital marketing. Jangan posting intensif di awal kemudian menghilang.

### 2. Terlalu Fokus pada Selling
Balance antara konten promosi dan konten edukatif/entertainment. Ikuti aturan 80/20 - 80% konten value, 20% promosi.

### 3. Mengabaikan Customer Service
Respon cepat terhadap pertanyaan dan komplain di platform digital sangat penting untuk reputasi brand.

### 4. Tidak Mengukur ROI
Selalu track dan analisis performa campaign untuk optimasi yang lebih baik.

## Kesimpulan

Digital marketing bukan lagi pilihan, tetapi keharusan untuk UMKM yang ingin berkembang. Dengan strategi yang tepat dan implementasi yang konsisten, UMKM dapat bersaing dengan perusahaan besar dalam merebut perhatian konsumen digital.

Mulailah dengan langkah kecil, fokus pada satu atau dua channel terlebih dahulu, kemudian expand seiring dengan perkembangan bisnis dan pemahaman yang semakin mendalam.

**Ingat**: Digital marketing adalah marathon, bukan sprint. Kesabaran dan konsistensi akan membuahkan hasil yang optimal.
    `,
    image: 'https://source.unsplash.com/1200x800/?digital-marketing,business',
    author: 'Sari Wahyuni',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    authorBio: 'Digital Marketing Specialist dengan pengalaman 8+ tahun membantu UMKM berkembang melalui strategi digital yang efektif.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-16',
    readTime: '8 min',
    category: 'Digital Marketing',
    tags: ['UMKM', 'Digital Marketing', 'Bisnis Online', 'Social Media'],
    featured: true
  }
];

// Mock related posts
const relatedPosts = [
  {
    id: 'manajemen-keuangan-pribadi',
    title: 'Tips Manajemen Keuangan Pribadi untuk Generasi Milenial',
    image: 'https://source.unsplash.com/400x300/?finance,money',
    publishedAt: '2024-01-12',
    readTime: '12 min'
  },
  {
    id: 'skill-komunikasi-efektif',
    title: 'Membangun Skill Komunikasi yang Efektif di Dunia Kerja',
    image: 'https://source.unsplash.com/400x300/?communication,meeting',
    publishedAt: '2024-01-10',
    readTime: '6 min'
  },
  {
    id: 'memulai-bisnis-online',
    title: 'Panduan Lengkap Memulai Bisnis Online dari Nol',
    image: 'https://source.unsplash.com/400x300/?online-business,startup',
    publishedAt: '2024-01-05',
    readTime: '15 min'
  }
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h1>
            <Link href="/blog" className="text-red-600 hover:underline">
              Kembali ke Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
        <title>{post.title} - Villa Kuningan Training Center</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Head>

      <Header />

      <main>
        {/* Hero Image */}
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="py-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-red-600">Beranda</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-red-600">Blog</Link>
              <span>›</span>
              <span className="text-gray-900">{post.category}</span>
            </div>
          </nav>

          <div className="lg:grid lg:grid-cols-4 lg:gap-12 pb-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <article className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <div className="mb-6">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & Meta Info */}
                <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarDaysIcon className="h-4 w-4 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Actions */}
                  <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <ShareIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <BookmarkIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <HeartIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content.replace(/\n/g, '<br>').replace(/### /g, '<h3>').replace(/## /g, '<h2>').replace(/# /g, '<h1>') 
                    }}
                  />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <TagIcon className="h-5 w-5 text-gray-400" />
                    {post.tags.map((tag) => (
                      <Link 
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-700 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                {post.authorBio && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tentang {post.author}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{post.authorBio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </article>

              {/* Navigation */}
              <div className="flex justify-between items-center mb-8">
                <Link 
                  href="/blog"
                  className="flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Kembali ke Blog
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Daftar Isi</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#pengenalan" className="text-gray-600 hover:text-red-600">Pengenalan Digital Marketing</a></li>
                  <li><a href="#keuntungan" className="text-gray-600 hover:text-red-600">Keuntungan Digital Marketing</a></li>
                  <li><a href="#strategi" className="text-gray-600 hover:text-red-600">Strategi untuk UMKM</a></li>
                  <li><a href="#implementasi" className="text-gray-600 hover:text-red-600">Implementasi Praktis</a></li>
                  <li><a href="#tools" className="text-gray-600 hover:text-red-600">Tools Gratis</a></li>
                  <li><a href="#kesalahan" className="text-gray-600 hover:text-red-600">Kesalahan yang Dihindari</a></li>
                  <li><a href="#kesimpulan" className="text-gray-600 hover:text-red-600">Kesimpulan</a></li>
                </ul>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Artikel Terkait</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <article className="flex space-x-3">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={80}
                          height={60}
                          className="rounded object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-red-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 space-x-2">
                            <span>{formatDate(relatedPost.publishedAt)}</span>
                            <span>•</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <section className="py-16 bg-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Suka artikel ini?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Dapatkan artikel serupa langsung ke email Anda
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