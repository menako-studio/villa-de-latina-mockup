// Seed data untuk pelatihan Villa De Latina Kuningan
// Berdasarkan event nyata yang pernah diadakan

import { Training } from '@/types';

export const seedTrainings: Omit<Training, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    slug: 'pengawasan-penyelenggaraan-pemerintahan-2025-ciamis',
    title: 'Pengawasan Penyelenggaraan Pemerintahan 2025 di Ciamis',
    description: `Program pengawasan penyelenggaraan pemerintahan yang diselenggarakan oleh Legislator Gerindra, Hj. Tina Wiryawati, S.H., bertujuan untuk memastikan transparansi, akuntabilitas, dan efektivitas kinerja pemerintah daerah di wilayah Ciamis.

Dalam kegiatan ini, masyarakat dan stakeholder terkait diajak untuk memahami mekanisme pengawasan pemerintahan, hak-hak masyarakat dalam pengawasan, serta cara menyampaikan aspirasi dan keluhan terkait pelayanan publik.

Program ini merupakan bagian dari komitmen Hj. Tina Wiryawati sebagai Anggota DPRD Jawa Barat dari Dapil 13 (Kuningan, Ciamis, Banjar, Pangandaran) untuk meningkatkan partisipasi masyarakat dalam pengawasan pemerintahan dan pembangunan daerah.

Kegiatan ini juga menjadi wadah dialog interaktif antara legislator, pemerintah daerah, dan masyarakat untuk membahas isu-isu strategis dan solusi bersama dalam meningkatkan kualitas pelayanan publik.`,
    shortDescription: 'Program pengawasan penyelenggaraan pemerintahan untuk memastikan transparansi dan akuntabilitas kinerja pemerintah daerah di Ciamis.',
    startDate: new Date('2025-02-15T09:00:00'),
    endDate: new Date('2025-02-15T16:00:00'),
    location: 'Aula Pemerintah Kabupaten Ciamis, Jawa Barat',
    price: 0,
    maxParticipants: 150,
    currentParticipants: 127,
    status: 'completed',
    category: 'Pemerintahan & Pengawasan',
    instructor: 'Hj. Tina Wiryawati, S.H.',
    instructorBio: 'Anggota DPRD Jawa Barat dari Fraksi Gerindra Persatuan, mewakili Dapil 13 (Kuningan, Ciamis, Banjar, Pangandaran). Aktif di Komisi 1 Bidang Pemerintahan, Otonomi Daerah, dan Aparatur.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop',
    requirements: [
      'KTP atau identitas resmi lainnya',
      'Mengisi formulir pendaftaran',
      'Diutamakan tokoh masyarakat, RT/RW, dan pegawai pemerintahan',
      'Membawa alat tulis untuk mencatat',
    ],
    benefits: [
      'Memahami mekanisme pengawasan pemerintahan daerah',
      'Mengetahui hak dan kewajiban masyarakat dalam pengawasan',
      'Mendapat sertifikat kehadiran',
      'Networking dengan stakeholder pemerintahan',
      'Konsumsi dan materi pelatihan',
      'Kesempatan bertemu langsung dengan legislator',
    ],
    schedule: [
      {
        day: 1,
        topic: 'Pembukaan & Sambutan',
        startTime: '09:00',
        endTime: '09:30',
        description: 'Sambutan dari Hj. Tina Wiryawati dan perwakilan Pemda Ciamis',
      },
      {
        day: 1,
        topic: 'Materi 1: Mekanisme Pengawasan Pemerintahan',
        startTime: '09:30',
        endTime: '11:00',
        description: 'Penjelasan tentang tata cara pengawasan, peran DPRD, dan hak masyarakat',
      },
      {
        day: 1,
        topic: 'Ishoma (Istirahat, Sholat, Makan)',
        startTime: '11:00',
        endTime: '13:00',
        description: 'Istirahat dan makan siang',
      },
      {
        day: 1,
        topic: 'Materi 2: Penyampaian Aspirasi Masyarakat',
        startTime: '13:00',
        endTime: '14:30',
        description: 'Cara efektif menyampaikan aspirasi dan keluhan kepada pemerintah',
      },
      {
        day: 1,
        topic: 'Diskusi & Tanya Jawab',
        startTime: '14:30',
        endTime: '15:45',
        description: 'Sesi interaktif untuk menjawab pertanyaan peserta',
      },
      {
        day: 1,
        topic: 'Penutupan & Foto Bersama',
        startTime: '15:45',
        endTime: '16:00',
        description: 'Pembagian sertifikat dan dokumentasi',
      },
    ],
  },
  {
    slug: 'penguatan-wawasan-kebangsaan-metode-edukatif',
    title: 'Penguatan Wawasan Kebangsaan dengan Metode Edukatif',
    description: `Program penguatan wawasan kebangsaan yang diinisiasi oleh Hj. Tina Wiryawati, S.H. bersama Kesbangpol Jawa Barat bertujuan untuk meningkatkan kesadaran dan pemahaman masyarakat, khususnya generasi muda, tentang nilai-nilai kebangsaan, Pancasila, dan kecintaan terhadap NKRI.

Program ini menggunakan pendekatan edukatif dan youthful yang menarik bagi anak muda, dengan metode pembelajaran interaktif, diskusi kelompok, permainan edukatif, dan studi kasus nyata tentang isu-isu kebangsaan kontemporer.

Kegiatan ini menjadi platform untuk membangun generasi muda yang memiliki karakter kuat, cinta tanah air, toleran terhadap keberagaman, dan siap menjadi agen perubahan positif di masyarakat.

Materi yang disampaikan meliputi sejarah perjuangan bangsa, nilai-nilai Pancasila dalam kehidupan sehari-hari, Bhinneka Tunggal Ika sebagai pemersatu bangsa, serta peran generasi muda dalam menjaga keutuhan NKRI.`,
    shortDescription: 'Program penguatan wawasan kebangsaan untuk generasi muda dengan metode edukatif dan interaktif bersama Kesbangpol Jabar.',
    startDate: new Date('2025-03-20T08:00:00'),
    endDate: new Date('2025-03-20T17:00:00'),
    location: 'Villa De Latina Kuningan, Jawa Barat',
    price: 0,
    maxParticipants: 100,
    currentParticipants: 89,
    status: 'completed',
    category: 'Wawasan Kebangsaan & Pendidikan',
    instructor: 'Hj. Tina Wiryawati, S.H. & Tim Kesbangpol Jabar',
    instructorBio: 'Kolaborasi antara Legislator DPRD Jawa Barat dan Badan Kesatuan Bangsa dan Politik Provinsi Jawa Barat untuk membina generasi muda yang berkarakter dan cinta tanah air.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
    requirements: [
      'Usia 17-35 tahun (diutamakan pelajar dan mahasiswa)',
      'KTP atau Kartu Pelajar/Mahasiswa',
      'Mengisi formulir pendaftaran online',
      'Membawa laptop atau smartphone untuk sesi interaktif',
      'Komitmen mengikuti kegiatan dari awal hingga akhir',
    ],
    benefits: [
      'Pemahaman mendalam tentang nilai-nilai kebangsaan',
      'Sertifikat kehadiran dari Kesbangpol Jabar',
      'Bahan ajar dan modul wawasan kebangsaan',
      'Konsumsi dan snack sepanjang hari',
      'Networking dengan sesama pemuda dari berbagai daerah',
      'Doorprize dan merchandise eksklusif',
      'Kesempatan menjadi duta wawasan kebangsaan',
    ],
    schedule: [
      {
        day: 1,
        topic: 'Registrasi & Pembukaan',
        startTime: '08:00',
        endTime: '08:45',
        description: 'Registrasi peserta, pembagian kit, dan pembukaan acara',
      },
      {
        day: 1,
        topic: 'Materi 1: Pancasila sebagai Ideologi Bangsa',
        startTime: '08:45',
        endTime: '10:30',
        description: 'Memahami nilai-nilai Pancasila dalam kehidupan berbangsa dan bernegara',
      },
      {
        day: 1,
        topic: 'Coffee Break',
        startTime: '10:30',
        endTime: '11:00',
        description: 'Istirahat dan networking',
      },
      {
        day: 1,
        topic: 'Materi 2: Bhinneka Tunggal Ika & Toleransi',
        startTime: '11:00',
        endTime: '12:30',
        description: 'Menghargai keberagaman dan membangun toleransi antar umat beragama',
      },
      {
        day: 1,
        topic: 'Ishoma',
        startTime: '12:30',
        endTime: '13:30',
        description: 'Istirahat, sholat, dan makan siang',
      },
      {
        day: 1,
        topic: 'Workshop Interaktif: Peran Pemuda dalam NKRI',
        startTime: '13:30',
        endTime: '15:00',
        description: 'Diskusi kelompok dan presentasi solusi isu kebangsaan',
      },
      {
        day: 1,
        topic: 'Games Edukatif & Kuis Kebangsaan',
        startTime: '15:00',
        endTime: '16:00',
        description: 'Permainan interaktif dengan hadiah menarik',
      },
      {
        day: 1,
        topic: 'Komitmen Bersama & Penutupan',
        startTime: '16:00',
        endTime: '17:00',
        description: 'Deklarasi komitmen pemuda dan pembagian sertifikat',
      },
    ],
  },
  {
    slug: 'penyuluhan-lbh-pira-hak-perempuan',
    title: 'Penyuluhan LBH PIRA tentang Hak Perempuan dan Kekerasan',
    description: `Penyuluhan yang diselenggarakan oleh Lembaga Bantuan Hukum Perjuangan Rakyat (LBH PIRA) di Rumah Aspirasi Hj. Tina Wiryawati ini bertujuan untuk memberikan edukasi kepada perempuan, khususnya perempuan desa, tentang hak-hak mereka dan cara melawan berbagai bentuk kekerasan.

Program ini hadir sebagai respons terhadap tingginya kasus kekerasan terhadap perempuan di berbagai daerah. Melalui penyuluhan ini, peserta akan dibekali dengan pengetahuan hukum praktis, cara mengidentifikasi berbagai bentuk kekerasan (fisik, psikis, ekonomi, dan seksual), serta mekanisme perlindungan hukum yang tersedia.

LBH PIRA, sebagai lembaga yang fokus pada advokasi hak-hak rakyat, khususnya kelompok rentan seperti perempuan dan anak, akan membagikan pengalaman penanganan kasus dan memberikan konsultasi hukum gratis bagi peserta yang membutuhkan.

Rumah Aspirasi Hj. Tina Wiryawati berkomitmen menjadi ruang aman bagi perempuan untuk belajar, berbagi pengalaman, dan mendapat dukungan dalam memperjuangkan hak-hak mereka.`,
    shortDescription: 'Penyuluhan oleh LBH PIRA untuk memberikan edukasi tentang hak-hak perempuan dan cara melawan berbagai bentuk kekerasan.',
    startDate: new Date('2025-04-10T13:00:00'),
    endDate: new Date('2025-04-10T17:00:00'),
    location: 'Rumah Aspirasi Tina Wiryawati, Villa De Latina Kuningan',
    price: 0,
    maxParticipants: 80,
    currentParticipants: 73,
    status: 'completed',
    category: 'Hukum & Perlindungan Perempuan',
    instructor: 'Tim Advokat LBH PIRA & Hj. Tina Wiryawati, S.H.',
    instructorBio: 'Kolaborasi antara Lembaga Bantuan Hukum PIRA yang berpengalaman dalam advokasi hak perempuan dengan Legislator yang peduli terhadap isu perempuan dan anak.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
    requirements: [
      'Terbuka untuk semua perempuan (prioritas ibu rumah tangga dan perempuan desa)',
      'Tidak ada biaya pendaftaran',
      'Mengisi formulir pendaftaran',
      'Membawa KTP atau identitas lainnya',
      'Datang tepat waktu',
    ],
    benefits: [
      'Pemahaman tentang hak-hak perempuan menurut hukum Indonesia',
      'Pengetahuan cara mengidentifikasi berbagai bentuk kekerasan',
      'Informasi mekanisme pelaporan dan perlindungan hukum',
      'Konsultasi hukum gratis',
      'Modul penyuluhan dan kontak LBH PIRA',
      'Konsumsi dan snack',
      'Sertifikat kehadiran',
      'Akses ke jaringan pendampingan korban kekerasan',
    ],
    schedule: [
      {
        day: 1,
        topic: 'Registrasi & Pembukaan',
        startTime: '13:00',
        endTime: '13:30',
        description: 'Registrasi peserta dan sambutan dari Hj. Tina Wiryawati',
      },
      {
        day: 1,
        topic: 'Materi 1: Mengenal Hak-Hak Perempuan',
        startTime: '13:30',
        endTime: '14:30',
        description: 'Penjelasan tentang hak perempuan dalam konstitusi, UU PKDRT, dan peraturan lainnya',
      },
      {
        day: 1,
        topic: 'Coffee Break',
        startTime: '14:30',
        endTime: '14:45',
        description: 'Istirahat sejenak',
      },
      {
        day: 1,
        topic: 'Materi 2: Jenis-Jenis Kekerasan terhadap Perempuan',
        startTime: '14:45',
        endTime: '15:45',
        description: 'Mengidentifikasi kekerasan fisik, psikis, ekonomi, dan seksual',
      },
      {
        day: 1,
        topic: 'Materi 3: Mekanisme Perlindungan Hukum',
        startTime: '15:45',
        endTime: '16:30',
        description: 'Cara melaporkan kasus, mendapat perlindungan, dan akses bantuan hukum',
      },
      {
        day: 1,
        topic: 'Tanya Jawab & Konsultasi',
        startTime: '16:30',
        endTime: '17:00',
        description: 'Sesi konsultasi pribadi dan tanya jawab (dapat dilanjutkan privat)',
      },
    ],
  },
];
