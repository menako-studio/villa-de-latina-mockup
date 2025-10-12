# Villa Kuningan Training Center Website

## Project Overview
Website untuk branding pelatihan Villa Kuningan - sistem training center dengan CMS admin panel dan integrasi Google Calendar.

## Features
- 🏠 Landing page dengan informasi villa & training center
- 📅 Daftar pelatihan (ongoing & upcoming) dengan integrasi Google Calendar
- 📝 Detail page untuk setiap pelatihan
- 👨‍💼 CMS Admin panel untuk mengelola konten
- 💰 Sistem pricing (future-ready meskipun saat ini free)
- 📱 Responsive design - mobile friendly
- 🔐 Authentication untuk admin CMS
- 🔄 Real-time sync dengan Google Calendar

## Tech Stack
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Firebase/Firestore + Next.js API Routes
- **Authentication**: Firebase Auth
- **Calendar**: Google Calendar API
- **Deployment**: Firebase Hosting (free tier)
- **UI Components**: Headless UI + Heroicons + Lucide React

## Design References
### Local Websites:
- **Traveloka Xperience**: https://www.traveloka.com/en-id/activities - clean layout untuk event listing
- **Skill Academy by Ruangguru**: https://skillacademy.com/ - modern training course layout
- **Zenius**: https://www.zenius.net/ - simple, focused design

### International References:
- **Eventbrite**: https://www.eventbrite.com/ - excellent event discovery & detail pages
- **Coursera**: https://www.coursera.org/ - clean course listing design
- **Airbnb Experiences**: https://www.airbnb.com/experiences - location-based activity booking
- **Meetup**: https://www.meetup.com/ - community event management

## Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Next.js pages & API routes
├── lib/                # Utilities & configurations
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── cms/                # Admin CMS components
└── styles/             # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+
- Firebase account
- Google Cloud Console project (for Calendar API)

### Installation
```bash
npm install
npm run dev
```

### Firebase Setup
1. Create Firebase project
2. Enable Firestore Database
3. Enable Authentication
4. Setup Firebase Hosting
5. Configure environment variables

### Google Calendar API Setup
1. Enable Google Calendar API in Google Cloud Console
2. Create service account credentials
3. Share calendar with service account email
4. Add credentials to environment variables

## Environment Variables
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PROJECT_ID=

GOOGLE_CALENDAR_ID=
GOOGLE_SERVICE_ACCOUNT_KEY=
```

## Deployment
```bash
# Build & deploy to Firebase Hosting
npm run build
npm run firebase:deploy
```

## Features Roadmap
- [ ] Landing page design
- [ ] Training listing with filters
- [ ] Training detail pages
- [ ] Google Calendar integration
- [ ] Admin CMS for content management
- [ ] User authentication
- [ ] Booking system (future)
- [ ] Payment integration (future)