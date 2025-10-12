export interface Training {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  startDate: Date;
  endDate: Date;
  location: string;
  price: number; // 0 for free trainings
  maxParticipants?: number;
  currentParticipants: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  category: string;
  instructor: string;
  instructorBio?: string;
  image?: string;
  requirements?: string[];
  benefits?: string[];
  schedule?: TrainingSchedule[];
  createdAt: Date;
  updatedAt: Date;
  googleCalendarEventId?: string;
}

export interface TrainingSchedule {
  day: number; // 1-based day of training
  startTime: string;
  endTime: string;
  topic: string;
  description?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface Registration {
  id: string;
  userId: string;
  trainingId: string;
  registeredAt: Date;
  status: 'registered' | 'attended' | 'cancelled';
  notes?: string;
}

export interface CalendarEvent {
  id: string;
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  location?: string;
}