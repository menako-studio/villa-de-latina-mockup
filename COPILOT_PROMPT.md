# 🤖 GitHub Copilot Prompt untuk Villa Kuningan Training Center

## Konteks Project
Saya sedang mengembangkan website untuk **Villa Kuningan Training Center** - pusat pelatihan milik DPRD Jawa Barat yang berlokasi di Villa Kuningan. Client saya adalah pemilik villa yang menggunakan ruang rapat untuk pelatihan gratis (saat ini) dan membutuhkan website untuk branding dan pengelolaan pelatihan.

## Tech Stack yang Sudah Disiapkan
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Firebase/Firestore + Next.js API Routes  
- **Authentication**: Firebase Auth
- **Calendar Integration**: Google Calendar API
- **Deployment**: Firebase Hosting (free tier)
- **UI Components**: Headless UI + Heroicons + Lucide React

## Struktur Project yang Sudah Ada
```
src/
├── components/          # UI components (Header, Footer, TrainingCard, TrainingList)
├── pages/              # Next.js pages (index.tsx, trainings.tsx, training/[id].tsx, cms.tsx)
├── pages/api/          # API routes (trainings.ts, calendar.ts)
├── lib/                # Firebase config, calendar integration
├── types/              # TypeScript definitions
├── hooks/              # Custom hooks (useTrainings)
├── cms/                # Admin CMS components (TrainingForm)
└── styles/             # Global styles
```

## Requirements yang Perlu Diimplementasikan

### 1. Core Features ✅ (Sudah ada struktur)
- [x] Landing page dengan hero section
- [x] Daftar pelatihan dengan filter (upcoming/ongoing/all)
- [x] Detail page pelatihan 
- [x] Admin CMS untuk CRUD pelatihan
- [x] Google Calendar integration
- [x] Responsive design

### 2. Features yang Butuh Implementasi Lebih Lanjut
- [ ] **Authentication system** untuk admin CMS
- [ ] **Google Calendar sync** - otomatis sync training ke calendar
- [ ] **Image upload** untuk training images
- [ ] **Email notifications** untuk registrasi
- [ ] **Search & filtering** yang lebih advanced
- [ ] **SEO optimization** 
- [ ] **Performance optimization**
- [ ] **Error handling** yang lebih baik

### 3. Halaman yang Masih Butuh Dibuat
- [ ] About page (`/about`) - info tentang Villa & training center
- [ ] Contact page (`/contact`) - kontak info & lokasi
- [ ] Authentication pages (`/login`, `/register`)
- [ ] 404 & error pages

## Design References untuk Styling
Tolong ikuti design pattern dari website-website ini:

