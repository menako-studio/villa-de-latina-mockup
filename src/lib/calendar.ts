import { google } from 'googleapis';

const calendar = google.calendar('v3');

// Initialize Google Calendar API with service account
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
});

export async function getCalendarEvents(timeMin?: string, timeMax?: string) {
  try {
    const authClient = await auth.getClient();
    
    const response = await calendar.events.list({
      auth: authClient,
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: timeMin || new Date().toISOString(),
      timeMax: timeMax,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    throw error;
  }
}

export async function syncTrainingsWithCalendar() {
  // This function will sync Firestore trainings with Google Calendar
  // Implementation will be added based on business logic
  try {
    const events = await getCalendarEvents();
    
    // Process events and sync with Firestore
    // This is where you'll implement the sync logic
    
    return events;
  } catch (error) {
    console.error('Error syncing trainings with calendar:', error);
    throw error;
  }
}