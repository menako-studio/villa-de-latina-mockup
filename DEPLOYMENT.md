# 🚀 Deployment Guide - Villa Kuningan Training Center

## Prerequisites
- Node.js 18+ installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- Firebase project created
- Google Cloud Console project with Calendar API enabled

## 1. Firebase Setup

### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project: "villa-kuningan-training"
3. Enable Firestore Database
4. Enable Authentication
5. Enable Hosting

### Firebase Configuration
1. Go to Project Settings > General
2. Add web app and copy configuration
3. Update `.env.local` with Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=villa-kuningan-training.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=villa-kuningan-training
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=villa-kuningan-training.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Service Account Setup
1. Go to Project Settings > Service Accounts
2. Generate new private key
3. Download the JSON file
4. Add to `.env.local`:

```env
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@villa-kuningan-training.iam.gserviceaccount.com
FIREBASE_PROJECT_ID=villa-kuningan-training
```

## 2. Google Calendar API Setup

### Enable Calendar API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google Calendar API
3. Create service account credentials
4. Download JSON key file

### Calendar Configuration
1. Create or use existing Google Calendar
2. Share calendar with service account email
3. Give "Make changes to events" permission
4. Add to `.env.local`:

```env
GOOGLE_CALENDAR_ID=your-calendar-id@gmail.com
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}'
```

## 3. Local Development

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
Create `.env.local` file in root directory:
```env
# Firebase Client (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# Firebase Admin (Server-side)
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_PROJECT_ID=your-project-id

# Google Calendar API
GOOGLE_CALENDAR_ID=your-calendar@gmail.com
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
```

## 4. Build & Deploy to Firebase Hosting

### Update Firebase Configuration
Edit `.firebaserc`:
```json
{
  "projects": {
    "default": "villa-kuningan-training"
  }
}
```

Edit `firebase.json`:
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Build for Static Export
Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Deployment Commands
```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
firebase login
firebase deploy
```

## 5. Alternative Deployment Options

### Vercel (Recommended Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: out/
```

## 6. Database Initial Setup

### Firestore Collections Structure
```
trainings/
├── {trainingId}
    ├── title: string
    ├── description: string
    ├── shortDescription: string
    ├── startDate: timestamp
    ├── endDate: timestamp
    ├── location: string
    ├── price: number
    ├── maxParticipants: number
    ├── currentParticipants: number
    ├── status: string
    ├── category: string
    ├── instructor: string
    ├── instructorBio: string
    ├── image: string
    ├── requirements: array
    ├── benefits: array
    ├── schedule: array
    ├── createdAt: timestamp
    ├── updatedAt: timestamp
    └── googleCalendarEventId: string

users/
├── {userId}
    ├── email: string
    ├── name: string
    ├── phone: string
    ├── role: string
    └── createdAt: timestamp
```

### Sample Data
Create sample training in Firestore:
```javascript
{
  title: "Pembinaan UMKM Digital",
  description: "Pelatihan komprehensif untuk pengembangan usaha mikro, kecil, dan menengah di era digital...",
  shortDescription: "Pelatihan UMKM untuk era digital",
  startDate: new Date('2024-12-15T09:00:00'),
  endDate: new Date('2024-12-15T16:00:00'),
  location: "Villa Kuningan, Jawa Barat",
  price: 0,
  maxParticipants: 30,
  currentParticipants: 0,
  status: "upcoming",
  category: "Pembinaan UMKM",
  instructor: "Bapak Allan Throy",
  instructorBio: "DPRD Jawa Barat dengan pengalaman 10+ tahun dalam pembinaan UMKM",
  image: "",
  requirements: [
    "Memiliki usaha atau rencana usaha",
    "Membawa laptop/smartphone",
    "Semangat belajar"
  ],
  benefits: [
    "Memahami strategi pemasaran digital",
    "Menguasai tools digital marketing",
    "Networking dengan sesama pelaku UMKM",
    "Sertifikat pelatihan"
  ],
  schedule: [
    {
      day: 1,
      startTime: "09:00",
      endTime: "12:00",
      topic: "Pengenalan Digital Marketing",
      description: "Dasar-dasar pemasaran digital untuk UMKM"
    },
    {
      day: 1,
      startTime: "13:00",
      endTime: "16:00",
      topic: "Praktik Social Media Marketing",
      description: "Hands-on membuat konten untuk media sosial"
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
  googleCalendarEventId: ""
}
```

## 7. Testing

### Local Testing
```bash
# Start development server
npm run dev

# Test pages:
# - http://localhost:3000 (Homepage)
# - http://localhost:3000/trainings (Training list)
# - http://localhost:3000/cms (Admin CMS)
```

### Production Testing
```bash
# Build and test locally
npm run build
npm start

# Test API endpoints:
# - GET /api/trainings
# - GET /api/calendar
```

## 8. Maintenance & Updates

### Adding New Training
1. Access CMS at `/cms`
2. Click "Tambah Pelatihan"
3. Fill out form and submit
4. Check Google Calendar sync

### Updating Content
1. Edit training via CMS
2. Changes auto-sync to Firestore
3. Website updates real-time

### Monitoring
- Firebase Console for database monitoring
- Google Analytics (add gtag to _app.tsx)
- Error tracking with Sentry (optional)

## 9. Troubleshooting

### Common Issues
1. **Firebase connection issues**: Check API keys and network
2. **Calendar sync failing**: Verify service account permissions
3. **Build errors**: Check TypeScript types and imports
4. **Deployment issues**: Verify Firebase CLI login

### Performance Optimization
1. Enable Firebase Performance Monitoring
2. Add image optimization
3. Implement caching strategies
4. Use CDN for static assets

## 10. Security Considerations

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /trainings/{trainingId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### API Security
- Implement rate limiting
- Add authentication for CMS routes
- Validate all input data
- Use HTTPS in production

---

## 📞 Support
Untuk support dan maintenance, hubungi developer atau tim IT Villa Kuningan Training Center.