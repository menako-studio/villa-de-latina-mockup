import { NextApiRequest, NextApiResponse } from 'next';
import { getCalendarEvents } from '@/lib/calendar';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { timeMin, timeMax } = req.query;
      
      const events = await getCalendarEvents(
        timeMin as string,
        timeMax as string
      );
      
      res.status(200).json({ events });
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      res.status(500).json({ error: 'Failed to fetch calendar events' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}