### Local References:
1. **Traveloka Xperience** (https://www.traveloka.com/en-id/activities)
   - Clean card layout untuk event listing
   - Modern color scheme
   - Clear call-to-action buttons

2. **Skill Academy by Ruangguru** (https://skillacademy.com/)
   - Course card design
   - Professional layout for training/education
   - Good use of whitespace

3. **Zenius** (https://www.zenius.net/)
   - Simple, focused design
   - Minimal but effective UI

### International References:
1. **Eventbrite** (https://www.eventbrite.com/)
   - Excellent event discovery & detail pages
   - Good filtering and search UX
   - Professional event management UI

2. **Coursera** (https://www.coursera.org/)
   - Clean course listing design
   - Good information hierarchy
   - Trust-building elements

3. **Airbnb Experiences** (https://www.airbnb.com/experiences)
   - Location-based activity booking
   - Beautiful image-focused cards
   - Smooth user experience

4. **Meetup** (https://www.meetup.com/)
   - Community event management
   - Clear event information display
   - Good mobile responsiveness

## Color Scheme & Brand Guidelines
```css
/* Primary Colors */
primary-50: '#f0f9ff'
primary-500: '#3b82f6' /* Main blue */  
primary-600: '#2563eb'
primary-700: '#1d4ed8'
primary-900: '#1e3a8a'

/* Secondary Colors */
secondary-50: '#f8fafc'
secondary-100: '#f1f5f9'  
secondary-500: '#64748b'
secondary-600: '#475569'
secondary-900: '#0f172a'

/* Success/Free */
green-600: untuk pelatihan gratis

/* Status Colors */
blue-100: upcoming trainings
green-100: ongoing trainings  
gray-100: completed trainings
red-100: cancelled trainings
```

## Specific Implementation Tasks

### Task 1: Complete Authentication System
```typescript
// Implement Firebase Auth untuk CMS admin
// - Login/logout functionality
// - Protected routes untuk /cms
// - Session management
// - Role-based access control
```

### Task 2: Google Calendar Integration
```typescript
// Fitur yang dibutuhkan:
// - Auto-create calendar event saat training dibuat
// - Sync training updates ke calendar
// - Display calendar events di website
// - Real-time calendar widget di homepage
```

### Task 3: Enhanced CMS Features
```typescript
// Tambahan fitur CMS:
// - Image upload untuk training photos
// - Bulk actions (delete multiple trainings)
// - Training analytics/statistics
// - Export training data
// - Email blast ke participants
```

### Task 4: User Registration System
```typescript
// Registration flow:
// - User bisa daftar training dari detail page
// - Form pendaftaran dengan validasi
// - Email confirmation
// - Admin bisa lihat daftar peserta
// - Automated reminder emails
```

### Task 5: Advanced Search & Filter
```typescript
// Search features:
// - Search by keyword, category, instructor
// - Date range filter
// - Location filter
// - Price filter (future-ready)
// - Sort by date, popularity, etc.
```

## Content Guidelines

### Bahasa Indonesia
- Gunakan bahasa Indonesia yang formal tapi friendly
- Konsisten dengan terminologi: "Pelatihan" (bukan "Training")
- Error messages dalam bahasa Indonesia
- Date formatting: "15 Desember 2024" format

### Content Structure
- Hero section: Fokus pada "Pelatihan Berkualitas di Kuningan"
- Value proposition: Gratis, berkualitas, instruktur berpengalaman
- Call-to-action: "Daftar Sekarang", "Lihat Detail", "Hubungi Kami"

## Performance & SEO Requirements

### Performance
- Lazy loading untuk images
- Code splitting untuk pages
- Optimize bundle size
- Fast loading times (< 3s)

### SEO
- Meta tags untuk semua pages
- Structured data untuk events
- Sitemap generation
- Open Graph tags
- Twitter cards

## Mobile-First Design
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons (min 44px)
- Mobile navigation menu
- Optimized form inputs untuk mobile

## Instructions untuk Copilot

Ketika mengimplementasikan features:

1. **Selalu ikuti TypeScript best practices**
2. **Gunakan Tailwind CSS classes yang sudah defined**
3. **Implement error boundaries dan loading states**
4. **Add proper form validation dengan react-hook-form**
5. **Ensure accessibility (ARIA labels, semantic HTML)**
6. **Follow React best practices (hooks, components)**
7. **Add proper TypeScript types untuk semua props**
8. **Implement responsive design dari mobile-first**
9. **Add proper error handling untuk API calls**
10. **Include loading states untuk semua async operations**

## Example Implementation Pattern
```typescript
// Contoh pattern yang diinginkan untuk components:

interface ComponentProps {
  // Always define proper TypeScript interfaces
  data: DataType[];
  loading?: boolean;
  error?: string;
  onAction?: (id: string) => void;
}

export default function Component({ data, loading, error, onAction }: ComponentProps) {
  // Loading state
  if (loading) {
    return <div className="animate-pulse">...</div>;
  }
  
  // Error state  
  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }
  
  // Main content with proper Tailwind classes
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Content here */}
    </div>
  );
}
```

## Next Steps
Tolong implementasikan fitur-fitur di atas secara bertahap, mulai dari yang paling critical:
1. Authentication system
2. Google Calendar integration  
3. About & Contact pages
4. Enhanced error handling
5. Performance optimizations

Prioritaskan user experience yang smooth dan professional sesuai dengan referensi design yang sudah diberikan.