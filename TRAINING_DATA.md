# Dummy Konten Pelatihan - Villa De Latina Kuningan

## Overview
File ini berisi dummy konten pelatihan yang dibuat berdasarkan event nyata yang pernah diadakan di Villa De Latina Kuningan.

## Data Source
1. **Pengawasan Penyelenggaraan Pemerintahan 2025 di Ciamis**
   - Source: https://kuninganonline.com/legislator-gerindra-tina-wiryawati-gelar-pengawasan-penyelenggaraan-pemerintahan-tahun-2025-di-ciamis/
   - Status: completed
   - Kategori: Pemerintahan & Pengawasan

2. **Penguatan Wawasan Kebangsaan dengan Metode Edukatif**
   - Source: https://kuninganonline.com/tina-wiryawati-dan-kesbangpol-jabar-dorong-penguatan-wawasan-kebangsaan-dengan-metode-edukatif-dan-youthful/
   - Status: completed
   - Kategori: Wawasan Kebangsaan & Pendidikan

3. **Penyuluhan LBH PIRA tentang Hak Perempuan**
   - Source: https://kuninganrelegi.com/lbh-pira-gelar-penyuluhan-di-rumah-aspirasi-tina-wiryawati-ajak-perempuan-desa-kenali-hak-dan-lawan-kekerasan/
   - Status: completed
   - Kategori: Hukum & Perlindungan Perempuan

## File Structure
```
src/
├── lib/
│   ├── seed-trainings.ts       # Data pelatihan dummy
│   ├── initialize-data.ts      # Utility untuk auto-initialize data
│   └── local-db.ts            # Database lokal (localStorage)
└── pages/
    └── api/
        └── trainings.ts        # API endpoint (auto-initialize data)
```

## Usage

### Auto Initialize
Data akan otomatis di-load saat pertama kali mengakses `/api/trainings` atau halaman yang menggunakan hook `useTrainings`.

### Manual Reset (Development)
Jika ingin reset data di browser console:
```javascript
// Clear localStorage
localStorage.removeItem('villa_kuningan_trainings');
localStorage.removeItem('villa_kuningan_id_counter');

// Reload page
window.location.reload();
```

### Test Data API
```bash
# Get all trainings
curl http://localhost:3000/api/trainings

# Filter by status
curl http://localhost:3000/api/trainings?status=completed

# Limit results
curl http://localhost:3000/api/trainings?limit=2
```

## Images
Semua gambar menggunakan Unsplash (copyright free) dengan query yang relevan:
- Pengawasan Pemerintahan: `photo-1553028826-f4804a6dba3b` (government meeting)
- Wawasan Kebangsaan: `photo-1523580494863-6f3031224c94` (students learning)
- Penyuluhan Perempuan: `photo-1573497019940-1c28c88b4f3e` (women empowerment)

## Features
- ✅ Data seeding otomatis
- ✅ localStorage persistence
- ✅ Detail lengkap untuk setiap pelatihan
- ✅ Schedule breakdown
- ✅ Requirements & benefits
- ✅ Instructor bio
- ✅ Responsive image dari Unsplash

## Display Locations
1. **Homepage** (`/`)
   - Section "Program Pelatihan Villa De Latina"
   - Menampilkan 6 pelatihan featured

2. **Trainings Page** (`/trainings`)
   - List semua pelatihan dengan filter
   - Filter: All, Upcoming, Ongoing

3. **Training Detail** (`/training/[slug]`)
   - Detail lengkap pelatihan
   - Schedule
   - Requirements & Benefits
   - Instructor info
   - Related events

## Notes
- Semua pelatihan memiliki status `completed` karena merupakan past events
- Data disimpan di localStorage browser
- Dapat di-extend dengan menambah data baru di `seed-trainings.ts`
- Image URLs menggunakan Unsplash dengan parameter crop untuk konsistensi
